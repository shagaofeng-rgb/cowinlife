import { NextResponse } from "next/server";
import { products } from "@/data/products";
import { availabilityText, findProduct, productParameters, productSlug, publicSku, searchProducts } from "@/lib/storefront";

function publicProduct(product: (typeof products)[number]) {
  return {
    id: product.id,
    sku: publicSku(product),
    slug: productSlug(product),
    name: product.name,
    collection: product.collection,
    category: product.category,
    room: product.room,
    price: product.price,
    currency: product.currency,
    priceDisplay: product.priceDisplay,
    availability: availabilityText(product),
    promotion: product.promotion,
    shipping: product.shipping,
    unitPrice: product.unitPrice,
    unitBase: product.unitBase,
    rating: product.rating,
    ratingText: product.ratingText,
    reviewCount: product.reviewCount,
    colors: product.colors,
    image: product.image,
    gallery: product.gallery,
    tags: product.tags,
    features: product.features,
    details: product.details,
    parameters: productParameters(product)
  };
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q") || "";
  const id = url.searchParams.get("id") || "";
  if (id) {
    const product = findProduct(id);
    if (!product) return NextResponse.json({ error: "Product not found" }, { status: 404 });
    return NextResponse.json({ product: publicProduct(product), slug: productSlug(product) });
  }
  const data = q ? searchProducts(q) : products;
  return NextResponse.json({
    count: data.length,
    products: data.map((product) => publicProduct(product))
  });
}
