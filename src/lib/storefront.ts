import { collections, products, type Product } from "@/data/products";
export { findContentPost, getAllContentPosts, getPublishedContentPosts } from "@/lib/content-automation";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://cowinlife.com";

export type PublicCartItem = {
  productId: string;
  quantity: number;
};

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
    .filter((parameter) => !/sku|catalog price|best sellers rank|review|rating/i.test(parameter.label))
    .map((parameter) => ({
      label: parameter.label.replace(/&#34;|&quot;/g, '"').replace(/&amp;/g, "&"),
      value: parameter.value.replace(/&#34;|&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, "&")
    }));
}

export function availabilityText(product: Product) {
  return /available|in stock/i.test(product.availability) ? "Available" : "Availability varies";
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
  const images = product.gallery.map((image) => image.startsWith("http") ? image : `${siteUrl}${image}`);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: images,
    sku: publicSku(product),
    brand: { "@type": "Brand", name: "COWINLIFE" },
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
    category: product.category
  };
}
