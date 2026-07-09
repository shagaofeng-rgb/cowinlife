import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard, PublicShell, RouteHero } from "@/components/storefront-shell";

export const metadata: Metadata = {
  title: "COWINLIFE Products",
  description: "Browse COWINLIFE products with images, catalog prices, parameters, and availability notes.",
  alternates: { canonical: "/products" }
};

export default function ProductsPage() {
  return (
    <PublicShell>
      <RouteHero
        eyebrow="Catalog"
        title="COWINLIFE Products"
        text={`${products.length} products with image galleries, catalog prices, room categories, parameters, and checkout entry points.`}
      />
      <section className="section route-section">
        <div className="product-grid">
          {products.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PublicShell>
  );
}
