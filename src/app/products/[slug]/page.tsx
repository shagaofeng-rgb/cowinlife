import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { JsonLd, ProductCard, PublicShell } from "@/components/storefront-shell";
import { ProductFeedback, ProductSectionLinks, RetailProductGallery } from "@/components/retail-product-preview-client";
import { availabilityText, findProduct, money, priceToUsd, productJsonLd, productParameters, productSlug, publicSku } from "@/lib/storefront";

export function generateStaticParams() {
  return products.map((product) => ({ slug: productSlug(product) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name.slice(0, 58)} | ${publicSku(product)}`,
    description: product.details.slice(0, 155),
    alternates: { canonical: `/products/${productSlug(product)}` },
    openGraph: {
      title: product.name,
      description: product.details.slice(0, 155),
      images: [product.image]
    }
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.collection === product.collection && item.id !== product.id).slice(0, 3);
  const usdCents = product.price === null ? null : Math.round(priceToUsd(product) * 100);

  return (
    <PublicShell>
      <JsonLd value={productJsonLd(product)} />
      <section className="product-detail route-product-detail">
        <RetailProductGallery productName={product.name} images={product.gallery.map((src, index) => ({ src, alt: `${product.name} gallery image ${index + 1}` }))} />
        <div className="detail-copy">
          <p className="eyebrow">{product.collection} / SKU {publicSku(product)}</p>
          <h1>{product.name}</h1>
          <div className="price-row">
            <strong>{usdCents === null ? "Price unavailable" : money(usdCents)}</strong>
            <small>{product.priceSource}</small>
          </div>
          <div className="product-meta detail-meta">
            <span>{availabilityText(product)}</span>
            <span>SKU {publicSku(product)}</span>
            <span>{product.shipping}</span>
          </div>
          <p>{product.details}</p>
          <div className="detail-tags">
            {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="detail-actions">
            <Link className="button primary" href={`/checkout?product=${product.id}`}>Add to checkout</Link>
            <Link className="button secondary" href="/contact">Ask a question</Link>
          </div>
          <ProductSectionLinks />
          <div className="parameter-grid" aria-label="Product parameters">
            {productParameters(product).map((parameter) => (
              <span key={parameter.label}>
                <small>{parameter.label}</small>
                <strong>{parameter.value}</strong>
              </span>
            ))}
          </div>
        </div>
      </section>
      <section id="product-details" className="section route-section">
        <div className="section-heading">
          <p className="eyebrow">Details</p>
          <h2>Features and installation notes</h2>
        </div>
        <ul className="feature-list">
          {product.features.map((feature) => <li key={feature}>{feature}</li>)}
        </ul>
      </section>
      {product.detailImages.length > 0 && (
        <section id="sku-images" className="retail-preview-story" aria-label="SKU-specific product detail images">
          {product.detailImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </section>
      )}
      {product.rating !== null && product.reviewCount !== null && <ProductFeedback rating={product.rating} ratingCount={product.reviewCount} />}
      {related.length > 0 && (
        <section className="section route-section">
          <div className="section-heading">
            <p className="eyebrow">Related</p>
            <h2>More from {product.collection}</h2>
          </div>
          <div className="product-grid">
            {related.map((item) => <ProductCard product={item} key={item.id} />)}
          </div>
        </section>
      )}
    </PublicShell>
  );
}
