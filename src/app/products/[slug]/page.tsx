import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/data/products";
import { JsonLd, ProductCard, PublicShell } from "@/components/storefront-shell";
import { ProductFeedback, RetailProductGallery } from "@/components/retail-product-preview-client";
import { RetailProductDetails, RetailPurchasePanel } from "@/components/retail-product-pdp-client";
import { availabilityText, collectionSlug, findProduct, money, priceToUsd, productJsonLd, productParameters, productSlug, publicSku, siteUrl } from "@/lib/storefront";

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
    },
    twitter: { card: "summary_large_image", title: product.name, description: product.details.slice(0, 155), images: [product.image] }
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) notFound();
  const related = products.filter((item) => item.collection === product.collection && item.id !== product.id).slice(0, 3);
  const usdCents = product.price === null ? null : Math.round(priceToUsd(product) * 100);
  const parameters = productParameters(product);
  const productUrl = `${siteUrl}/products/${productSlug(product)}`;

  return (
    <PublicShell>
      <JsonLd value={productJsonLd(product)} />
      <JsonLd value={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Products", item: `${siteUrl}/products` },
          { "@type": "ListItem", position: 3, name: product.collection, item: `${siteUrl}/collections/${collectionSlug(product.collection)}` },
          { "@type": "ListItem", position: 4, name: product.name, item: productUrl }
        ]
      }} />
      <div className="pdp-trust-bar" aria-label="Store benefits"><span>Secure checkout</span><span>Global shipping</span><span>Reliable service</span><span>Quality guarantee</span></div>
      <nav className="pdp-breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/products">Products</Link><span>/</span><Link href={`/collections/${collectionSlug(product.collection)}`}>{product.collection}</Link><span>/</span><strong>{product.name}</strong></nav>
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
          <ul className="pdp-key-features">{product.features.slice(0, 3).map((feature) => <li key={feature}>{feature}</li>)}</ul>
          <div className="detail-tags">
            {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <RetailPurchasePanel product={product} price={usdCents === null ? "Price unavailable" : money(usdCents)} />
        </div>
      </section>
      <RetailProductDetails product={product} parameters={parameters} />
      {product.detailImages.length > 0 && (
        <section id="sku-images" className="retail-preview-story" aria-label="SKU-specific product detail images">
          {product.detailImages.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
            </figure>
          ))}
        </section>
      )}
      <ProductFeedback />
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
