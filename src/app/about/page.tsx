import type { Metadata } from "next";
import { storeConfig } from "@/config/store.config";
import { PolicyList, PublicShell, RouteHero } from "@/components/storefront-shell";

export const metadata: Metadata = {
  title: "About",
  description: "About Cowinlife and the COWINLIFE home decor product catalog.",
  alternates: { canonical: "/about" }
};

export default function AboutPage() {
  return (
    <PublicShell>
      <RouteHero eyebrow="About" title="Cowinlife for COWINLIFE decor" text={storeConfig.brandDescription} />
      <section className="section route-section two-column">
        <div>
          <h2>Store operating scope</h2>
          <p>The site presents COWINLIFE products with independent-site catalog navigation, product detail pages, support intake, order creation, and admin operations.</p>
          <p>{storeConfig.legalCompanyName} operates Cowinlife for home decor and DIY surface decoration inquiries from {storeConfig.address}.</p>
        </div>
        <PolicyList items={["Clean product catalog", "No fake reviews or inventory claims", "Server-side order validation", "SEO and Search Console sync ready"]} />
      </section>
    </PublicShell>
  );
}
