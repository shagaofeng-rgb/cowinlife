import customProductsData from "@/data/custom-products.json";

export type CustomProduct = (typeof customProductsData.products)[number];

export const customProducts = customProductsData.products as CustomProduct[];
export const customProductCategories = customProductsData.categories as string[];
export const customProductsSyncedAt = customProductsData.syncedAt;

export function customProductImage(product: CustomProduct, index = 0) {
  return `/api/custom-product-image/${product.id}/${index}`;
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
