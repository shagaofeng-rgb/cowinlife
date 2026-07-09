import { collections, products, type Product } from "@/data/products";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cowinlife.com";

export type PublicCartItem = {
  productId: string;
  quantity: number;
};

export const contentPosts = [
  {
    type: "blog",
    slug: "how-to-apply-peel-and-stick-wall-decals",
    title: "How to apply peel and stick wall decals",
    excerpt: "A practical installation guide for smooth walls, cabinets, glass, and furniture surfaces.",
    image: products[0]?.image || "/images/qucheng-hero.png",
    relatedProductIds: products.slice(0, 3).map((product) => product.id),
    publishedAt: "2026-07-08",
    body:
      "Clean the surface, dry it fully, preview the layout with painter tape, then peel and apply slowly from one edge. Use a card to push air bubbles outward. Avoid textured walls and freshly painted surfaces."
  },
  {
    type: "blog",
    slug: "window-film-vs-wallpaper",
    title: "Window film vs peel and stick wallpaper",
    excerpt: "Choose the right QUCHENG surface product by room, material, privacy, and removal needs.",
    image: products.find((product) => product.collection.includes("Window"))?.image || products[0]?.image,
    relatedProductIds: products.slice(2, 6).map((product) => product.id),
    publishedAt: "2026-07-08",
    body:
      "Static window film is designed for smooth glass and privacy. Peel and stick wallpaper is better for walls, cabinets, shelves, and furniture panels. Both should be installed on clean, dry, smooth surfaces."
  },
  {
    type: "news",
    slug: "cowinlife-store-launch",
    title: "Cowinlife independent store launches with QUCHENG catalog",
    excerpt: "The independent storefront now displays QUCHENG products, images, prices, and specifications.",
    image: products[0]?.image || "/images/qucheng-hero.png",
    relatedProductIds: products.slice(0, 4).map((product) => product.id),
    publishedAt: "2026-07-08",
    body:
      "Cowinlife now presents the QUCHENG catalog with independent-site navigation, product detail pages, checkout simulation, and an operations backend for product, order, SEO, and catalog management."
  }
];

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120);
}

export function productSlug(product: Product) {
  return slugify(`${publicSku(product)}-${product.name}`);
}

export function publicSku(product: Product) {
  if (product.sku) return product.sku;
  const index = products.findIndex((item) => item.id === product.id);
  return `CW-${String(index + 1001).padStart(4, "0")}`;
}

export function collectionSlug(name: string) {
  return slugify(name);
}

export function findProduct(slugOrId: string) {
  return products.find((product) => {
    return product.id === slugOrId || productSlug(product) === slugOrId || publicSku(product).toLowerCase() === slugOrId.toLowerCase();
  });
}

export function findCollection(slug: string) {
  return collections.find((collection) => collectionSlug(collection.name) === slug);
}

export function productsForCollection(slug: string) {
  const collection = findCollection(slug);
  if (!collection) return [];
  return products.filter((product) => product.collection === collection.name);
}

export function searchProducts(query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return products;
  return products.filter((product) =>
    [
      product.name,
      publicSku(product),
      product.collection,
      product.category,
      product.room,
      product.tags.join(" "),
      product.features.join(" ")
    ].join(" ").toLowerCase().includes(needle)
  );
}

export function productParameters(product: Product) {
  return product.parameters
    .filter((parameter) => !/sku|catalog price/i.test(parameter.label));
}

export function availabilityText(product: Product) {
  return product.availability.toLowerCase().includes("in stock") ? "Available" : "Availability varies";
}

export function priceToUsd(product: Product) {
  if (product.price === null) return 0;
  return product.currency === "USD" ? product.price : product.price / 7.25;
}

export function calculateCart(items: PublicCartItem[]) {
  const normalized = items
    .map((item) => {
      const product = findProduct(item.productId);
      const quantity = Math.max(1, Math.min(20, Math.trunc(Number(item.quantity || 1))));
      if (!product || product.price === null) return null;
      const unitPriceCents = Math.round(priceToUsd(product) * 100);
      return {
        product,
        quantity,
        unitPriceCents,
        lineTotalCents: unitPriceCents * quantity
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const subtotalCents = normalized.reduce((sum, item) => sum + item.lineTotalCents, 0);
  const shippingCents = subtotalCents >= 4900 || subtotalCents === 0 ? 0 : 690;
  const taxCents = Math.round(subtotalCents * 0.0725);
  const totalCents = subtotalCents + shippingCents + taxCents;
  return { items: normalized, subtotalCents, shippingCents, taxCents, totalCents, currency: "USD" };
}

export function money(cents: number) {
  return `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}

export function productJsonLd(product: Product) {
  const price = product.price === null ? undefined : priceToUsd(product).toFixed(2);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.gallery.map((image) => `${siteUrl}${image}`),
    sku: publicSku(product),
    brand: { "@type": "Brand", name: "QUCHENG" },
    description: product.details,
    offers: price
      ? {
          "@type": "Offer",
          price,
          priceCurrency: "USD",
          availability: product.availability.toLowerCase().includes("in stock")
            ? "https://schema.org/InStock"
            : "https://schema.org/LimitedAvailability",
          url: `${siteUrl}/products/${productSlug(product)}`
        }
      : undefined,
    aggregateRating: product.rating && product.reviewCount
      ? {
          "@type": "AggregateRating",
          ratingValue: product.rating,
          reviewCount: product.reviewCount
        }
      : undefined
  };
}
