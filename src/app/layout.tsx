import type { Metadata } from "next";
import "./globals.css";
import { storeConfig } from "@/config/store.config";
import { siteUrl } from "@/lib/storefront";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cowinlife | Home Decor",
    template: "%s | Cowinlife"
  },
  description: "Shop Cowinlife removable wall decals, window privacy films, and peel-and-stick wallpaper.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Cowinlife | Home Decor",
    description: "Independent Cowinlife storefront with product images, prices, parameters, checkout, support, and SEO-ready catalog pages.",
    url: siteUrl,
    siteName: "Cowinlife",
    images: ["/images/cowinlife-hero.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cowinlife | Home Decor",
    description: "Shop Cowinlife wall decals, window films, and peel-and-stick decor."
  },
  robots: {
    index: true,
    follow: true
  },
  category: "home decor"
};

const organization = {
  "@context": "https://schema.org",
  "@type": "OnlineStore",
  "@id": `${siteUrl}/#organization`,
  name: "Cowinlife",
  alternateName: storeConfig.storeName,
  legalName: storeConfig.legalCompanyName,
  url: siteUrl,
  email: storeConfig.supportEmail,
  telephone: storeConfig.supportPhone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Room 110, 1st Floor, Building 2, Qushidai Future Building",
    addressLocality: "Quzhou",
    addressRegion: "Zhejiang",
    addressCountry: "CN"
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: storeConfig.supportEmail,
    telephone: storeConfig.supportPhone,
    availableLanguage: ["English", "Chinese"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }} />
        {children}
      </body>
    </html>
  );
}
