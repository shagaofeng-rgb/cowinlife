import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { collections } from "@/data/products";
import { ProductCard, PublicShell, RouteHero } from "@/components/storefront-shell";
import { collectionSlug, findCollection, productsForCollection } from "@/lib/storefront";

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collectionSlug(collection.name) }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const collection = findCollection(slug);
  if (!collection) return {};
  return {
    title: collection.name,
    description: collection.description,
    alternates: { canonical: `/collections/${collectionSlug(collection.name)}` },
    openGraph: { title: collection.name, description: collection.description, images: [collection.image] }
  };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const collection = findCollection(slug);
  if (!collection) notFound();
  const items = productsForCollection(slug);
  return (
    <PublicShell>
      <RouteHero eyebrow="Collection" title={collection.name} text={collection.description} />
      <section className="section route-section">
        <div className="product-grid">
          {items.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PublicShell>
  );
}
