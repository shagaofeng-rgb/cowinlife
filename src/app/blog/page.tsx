import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PublicShell, RouteHero } from "@/components/storefront-shell";
import { getPublishedContentPosts } from "@/lib/storefront";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description: "Cowinlife installation guides, buying guides, and home decor project notes.",
  alternates: { canonical: "/blog" }
};

export default function BlogPage() {
  const posts = getPublishedContentPosts().filter((post) => post.type === "blog");
  return (
    <PublicShell>
      <RouteHero eyebrow="Blog" title="Cowinlife guides" text="Installation and buying guides built from real product surfaces, materials, and use cases." />
      <section className="section route-section">
        <div className="blog-grid">
          {posts.map((post) => (
            <Link className="blog-card content-card" href={`/blog/${post.slug}`} key={post.slug}>
              <Image src={post.image} alt={post.imageAlt} width={520} height={340} />
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
