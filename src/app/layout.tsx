import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cowinlife.com"),
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
    url: "https://cowinlife.com",
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
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
