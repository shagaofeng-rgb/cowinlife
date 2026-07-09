import type { Metadata } from "next";
import { PolicyList, PublicShell, RouteHero } from "@/components/storefront-shell";
import { storeConfig } from "@/config/store.config";

export const metadata: Metadata = {
  title: "Terms",
  description: "Cowinlife store terms for product data, ordering, shipping, returns, refunds, and support.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <PublicShell>
      <RouteHero eyebrow="Policy" title="Terms of Service" text="Store terms for COWINLIFE products, catalog data, checkout, shipping, returns, and support." />
      <section className="section route-section legal-copy">
        <h2>Operating entity</h2>
        <p>{storeConfig.legalCompanyName} operates Cowinlife from {storeConfig.address}. Business inquiries can be sent to {storeConfig.supportEmail} or WhatsApp {storeConfig.whatsapp}.</p>
        <h2>Product data</h2>
        <p>Product images, prices, parameters, ratings, and availability notes are maintained in the Cowinlife catalog and should be reviewed before paid production transactions.</p>
        <h2>Checkout and fulfillment</h2>
        <PolicyList items={["Orders are validated server-side", "Payment status starts as pending until a payment provider confirms funds", "Shipping and tax are estimates until final checkout configuration", "Returns window is 30 days unless a final policy states otherwise"]} />
      </section>
    </PublicShell>
  );
}
