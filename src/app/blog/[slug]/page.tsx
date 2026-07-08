import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd, ProductCard, PublicShell } from "@/components/storefront-shell";
import { contentPosts, siteUrl } from "@/lib/storefront";
import { products } from "@/data/products";

export function generateStaticParams() {
  return contentPosts.filter((post) => post.type === "blog").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = contentPosts.find((item) => item.type === "blog" && item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [post.image], type: "article" }
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = contentPosts.find((item) => item.type === "blog" && item.slug === slug);
  if (!post) notFound();
  const related = products.filter((product) => post.relatedProductIds.includes(product.id)).slice(0, 3);
  return (
    <PublicShell>
      <JsonLd value={{ "@context": "https://schema.org", "@type": "BlogPosting", headline: post.title, datePublished: post.publishedAt, image: `${siteUrl}${post.image}`, description: post.excerpt }} />
      <article className="article-page">
        <p className="eyebrow">Guide / {post.publishedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <Image src={post.image} alt="" width={980} height={560} priority />
        <div className="article-body">
          <p>{post.body}</p>
          <p>For every installation, verify that the surface is smooth, dry, and clean. If the wall is textured, dusty, oily, or newly painted, test a small corner before applying the full piece.</p>
        </div>
      </article>
      <section className="section route-section">
        <div className="section-heading">
          <p className="eyebrow">Related products</p>
          <h2>Products mentioned in this guide</h2>
        </div>
        <div className="product-grid">
          {related.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PublicShell>
  );
}
