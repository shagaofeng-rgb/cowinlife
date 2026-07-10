import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { submitSitemapToSearchConsole } from "@/lib/admin/google-search-console";
import { getAllContentPosts, getPublishedContentPosts, siteUrl } from "@/lib/storefront";
import { buildSitemapFiles } from "@/lib/sitemap";
import { withFileLock } from "@/lib/sitemap-core.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const statePath = path.join("/tmp", "cowinlife-sitemap-state.json");
const lockPath = path.join("/tmp", "cowinlife-sitemap.lock");

function readState() {
  try {
    return JSON.parse(fs.readFileSync(statePath, "utf8")) as { entries: Array<{ url: string; lastmod: string }>; fingerprint: string };
  } catch {
    return { entries: [], fingerprint: "" };
  }
}

function writeState(value: unknown) {
  const temporary = `${statePath}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, JSON.stringify(value), "utf8");
  fs.renameSync(temporary, statePath);
}

function diffEntries(previous: Array<{ url: string; lastmod: string }>, current: Array<{ url: string; lastmod: string }>) {
  if (previous.length === 0) {
    return { baseline: true, addedCount: 0, modifiedCount: 0, deletedCount: 0, added: [], modified: [], deleted: [], truncated: false };
  }
  const before = new Map(previous.map((entry) => [entry.url, entry.lastmod]));
  const after = new Map(current.map((entry) => [entry.url, entry.lastmod]));
  const added = [...after.keys()].filter((url) => !before.has(url));
  const modified = [...after].filter(([url, lastmod]) => before.has(url) && before.get(url) !== lastmod).map(([url]) => url);
  const deleted = [...before.keys()].filter((url) => !after.has(url));
  const sampleLimit = 50;
  return {
    baseline: false,
    addedCount: added.length,
    modifiedCount: modified.length,
    deletedCount: deleted.length,
    added: added.slice(0, sampleLimit),
    modified: modified.slice(0, sampleLimit),
    deleted: deleted.slice(0, sampleLimit),
    truncated: added.length > sampleLimit || modified.length > sampleLimit || deleted.length > sampleLimit
  };
}

export async function GET(request: Request) {
  if (!process.env.CRON_SECRET) return NextResponse.json({ success: false, error: "CRON_SECRET is not configured" }, { status: 500 });
  if (request.headers.get("authorization") !== `Bearer ${process.env.CRON_SECRET}`) return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });

  const startedAt = new Date();
  try {
    const result = await withFileLock(lockPath, async () => {
      const generated = buildSitemapFiles();
      const fingerprint = crypto.createHash("sha256").update(generated.indexXml + [...generated.files.values()].join("")).digest("hex");
      const previous = readState();
      const changes = diffEntries(previous.entries, generated.entries);
      const publicChecks = await Promise.all([
        fetch(`${siteUrl}/robots.txt`, { cache: "no-store" }),
        fetch(`${siteUrl}/sitemap.xml`, { cache: "no-store" })
      ]);
      const robotsText = await publicChecks[0].text();
      if (!publicChecks[0].ok || !robotsText.includes(`Sitemap: ${siteUrl}/sitemap.xml`)) throw new Error("robots.txt sitemap declaration is missing or unavailable");
      if (!publicChecks[1].ok) throw new Error(`Public sitemap returned HTTP ${publicChecks[1].status}`);

      let searchConsole: Awaited<ReturnType<typeof submitSitemapToSearchConsole>> | { enabled: boolean; submitted: boolean; message: string };
      try {
        searchConsole = await submitSitemapToSearchConsole();
      } catch (error) {
        searchConsole = { enabled: true, submitted: false, message: error instanceof Error ? error.message : "Search Console submission failed" };
      }
      writeState({ fingerprint, entries: generated.entries, checkedAt: new Date().toISOString() });
      return {
        changed: previous.fingerprint !== fingerprint,
        files: [...generated.files.keys()],
        urlCount: generated.entries.length,
        fileBytes: Buffer.byteLength(generated.indexXml) + [...generated.files.values()].reduce((sum, xml) => sum + Buffer.byteLength(xml), 0),
        split: generated.files.size > 4,
        changes,
        content: { published: getPublishedContentPosts().length, scheduled: getAllContentPosts().length - getPublishedContentPosts().length },
        searchConsole
      };
    });
    const finishedAt = new Date();
    const log = { event: "site_maintenance", trigger: "vercel_cron", status: "success", startedAt: startedAt.toISOString(), finishedAt: finishedAt.toISOString(), durationMs: finishedAt.getTime() - startedAt.getTime(), ...result };
    console.info(JSON.stringify(log));
    return NextResponse.json({ success: true, data: log, error: null, requestId: crypto.randomUUID() });
  } catch (error) {
    const finishedAt = new Date();
    const message = error instanceof Error ? error.message : "Site maintenance failed";
    console.error(JSON.stringify({ event: "site_maintenance", trigger: "vercel_cron", status: "failed", startedAt: startedAt.toISOString(), finishedAt: finishedAt.toISOString(), durationMs: finishedAt.getTime() - startedAt.getTime(), error: message }));
    return NextResponse.json({ success: false, data: null, error: message, requestId: crypto.randomUUID() }, { status: 500 });
  }
}
