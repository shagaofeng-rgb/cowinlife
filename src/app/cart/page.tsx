import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductCard, PublicShell, RouteHero } from "@/components/storefront-shell";

export const metadata: Metadata = {
  title: "Cart",
  description: "Review COWINLIFE products and continue to checkout with server-side price validation.",
  alternates: { canonical: "/cart" }
};

export default function CartPage() {
  return (
    <PublicShell>
      <RouteHero eyebrow="Cart" title="Cart and server-side pricing" text="This storefront validates product IDs, quantities, prices, shipping, and tax on the server before an order is created." />
      <section className="section route-section">
        <div className="checkout-empty">
          <h2>Start with a synced product</h2>
          <p>Choose a product below, then continue through the checkout route. No payment card data is stored locally.</p>
          <Link className="button primary" href="/checkout">Open checkout</Link>
        </div>
        <div className="product-grid">
          {products.slice(0, 3).map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PublicShell>
  );
}
