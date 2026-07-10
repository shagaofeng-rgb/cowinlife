import { collections, products } from "@/data/products";
import { customProducts } from "@/lib/custom-products";
import { getPublishedContentPosts } from "@/lib/content-automation";
import { collectionSlug, productSlug, siteUrl } from "@/lib/storefront";
import { normalizeEntries, renderSitemapIndex, renderUrlSet, splitEntries, type SitemapEntry } from "@/lib/sitemap-core.mjs";

export type SitemapKind = "pages" | "products" | "categories" | "posts";

const pageLastModified: Record<string, string> = {
  "": "2026-07-10",
  "/products": "2026-07-09",
  "/custom-products": "2026-07-10",
  "/blog": "2026-07-10",
  "/news": "2026-07-10",
  "/about": "2026-07-08",
  "/contact": "2026-07-09",
  "/privacy": "2026-07-08",
  "/terms": "2026-07-08"
};

function absolute(pathname: string) {
  return new URL(pathname || "/", `${siteUrl}/`).href;
}

export function buildSitemapEntries() {
  const entries: SitemapEntry[] = [];
  for (const [pathname, lastmod] of Object.entries(pageLastModified)) {
    entries.push({ url: absolute(pathname), lastmod, kind: "pages", status: 200, published: true, canonicalSelf: true });
  }
  for (const product of products) {
    entries.push({ url: absolute(`/products/${productSlug(product)}`), lastmod: "2026-07-09", kind: "products", status: 200, published: true, canonicalSelf: true });
  }
  for (const product of customProducts) {
    entries.push({ url: absolute(`/custom-products/${product.slug}`), lastmod: "2026-07-10", kind: "products", status: 200, published: true, canonicalSelf: true });
  }
  for (const collection of collections) {
    entries.push({ url: absolute(`/collections/${collectionSlug(collection.name)}`), lastmod: "2026-07-09", kind: "categories", status: 200, published: true, canonicalSelf: true });
  }
  for (const post of getPublishedContentPosts()) {
    entries.push({ url: absolute(`/${post.type}/${post.slug}`), lastmod: post.updatedAt, kind: "posts", status: 200, published: true, canonicalSelf: true });
  }
  return normalizeEntries(entries);
}

export function buildSitemapFiles() {
  const files = new Map<string, string>();
  const descriptors: Array<{ url: string; lastmod: string }> = [];
  const entries = buildSitemapEntries();
  for (const kind of ["pages", "products", "categories", "posts"] as SitemapKind[]) {
    const kindEntries = entries.filter((entry) => entry.kind === kind);
    const chunks = splitEntries(kindEntries);
    chunks.forEach((chunk, index) => {
      const file = `${kind}-${index + 1}.xml`;
      files.set(file, renderUrlSet(chunk));
      descriptors.push({ url: absolute(`/sitemaps/${file}`), lastmod: chunk.reduce((latest, entry) => entry.lastmod > latest ? entry.lastmod : latest, "1970-01-01") });
    });
  }
  return { entries, files, indexXml: renderSitemapIndex(descriptors), descriptors };
}

export function sitemapResponse(xml: string) {
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff"
    }
  });
}
