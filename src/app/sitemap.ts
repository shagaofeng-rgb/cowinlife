import type { MetadataRoute } from "next";
import { collections, products } from "@/data/products";
import { collectionSlug, contentPosts, productSlug, siteUrl } from "@/lib/storefront";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/products", "/search", "/cart", "/checkout", "/blog", "/news", "/about", "/contact", "/privacy", "/terms"];
  const productRoutes = products.map((product) => `/products/${productSlug(product)}`);
  const collectionRoutes = collections.map((collection) => `/collections/${collectionSlug(collection.name)}`);
  const contentRoutes = contentPosts.map((post) => `/${post.type}/${post.slug}`);

  return [...staticRoutes, ...productRoutes, ...collectionRoutes, ...contentRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/products") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") ? 0.85 : 0.65
  }));
}
