import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd, PublicShell } from "@/components/storefront-shell";
import { findContentPost, getPublishedContentPosts, siteUrl } from "@/lib/storefront";

export function generateStaticParams() {
  return getPublishedContentPosts().filter((post) => post.type === "news").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = findContentPost("news", slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/news/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [post.image], type: "article" }
  };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = findContentPost("news", slug);
  if (!post) notFound();
  return (
    <PublicShell>
      <JsonLd value={{ "@context": "https://schema.org", "@type": "NewsArticle", headline: post.title, datePublished: post.publishedAt, dateModified: post.updatedAt, image: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`, description: post.excerpt, author: { "@type": "Organization", name: post.author, url: siteUrl }, publisher: { "@type": "Organization", name: "Cowinlife", url: siteUrl }, mainEntityOfPage: { "@type": "WebPage", "@id": `${siteUrl}/news/${post.slug}` } }} />
      <article className="article-page">
        <p className="eyebrow">News / {post.publishedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <Image src={post.image} alt={post.imageAlt} width={980} height={560} priority />
        <div className="article-body">
          {post.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="article-updated">Last reviewed: {post.updatedAt}</p>
          <p className="article-updated">Cover image source: <a href={post.imagePageUrl} rel="noreferrer" target="_blank">Unsplash</a></p>
        </div>
      </article>
    </PublicShell>
  );
}
