import type { Metadata } from "next";
import { ProductCard, PublicShell, RouteHero } from "@/components/storefront-shell";
import { searchProducts } from "@/lib/storefront";

export const metadata: Metadata = {
  title: "Search",
  description: "Search COWINLIFE products by collection, room, material, surface type, and feature.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true }
};

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "" } = await searchParams;
  const results = searchProducts(q);
  return (
    <PublicShell>
      <RouteHero eyebrow="Search" title="Find COWINLIFE decor" text="Search by product type, room, collection, material, or installation feature." />
      <section className="section route-section">
        <form className="route-search-form" action="/search">
          <input name="q" defaultValue={q} placeholder="Search decals, film, wallpaper, nursery, window..." aria-label="Search products" />
          <button className="button primary">Search</button>
        </form>
        <p className="route-count">{results.length} result{results.length === 1 ? "" : "s"}</p>
        <div className="product-grid">
          {results.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PublicShell>
  );
}
