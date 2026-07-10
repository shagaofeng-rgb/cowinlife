import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { google } from "googleapis";
import { atomicWriteFile, validateSitemapXml, withFileLock } from "../src/lib/sitemap-core.mjs";

const args = new Set(process.argv.slice(2));
const force = args.has("--force");
const dryRun = args.has("--dry-run");
const submit = args.has("--submit");
const verbose = args.has("--verbose");
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://cowinlife.com").replace(/\/$/, "");
const outputDir = path.join(process.cwd(), ".sitemap-cache");
const lockPath = path.join(outputDir, "generate.lock");
const statePath = path.join(outputDir, "state.json");

function extractLocations(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1].replace(/&amp;/g, "&"));
}

async function fetchXml(url) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12_000);
  try {
    const response = await fetch(url, { headers: { accept: "application/xml" }, signal: controller.signal });
    if (!response.ok) throw new Error(`${url} returned HTTP ${response.status}`);
    const xml = await response.text();
    validateSitemapXml(xml);
    return xml;
  } finally {
    clearTimeout(timer);
  }
}

function readState() {
  try { return JSON.parse(fs.readFileSync(statePath, "utf8")); } catch { return { fingerprint: "", files: [] }; }
}

function writeJsonAtomic(filePath, value) {
  const temporary = `${filePath}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, JSON.stringify(value, null, 2), "utf8");
  fs.renameSync(temporary, filePath);
}

async function submitToGoogle(sitemapUrl) {
  const credentials = process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64
    ? JSON.parse(Buffer.from(process.env.GOOGLE_SERVICE_ACCOUNT_JSON_BASE64, "base64").toString("utf8"))
    : process.env.GOOGLE_SERVICE_ACCOUNT_JSON
      ? JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON)
      : null;
  if (!credentials) throw new Error("Google service account credentials are not configured");
  const auth = new google.auth.JWT({ email: credentials.client_email, key: credentials.private_key, scopes: ["https://www.googleapis.com/auth/webmasters"] });
  const client = google.searchconsole({ version: "v1", auth });
  const sites = await client.sites.list({}, { timeout: 10_000 });
  const available = (sites.data.siteEntry || []).map((site) => site.siteUrl).filter(Boolean);
  const configured = process.env.GOOGLE_SEARCH_CONSOLE_SITE_URL || "sc-domain:cowinlife.com";
  const property = available.includes(configured) ? configured : available[0];
  if (!property) throw new Error("The service account has no accessible Search Console property");
  await client.sitemaps.submit({ siteUrl: property, feedpath: sitemapUrl }, { timeout: 10_000 });
  return { property, sitemapUrl };
}

await withFileLock(lockPath, async () => {
  const startedAt = new Date();
  const indexUrl = `${siteUrl}/sitemap.xml`;
  const indexXml = await fetchXml(indexUrl);
  const childUrls = extractLocations(indexXml).filter((url) => url.startsWith(`${siteUrl}/sitemaps/`));
  if (!childUrls.length) throw new Error("Sitemap index contains no Cowinlife child sitemaps");
  const children = await Promise.all(childUrls.map(async (url) => ({ url, xml: await fetchXml(url) })));
  const fingerprint = crypto.createHash("sha256").update(indexXml + children.map((item) => item.xml).join("")).digest("hex");
  const previous = readState();
  const changed = force || previous.fingerprint !== fingerprint;

  if (!dryRun && changed) {
    fs.mkdirSync(outputDir, { recursive: true });
    atomicWriteFile(path.join(outputDir, "sitemap.xml"), indexXml);
    for (const child of children) atomicWriteFile(path.join(outputDir, path.basename(new URL(child.url).pathname)), child.xml);
    writeJsonAtomic(statePath, { fingerprint, checkedAt: new Date().toISOString(), files: [indexUrl, ...childUrls] });
  }

  let submission = { submitted: false, message: "not requested" };
  if (submit) {
    const result = await submitToGoogle(indexUrl);
    submission = { submitted: true, message: `accepted for ${result.property}` };
  }
  const finishedAt = new Date();
  const summary = {
    startedAt: startedAt.toISOString(),
    finishedAt: finishedAt.toISOString(),
    durationMs: finishedAt.getTime() - startedAt.getTime(),
    trigger: "manual_cli",
    sitemap: indexUrl,
    childFiles: children.length,
    urlCount: children.reduce((sum, item) => sum + (item.xml.match(/<url>/g) || []).length, 0),
    bytes: Buffer.byteLength(indexXml) + children.reduce((sum, item) => sum + Buffer.byteLength(item.xml), 0),
    changed,
    dryRun,
    submission
  };
  console.log(verbose ? JSON.stringify(summary, null, 2) : `Sitemap ${changed ? "changed" : "unchanged"}: ${summary.urlCount} URLs in ${summary.childFiles} files; submit=${submission.submitted}`);
});
