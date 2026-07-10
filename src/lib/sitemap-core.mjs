import fs from "node:fs";
import path from "node:path";

export const DEFAULT_MAX_URLS = 45_000;
export const DEFAULT_MAX_BYTES = 45 * 1024 * 1024;

export function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function normalizeEntries(entries) {
  const seen = new Set();
  const normalized = [];
  for (const entry of entries) {
    if (!entry || entry.status === 404 || entry.published === false || entry.noindex || entry.canonicalSelf === false) continue;
    try {
      const url = new URL(entry.url);
      if (!/^https?:$/.test(url.protocol) || url.search || seen.has(url.href)) continue;
      seen.add(url.href);
      normalized.push({ url: url.href, lastmod: String(entry.lastmod).slice(0, 10), kind: entry.kind });
    } catch {
      // Invalid records are skipped so one bad URL cannot break every sitemap.
    }
  }
  return normalized;
}

export function renderUrlSet(entries) {
  const rows = entries.map((entry) => [
    "  <url>",
    `    <loc>${escapeXml(entry.url)}</loc>`,
    `    <lastmod>${escapeXml(entry.lastmod)}</lastmod>`,
    "  </url>"
  ].join("\n"));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows.join("\n")}\n</urlset>\n`;
}

export function renderSitemapIndex(files) {
  const rows = files.map((file) => [
    "  <sitemap>",
    `    <loc>${escapeXml(file.url)}</loc>`,
    `    <lastmod>${escapeXml(file.lastmod)}</lastmod>`,
    "  </sitemap>"
  ].join("\n"));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows.join("\n")}\n</sitemapindex>\n`;
}

export function splitEntries(entries, maxUrls = DEFAULT_MAX_URLS, maxBytes = DEFAULT_MAX_BYTES) {
  const chunks = [];
  let current = [];
  for (const entry of entries) {
    const candidate = [...current, entry];
    if (current.length > 0 && (candidate.length > maxUrls || Buffer.byteLength(renderUrlSet(candidate), "utf8") > maxBytes)) {
      chunks.push(current);
      current = [entry];
    } else {
      current = candidate;
    }
  }
  if (current.length || chunks.length === 0) chunks.push(current);
  return chunks;
}

export function validateSitemapXml(xml) {
  if (!xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) throw new Error("Sitemap must declare UTF-8 XML");
  const isUrlSet = xml.includes("<urlset ") && xml.includes("</urlset>");
  const isIndex = xml.includes("<sitemapindex ") && xml.includes("</sitemapindex>");
  if (isUrlSet === isIndex) throw new Error("Sitemap must contain exactly one supported root element");
  if (/<loc>[^<]*&(?!amp;|lt;|gt;|quot;|apos;)/.test(xml)) throw new Error("Sitemap contains an unescaped ampersand");
  return true;
}

export function atomicWriteFile(filePath, contents) {
  validateSitemapXml(contents);
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  const temporary = `${filePath}.${process.pid}.${Date.now()}.tmp`;
  fs.writeFileSync(temporary, contents, "utf8");
  validateSitemapXml(fs.readFileSync(temporary, "utf8"));
  fs.renameSync(temporary, filePath);
}

export async function withFileLock(lockPath, task, staleMs = 15 * 60 * 1000) {
  fs.mkdirSync(path.dirname(lockPath), { recursive: true });
  if (fs.existsSync(lockPath)) {
    const age = Date.now() - fs.statSync(lockPath).mtimeMs;
    if (age <= staleMs) throw new Error("Sitemap generation is already running");
    fs.unlinkSync(lockPath);
  }
  fs.writeFileSync(lockPath, JSON.stringify({ pid: process.pid, startedAt: new Date().toISOString() }), { flag: "wx" });
  try {
    return await task();
  } finally {
    if (fs.existsSync(lockPath)) fs.unlinkSync(lockPath);
  }
}

export async function submitWhenEnabled({ enabled, submit }) {
  if (!enabled) return { submitted: false, reason: "disabled" };
  await submit();
  return { submitted: true, reason: "submitted" };
}
