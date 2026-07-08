import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard, PublicShell, RouteHero } from "@/components/storefront-shell";

export const metadata: Metadata = {
  title: "QUCHENG Products",
  description: "Browse QUCHENG products with Amazon-synced images, ASINs, source prices, parameters, and availability notes.",
  alternates: { canonical: "/products" }
};

export default function ProductsPage() {
  return (
    <PublicShell>
      <RouteHero
        eyebrow="Catalog"
        title="QUCHENG Products"
        text={`${products.length} synced products with image galleries, prices, ASINs, parameters, and source fulfillment notes.`}
      />
      <section className="section route-section">
        <div className="product-grid">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PublicShell>
  );
}
