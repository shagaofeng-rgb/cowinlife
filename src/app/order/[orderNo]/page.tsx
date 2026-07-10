import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPublicOrder } from "@/lib/admin/db";
import { PublicShell, RouteHero } from "@/components/storefront-shell";
import { money } from "@/lib/storefront";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Order Status",
  description: "Review a Cowinlife order status snapshot.",
  robots: { index: false, follow: false }
};

export default async function OrderPage({ params }: { params: Promise<{ orderNo: string }> }) {
  const { orderNo } = await params;
  const order = getPublicOrder(orderNo);
  if (!order) notFound();
  return (
    <PublicShell>
      <RouteHero eyebrow="Order" title={String(order.order_no)} text="Order status, payment status, fulfillment status, and item snapshot from the backend." />
      <section className="section route-section">
        <div className="summary order-summary">
          <span>Order status <strong>{String(order.order_status)}</strong></span>
          <span>Payment status <strong>{String(order.payment_status)}</strong></span>
          <span>Fulfillment <strong>{String(order.fulfillment_status)}</strong></span>
          <span>Total <strong>{money(Number(order.total_cents || 0))}</strong></span>
        </div>
      </section>
    </PublicShell>
  );
}
