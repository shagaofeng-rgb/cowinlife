import customProductsData from "@/data/custom-products.json";

export type CustomProduct = (typeof customProductsData.products)[number];

export const customProducts = customProductsData.products as CustomProduct[];
export const customProductCategories = customProductsData.categories as string[];
export const customProductsSyncedAt = customProductsData.syncedAt;

export function customProductImage(product: CustomProduct, index = 0) {
  return `/api/custom-product-image/${product.id}/${index}`;
}

export function customProductDescription(product: CustomProduct) {
  const certification = product.certificates.length
    ? ` Available certifications: ${[...new Set(product.certificates)].join(", ")}.`
    : "";
  return `${product.name} is a made-to-order ${product.category.toLowerCase()} product (${product.sku}) with a minimum order of ${product.moq}.${certification} Contact Cowinlife for size, material, pattern, packaging, sample, and production options.`;
}

export function customProductMetaDescription(product: CustomProduct) {
  return customProductDescription(product).slice(0, 157).trimEnd().replace(/[,.]?$/, ".");
}

export function findCustomProduct(slugOrId: string) {
  return customProducts.find((product) => product.slug === slugOrId || product.id === slugOrId || product.sku.toLowerCase() === slugOrId.toLowerCase());
}

export function searchCustomProducts(query = "", category = "") {
  const needle = query.trim().toLowerCase();
  return customProducts.filter((product) => {
    const inCategory = !category || product.category === category;
    const text = [product.name, product.sku, product.category, product.moq, product.tags.join(" "), product.certificates.join(" ")]
      .join(" ")
      .toLowerCase();
    return inCategory && (!needle || text.includes(needle));
  });
}
