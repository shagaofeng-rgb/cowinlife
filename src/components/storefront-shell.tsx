import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Search, ShoppingBag, Star } from "lucide-react";
import { storeConfig } from "@/config/store.config";
import type { Product } from "@/data/products";
import { collections } from "@/data/products";
import { availabilityText, collectionSlug, money, priceToUsd, productSlug, publicSku } from "@/lib/storefront";

export function StorefrontHeader() {
  return (
    <>
      <header className="announcement">
        <span>Cowinlife home decor catalog with product images and room-ready specifications.</span>
        <span>Shipping and quotation details are confirmed before checkout.</span>
      </header>
      <nav className="topbar route-topbar" aria-label="Primary navigation">
        <Link href="/" className="brand" aria-label="Cowinlife home">
          <span className="brand-mark">Q</span>
          <span>Cowinlife</span>
        </Link>
        <div className="navlinks route-navlinks">
          <Link className="navlink" href="/products">Products</Link>
          <Link className="navlink" href="/custom-products">Custom Products</Link>
          {collections.map((collection) => (
            <Link className="navlink" href={`/collections/${collectionSlug(collection.name)}`} key={collection.name}>
              {collection.name}
            </Link>
          ))}
          <Link className="navlink" href="/blog">Blog</Link>
          <Link className="navlink" href="/news">News</Link>
          <Link className="navlink" href="/contact">Support</Link>
        </div>
        <div className="nav-actions">
          <Link className="icon-button" href="/search" aria-label="Search">
            <Search size={19} />
          </Link>
          <Link className="icon-button" href="/cart" aria-label="Cart">
            <ShoppingBag size={19} />
          </Link>
        </div>
      </nav>
    </>
  );
}

export function StorefrontFooter() {
  return (
    <footer className="footer">
      <div>
        <span className="brand footer-brand"><span className="brand-mark">Q</span>Cowinlife</span>
        <p>{storeConfig.brandDescription}</p>
      </div>
      <div>
        <h3>Shop</h3>
        <Link href="/products">Products</Link>
        <Link href="/custom-products">Custom Products</Link>
        <Link href="/search">Search</Link>
        <Link href="/blog">Guides</Link>
        <Link href="/news">News</Link>
      </div>
      <div>
        <h3>Help</h3>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/admin">Admin</Link>
      </div>
    </footer>
  );
}

export function PublicShell({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <StorefrontHeader />
      {children}
      <StorefrontFooter />
    </main>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const price = product.price === null ? "Price unavailable" : money(Math.round(priceToUsd(product) * 100));
  return (
    <article className="product-card">
      <Link className="product-image" href={`/products/${productSlug(product)}`} aria-label={`View ${product.name}`}>
        <Image src={product.image} alt={product.name} width={520} height={520} />
      </Link>
      <div className="product-info">
        <span>{product.collection} / {publicSku(product)}</span>
        <h3>{product.name}</h3>
        <p>{product.tags.slice(0, 4).join(" / ")}</p>
        <div className="price-row">
          <strong>{price}</strong>
          <small>Catalog price</small>
        </div>
        <div className="product-meta">
          <span><Star size={14} /> {product.ratingText || "Rating unavailable"}</span>
          <span>{product.reviewCount ? `${product.reviewCount} reviews` : "Reviews unavailable"}</span>
          <span>{availabilityText(product)}</span>
        </div>
        <div className="card-actions">
          <Link className="button primary" href={`/products/${productSlug(product)}`}>
            View details <ArrowRight size={16} />
          </Link>
          <Link className="button secondary" href={`/checkout?product=${product.id}`}>
            Add to checkout
          </Link>
        </div>
      </div>
    </article>
  );
}

export function RouteHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="route-hero">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p>{text}</p>
    </section>
  );
}

export function JsonLd({ value }: { value: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value).replace(/</g, "\\u003c") }} />;
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <div className="policy-list">
      {items.map((item) => (
        <span key={item}><Check size={17} /> {item}</span>
      ))}
    </div>
  );
}
