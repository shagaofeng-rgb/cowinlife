import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { atomicWriteFile, normalizeEntries, renderSitemapIndex, renderUrlSet, splitEntries, submitWhenEnabled, validateSitemapXml, withFileLock } from "../src/lib/sitemap-core.mjs";

const entry = (suffix, options = {}) => ({ url: `https://cowinlife.com/${suffix}`, lastmod: "2026-07-09", status: 200, published: true, canonicalSelf: true, ...options });

test("generates a normal sitemap", () => assert.match(renderUrlSet([entry("products/a")]), /<urlset/));
test("generates valid UTF-8 XML", () => assert.equal(validateSitemapXml(renderUrlSet([entry("products/a")])), true));
test("escapes XML URL characters", () => assert.match(renderUrlSet([{ ...entry("products/a"), url: "https://cowinlife.com/a&b" }]), /a&amp;b/));
test("excludes drafts and noindex records", () => assert.equal(normalizeEntries([entry("a"), entry("b", { published: false }), entry("c", { noindex: true })]).length, 1));
test("removed records disappear from the next result", () => assert.deepEqual(normalizeEntries([entry("a")]).map((item) => item.url), ["https://cowinlife.com/a"]));
test("preserves the real lastmod value", () => assert.match(renderUrlSet([entry("a", { lastmod: "2025-02-03" })]), /2025-02-03/));
test("splits before the URL limit", () => assert.equal(splitEntries([entry("a"), entry("b"), entry("c")], 2).length, 2));
test("generates a valid sitemap index", () => assert.equal(validateSitemapXml(renderSitemapIndex([{ url: "https://cowinlife.com/sitemaps/products-1.xml", lastmod: "2026-07-09" }])), true));
test("prevents concurrent generation with a lock", async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cowinlife-lock-"));
  const lock = path.join(dir, "job.lock");
  fs.writeFileSync(lock, "busy");
  await assert.rejects(withFileLock(lock, async () => true), /already running/);
});
test("keeps the previous sitemap when validation fails", () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "cowinlife-write-"));
  const file = path.join(dir, "sitemap.xml");
  const valid = renderUrlSet([entry("a")]);
  atomicWriteFile(file, valid);
  assert.throws(() => atomicWriteFile(file, "broken"));
  assert.equal(fs.readFileSync(file, "utf8"), valid);
});
test("submits when Search Console is enabled", async () => {
  let called = 0;
  const result = await submitWhenEnabled({ enabled: true, submit: async () => { called += 1; } });
  assert.equal(result.submitted, true);
  assert.equal(called, 1);
});
test("submission failure does not alter an existing sitemap", async () => {
  const xml = renderUrlSet([entry("a")]);
  await assert.rejects(submitWhenEnabled({ enabled: true, submit: async () => { throw new Error("403"); } }), /403/);
  assert.equal(validateSitemapXml(xml), true);
});
test("does not call Google when submission is disabled", async () => {
  let called = 0;
  const result = await submitWhenEnabled({ enabled: false, submit: async () => { called += 1; } });
  assert.equal(result.submitted, false);
  assert.equal(called, 0);
});
