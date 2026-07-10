import { buildSitemapFiles, sitemapResponse } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export function GET() {
  return sitemapResponse(buildSitemapFiles().indexXml);
}
