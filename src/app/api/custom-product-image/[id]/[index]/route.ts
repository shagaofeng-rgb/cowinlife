import { customProducts } from "@/lib/custom-products";

export const runtime = "nodejs";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string; index: string }> }) {
  const { id, index } = await params;
  const product = customProducts.find((item) => item.id === id);
  const imageIndex = Math.max(0, Number(index) || 0);
  const source = product?.gallery?.[imageIndex] || product?.image;

  if (!source) {
    return new Response("Image not found", { status: 404 });
  }

  const upstream = await fetch(source, {
    headers: {
      "User-Agent": "Cowinlife image sync"
    },
    next: { revalidate: 60 * 60 * 24 * 30 }
  });

  if (!upstream.ok || !upstream.body) {
    return new Response("Image unavailable", { status: 502 });
  }

  return new Response(upstream.body, {
    headers: {
      "Cache-Control": "public, max-age=31536000, immutable",
      "Content-Type": upstream.headers.get("content-type") || "image/jpeg"
    }
  });
}
