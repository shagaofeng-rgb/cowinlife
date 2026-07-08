import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { findProduct, productSlug, searchProducts } from "@/lib/storefront";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const id = url.searchParams.get("id") || "";
  if (id) {
    const product = findProduct(id);
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json({ product, slug: productSlug(product) });
  }
  const data = q ? searchProducts(q) : products;
  return NextResponse.json({
    count: data.length,
    products: data.map((product) => ({ ...product, slug: productSlug(product) }))
  });
}
