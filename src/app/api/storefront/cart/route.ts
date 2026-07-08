import { NextResponse } from "next/server";
import { calculateCart, money, type PublicCartItem } from "@/lib/storefront";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const cart = calculateCart((body.items || []) as PublicCartItem[]);
    return NextResponse.json({
      ...cart,
      display: {
        subtotal: money(cart.subtotalCents),
        shipping: cart.shippingCents === 0 ? "Included" : money(cart.shippingCents),
        tax: money(cart.taxCents),
        total: money(cart.totalCents)
      },
      items: cart.items.map((item) => ({
        productId: item.product.id,
        asin: item.product.asin,
        name: item.product.name,
        image: item.product.image,
        quantity: item.quantity,
        unitPriceCents: item.unitPriceCents,
        lineTotalCents: item.lineTotalCents
      }))
    });
  } catch {
    return NextResponse.json({ error: "Invalid cart payload" }, { status: 400 });
  }
}
