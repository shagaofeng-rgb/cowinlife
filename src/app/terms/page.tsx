import type { Metadata } from "next";
import { PolicyList, PublicShell, RouteHero } from "@/components/storefront-shell";

export const metadata: Metadata = {
  title: "Terms",
  description: "Cowinlife store terms for product source data, ordering, shipping, returns, refunds, and support.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <PublicShell>
      <RouteHero eyebrow="Policy" title="Terms of Service" text="Store terms for QUCHENG products, source catalog data, checkout, shipping, returns, and support." />
      <section className="section route-section legal-copy">
        <h2>Product data</h2>
        <p>Product images, prices, parameters, ratings, and availability notes are synced from the QUCHENG Amazon store snapshot and should be rechecked before paid production transactions.</p>
        <h2>Checkout and fulfillment</h2>
        <PolicyList items={["Orders are validated server-side", "Payment status starts as pending until a payment provider confirms funds", "Shipping and tax are estimates until final checkout configuration", "Returns window is 30 days unless a final policy states otherwise"]} />
      </section>
    </PublicShell>
  );
}
