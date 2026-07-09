import type { Metadata } from "next";
import { products } from "@/data/products";
import { CheckoutClient } from "@/components/checkout-client";
import { PublicShell, RouteHero } from "@/components/storefront-shell";
import { findProduct } from "@/lib/storefront";

export const metadata: Metadata = {
  title: "Checkout",
  description: "Create a COWINLIFE order with server-side product, quantity, shipping, tax, and total validation.",
  alternates: { canonical: "/checkout" }
};

export default async function CheckoutPage({ searchParams }: { searchParams: Promise<{ product?: string }> }) {
  const { product } = await searchParams;
  const initialProduct = product ? findProduct(product) : undefined;
  return (
    <PublicShell>
      <RouteHero eyebrow="Checkout" title="Validated checkout" text="Customer data, product IDs, quantities, and totals are validated on the server before the order reaches the admin backend." />
      <section className="section route-section">
        <CheckoutClient products={products} initialProduct={initialProduct} />
      </section>
    </PublicShell>
  );
}
