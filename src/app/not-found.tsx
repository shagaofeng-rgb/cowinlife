import Link from "next/link";
import { PublicShell, RouteHero } from "@/components/storefront-shell";

export default function NotFound() {
  return (
    <PublicShell>
      <RouteHero eyebrow="404" title="Page not found" text="The page may have moved, or the product slug may not match the current catalog snapshot." />
      <section className="section route-section">
        <Link className="button primary" href="/products">Browse products</Link>
      </section>
    </PublicShell>
  );
}
