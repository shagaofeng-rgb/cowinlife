import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd, PublicShell } from "@/components/storefront-shell";
import { findCustomProduct } from "@/lib/custom-products";
import { siteUrl } from "@/lib/storefront";

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = findCustomProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.name}. Made-to-order custom product with MOQ ${product.moq}. Contact Cowinlife for quotation.`,
    alternates: { canonical: `/custom-products/${product.slug}` },
    openGraph: {
      title: product.name,
      description: `Made-to-order custom product. MOQ: ${product.moq}.`,
      images: [product.image]
    }
  };
}

export default async function CustomProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = findCustomProduct(slug);
  if (!product) notFound();

  return (
    <PublicShell>
      <JsonLd value={{
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        sku: product.sku,
        brand: { "@type": "Brand", name: "ORON" },
        image: product.gallery,
        description: product.details,
        category: product.category,
        url: `${siteUrl}/custom-products/${product.slug}`,
        additionalProperty: product.parameters.map((parameter) => ({
          "@type": "PropertyValue",
          name: parameter.label,
          value: parameter.value
        }))
      }} />
      <section className="custom-detail">
        <div className="custom-detail-media">
          <img src={product.image} alt={product.name} />
          <div className="custom-gallery">
            {product.gallery.slice(0, 8).map((image) => <img src={image} alt="" loading="lazy" key={image} />)}
          </div>
        </div>
        <div className="custom-detail-copy">
          <p className="eyebrow">Custom Products / {product.sku}</p>
          <h1>{product.name}</h1>
          <p>{product.details}</p>
          <div className="custom-quote-box">
            <strong>No stock price shown</strong>
            <span>This item is made to order. Submit requirements for material, size, pattern, quantity, packaging, samples, and lead time.</span>
          </div>
          <div className="detail-tags">
            {product.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <div className="detail-actions">
            <Link className="button primary" href={`/contact?product=${product.sku}`}>Request quote</Link>
            <Link className="button secondary" href="/custom-products">Back to custom products</Link>
          </div>
          <div className="parameter-grid" aria-label="Custom product parameters">
            {product.parameters.map((parameter) => (
              <span key={parameter.label}>
                <small>{parameter.label}</small>
                <strong>{parameter.value}</strong>
              </span>
            ))}
            {product.certificates.length > 0 && (
              <span>
                <small>Certificates</small>
                <strong>{product.certificates.join(", ")}</strong>
              </span>
            )}
          </div>
        </div>
      </section>
    </PublicShell>
  );
}
