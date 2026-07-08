import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { JsonLd, PublicShell } from "@/components/storefront-shell";
import { contentPosts, siteUrl } from "@/lib/storefront";

export function generateStaticParams() {
  return contentPosts.filter((post) => post.type === "news").map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = contentPosts.find((item) => item.type === "news" && item.slug === slug);
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
  const post = contentPosts.find((item) => item.type === "news" && item.slug === slug);
  if (!post) notFound();
  return (
    <PublicShell>
      <JsonLd value={{ "@context": "https://schema.org", "@type": "NewsArticle", headline: post.title, datePublished: post.publishedAt, image: `${siteUrl}${post.image}`, description: post.excerpt }} />
      <article className="article-page">
        <p className="eyebrow">News / {post.publishedAt}</p>
        <h1>{post.title}</h1>
        <p>{post.excerpt}</p>
        <Image src={post.image} alt="" width={980} height={560} priority />
        <div className="article-body">
          <p>{post.body}</p>
        </div>
      </article>
    </PublicShell>
  );
}
