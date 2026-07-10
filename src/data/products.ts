import retailProducts from "./retail-products.json";

export type ProductParameter = {
  label: string;
  value: string;
};

export type ProductDetailImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  sku: string;
  name: string;
  collection: string;
  category: string;
  room: string;
  price: number | null;
  currency: "USD";
  priceDisplay: string;
  priceSource: string;
  availability: string;
  promotion: string;
  shipping: string;
  unitPrice: string;
  unitBase: string;
  rating: number | null;
  ratingText: string;
  reviewCount: number | null;
  colors: string[];
  image: string;
  gallery: string[];
  tags: string[];
  features: string[];
  details: string;
  feedbackHighlights: string[];
  parameters: ProductParameter[];
  detailImages: ProductDetailImage[];
};

type Collection = {
  name: string;
  description: string;
  image: string;
};

const collectionDescriptions: Record<string, string> = {
  "Furniture Refitting Stickers": "Peel-and-stick PVC surface films for cabinets, shelves, drawers, tables, and furniture refresh projects.",
  "Nursery Wall Stickers": "Removable wall stickers and decals for kids rooms, nurseries, playrooms, and soft room decoration.",
  "Window Static Films": "Static glass films for privacy, UV filtering, suncatcher effects, and decorative window updates."
};

export const products = retailProducts as Product[];

export const collections: Collection[] = Array.from(new Set(products.map((product) => product.collection))).map((name) => ({
  name,
  description: collectionDescriptions[name] || "Home decor products for simple, considered room updates.",
  image: products.find((product) => product.collection === name)?.image || "/images/products/cw-product-0001.jpg"
}));
