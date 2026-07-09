import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, PackageCheck, Search, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { collections, products } from "@/data/products";
import { ProductCard, PublicShell } from "@/components/storefront-shell";
import { collectionSlug, contentPosts } from "@/lib/storefront";
import { customProducts } from "@/lib/custom-products";

export default function Home() {
  const featured = products.slice(0, 6);
  const posts = contentPosts.filter((post) => post.type === "blog").slice(0, 2);
  const customPreview = customProducts.slice(0, 4);

  return (
    <PublicShell>
      <section className="home-hero">
        <Image src="/images/qucheng-hero.png" alt="QUCHENG removable home decor scene" fill priority />
        <div className="home-hero-copy">
          <p className="eyebrow">Cowinlife home decor</p>
          <h1>QUCHENG</h1>
          <p>Peel-and-stick wall decals, privacy films, and removable surface decor for fast room refresh projects.</p>
          <div className="button-row">
            <Link className="button primary" href="/products">
              Shop products <ArrowRight size={17} />
            </Link>
            <Link className="button secondary" href="/search">
              Search catalog
            </Link>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Store policies">
        <span><PackageCheck size={18} /> Product catalog</span>
        <span><Truck size={18} /> Shipping estimate</span>
        <span><ShieldCheck size={18} /> Secure checkout flow</span>
        <span><Search size={18} /> Search and filters</span>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Categories</p>
          <h2>Shop by project type</h2>
        </div>
        <div className="collection-grid">
          {collections.map((collection) => (
            <Link className="collection-tile" href={`/collections/${collectionSlug(collection.name)}`} key={collection.name}>
              <Image src={collection.image} alt={collection.name} width={520} height={360} />
              <span>{collection.name}</span>
              <small>{collection.description}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shop-section">
        <div className="section-heading">
          <p className="eyebrow">Featured products</p>
          <h2>Popular removable decor picks</h2>
        </div>
        <div className="product-grid">
          {featured.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
        <div className="center-actions">
          <Link className="button primary" href="/products">View all products</Link>
        </div>
      </section>

      <section className="section custom-home-band">
        <div className="section-heading">
          <p className="eyebrow">Made to order</p>
          <h2>Custom products without stock pricing</h2>
          <p>Browse synchronized custom products for OEM, ODM, material, size, pattern, packaging, and sample-based projects. Pricing is handled by quotation after requirements are confirmed.</p>
        </div>
        <div className="custom-preview-grid">
          {customPreview.map((product) => (
            <Link className="custom-preview-card" href={`/custom-products/${product.slug}`} key={product.id}>
              <img src={product.image} alt={product.name} loading="lazy" />
              <span>{product.category} / {product.sku}</span>
              <strong>{product.name}</strong>
              <small>MOQ: {product.moq} - Quote required</small>
            </Link>
          ))}
        </div>
        <div className="center-actions">
          <Link className="button primary" href="/custom-products">View custom products</Link>
        </div>
      </section>

      <section className="section split-band">
        <div>
          <p className="eyebrow">Shopping flow</p>
          <h2>Separate pages, clear actions, real checkout path</h2>
          <p>Customers can browse categories, open product detail pages, search the catalog, submit support messages, and create checkout orders that write into the backend.</p>
        </div>
        <div className="process-list">
          {["Browse categories", "Open product details", "Create checkout order", "Track backend records"].map((item) => (
            <span key={item}><Check size={17} /> {item}</span>
          ))}
        </div>
      </section>

      <section className="section shoppable">
        <Image src="/images/nursery-decals.png" alt="Nursery wall decal room scene" width={900} height={620} />
        <div>
          <p className="eyebrow">Room ideas</p>
          <h2>Start from a room, then choose a product</h2>
          <p>Use the catalog by room and surface type: nursery walls, windows, cabinets, shelves, furniture panels, bathrooms, and rental-friendly refreshes.</p>
          <div className="button-row">
            <Link className="button secondary" href="/collections/nursery-wall-decals">Nursery decals</Link>
            <Link className="button secondary" href="/collections/window-privacy-films">Window films</Link>
          </div>
        </div>
      </section>

      <section className="section feature-grid">
        <article>
          <Sparkles size={24} />
          <h3>Product details</h3>
          <p>Each product page includes images, price, feature notes, measurements, materials, and checkout entry points.</p>
        </article>
        <article>
          <Search size={24} />
          <h3>Catalog search</h3>
          <p>Search by room, material, collection, surface type, or installation feature.</p>
        </article>
        <article>
          <ShieldCheck size={24} />
          <h3>Backend records</h3>
          <p>Orders and support messages are created through API routes and stored for admin follow-up.</p>
        </article>
        <article>
          <Truck size={24} />
          <h3>Support ready</h3>
          <p>Customers can send installation, return, refund, and product questions from a dedicated contact page.</p>
        </article>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Guides</p>
          <h2>Help customers choose and install</h2>
        </div>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link className="blog-card content-card" href={`/blog/${post.slug}`} key={post.slug}>
              <Image src={post.image} alt="" width={520} height={340} />
              <span>{post.publishedAt}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
          <Link className="blog-card content-card text-card" href="/contact">
            <span>Support</span>
            <h3>Need help with a product?</h3>
            <p>Send a product, installation, shipping, return, or refund question directly to the admin backend.</p>
          </Link>
        </div>
      </section>
    </PublicShell>
  );
}
