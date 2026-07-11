import { NextResponse } from "next/server";
import { createPublicOrder } from "@/lib/admin/db";
import { checkRateLimit } from "@/lib/request-rate-limit";
import { calculateCart, money, publicSku, type PublicCartItem } from "@/lib/storefront";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const rateLimit = checkRateLimit(request, "storefront-order", { limit: 8, windowMs: 10 * 60 * 1000 });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many order requests from this network. Please wait before trying again." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } }
      );
    }
    const body = await request.json();
    const cart = calculateCart((body.items || []) as PublicCartItem[]);
    if (!cart.items.length) return NextResponse.json({ error: "Cart has no priced products" }, { status: 400 });
    const order = createPublicOrder({
      email: String(body.email || ""),
      name: String(body.name || ""),
      address: String(body.address || ""),
      country: String(body.country || "US"),
      note: String(body.note || ""),
      items: cart.items.map((item) => ({
        productId: item.product.id,
        sku: publicSku(item.product),
        name: item.product.name,
        image: item.product.image,
        quantity: item.quantity,
        unitPriceCents: item.unitPriceCents,
        lineTotalCents: item.lineTotalCents
      })),
      subtotalCents: cart.subtotalCents,
      shippingCents: cart.shippingCents,
      taxCents: cart.taxCents,
      totalCents: cart.totalCents,
      currency: cart.currency,
      request
    });
    return NextResponse.json({
      order,
      totals: {
        subtotal: money(cart.subtotalCents),
        shipping: cart.shippingCents === 0 ? "Included" : money(cart.shippingCents),
        tax: money(cart.taxCents),
        total: money(cart.totalCents)
      }
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Order could not be created" }, { status: 400 });
  }
}
