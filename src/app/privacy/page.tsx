import type { Metadata } from "next";
import { PolicyList, PublicShell, RouteHero } from "@/components/storefront-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Cowinlife privacy policy for account, order, support, analytics, and SEO data handling.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <PublicShell>
      <RouteHero eyebrow="Policy" title="Privacy Policy" text="How Cowinlife handles order, support, analytics, and SEO data for the independent storefront." />
      <section className="section route-section legal-copy">
        <h2>Data we collect</h2>
        <p>We collect order contact data, shipping details, product selections, support messages, and site analytics needed to operate the store. Payment card data should be processed by hosted payment providers and is not stored by this local implementation.</p>
        <h2>Operational controls</h2>
        <PolicyList items={["Admin access requires authentication", "Audit logs track backend actions", "Search Console credentials stay in server environment variables", "Customer forms are visible only in the backend"]} />
      </section>
    </PublicShell>
  );
}
