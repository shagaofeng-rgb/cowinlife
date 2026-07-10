import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/storefront";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/custom-product-image/"],
        disallow: ["/admin/", "/api/"]
      }
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl
  };
}
