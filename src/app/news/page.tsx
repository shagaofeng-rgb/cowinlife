import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicShell, RouteHero } from "@/components/storefront-shell";
import { getPublishedContentPosts } from "@/lib/storefront";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "News",
  description: "Cowinlife and COWINLIFE storefront updates.",
  alternates: { canonical: "/news" }
};

export default function NewsPage() {
  const posts = getPublishedContentPosts().filter((post) => post.type === "news");
  return (
    <PublicShell>
      <RouteHero eyebrow="News" title="Store updates" text="Operational and catalog updates for the Cowinlife independent storefront." />
      <section className="section route-section">
        <div className="blog-grid">
          {posts.map((post) => (
            <Link className="blog-card content-card" href={`/news/${post.slug}`} key={post.slug}>
              <Image src={post.image} alt={post.title} width={520} height={340} />
              <span>{post.publishedAt}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </PublicShell>
  );
}
