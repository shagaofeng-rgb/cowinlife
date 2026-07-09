import type { MetadataRoute } from "next";
import { collections, products } from "@/data/products";
import { customProducts } from "@/lib/custom-products";
import { collectionSlug, contentPosts, productSlug, siteUrl } from "@/lib/storefront";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = ["", "/products", "/custom-products", "/search", "/cart", "/checkout", "/blog", "/news", "/about", "/contact", "/privacy", "/terms"];
  const productRoutes = products.map((product) => `/products/${productSlug(product)}`);
  const customProductRoutes = customProducts.map((product) => `/custom-products/${product.slug}`);
  const collectionRoutes = collections.map((collection) => `/collections/${collectionSlug(collection.name)}`);
  const contentRoutes = contentPosts.map((post) => `/${post.type}/${post.slug}`);

  return [...staticRoutes, ...productRoutes, ...customProductRoutes, ...collectionRoutes, ...contentRoutes].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/products") || path.startsWith("/custom-products") ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/products") || path.startsWith("/custom-products") ? 0.85 : 0.65
  }));
}
