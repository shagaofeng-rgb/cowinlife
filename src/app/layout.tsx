import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cowinlife.com"),
  title: {
    default: "Cowinlife | QUCHENG Home Decor",
    template: "%s | Cowinlife"
  },
  description: "Shop QUCHENG removable wall decals, window privacy films, and peel-and-stick wallpaper synced from the Amazon catalog.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Cowinlife | QUCHENG Home Decor",
    description: "Independent QUCHENG storefront with product images, prices, parameters, checkout, support, and SEO-ready catalog pages.",
    url: "https://cowinlife.com",
    siteName: "Cowinlife",
    images: ["/images/qucheng-hero.png"],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Cowinlife | QUCHENG Home Decor",
    description: "Shop QUCHENG wall decals, window films, and peel-and-stick decor."
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
