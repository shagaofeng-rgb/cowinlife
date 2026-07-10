import { buildSitemapFiles, sitemapResponse } from "@/lib/sitemap";

export const dynamic = "force-dynamic";

export async function GET(_request: Request, { params }: { params: Promise<{ file: string }> }) {
  const { file } = await params;
  const xml = buildSitemapFiles().files.get(file);
  if (!xml) return new Response("Sitemap not found", { status: 404 });
  return sitemapResponse(xml);
}
