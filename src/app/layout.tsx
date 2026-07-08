import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "QUCHENG Home Decor",
  description: "Removable wall decals, window films, and peel-and-stick wallpaper for fast home refresh projects."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
