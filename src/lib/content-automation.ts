import { collections, products } from "@/data/products";
import { customProducts } from "@/lib/custom-products";

export type ContentPost = {
  type: "blog" | "news";
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  imageSourceUrl: string;
  imagePageUrl: string;
  relatedProductIds: string[];
  publishedAt: string;
  updatedAt: string;
  body: string[];
  author: string;
};

const editorialImages = [
  {
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "A bright home interior with framed wall decor",
    imageSourceUrl: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
    imagePageUrl: "https://unsplash.com/"
  },
  {
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "A sunlit room with large windows and a calm interior",
    imageSourceUrl: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea",
    imagePageUrl: "https://unsplash.com/"
  },
  {
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "A styled home living space with decorative finishes",
    imageSourceUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0",
    imagePageUrl: "https://unsplash.com/"
  }
] as const;

const editorialPosts: ContentPost[] = [
  {
    type: "blog",
    slug: "how-to-apply-peel-and-stick-wall-decals",
    title: "How to apply peel-and-stick wall decals",
    excerpt: "A practical installation guide for smooth walls, cabinets, glass, and furniture surfaces.",
    ...editorialImages[0],
    relatedProductIds: products.slice(0, 3).map((product) => product.id),
    publishedAt: "2026-07-08",
    updatedAt: "2026-07-10",
    author: "Cowinlife Editorial Team",
    body: [
      "Clean the surface and let it dry fully. Dust, oil, moisture, and loose paint can reduce adhesion, so test a small area before installing the complete design.",
      "Preview the layout with low-tack tape. Peel a short section of backing paper, align one edge, and smooth the material gradually with a clean card so air can move toward the outside edge.",
      "Avoid textured walls and freshly painted surfaces. For large pieces, use two people to control alignment and prevent the adhesive sides from folding onto each other."
    ]
  },
  {
    type: "blog",
    slug: "window-film-vs-peel-and-stick-wallpaper",
    title: "Window film vs. peel-and-stick wallpaper",
    excerpt: "Choose the right removable surface product by room, base material, privacy need, and removal method.",
    ...editorialImages[1],
    relatedProductIds: products.filter((product) => product.collection.includes("Window")).slice(0, 3).map((product) => product.id),
    publishedAt: "2026-07-09",
    updatedAt: "2026-07-10",
    author: "Cowinlife Editorial Team",
    body: [
      "Static window film is designed for smooth glass. It uses static cling rather than a pressure-sensitive wall adhesive and is intended for privacy or decorative glass projects.",
      "Peel-and-stick wallpaper and furniture films are intended for smooth walls, cabinets, shelves, drawers, and furniture panels. Check the listed material, dimensions, and installation type on the product page before ordering.",
      "Whichever format you choose, measure the usable surface, allow for trimming, and test the material on a small clean area first."
    ]
  },
  {
    type: "news",
    slug: "cowinlife-catalog-and-custom-products-update",
    title: "Cowinlife catalog and custom product collections are now organized online",
    excerpt: `The site now separates ${products.length} catalog products from ${customProducts.length} made-to-order custom products.`,
    ...editorialImages[2],
    relatedProductIds: products.slice(0, 4).map((product) => product.id),
    publishedAt: "2026-07-10",
    updatedAt: "2026-07-10",
    author: "Cowinlife Editorial Team",
    body: [
      `The Cowinlife website now organizes ${products.length} catalog products across ${collections.length} project collections. Each public product page provides its available images, product description, installation notes, and recorded parameters.`,
      `A separate made-to-order area contains ${customProducts.length} custom products. These pages do not display stock pricing and direct visitors to request a quotation for quantity, material, size, pattern, packaging, sample, and production requirements.`,
      "Catalog and content pages use independent Cowinlife URLs, metadata, structured data, and internal links so customers and search engines can identify the relevant product or guide without marketplace page elements."
    ]
  }
];

function scheduledCollectionPosts(): ContentPost[] {
  return collections.flatMap((collection, index) => {
    const related = products.filter((product) => product.collection === collection.name);
    const publishDate = new Date(Date.UTC(2026, 6, 13 + index * 3));
    const date = publishDate.toISOString().slice(0, 10);
    const slug = collection.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    const image = editorialImages[index % editorialImages.length];
    return [
      {
        type: "blog" as const,
        slug: `how-to-choose-${slug}`,
        title: `How to choose ${collection.name.toLowerCase()} for your project`,
        excerpt: `${collection.description} Compare the surface, dimensions, installation method, and intended room before selecting a design.`,
        ...image,
        relatedProductIds: related.slice(0, 3).map((product) => product.id),
        publishedAt: date,
        updatedAt: date,
        author: "Cowinlife Editorial Team",
        body: [
          `Start with the project surface. ${collection.description} A smooth, clean, dry base gives you the most predictable installation result.`,
          `The Cowinlife catalog currently lists ${related.length} products in this collection. Compare the dimensions, material, number of pieces, installation type, and recommended use recorded on each product page.`,
          "Measure the usable area before ordering and keep a small allowance for positioning or trimming. For custom sizes, materials, or packaging, use the quotation form instead of assuming a stock option will fit."
        ]
      },
      {
        type: "news" as const,
        slug: `${slug}-catalog-navigation-update`,
        title: `${collection.name} catalog navigation update`,
        excerpt: `${related.length} products are grouped in one collection with direct links to images, specifications, and inquiry options.`,
        ...image,
        relatedProductIds: related.slice(0, 3).map((product) => product.id),
        publishedAt: date,
        updatedAt: date,
        author: "Cowinlife Editorial Team",
        body: [
          `Cowinlife has grouped ${related.length} ${collection.name.toLowerCase()} products into a dedicated collection page. Visitors can move from the collection to each product's images, recorded specifications, and installation notes.`,
          "The update also connects the collection with related buying guides and the product inquiry form. Product availability and delivery requirements should still be confirmed for the selected SKU."
        ]
      }
    ];
  });
}

export function getAllContentPosts() {
  return [...editorialPosts, ...scheduledCollectionPosts()].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getPublishedContentPosts(at = new Date()) {
  const today = at.toISOString().slice(0, 10);
  return getAllContentPosts().filter((post) => post.publishedAt <= today);
}

export function findContentPost(type: "blog" | "news", slug: string, at = new Date()) {
  return getPublishedContentPosts(at).find((post) => post.type === type && post.slug === slug);
}
