export type ProductParameter = {
  label: string;
  value: string;
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
};

export const collections = [
  {
    "name": "Furniture Refitting Stickers",
    "description": "Peel-and-stick PVC surface films for cabinets, shelves, drawers, tables, and furniture refresh projects.",
    "image": "/images/products/cw-product-0001.jpg"
  },
  {
    "name": "Nursery Wall Stickers",
    "description": "Removable wall stickers and decals for kids rooms, nurseries, playrooms, and soft room decoration.",
    "image": "/images/products/cw-product-0002.jpg"
  },
  {
    "name": "Window Static Films",
    "description": "Static glass films for privacy, UV filtering, suncatcher effects, and decorative window updates.",
    "image": "/images/products/cw-product-0003.jpg"
  }
];

export const products: Product[] = [
  {
    "id": "cw-0001-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-removable-pvc-decor-for-cabinet-15-75-98-43inch-1",
    "sku": "CW-0001",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 98.43inch*1pcs",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 46.16,
    "currency": "USD",
    "priceDisplay": "$46.16",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0001.jpg",
    "gallery": [
      "/images/products/cw-product-0001.jpg",
      "/images/products/cw-product-0004.jpg",
      "/images/products/cw-product-0005.jpg",
      "/images/products/cw-product-0006.jpg",
      "/images/products/cw-product-0007.jpg",
      "/images/products/cw-product-0008.jpg",
      "/images/products/cw-product-0009.jpg",
      "/images/products/cw-product-0010.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*250cm/15",
      "The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0001"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$46.16"
      },
      {
        "label": "Color",
        "value": "Rose Floral Butterfly—ash Blonde"
      },
      {
        "label": "Theme",
        "value": "Flower"
      },
      {
        "label": "Subject Character",
        "value": "Butterfly"
      },
      {
        "label": "Product Style",
        "value": "Garden"
      },
      {
        "label": "Item Dimensions",
        "value": "98.43 x 15.75 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Size",
        "value": "15.75*98.43inch*1 Wall Decal"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Door, Furniture, Gift Bag, Wall"
      },
      {
        "label": "Material Type",
        "value": "Polyvinyl Chloride"
      }
    ]
  },
  {
    "id": "cw-0002-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-sticker-toile-de-jouy-landscape-removable-pvc-wa",
    "sku": "CW-0002",
    "name": "Monochrome Wallpaper Wall Decal Chinoiserie Vintage Peel and Stick Wall Sticker Toile de Jouy Landscape Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 61.2,
    "currency": "USD",
    "priceDisplay": "$61.20",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0011.jpg",
    "gallery": [
      "/images/products/cw-product-0011.jpg",
      "/images/products/cw-product-0012.jpg",
      "/images/products/cw-product-0013.jpg",
      "/images/products/cw-product-0014.jpg",
      "/images/products/cw-product-0015.jpg",
      "/images/products/cw-product-0016.jpg",
      "/images/products/cw-product-0017.jpg",
      "/images/products/cw-product-0018.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed.Please carefully confirm the product size in the main drawing.This product is a DIY product.It should be put together by yourself.",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.The product is only suitable for smooth media,such as glass,metal,dust-free walls,furnitures and so on",
      "Removable Design：This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (&lt;2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle."
    ],
    "details": "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*150cm/15",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water",
      "The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0002"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$61.20"
      },
      {
        "label": "Color",
        "value": "Toile De Jouy—ash Blonde"
      },
      {
        "label": "Theme",
        "value": "Floral, Flower"
      },
      {
        "label": "Subject Character",
        "value": "Garden"
      },
      {
        "label": "Product Style",
        "value": "Garden"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Tree"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Seasons",
        "value": "spring, summer"
      },
      {
        "label": "Item Dimensions",
        "value": "59.1 x 15.53 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "1"
      }
    ]
  },
  {
    "id": "cw-0003-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-sticker-toile-de-jouy-landscape-removable-pvc-wa",
    "sku": "CW-0003",
    "name": "Monochrome Wallpaper Wall Decal Chinoiserie Vintage Peel and Stick Wall Sticker Toile de Jouy Landscape Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0019.jpg",
    "gallery": [
      "/images/products/cw-product-0019.jpg",
      "/images/products/cw-product-0020.jpg",
      "/images/products/cw-product-0021.jpg",
      "/images/products/cw-product-0022.jpg",
      "/images/products/cw-product-0023.jpg",
      "/images/products/cw-product-0024.jpg",
      "/images/products/cw-product-0025.jpg",
      "/images/products/cw-product-0026.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed.Please carefully confirm the product size in the main drawing.This product is a DIY product.It should be put together by yourself.",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.The product is only suitable for smooth media,such as glass,metal,dust-free walls,furnitures and so on",
      "Removable Design：This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (&lt;2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle."
    ],
    "details": "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*150cm/15",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water",
      "The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0003"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "Toile De Jouy—green"
      },
      {
        "label": "Theme",
        "value": "Floral, Flower"
      },
      {
        "label": "Subject Character",
        "value": "Garden"
      },
      {
        "label": "Product Style",
        "value": "Victorian"
      },
      {
        "label": "Item Form",
        "value": "Roll"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Animal Theme",
        "value": "Duck"
      },
      {
        "label": "Seasons",
        "value": "All seasons"
      },
      {
        "label": "Item Dimensions",
        "value": "59.1 x 15.53 x 0.1 inches"
      }
    ]
  },
  {
    "id": "cw-0004-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-sticker-toile-de-jouy-landscape-removable-pvc-wa",
    "sku": "CW-0004",
    "name": "Monochrome Wallpaper Wall Decal Chinoiserie Vintage Peel and Stick Wall Sticker Toile de Jouy Landscape Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0027.jpg",
    "gallery": [
      "/images/products/cw-product-0027.jpg",
      "/images/products/cw-product-0028.jpg",
      "/images/products/cw-product-0029.jpg",
      "/images/products/cw-product-0030.jpg",
      "/images/products/cw-product-0031.jpg",
      "/images/products/cw-product-0032.jpg",
      "/images/products/cw-product-0033.jpg",
      "/images/products/cw-product-0034.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed.Please carefully confirm the product size in the main drawing.This product is a DIY product.It should be put together by yourself.",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.The product is only suitable for smooth media,such as glass,metal,dust-free walls,furnitures and so on",
      "Removable Design：This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (&lt;2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle."
    ],
    "details": "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*150cm/15",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water",
      "The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0004"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "Toile De Jouy—cream Coloured"
      },
      {
        "label": "Theme",
        "value": "Floral, Flower"
      },
      {
        "label": "Subject Character",
        "value": "Garden"
      },
      {
        "label": "Product Style",
        "value": "Art Deco"
      },
      {
        "label": "Item Form",
        "value": "Roll"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "59.1 x 15.53 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "6.44 Square Feet"
      },
      {
        "label": "Number of Items",
        "value": "1"
      }
    ]
  },
  {
    "id": "cw-0005-butterfly-wallpaper-wall-decal-rose-floral-peel-and-stick-wall-sticker-removable-pvc-wall-decor-for-bedroom-living-room-",
    "sku": "CW-0005",
    "name": "Butterfly Wallpaper Wall Decal Rose Floral Peel and Stick Wall Sticker Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 74.75,
    "currency": "USD",
    "priceDisplay": "$74.75",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0035.jpg",
    "gallery": [
      "/images/products/cw-product-0035.jpg",
      "/images/products/cw-product-0036.jpg",
      "/images/products/cw-product-0037.jpg",
      "/images/products/cw-product-0038.jpg",
      "/images/products/cw-product-0039.jpg",
      "/images/products/cw-product-0040.jpg",
      "/images/products/cw-product-0041.jpg",
      "/images/products/cw-product-0042.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless vintage florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*160cm/15",
      "The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0005"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$74.75"
      },
      {
        "label": "Color",
        "value": "Rose Floral Butterfly—black"
      },
      {
        "label": "Theme",
        "value": "Floral, Flower"
      },
      {
        "label": "Subject Character",
        "value": "Rose Floral+Butterfly"
      },
      {
        "label": "Product Style",
        "value": "Italianate"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "63 x 15.53 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "1"
      }
    ]
  },
  {
    "id": "cw-0006-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-removable-pvc-decor-for-cabinet-15-75-62-99inch-1",
    "sku": "CW-0006",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 62.99inch*1pcs",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 46.16,
    "currency": "USD",
    "priceDisplay": "$46.16",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0005.jpg",
    "gallery": [
      "/images/products/cw-product-0005.jpg",
      "/images/products/cw-product-0009.jpg",
      "/images/products/cw-product-0007.jpg",
      "/images/products/cw-product-0001.jpg",
      "/images/products/cw-product-0043.jpg",
      "/images/products/cw-product-0006.jpg",
      "/images/products/cw-product-0010.jpg",
      "/images/products/cw-product-0044.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*160cm/15",
      "The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0006"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$46.16"
      },
      {
        "label": "Color",
        "value": "Rose Floral Butterfly—ash Blonde"
      },
      {
        "label": "Theme",
        "value": "Floral, Flower"
      },
      {
        "label": "Subject Character",
        "value": "Rose Floral+Butterfly"
      },
      {
        "label": "Product Style",
        "value": "French"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "63 x 15.53 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "6.76 Square Feet"
      },
      {
        "label": "Number of Items",
        "value": "1"
      }
    ]
  },
  {
    "id": "cw-0007-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-removable-pvc-decor-for-cabinet-15-75-98-43inch-1",
    "sku": "CW-0007",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 98.43inch*1pcs",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 46.16,
    "currency": "USD",
    "priceDisplay": "$46.16",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0001.jpg",
    "gallery": [
      "/images/products/cw-product-0001.jpg",
      "/images/products/cw-product-0004.jpg",
      "/images/products/cw-product-0005.jpg",
      "/images/products/cw-product-0006.jpg",
      "/images/products/cw-product-0007.jpg",
      "/images/products/cw-product-0008.jpg",
      "/images/products/cw-product-0009.jpg",
      "/images/products/cw-product-0010.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*250cm/15",
      "The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0007"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$46.16"
      },
      {
        "label": "Color",
        "value": "Rose Floral Butterfly—ash Blonde"
      },
      {
        "label": "Theme",
        "value": "Flower"
      },
      {
        "label": "Subject Character",
        "value": "Butterfly"
      },
      {
        "label": "Product Style",
        "value": "Garden"
      },
      {
        "label": "Item Dimensions",
        "value": "98.43 x 15.75 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Size",
        "value": "15.75*98.43inch*1 Wall Decal"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Door, Furniture, Gift Bag, Wall"
      },
      {
        "label": "Material Type",
        "value": "Polyvinyl Chloride"
      }
    ]
  },
  {
    "id": "cw-0008-butterfly-wallpaper-wall-decal-rose-floral-peel-and-stick-wall-sticker-removable-pvc-wall-decor-for-bedroom-living-room-",
    "sku": "CW-0008",
    "name": "Butterfly Wallpaper Wall Decal Rose Floral Peel and Stick Wall Sticker Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Furniture Refitting Stickers",
    "category": "Furniture refitting sticker",
    "room": "Furniture",
    "price": 46.16,
    "currency": "USD",
    "priceDisplay": "$46.16",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [],
    "image": "/images/products/cw-product-0045.jpg",
    "gallery": [
      "/images/products/cw-product-0045.jpg",
      "/images/products/cw-product-0046.jpg",
      "/images/products/cw-product-0047.jpg",
      "/images/products/cw-product-0048.jpg",
      "/images/products/cw-product-0049.jpg",
      "/images/products/cw-product-0050.jpg",
      "/images/products/cw-product-0051.jpg",
      "/images/products/cw-product-0052.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Furniture refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "feedbackHighlights": [
      "Safe shipping;package layout size: 40cm*160cm/15",
      "The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery",
      "Durable and Waterproof：Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0008"
      },
      {
        "label": "Product type",
        "value": "Furniture refitting sticker"
      },
      {
        "label": "Collection",
        "value": "Furniture Refitting Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$46.16"
      },
      {
        "label": "Color",
        "value": "Rose Floral Butterfly—cream Coloured"
      },
      {
        "label": "Theme",
        "value": "Floral, Flower"
      },
      {
        "label": "Subject Character",
        "value": "Rose Floral+Butterfly"
      },
      {
        "label": "Product Style",
        "value": "Garden"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Item Dimensions",
        "value": "63 x 15.53 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "6.88 Square Feet"
      }
    ]
  },
  {
    "id": "cw-0009-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0009",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0002.jpg",
    "gallery": [
      "/images/products/cw-product-0002.jpg",
      "/images/products/cw-product-0053.jpg",
      "/images/products/cw-product-0054.jpg",
      "/images/products/cw-product-0055.jpg",
      "/images/products/cw-product-0056.jpg",
      "/images/products/cw-product-0057.jpg",
      "/images/products/cw-product-0058.jpg",
      "/images/products/cw-product-0059.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0009"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "B"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject Character",
        "value": "Heart"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Solid"
      },
      {
        "label": "Shape",
        "value": "Heart"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "6"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      }
    ]
  },
  {
    "id": "cw-0010-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0010",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0002.jpg",
    "gallery": [
      "/images/products/cw-product-0002.jpg",
      "/images/products/cw-product-0054.jpg",
      "/images/products/cw-product-0060.jpg",
      "/images/products/cw-product-0061.jpg",
      "/images/products/cw-product-0055.jpg",
      "/images/products/cw-product-0062.jpg",
      "/images/products/cw-product-0058.jpg",
      "/images/products/cw-product-0059.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0010"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "B"
      },
      {
        "label": "Theme",
        "value": "heart"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches*12 sheets"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#6,466 in Baby ( See Top 100 in Baby ) #24 in Kids' & Baby Wall Stickers #92 in Wall Stickers & Murals"
      }
    ]
  },
  {
    "id": "cw-0011-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0011",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0002.jpg",
    "gallery": [
      "/images/products/cw-product-0002.jpg",
      "/images/products/cw-product-0053.jpg",
      "/images/products/cw-product-0054.jpg",
      "/images/products/cw-product-0055.jpg",
      "/images/products/cw-product-0056.jpg",
      "/images/products/cw-product-0057.jpg",
      "/images/products/cw-product-0058.jpg",
      "/images/products/cw-product-0059.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0011"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "B"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject Character",
        "value": "Heart"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Solid"
      },
      {
        "label": "Shape",
        "value": "Heart"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "6"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      }
    ]
  },
  {
    "id": "cw-0012-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0012",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 95.24,
    "currency": "USD",
    "priceDisplay": "$95.24",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0063.jpg",
    "gallery": [
      "/images/products/cw-product-0063.jpg",
      "/images/products/cw-product-0064.jpg",
      "/images/products/cw-product-0065.jpg",
      "/images/products/cw-product-0066.jpg",
      "/images/products/cw-product-0067.jpg",
      "/images/products/cw-product-0068.jpg",
      "/images/products/cw-product-0069.jpg",
      "/images/products/cw-product-0070.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0012"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$95.24"
      },
      {
        "label": "Color",
        "value": "C"
      },
      {
        "label": "Theme",
        "value": "Supernatural"
      },
      {
        "label": "Subject Character",
        "value": "Flower"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Flower"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      }
    ]
  },
  {
    "id": "cw-0013-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0013",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 122.47,
    "currency": "USD",
    "priceDisplay": "$122.47",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0063.jpg",
    "gallery": [
      "/images/products/cw-product-0063.jpg",
      "/images/products/cw-product-0071.jpg",
      "/images/products/cw-product-0070.jpg",
      "/images/products/cw-product-0069.jpg",
      "/images/products/cw-product-0072.jpg",
      "/images/products/cw-product-0073.jpg",
      "/images/products/cw-product-0065.jpg",
      "/images/products/cw-product-0064.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0013"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$122.47"
      },
      {
        "label": "Color",
        "value": "C"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches*12 sheets"
      }
    ]
  },
  {
    "id": "cw-0014-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0014",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 61.2,
    "currency": "USD",
    "priceDisplay": "$61.20",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0074.jpg",
    "gallery": [
      "/images/products/cw-product-0074.jpg",
      "/images/products/cw-product-0075.jpg",
      "/images/products/cw-product-0076.jpg",
      "/images/products/cw-product-0077.jpg",
      "/images/products/cw-product-0078.jpg",
      "/images/products/cw-product-0079.jpg",
      "/images/products/cw-product-0080.jpg",
      "/images/products/cw-product-0081.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0014"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$61.20"
      },
      {
        "label": "Color",
        "value": "E"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject Character",
        "value": "Boho Leaves & Flowers"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Leaf"
      },
      {
        "label": "Shape",
        "value": "Leaves"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      }
    ]
  },
  {
    "id": "cw-0015-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0015",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0082.jpg",
    "gallery": [
      "/images/products/cw-product-0082.jpg",
      "/images/products/cw-product-0076.jpg",
      "/images/products/cw-product-0083.jpg",
      "/images/products/cw-product-0081.jpg",
      "/images/products/cw-product-0077.jpg",
      "/images/products/cw-product-0074.jpg",
      "/images/products/cw-product-0080.jpg",
      "/images/products/cw-product-0075.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0015"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "E"
      },
      {
        "label": "Theme",
        "value": "Botanical"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "8.23&#34;L x 5.67&#34;W"
      }
    ]
  },
  {
    "id": "cw-0016-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0016",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0084.jpg",
    "gallery": [
      "/images/products/cw-product-0084.jpg",
      "/images/products/cw-product-0085.jpg",
      "/images/products/cw-product-0086.jpg",
      "/images/products/cw-product-0087.jpg",
      "/images/products/cw-product-0088.jpg",
      "/images/products/cw-product-0089.jpg",
      "/images/products/cw-product-0090.jpg",
      "/images/products/cw-product-0091.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0016"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "F"
      },
      {
        "label": "Theme",
        "value": "Jungle"
      },
      {
        "label": "Subject Character",
        "value": "Tree"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Tree"
      },
      {
        "label": "Shape",
        "value": "Tree"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.59 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "6"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      }
    ]
  },
  {
    "id": "cw-0017-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0017",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0092.jpg",
    "gallery": [
      "/images/products/cw-product-0092.jpg",
      "/images/products/cw-product-0093.jpg",
      "/images/products/cw-product-0094.jpg",
      "/images/products/cw-product-0095.jpg",
      "/images/products/cw-product-0096.jpg",
      "/images/products/cw-product-0097.jpg",
      "/images/products/cw-product-0098.jpg",
      "/images/products/cw-product-0099.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0017"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "I"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject Character",
        "value": "Moon"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Moon"
      },
      {
        "label": "Shape",
        "value": "Moon"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.59 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "6"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      }
    ]
  },
  {
    "id": "cw-0018-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0018",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0100.jpg",
    "gallery": [
      "/images/products/cw-product-0100.jpg",
      "/images/products/cw-product-0098.jpg",
      "/images/products/cw-product-0099.jpg",
      "/images/products/cw-product-0101.jpg",
      "/images/products/cw-product-0094.jpg",
      "/images/products/cw-product-0097.jpg",
      "/images/products/cw-product-0092.jpg",
      "/images/products/cw-product-0102.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0018"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "I"
      },
      {
        "label": "Theme",
        "value": "Botanical"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "8.23&#34;L x 5.67&#34;W"
      }
    ]
  },
  {
    "id": "cw-0019-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0019",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 46.84,
    "currency": "USD",
    "priceDisplay": "$46.84",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0103.jpg",
    "gallery": [
      "/images/products/cw-product-0103.jpg",
      "/images/products/cw-product-0104.jpg",
      "/images/products/cw-product-0105.jpg",
      "/images/products/cw-product-0106.jpg",
      "/images/products/cw-product-0107.jpg",
      "/images/products/cw-product-0108.jpg",
      "/images/products/cw-product-0109.jpg",
      "/images/products/cw-product-0110.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "alue Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "alue Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0019"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$46.84"
      },
      {
        "label": "Color",
        "value": "J"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject Character",
        "value": "Spiral"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Spiral"
      },
      {
        "label": "Shape",
        "value": "Spiral"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      }
    ]
  },
  {
    "id": "cw-0020-boho-wall-decals-girls-bedroom-wall-stickers-removable-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0020",
    "name": "Boho Wall Decals Girls Bedroom Wall Stickers Removable Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 78.9,
    "currency": "USD",
    "priceDisplay": "$78.90",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0111.jpg",
    "gallery": [
      "/images/products/cw-product-0111.jpg",
      "/images/products/cw-product-0112.jpg",
      "/images/products/cw-product-0113.jpg",
      "/images/products/cw-product-0114.jpg",
      "/images/products/cw-product-0115.jpg",
      "/images/products/cw-product-0116.jpg",
      "/images/products/cw-product-0117.jpg",
      "/images/products/cw-product-0118.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0020"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$78.90"
      },
      {
        "label": "Color",
        "value": "P"
      },
      {
        "label": "Theme",
        "value": "Rainbow"
      },
      {
        "label": "Subject Character",
        "value": "Nature"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Butterfly"
      },
      {
        "label": "Shape",
        "value": "Butterfly"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      }
    ]
  },
  {
    "id": "cw-0021-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0021",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0119.jpg",
    "gallery": [
      "/images/products/cw-product-0119.jpg",
      "/images/products/cw-product-0120.jpg",
      "/images/products/cw-product-0121.jpg",
      "/images/products/cw-product-0122.jpg",
      "/images/products/cw-product-0123.jpg",
      "/images/products/cw-product-0124.jpg",
      "/images/products/cw-product-0125.jpg",
      "/images/products/cw-product-0126.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0021"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "R"
      },
      {
        "label": "Theme",
        "value": "Rainbow"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Surface Recommendation",
        "value": "Glass, Metal, Plastic, Wall, Wood"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#6,466 in Baby ( See Top 100 in Baby ) #24 in Kids' & Baby Wall Stickers #92 in Wall Stickers & Murals"
      }
    ]
  },
  {
    "id": "cw-0022-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0022",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 61.2,
    "currency": "USD",
    "priceDisplay": "$61.20",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0119.jpg",
    "gallery": [
      "/images/products/cw-product-0119.jpg",
      "/images/products/cw-product-0121.jpg",
      "/images/products/cw-product-0120.jpg",
      "/images/products/cw-product-0124.jpg",
      "/images/products/cw-product-0125.jpg",
      "/images/products/cw-product-0127.jpg",
      "/images/products/cw-product-0122.jpg",
      "/images/products/cw-product-0128.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0022"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$61.20"
      },
      {
        "label": "Color",
        "value": "R"
      },
      {
        "label": "Theme",
        "value": "Botanical, Rainbow"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "8.23&#34;L x 5.67&#34;W"
      }
    ]
  },
  {
    "id": "cw-0023-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room-decor-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0023",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 115.66,
    "currency": "USD",
    "priceDisplay": "$115.66",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0129.jpg",
    "gallery": [
      "/images/products/cw-product-0129.jpg",
      "/images/products/cw-product-0130.jpg",
      "/images/products/cw-product-0131.jpg",
      "/images/products/cw-product-0132.jpg",
      "/images/products/cw-product-0133.jpg",
      "/images/products/cw-product-0134.jpg",
      "/images/products/cw-product-0135.jpg",
      "/images/products/cw-product-0136.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0023"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$115.66"
      },
      {
        "label": "Color",
        "value": "S"
      },
      {
        "label": "Theme",
        "value": "Botanical"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Surface Recommendation",
        "value": "Glass, Metal, Plastic, Window, Wood"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#6,466 in Baby ( See Top 100 in Baby ) #24 in Kids' & Baby Wall Stickers #92 in Wall Stickers & Murals"
      }
    ]
  },
  {
    "id": "cw-0024-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0024",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0129.jpg",
    "gallery": [
      "/images/products/cw-product-0129.jpg",
      "/images/products/cw-product-0131.jpg",
      "/images/products/cw-product-0130.jpg",
      "/images/products/cw-product-0134.jpg",
      "/images/products/cw-product-0135.jpg",
      "/images/products/cw-product-0137.jpg",
      "/images/products/cw-product-0136.jpg",
      "/images/products/cw-product-0132.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0024"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "S"
      },
      {
        "label": "Theme",
        "value": "Botanical"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "8.23&#34;L x 5.83&#34;W"
      }
    ]
  },
  {
    "id": "cw-0025-boho-wall-stickers-kids-room-decor-girls-nursery-removable-wall-decals-bedroom-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0025",
    "name": "Boho Wall Stickers Kids Room Decor Girls Nursery Removable Wall Decals Bedroom Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0138.jpg",
    "gallery": [
      "/images/products/cw-product-0138.jpg",
      "/images/products/cw-product-0139.jpg",
      "/images/products/cw-product-0140.jpg",
      "/images/products/cw-product-0141.jpg",
      "/images/products/cw-product-0142.jpg",
      "/images/products/cw-product-0143.jpg",
      "/images/products/cw-product-0144.jpg",
      "/images/products/cw-product-0145.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0025"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "Tt"
      },
      {
        "label": "Theme",
        "value": "Rainbow"
      },
      {
        "label": "Product Style",
        "value": "Art Deco"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Seasons",
        "value": "Spring"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches"
      },
      {
        "label": "Reusability",
        "value": "Reusable"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#6,466 in Baby ( See Top 100 in Baby ) #24 in Kids' & Baby Wall Stickers #92 in Wall Stickers & Murals"
      }
    ]
  },
  {
    "id": "cw-0026-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0026",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 61.2,
    "currency": "USD",
    "priceDisplay": "$61.20",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0138.jpg",
    "gallery": [
      "/images/products/cw-product-0138.jpg",
      "/images/products/cw-product-0139.jpg",
      "/images/products/cw-product-0140.jpg",
      "/images/products/cw-product-0146.jpg",
      "/images/products/cw-product-0144.jpg",
      "/images/products/cw-product-0145.jpg",
      "/images/products/cw-product-0147.jpg",
      "/images/products/cw-product-0141.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0026"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$61.20"
      },
      {
        "label": "Color",
        "value": "Tt"
      },
      {
        "label": "Theme",
        "value": "Rainbow"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "8.23&#34;L x 5.83&#34;W"
      }
    ]
  },
  {
    "id": "cw-0027-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-6-sheet",
    "sku": "CW-0027",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 93.74,
    "currency": "USD",
    "priceDisplay": "$93.74",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0148.jpg",
    "gallery": [
      "/images/products/cw-product-0148.jpg",
      "/images/products/cw-product-0149.jpg",
      "/images/products/cw-product-0150.jpg",
      "/images/products/cw-product-0151.jpg",
      "/images/products/cw-product-0152.jpg",
      "/images/products/cw-product-0153.jpg",
      "/images/products/cw-product-0154.jpg",
      "/images/products/cw-product-0155.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "6 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0027"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$93.74"
      },
      {
        "label": "Color",
        "value": "U"
      },
      {
        "label": "Theme",
        "value": "Botanical"
      },
      {
        "label": "Subject Character",
        "value": "Boho Patterns - Multicolored"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#6,466 in Baby ( See Top 100 in Baby ) #24 in Kids' & Baby Wall Stickers #92 in Wall Stickers & Murals"
      }
    ]
  },
  {
    "id": "cw-0028-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-decals-vinyl-murals-diy-cute-decorations-12-shee",
    "sku": "CW-0028",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0148.jpg",
    "gallery": [
      "/images/products/cw-product-0148.jpg",
      "/images/products/cw-product-0149.jpg",
      "/images/products/cw-product-0150.jpg",
      "/images/products/cw-product-0156.jpg",
      "/images/products/cw-product-0154.jpg",
      "/images/products/cw-product-0157.jpg",
      "/images/products/cw-product-0155.jpg",
      "/images/products/cw-product-0151.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "feedbackHighlights": [
      "12 Sheets Boho wall stickers, each measures 14",
      "Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0028"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "U"
      },
      {
        "label": "Theme",
        "value": "Botanical"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "12"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "8.23&#34;L x 5.83&#34;W"
      }
    ]
  },
  {
    "id": "cw-0029-rainbow-polka-dot-wall-stickers-peel-and-stick-decals-6-sheets-peel-stick-no-residue-watercolor-nursery-kids-room-bedroo",
    "sku": "CW-0029",
    "name": "Rainbow Polka Dot Wall Stickers Peel and Stick Decals 6 Sheets | Peel & stick, no residue, watercolor, nursery kids room bedroom playroom classroom decor, DIY craft, safe non-toxic material",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0158.jpg",
    "gallery": [
      "/images/products/cw-product-0158.jpg",
      "/images/products/cw-product-0159.jpg",
      "/images/products/cw-product-0160.jpg",
      "/images/products/cw-product-0161.jpg",
      "/images/products/cw-product-0162.jpg",
      "/images/products/cw-product-0163.jpg",
      "/images/products/cw-product-0164.jpg",
      "/images/products/cw-product-0165.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Safe & Child-Friendly：Crafted from non-toxic, odorless materials, these wall decals are perfectly safe for children's rooms and nurseries. No tools or glue required—simply peel and stick to instantly transform any space.",
      "Damage-Free Removal：Advanced removable adhesive technology allows you to peel off the stickers without leaving any sticky residue or damaging your paint. Perfect for renters or anyone who loves to change their room décor frequently.",
      "Creative DIY Decor：Each pack includes 6 pcs with 29 assorted rainbow-colored polka dots in varying sizes. Mix and match to create endless unique patterns, or let your kids design their own magical world to stimulate creativity.",
      "Versatile Application：Works great on any smooth, clean, and flat surface—walls, doors, windows, mirrors, tiles, furniture, and even laptop lids. These decals adhere firmly and stay in place.",
      "Vibrant & Cheerful：Featuring bright rainbow hues, these stickers add a pop of color to any environment. An ideal gift or room makeover solution for kids, teenagers, and anyone looking to bring a playful, positive vibe to their space."
    ],
    "details": "Safe & Child-Friendly：Crafted from non-toxic, odorless materials, these wall decals are perfectly safe for children's rooms and nurseries. No tools or glue required—simply peel and stick to instantly transform any space.",
    "feedbackHighlights": [
      "Safe & Child-Friendly：Crafted from non-toxic, odorless materials, these wall decals are perfectly safe for children's rooms and nurseries",
      "Damage-Free Removal：Advanced removable adhesive technology allows you to peel off the stickers without leaving any sticky residue or damaging your paint",
      "Creative DIY Decor：Each pack includes 6 pcs with 29 assorted rainbow-colored polka dots in varying sizes"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0029"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "K"
      },
      {
        "label": "Theme",
        "value": "Party"
      },
      {
        "label": "Subject Character",
        "value": "polka dot"
      },
      {
        "label": "Seasons",
        "value": "Summer"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.02 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "6"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches"
      },
      {
        "label": "Additional Features",
        "value": "Peel and Stick, Removable, Reusable, Waterproof"
      },
      {
        "label": "Reusability",
        "value": "Reusable"
      }
    ]
  },
  {
    "id": "cw-0030-rainbow-polka-dot-wall-stickers-peel-and-stick-decals-12-sheets-peel-stick-no-residue-watercolor-nursery-kids-room-bedro",
    "sku": "CW-0030",
    "name": "Rainbow Polka Dot Wall Stickers Peel and Stick Decals 12 Sheets | Peel & stick, no residue, watercolor, nursery kids room bedroom playroom classroom decor, DIY craft, safe non-toxic material",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0159.jpg",
    "gallery": [
      "/images/products/cw-product-0159.jpg",
      "/images/products/cw-product-0158.jpg",
      "/images/products/cw-product-0160.jpg",
      "/images/products/cw-product-0163.jpg",
      "/images/products/cw-product-0166.jpg",
      "/images/products/cw-product-0161.jpg",
      "/images/products/cw-product-0162.jpg",
      "/images/products/cw-product-0167.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Safe & Child-Friendly：Crafted from non-toxic, odorless materials, these wall decals are perfectly safe for children's rooms and nurseries. No tools or glue required—simply peel and stick to instantly transform any space.",
      "Damage-Free Removal：Advanced removable adhesive technology allows you to peel off the stickers without leaving any sticky residue or damaging your paint. Perfect for renters or anyone who loves to change their room décor frequently.",
      "Creative DIY Decor：Each pack includes 12 pcs with 58 assorted rainbow-colored polka dots in varying sizes. Mix and match to create endless unique patterns, or let your kids design their own magical world to stimulate creativity.",
      "Versatile Application：Works great on any smooth, clean, and flat surface—walls, doors, windows, mirrors, tiles, furniture, and even laptop lids. These decals adhere firmly and stay in place.",
      "Vibrant & Cheerful：Featuring bright rainbow hues, these stickers add a pop of color to any environment. An ideal gift or room makeover solution for kids, teenagers, and anyone looking to bring a playful, positive vibe to their space."
    ],
    "details": "Safe & Child-Friendly：Crafted from non-toxic, odorless materials, these wall decals are perfectly safe for children's rooms and nurseries. No tools or glue required—simply peel and stick to instantly transform any space.",
    "feedbackHighlights": [
      "Safe & Child-Friendly：Crafted from non-toxic, odorless materials, these wall decals are perfectly safe for children's rooms and nurseries",
      "Damage-Free Removal：Advanced removable adhesive technology allows you to peel off the stickers without leaving any sticky residue or damaging your paint",
      "Creative DIY Decor：Each pack includes 12 pcs with 58 assorted rainbow-colored polka dots in varying sizes"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0030"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "K"
      },
      {
        "label": "Theme",
        "value": "Party"
      },
      {
        "label": "Subject Character",
        "value": "polka dot"
      },
      {
        "label": "Seasons",
        "value": "Summer"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.02 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches*12 sheets"
      },
      {
        "label": "Additional Features",
        "value": "Peel and Stick, Removable, Reusable, Waterproof"
      },
      {
        "label": "Reusability",
        "value": "Reusable"
      }
    ]
  },
  {
    "id": "cw-0031-nursery-floral-wall-stickers-decals-peel-and-stick-decor-6-sheets-peel-stick-no-residue-watercolor-nursery-kids-room-bed",
    "sku": "CW-0031",
    "name": "Nursery Floral Wall Stickers Decals Peel and Stick Decor 6 Sheets | Peel & stick, no residue, watercolor, nursery kids room bedroom playroom classroom decor, DIY craft, safe non-toxic material",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0168.jpg",
    "gallery": [
      "/images/products/cw-product-0168.jpg",
      "/images/products/cw-product-0169.jpg",
      "/images/products/cw-product-0170.jpg",
      "/images/products/cw-product-0171.jpg",
      "/images/products/cw-product-0172.jpg",
      "/images/products/cw-product-0173.jpg",
      "/images/products/cw-product-0174.jpg",
      "/images/products/cw-product-0175.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "This set includes 6 sheets with a total of 42 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes, allowing you to mix and match to create your own custom flower arrangement on any wall.",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind. Perfect for renters, dorm rooms, or anyone who loves to refresh their decor frequently without commitment.",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last. They can withstand light moisture and are easy to clean—simply wipe with a damp cloth to remove dust or smudges, keeping your wall art looking fresh and vibrant for years.",
      "Versatile Application：These decals adhere smoothly to any clean, flat, and smooth surface, including painted walls, glass windows, mirrors, tiles, furniture, and doors. Ideal for bedrooms, living rooms, nurseries, kids' rooms, offices, or even rental apartments—wherever you need a touch of nature.",
      "Easy DIY Decoration：No tools or special skills required—just peel, stick, and arrange! Create a charming bohemian, vintage, or modern farmhouse look in minutes. Each decal can be repositioned during application, so you can experiment with different layouts until you find the perfect design for your space."
    ],
    "details": "This set includes 6 sheets with a total of 42 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes, allowing you to mix and match to create your own custom flower arrangement on any wall.",
    "feedbackHighlights": [
      "This set includes 6 sheets with a total of 42 individual floral decals",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0031"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "L"
      },
      {
        "label": "Theme",
        "value": "Floral"
      },
      {
        "label": "Subject Character",
        "value": "floral"
      },
      {
        "label": "Seasons",
        "value": "Summer"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.02 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "6"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches"
      },
      {
        "label": "Additional Features",
        "value": "Peel and Stick, Removable, Reusable, Waterproof"
      },
      {
        "label": "Reusability",
        "value": "Reusable"
      }
    ]
  },
  {
    "id": "cw-0032-nursery-floral-wall-stickers-decals-peel-and-stick-decor-12-sheets-peel-stick-no-residue-watercolor-nursery-kids-room-be",
    "sku": "CW-0032",
    "name": "Nursery Floral Wall Stickers Decals Peel and Stick Decor 12 Sheets | Peel & stick, no residue, watercolor, nursery kids room bedroom playroom classroom decor, DIY craft, safe non-toxic material",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0168.jpg",
    "gallery": [
      "/images/products/cw-product-0168.jpg",
      "/images/products/cw-product-0169.jpg",
      "/images/products/cw-product-0170.jpg",
      "/images/products/cw-product-0171.jpg",
      "/images/products/cw-product-0172.jpg",
      "/images/products/cw-product-0173.jpg",
      "/images/products/cw-product-0174.jpg",
      "/images/products/cw-product-0175.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "This set includes 12 sheets with a total of 84 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes, allowing you to mix and match to create your own custom flower arrangement on any wall.",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind. Perfect for renters, dorm rooms, or anyone who loves to refresh their decor frequently without commitment.",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last. They can withstand light moisture and are easy to clean—simply wipe with a damp cloth to remove dust or smudges, keeping your wall art looking fresh and vibrant for years.",
      "Versatile Application：These decals adhere smoothly to any clean, flat, and smooth surface, including painted walls, glass windows, mirrors, tiles, furniture, and doors. Ideal for bedrooms, living rooms, nurseries, kids' rooms, offices, or even rental apartments—wherever you need a touch of nature.",
      "Easy DIY Decoration：No tools or special skills required—just peel, stick, and arrange! Create a charming bohemian, vintage, or modern farmhouse look in minutes. Each decal can be repositioned during application, so you can experiment with different layouts until you find the perfect design for your space."
    ],
    "details": "This set includes 12 sheets with a total of 84 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes, allowing you to mix and match to create your own custom flower arrangement on any wall.",
    "feedbackHighlights": [
      "This set includes 12 sheets with a total of 84 individual floral decals",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0032"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "L"
      },
      {
        "label": "Theme",
        "value": "Floral"
      },
      {
        "label": "Subject Character",
        "value": "floral"
      },
      {
        "label": "Seasons",
        "value": "Summer"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.02 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches*12 sheets"
      },
      {
        "label": "Additional Features",
        "value": "Peel and Stick, Removable, Reusable, Waterproof"
      },
      {
        "label": "Reusability",
        "value": "Reusable"
      }
    ]
  },
  {
    "id": "cw-0033-nursery-floral-wall-stickers-decals-peel-and-stick-decor-6-sheets-peel-stick-no-residue-watercolor-nursery-kids-room-bed",
    "sku": "CW-0033",
    "name": "Nursery Floral Wall Stickers Decals Peel and Stick Decor 6 Sheets | Peel & stick, no residue, watercolor, nursery kids room bedroom playroom classroom decor, DIY craft, safe non-toxic material",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0176.jpg",
    "gallery": [
      "/images/products/cw-product-0176.jpg",
      "/images/products/cw-product-0177.jpg",
      "/images/products/cw-product-0178.jpg",
      "/images/products/cw-product-0179.jpg",
      "/images/products/cw-product-0180.jpg",
      "/images/products/cw-product-0181.jpg",
      "/images/products/cw-product-0182.jpg",
      "/images/products/cw-product-0183.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "This set includes 6 sheets with a total of 34 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes (ranging from 1.73&#34; to 5.83&#34;), allowing you to mix and match to create your own custom flower arrangement on any wall.",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind. Perfect for renters, dorm rooms, or anyone who loves to refresh their decor frequently without commitment.",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last. They can withstand light moisture and are easy to clean—simply wipe with a damp cloth to remove dust or smudges, keeping your wall art looking fresh and vibrant for years.",
      "Versatile Application：These decals adhere smoothly to any clean, flat, and smooth surface, including painted walls, glass windows, mirrors, tiles, furniture, and doors. Ideal for bedrooms, living rooms, nurseries, kids' rooms, offices, or even rental apartments—wherever you need a touch of nature.",
      "Easy DIY Decoration：No tools or special skills required—just peel, stick, and arrange! Create a charming bohemian, vintage, or modern farmhouse look in minutes. Each decal can be repositioned during application, so you can experiment with different layouts until you find the perfect design for your space."
    ],
    "details": "This set includes 6 sheets with a total of 34 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes (ranging from 1.73&#34; to 5.83&#34;), allowing you to mix and match to create your own custom flower arrangement on any wall.",
    "feedbackHighlights": [
      "This set includes 6 sheets with a total of 34 individual floral decals",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0033"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "M"
      },
      {
        "label": "Theme",
        "value": "Floral"
      },
      {
        "label": "Subject Character",
        "value": "floral"
      },
      {
        "label": "Seasons",
        "value": "Summer"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.02 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "6"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches"
      },
      {
        "label": "Additional Features",
        "value": "Peel and Stick, Removable, Reusable, Waterproof"
      },
      {
        "label": "Reusability",
        "value": "Reusable"
      }
    ]
  },
  {
    "id": "cw-0034-nursery-floral-wall-stickers-decals-peel-and-stick-decor-12-sheets-peel-stick-no-residue-watercolor-nursery-kids-room-be",
    "sku": "CW-0034",
    "name": "Nursery Floral Wall Stickers Decals Peel and Stick Decor 12 Sheets | Peel & stick, no residue, watercolor, nursery kids room bedroom playroom classroom decor, DIY craft, safe non-toxic material",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 88.43,
    "currency": "USD",
    "priceDisplay": "$88.43",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-product-0176.jpg",
    "gallery": [
      "/images/products/cw-product-0176.jpg",
      "/images/products/cw-product-0177.jpg",
      "/images/products/cw-product-0178.jpg",
      "/images/products/cw-product-0179.jpg",
      "/images/products/cw-product-0184.jpg",
      "/images/products/cw-product-0180.jpg",
      "/images/products/cw-product-0181.jpg",
      "/images/products/cw-product-0183.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "This set includes 12 sheets with a total of 68 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes (ranging from 1.73&#34; to 5.83&#34;), allowing you to mix and match to create your own custom flower arrangement on any wall.",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind. Perfect for renters, dorm rooms, or anyone who loves to refresh their decor frequently without commitment.",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last. They can withstand light moisture and are easy to clean—simply wipe with a damp cloth to remove dust or smudges, keeping your wall art looking fresh and vibrant for years.",
      "Versatile Application：These decals adhere smoothly to any clean, flat, and smooth surface, including painted walls, glass windows, mirrors, tiles, furniture, and doors. Ideal for bedrooms, living rooms, nurseries, kids' rooms, offices, or even rental apartments—wherever you need a touch of nature.",
      "Easy DIY Decoration：No tools or special skills required—just peel, stick, and arrange! Create a charming bohemian, vintage, or modern farmhouse look in minutes. Each decal can be repositioned during application, so you can experiment with different layouts until you find the perfect design for your space."
    ],
    "details": "This set includes 12 sheets with a total of 68 individual floral decals. Each decal is precision-cut in assorted floral motifs and sizes (ranging from 1.73&#34; to 5.83&#34;), allowing you to mix and match to create your own custom flower arrangement on any wall.",
    "feedbackHighlights": [
      "This set includes 12 sheets with a total of 68 individual floral decals",
      "Removable & Residue-Free：Made from high-quality vinyl, these wall stickers are peel-and-stick and easy to remove without damaging your paint or leaving any sticky residue behind",
      "Waterproof & Durable：Crafted from waterproof and fade-resistant vinyl, these decals are built to last"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0034"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$88.43"
      },
      {
        "label": "Color",
        "value": "M"
      },
      {
        "label": "Theme",
        "value": "Floral"
      },
      {
        "label": "Subject Character",
        "value": "floral"
      },
      {
        "label": "Seasons",
        "value": "Summer"
      },
      {
        "label": "Item Dimensions",
        "value": "8.23 x 5.67 x 0.02 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "12"
      },
      {
        "label": "Size",
        "value": "8.28*5.83 inches*12 sheets"
      },
      {
        "label": "Additional Features",
        "value": "Peel and Stick, Removable, Reusable, Waterproof"
      },
      {
        "label": "Reusability",
        "value": "Reusable"
      }
    ]
  },
  {
    "id": "cw-0035-dinosaur-wall-decals-animal-boys-bedroom-stickers-removable-decor-nursery-kids-room-modern-stylish-murals-diy-cute-decor",
    "sku": "CW-0035",
    "name": "Dinosaur Wall Decals Animal Boys Bedroom Stickers Removable Decor Nursery Kids Room Modern Stylish Murals DIY Cute Decorations 5 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 125,
    "colors": [],
    "image": "/images/products/cw-product-0185.jpg",
    "gallery": [
      "/images/products/cw-product-0185.jpg",
      "/images/products/cw-product-0186.jpg",
      "/images/products/cw-product-0187.jpg",
      "/images/products/cw-product-0188.jpg",
      "/images/products/cw-product-0189.jpg",
      "/images/products/cw-product-0190.jpg",
      "/images/products/cw-product-0191.jpg",
      "/images/products/cw-product-0192.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
      "Diverse Styles: Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
    "feedbackHighlights": [
      "5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7",
      "Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0035"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Theme",
        "value": "Animal, Beverage"
      },
      {
        "label": "Subject Character",
        "value": "Dinosaur"
      },
      {
        "label": "Product Style",
        "value": "Dinosaur"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Geometric"
      },
      {
        "label": "Shape",
        "value": "Dinosaur"
      },
      {
        "label": "Animal Theme",
        "value": "Dinosaur"
      },
      {
        "label": "Item Dimensions",
        "value": "11.81 x 7.87 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "5"
      }
    ]
  },
  {
    "id": "cw-0036-dinosaur-wall-decals-animal-boys-bedroom-stickers-removable-decor-nursery-kids-room-modern-stylish-murals-diy-cute-decor",
    "sku": "CW-0036",
    "name": "Dinosaur Wall Decals Animal Boys Bedroom Stickers Removable Decor Nursery Kids Room Modern Stylish Murals DIY Cute Decorations 5 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 53.71,
    "currency": "USD",
    "priceDisplay": "$53.71",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 125,
    "colors": [],
    "image": "/images/products/cw-product-0193.jpg",
    "gallery": [
      "/images/products/cw-product-0193.jpg",
      "/images/products/cw-product-0194.jpg",
      "/images/products/cw-product-0195.jpg",
      "/images/products/cw-product-0196.jpg",
      "/images/products/cw-product-0197.jpg",
      "/images/products/cw-product-0198.jpg",
      "/images/products/cw-product-0199.jpg",
      "/images/products/cw-product-0200.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
      "Diverse Styles: Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
    "feedbackHighlights": [
      "5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7",
      "Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0036"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$53.71"
      },
      {
        "label": "Color",
        "value": "B"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Dinosaur"
      },
      {
        "label": "Product Style",
        "value": "Dinosaur"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Geometric"
      },
      {
        "label": "Shape",
        "value": "Dinosaur"
      },
      {
        "label": "Animal Theme",
        "value": "Dinosaur"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0037-dinosaur-wall-stickers-animal-boys-bedroom-decals-nursery-removable-decor-kids-room-modern-stylish-murals-diy-cute-decor",
    "sku": "CW-0037",
    "name": "Dinosaur Wall Stickers Animal Boys Bedroom Decals Nursery Removable Decor Kids Room Modern Stylish Murals DIY Cute Decorations 10 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 136.08,
    "currency": "USD",
    "priceDisplay": "$136.08",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 125,
    "colors": [],
    "image": "/images/products/cw-product-0185.jpg",
    "gallery": [
      "/images/products/cw-product-0185.jpg",
      "/images/products/cw-product-0201.jpg",
      "/images/products/cw-product-0202.jpg",
      "/images/products/cw-product-0191.jpg",
      "/images/products/cw-product-0203.jpg",
      "/images/products/cw-product-0190.jpg",
      "/images/products/cw-product-0192.jpg",
      "/images/products/cw-product-0186.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 10 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
      "Diverse Styles: Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 10 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
    "feedbackHighlights": [
      "10 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7",
      "Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0037"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$136.08"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Theme",
        "value": "Dinosaur"
      },
      {
        "label": "Pattern",
        "value": "Geometric"
      },
      {
        "label": "Item Dimensions",
        "value": "11.81 x 7.87 x 0.2 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "7.87*11.81inch*10sheets"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#37,257 in Baby ( See Top 100 in Baby ) #1,340 in Kids' & Baby Wall Stickers #1,786 in Wall Stickers & Murals"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0038-dinosaur-wall-stickers-animal-boys-bedroom-decals-nursery-removable-decor-kids-room-modern-stylish-murals-diy-cute-decor",
    "sku": "CW-0038",
    "name": "Dinosaur Wall Stickers Animal Boys Bedroom Decals Nursery Removable Decor Kids Room Modern Stylish Murals DIY Cute Decorations 10 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 53.71,
    "currency": "USD",
    "priceDisplay": "$53.71",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 125,
    "colors": [],
    "image": "/images/products/cw-product-0193.jpg",
    "gallery": [
      "/images/products/cw-product-0193.jpg",
      "/images/products/cw-product-0199.jpg",
      "/images/products/cw-product-0198.jpg",
      "/images/products/cw-product-0195.jpg",
      "/images/products/cw-product-0197.jpg",
      "/images/products/cw-product-0196.jpg",
      "/images/products/cw-product-0200.jpg",
      "/images/products/cw-product-0194.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 10 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
      "Diverse Styles: Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 10 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
    "feedbackHighlights": [
      "10 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7",
      "Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0038"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$53.71"
      },
      {
        "label": "Color",
        "value": "B"
      },
      {
        "label": "Theme",
        "value": "Dinosaur"
      },
      {
        "label": "Subject Character",
        "value": "Dinosaur"
      },
      {
        "label": "Product Style",
        "value": "Modern"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Geometric"
      },
      {
        "label": "Item Dimensions",
        "value": "11.81 x 7.87 x 0.2 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "10"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "10"
      }
    ]
  },
  {
    "id": "cw-0039-large-dinosaur-wall-stickers-nursery-watercolor-decals-toddler-removable-murals-kids-room-diy-cute-decorations",
    "sku": "CW-0039",
    "name": "Large Dinosaur Wall Stickers Nursery Watercolor Decals Toddler Removable Murals Kids Room DIY Cute Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 44.18,
    "currency": "USD",
    "priceDisplay": "$44.18",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 125,
    "colors": [],
    "image": "/images/products/cw-product-0204.jpg",
    "gallery": [
      "/images/products/cw-product-0204.jpg",
      "/images/products/cw-product-0205.jpg",
      "/images/products/cw-product-0206.jpg",
      "/images/products/cw-product-0207.jpg",
      "/images/products/cw-product-0208.jpg",
      "/images/products/cw-product-0209.jpg",
      "/images/products/cw-product-0193.jpg",
      "/images/products/cw-product-0185.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Safe Material: Made from eco-friendly PVC, odorless and non-toxic. The surface is coated with a waterproof film, making it durable, anti-scratch, and easy to wipe clean. No harmful chemicals, safe for children’s bedrooms.",
      "Removable & Leave No Residue: Special low-tack adhesive backing allows you to peel and stick without damaging paint or walls. Leaves no sticky residue behind when removed or repositioned, perfect for rented apartments or temporary decor.",
      "Dynamic &#34;Crouching to Leaping&#34; Design: Unlike flat decals, this set features a gradient size variation (from 25.59 inches to 11.42 inches). It creates a powerful visual effect of the dinosaur gathering strength and preparing to leap, adding a 3D sense of motion to your wall.",
      "Jumbo Coverage & Full Set: Covers a large area of 200cm x 250cm (78.7&#34;x98.4&#34;). Includes complete body parts (head, tail, spikes, etc.) arranged in 3 rows. Pre-cut pieces save you hours of cutting work and make a huge visual impact.",
      "Versatile Wall Art Decor: Suitable for smooth, flat surfaces such as walls, glass, doors, or furniture. Ideal for a dinosaur-themed birthday party, nursery school, playroom, or as a gift for little dinosaur lovers."
    ],
    "details": "Safe Material: Made from eco-friendly PVC, odorless and non-toxic. The surface is coated with a waterproof film, making it durable, anti-scratch, and easy to wipe clean. No harmful chemicals, safe for children’s bedrooms.",
    "feedbackHighlights": [
      "Made from eco-friendly PVC, odorless and non-toxic",
      "Special low-tack adhesive backing allows you to peel and stick without damaging paint or walls",
      "Unlike flat decals, this set features a gradient size variation (from 25"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0039"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$44.18"
      },
      {
        "label": "Color",
        "value": "C"
      },
      {
        "label": "Theme",
        "value": "Dinosaur"
      },
      {
        "label": "Subject Character",
        "value": "Dinosaur"
      },
      {
        "label": "Product Style",
        "value": "Art Deco"
      },
      {
        "label": "Item Dimensions",
        "value": "98.43 x 78.74 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "98.43&#34;L x 78.74&#34;W"
      },
      {
        "label": "Size",
        "value": "78.74*98.43inch"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#37,257 in Baby ( See Top 100 in Baby ) #1,340 in Kids' & Baby Wall Stickers #1,786 in Wall Stickers & Murals"
      }
    ]
  },
  {
    "id": "cw-0040-ocean-wall-decals-marine-animal-boys-bedroom-large-stickers-removable-whale-decor-nursery-kids-room-murals-diy-cute-deco",
    "sku": "CW-0040",
    "name": "Ocean Wall Decals Marine Animal Boys Bedroom Large Stickers Removable Whale Decor Nursery Kids Room Murals DIY Cute Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 95.24,
    "currency": "USD",
    "priceDisplay": "$95.24",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 56,
    "colors": [],
    "image": "/images/products/cw-product-0210.jpg",
    "gallery": [
      "/images/products/cw-product-0210.jpg",
      "/images/products/cw-product-0211.jpg",
      "/images/products/cw-product-0212.jpg",
      "/images/products/cw-product-0213.jpg",
      "/images/products/cw-product-0214.jpg",
      "/images/products/cw-product-0215.jpg",
      "/images/products/cw-product-0216.jpg",
      "/images/products/cw-product-0217.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package:7 Sheets.Finish size on wall:250*200 cm/98.43*78.74 inch.Since this wall sticker is composed of multiple animal stickers, the size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: Large size Marine animal stickers, whales, sharks, shells, octopus, starfish, coral and other components, colorful, beautiful and realistic, very suitable for children's bedroom or nursery, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Simple Operation: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package:7 Sheets.Finish size on wall:250*200 cm/98.43*78.74 inch.Since this wall sticker is composed of multiple animal stickers, the size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "feedbackHighlights": [
      "7 Sheets",
      "Large size Marine animal stickers, whales, sharks, shells, octopus, starfish, coral and other components, colorful, beautiful and realistic, very suitable for children's bedroom or nursery, can also be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0040"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$95.24"
      },
      {
        "label": "Color",
        "value": "C"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Product Style",
        "value": "Art Deco"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Cartoon"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Animal Theme",
        "value": "whales, sharks, octopus, starfish, coral"
      },
      {
        "label": "Surface Recommendation",
        "value": "Ceramic"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0041-ocean-wall-decals-marine-animal-boys-bedroom-large-stickers-removable-whale-decor-nursery-kids-room-murals-diy-cute-deco",
    "sku": "CW-0041",
    "name": "Ocean Wall Decals Marine Animal Boys Bedroom Large Stickers Removable Whale Decor Nursery Kids Room Murals DIY Cute Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 95.24,
    "currency": "USD",
    "priceDisplay": "$95.24",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 56,
    "colors": [],
    "image": "/images/products/cw-product-0216.jpg",
    "gallery": [
      "/images/products/cw-product-0216.jpg",
      "/images/products/cw-product-0218.jpg",
      "/images/products/cw-product-0219.jpg",
      "/images/products/cw-product-0220.jpg",
      "/images/products/cw-product-0214.jpg",
      "/images/products/cw-product-0215.jpg",
      "/images/products/cw-product-0210.jpg",
      "/images/products/cw-product-0217.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package:6 Sheets.Finish size on wall:250*200 cm/78.74*78.74 inch.Since this wall sticker is composed of multiple animal stickers, the size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: Large size Marine animal stickers, whales, sharks, shells, octopus, starfish, coral and other components, colorful, beautiful and realistic, very suitable for children's bedroom or nursery, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package:6 Sheets.Finish size on wall:250*200 cm/78.74*78.74 inch.Since this wall sticker is composed of multiple animal stickers, the size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "feedbackHighlights": [
      "6 Sheets",
      "Large size Marine animal stickers, whales, sharks, shells, octopus, starfish, coral and other components, colorful, beautiful and realistic, very suitable for children's bedroom or nursery, can also be used to dress up home cabinets",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0041"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$95.24"
      },
      {
        "label": "Color",
        "value": "D"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Marine Animals"
      },
      {
        "label": "Product Style",
        "value": "Art Deco"
      },
      {
        "label": "Item Form",
        "value": "Irregular"
      },
      {
        "label": "Pattern",
        "value": "Cartoon"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Animal Theme",
        "value": "Ocean"
      },
      {
        "label": "Surface Recommendation",
        "value": "Ceramic"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0042-ocean-wall-decals-marine-animal-boys-bedroom-large-stickers-removable-whale-decor-nursery-kids-room-murals-diy-cute-deco",
    "sku": "CW-0042",
    "name": "Ocean Wall Decals Marine Animal Boys Bedroom Large Stickers Removable Whale Decor Nursery Kids Room Murals DIY Cute Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 156.51,
    "currency": "USD",
    "priceDisplay": "$156.51",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 56,
    "colors": [],
    "image": "/images/products/cw-product-0215.jpg",
    "gallery": [
      "/images/products/cw-product-0215.jpg",
      "/images/products/cw-product-0221.jpg",
      "/images/products/cw-product-0222.jpg",
      "/images/products/cw-product-0223.jpg",
      "/images/products/cw-product-0224.jpg",
      "/images/products/cw-product-0225.jpg",
      "/images/products/cw-product-0226.jpg",
      "/images/products/cw-product-0227.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Package: Includes 7 sheets. Final wall size: 98.43 x 78.74 inches. Made of multiple animal designs, sizes may vary. Shipped as a scroll—unroll and lay flat before applying.",
      "Styles: Features whales, sharks, shells, octopuses, starfish, and coral. Colorful, realistic designs perfect for kids' rooms, nurseries, or home decor.",
      "Materials: Premium vinyl decals for easy application on smooth, flat surfaces like walls, doors, or cabinets. Translucent and easy to peel and reposition.",
      "Installation: Clean, smooth surface required. Peel and stick—start from the center and smooth outward. Plan your layout or create your own design.",
      "Versatile Use: Ideal for kitchens, bedrooms, living rooms, hotels, cafes, and more. Apply to walls, windows, mirrors, fridges, or cabinets for a fun, decorative touch."
    ],
    "details": "Package: Includes 7 sheets. Final wall size: 98.43 x 78.74 inches. Made of multiple animal designs, sizes may vary. Shipped as a scroll—unroll and lay flat before applying.",
    "feedbackHighlights": [
      "Includes 7 sheets",
      "Features whales, sharks, shells, octopuses, starfish, and coral",
      "Premium vinyl decals for easy application on smooth, flat surfaces like walls, doors, or cabinets"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0042"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$156.51"
      },
      {
        "label": "Color",
        "value": "E"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Whale, Shark, Octopus"
      },
      {
        "label": "Product Style",
        "value": "Art Deco"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Cartoon"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Animal Theme",
        "value": "Whale"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0043-safari-animal-wall-stickers-jungle-wildlife-large-home-decals-removable-vinyl-mural-living-room-nature-aesthetic-decor",
    "sku": "CW-0043",
    "name": "Safari Animal Wall Stickers Jungle Wildlife Large Home Decals Removable Vinyl Mural Living Room Nature Aesthetic Decor",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 95.24,
    "currency": "USD",
    "priceDisplay": "$95.24",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 56,
    "colors": [],
    "image": "/images/products/cw-product-0228.jpg",
    "gallery": [
      "/images/products/cw-product-0228.jpg",
      "/images/products/cw-product-0229.jpg",
      "/images/products/cw-product-0230.jpg",
      "/images/products/cw-product-0231.jpg",
      "/images/products/cw-product-0232.jpg",
      "/images/products/cw-product-0233.jpg",
      "/images/products/cw-product-0215.jpg",
      "/images/products/cw-product-0210.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "IMMERSE YOUR ROOM IN THE WILD SAFARI: This massive 118.11*157.48 inches mural features a rich composition of leopard, zebra, rlephant, rhinoceros roaming the jungle. Creates a breathtaking panoramic wildlife scene that makes your living room or bedroom feel like an African sunset adventure.",
      "RENTAL FRIENDLY & DAMAGE-FREE REMOVAL – SAFE FOR ANY WALL: Our safari animal stickers use advanced removable adhesive technology. Whether you are decorating a kids' jungle-themed room or a grassland-inspired nursery, they peel off cleanly without sticky residue or peeled paint – ideal for apartments, dorms, and rented homes.",
      "EASY PEEL & STICK – BUILD YOUR OWN WILDLIFE SCENE: No tools, no glue. The self-adhesive wildlife decals are pre-cut into smart blocks. You can reposition the elephant, giraffe, or zebra pieces freely. Involve your kids in creating their very own jungle adventure – a fun family project!",
      "PREMIUM ECO-FRIENDLY VINYL – SAFE FOR KIDS & PETS: Made from odorless, waterproof, and fade-resistant PVC. The vibrant lion manes and zebra stripes stay bright under sunlight. Unlike real grassland trips, this wall art requires zero maintenance – just wipe with a damp cloth. Perfect for wildlife-loving toddlers and curious little explorers.",
      "PERFECT GIFT FOR YOUNG WILDLIFE EXPLORERS: Whether your child dreams of seeing a leopard in the jungle or a rhino on the grassland, this safari mural delivers."
    ],
    "details": "IMMERSE YOUR ROOM IN THE WILD SAFARI: This massive 118.11*157.48 inches mural features a rich composition of leopard, zebra, rlephant, rhinoceros roaming the jungle. Creates a breathtaking panoramic wildlife scene that makes your living room or bedroom feel like an African sunset adventure.",
    "feedbackHighlights": [
      "This massive 118",
      "Our safari animal stickers use advanced removable adhesive technology",
      "No tools, no glue"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0043"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$95.24"
      },
      {
        "label": "Color",
        "value": "B"
      },
      {
        "label": "Theme",
        "value": "Jungle"
      },
      {
        "label": "Subject Character",
        "value": "Safari Animals"
      },
      {
        "label": "Product Style",
        "value": "Tropical"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Animal Print"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      }
    ]
  },
  {
    "id": "cw-0044-large-botanical-jungle-wall-decals-safari-animal-nature-wall-stickers-removable-bedroom-murals-vinyl-art-decor",
    "sku": "CW-0044",
    "name": "Large Botanical Jungle Wall Decals Safari Animal Nature Wall Stickers Removable Bedroom Murals Vinyl Art Decor",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 95.24,
    "currency": "USD",
    "priceDisplay": "$95.24",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 56,
    "colors": [],
    "image": "/images/products/cw-product-0217.jpg",
    "gallery": [
      "/images/products/cw-product-0217.jpg",
      "/images/products/cw-product-0234.jpg",
      "/images/products/cw-product-0235.jpg",
      "/images/products/cw-product-0236.jpg",
      "/images/products/cw-product-0237.jpg",
      "/images/products/cw-product-0238.jpg",
      "/images/products/cw-product-0215.jpg",
      "/images/products/cw-product-0210.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "IMMERSE YOUR ROOM IN THE WILD SAFARI: This massive 78.74*98.43inches mural features a rich composition of lions, giraffes, ostrich, flamingo and antelope roaming the jungle. Creates a breathtaking panoramic wildlife scene that makes your living room or bedroom feel like an African sunset adventure.",
      "RENTAL FRIENDLY & DAMAGE-FREE REMOVAL – SAFE FOR ANY WALL: Our safari animal stickers use advanced removable adhesive technology. Whether you are decorating a kids' jungle-themed room or a grassland-inspired nursery, they peel off cleanly without sticky residue or peeled paint – ideal for apartments, dorms, and rented homes.",
      "EASY PEEL & STICK – BUILD YOUR OWN WILDLIFE SCENE: No tools, no glue. The self-adhesive wildlife decals are pre-cut into smart blocks. You can reposition the elephant, giraffe, or zebra pieces freely. Involve your kids in creating their very own jungle adventure – a fun family project!",
      "PREMIUM ECO-FRIENDLY VINYL – SAFE FOR KIDS & PETS: Made from odorless, waterproof, and fade-resistant PVC. The vibrant lion manes and zebra stripes stay bright under sunlight. Unlike real grassland trips, this wall art requires zero maintenance – just wipe with a damp cloth. Perfect for wildlife-loving toddlers and curious little explorers.",
      "PERFECT GIFT FOR YOUNG WILDLIFE EXPLORERS: Whether your child dreams of seeing a leopard in the jungle or a rhino on the grassland, this safari mural delivers."
    ],
    "details": "IMMERSE YOUR ROOM IN THE WILD SAFARI: This massive 78.74*98.43inches mural features a rich composition of lions, giraffes, ostrich, flamingo and antelope roaming the jungle. Creates a breathtaking panoramic wildlife scene that makes your living room or bedroom feel like an African sunset adventure.",
    "feedbackHighlights": [
      "This massive 78",
      "Our safari animal stickers use advanced removable adhesive technology",
      "No tools, no glue"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0044"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$95.24"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Item Dimensions",
        "value": "98.43 x 78.74 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "98.43&#34;L x 78.74&#34;W"
      },
      {
        "label": "Size",
        "value": "Large"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#165,695 in Tools & Home Improvement ( See Top 100 in Tools & Home Improvement ) #1,901 in Wall Stickers & Murals #27,659 in Home Décor Accents"
      }
    ]
  },
  {
    "id": "cw-0045-greece-pattern-wall-border-stickers-peel-and-stick-skirting-self-adhesive-bathroom-waist-line-decals-mirror-vinyl-murals",
    "sku": "CW-0045",
    "name": "Greece Pattern Wall Border Stickers Peel and Stick Skirting Self Adhesive Bathroom Waist Line Decals Mirror Vinyl Murals",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 89.86,
    "currency": "USD",
    "priceDisplay": "$89.86",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-product-0239.jpg",
    "gallery": [
      "/images/products/cw-product-0239.jpg",
      "/images/products/cw-product-0240.jpg",
      "/images/products/cw-product-0241.jpg",
      "/images/products/cw-product-0242.jpg",
      "/images/products/cw-product-0243.jpg",
      "/images/products/cw-product-0244.jpg",
      "/images/products/cw-product-0245.jpg",
      "/images/products/cw-product-0246.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Retro Greece pattern in black and white for stylish decor",
      "Self-adhesive peel and stick design for easy tool-free installation",
      "Removable vinyl material leaves no residue or damage",
      "Waterproof surface that is easy to clean and maintain",
      "Versatile use for baseboard wall borders in various rooms"
    ],
    "details": "Retro Greece pattern in black and white for stylish decor",
    "feedbackHighlights": [
      "Retro Greece pattern in black and white for stylish decor",
      "Self-adhesive peel and stick design for easy tool-free installation",
      "Removable vinyl material leaves no residue or damage"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0045"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$89.86"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Subject Character",
        "value": "Greece Pattern"
      },
      {
        "label": "Product Style",
        "value": "Retro"
      },
      {
        "label": "Item Form",
        "value": "Strip"
      },
      {
        "label": "Pattern",
        "value": "Geometric"
      },
      {
        "label": "Item Dimensions",
        "value": "157.48 x 3.94 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Size",
        "value": "3.94*157.48 inch"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#26,304 in Tools & Home Improvement ( See Top 100 in Tools & Home Improvement ) #118 in Wall Stickers & Murals #63,320 in Home Décor Accents"
      }
    ]
  },
  {
    "id": "cw-0046-checkered-wall-border-stickers-peel-and-stick-black-and-white-skirting-self-adhesive-bathroom-waist-line-decal-vinyl-wal",
    "sku": "CW-0046",
    "name": "Checkered Wall Border Stickers Peel and Stick Black and White Skirting Self Adhesive Bathroom Waist Line Decal Vinyl Wallpaper",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 163.04,
    "currency": "USD",
    "priceDisplay": "$163.04",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-product-0247.jpg",
    "gallery": [
      "/images/products/cw-product-0247.jpg",
      "/images/products/cw-product-0248.jpg",
      "/images/products/cw-product-0249.jpg",
      "/images/products/cw-product-0250.jpg",
      "/images/products/cw-product-0251.jpg",
      "/images/products/cw-product-0252.jpg",
      "/images/products/cw-product-0253.jpg",
      "/images/products/cw-product-0254.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Retro checkerboard mosaic pattern in black and white for stylish decor",
      "Self-adhesive peel and stick design for easy tool-free installation",
      "Removable vinyl material leaves no residue or damage",
      "Waterproof surface that is easy to clean and maintain",
      "Versatile use for baseboard wall borders in various rooms"
    ],
    "details": "Retro checkerboard mosaic pattern in black and white for stylish decor",
    "feedbackHighlights": [
      "Retro checkerboard mosaic pattern in black and white for stylish decor",
      "Self-adhesive peel and stick design for easy tool-free installation",
      "Removable vinyl material leaves no residue or damage"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0046"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$163.04"
      },
      {
        "label": "Color",
        "value": "B"
      },
      {
        "label": "Item Dimensions",
        "value": "157.48 x 3.94 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "3.94*157.48 inch"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#26,304 in Tools & Home Improvement ( See Top 100 in Tools & Home Improvement ) #118 in Wall Stickers & Murals #63,320 in Home Décor Accents"
      }
    ]
  },
  {
    "id": "cw-0047-wall-border-road-stickers-street-nursery-decor-boys-bedroom-decals-vehicle-removable-wallpaper-kids-room-vinyl-murals-di",
    "sku": "CW-0047",
    "name": "Wall Border Road Stickers Street Nursery Decor Boys Bedroom Decals Vehicle Removable Wallpaper Kids Room Vinyl Murals DIY Cute Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-product-0255.jpg",
    "gallery": [
      "/images/products/cw-product-0255.jpg",
      "/images/products/cw-product-0256.jpg",
      "/images/products/cw-product-0257.jpg",
      "/images/products/cw-product-0258.jpg",
      "/images/products/cw-product-0259.jpg",
      "/images/products/cw-product-0260.jpg",
      "/images/products/cw-product-0261.jpg",
      "/images/products/cw-product-0262.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "feedbackHighlights": [
      "The pattern of the car in the product image is only for decorative purposes and is not included",
      "bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0047"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "F"
      },
      {
        "label": "Theme",
        "value": "Automobile"
      },
      {
        "label": "Subject Character",
        "value": "Bubble"
      },
      {
        "label": "Product Style",
        "value": "Contemporary"
      },
      {
        "label": "Item Form",
        "value": "Strip"
      },
      {
        "label": "Pattern",
        "value": "Bordered"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Surface Recommendation",
        "value": "Ceramic"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      }
    ]
  },
  {
    "id": "cw-0048-wall-border-road-stickers-street-nursery-decor-boys-bedroom-decals-vehicle-removable-wallpaper-kids-room-vinyl-murals-di",
    "sku": "CW-0048",
    "name": "Wall Border Road Stickers Street Nursery Decor Boys Bedroom Decals Vehicle Removable Wallpaper Kids Room Vinyl Murals DIY Cute Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-product-0263.jpg",
    "gallery": [
      "/images/products/cw-product-0263.jpg",
      "/images/products/cw-product-0264.jpg",
      "/images/products/cw-product-0265.jpg",
      "/images/products/cw-product-0266.jpg",
      "/images/products/cw-product-0257.jpg",
      "/images/products/cw-product-0258.jpg",
      "/images/products/cw-product-0259.jpg",
      "/images/products/cw-product-0260.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "feedbackHighlights": [
      "The pattern of the car in the product image is only for decorative purposes and is not included",
      "bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0048"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "F"
      },
      {
        "label": "Pattern",
        "value": "Geometric"
      },
      {
        "label": "Item Dimensions",
        "value": "157.48 x 3.94 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "3.94*157.48 inch"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#8,225 in Baby ( See Top 100 in Baby ) #43 in Kids' & Baby Wall Stickers #118 in Wall Stickers & Murals"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0049-rainbow-self-adhesive-wall-border-sticker-nursery-peel-and-stick-baseboard-tape-removable-waterproof-home-decoration-liv",
    "sku": "CW-0049",
    "name": "Rainbow Self-Adhesive Wall Border Sticker Nursery Peel and Stick Baseboard Tape Removable Waterproof Home Decoration Living Room Decals",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-product-0267.jpg",
    "gallery": [
      "/images/products/cw-product-0267.jpg",
      "/images/products/cw-product-0268.jpg",
      "/images/products/cw-product-0269.jpg",
      "/images/products/cw-product-0270.jpg",
      "/images/products/cw-product-0271.jpg",
      "/images/products/cw-product-0272.jpg",
      "/images/products/cw-product-0273.jpg",
      "/images/products/cw-product-0274.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Cut to Any Size: Each roll measures 10cm wide x 400cm long (3.94in x 157.48in). Easily cut with scissors to fit small corners, long hallways, or multiple rooms from a single roll.",
      "Rainbow Gradient Design & Peel and Stick: Adds a vibrant, colorful accent to any room. Simply peel off the backing and apply to any clean, dry surface. No glue, no nails, no mess. Repositionable during installation for perfect alignment.",
      "Removable & Renter Friendly: Leaves no residue when removed, making it ideal for apartments and rental homes. Refresh your space without worrying about damaging walls, floors, or furniture.",
      "Multi Surface Application: Works on walls, baseboards, floors, cabinets, furniture, doors, and appliances. Use as trim tape, border decal, or creative line art for DIY home makeover projects.",
      "Made from waterproof vinyl, resistant to daily wear, moisture, and light scrubbing. Suitable for kitchens, bathrooms, laundry rooms, and high-traffic areas."
    ],
    "details": "Cut to Any Size: Each roll measures 10cm wide x 400cm long (3.94in x 157.48in). Easily cut with scissors to fit small corners, long hallways, or multiple rooms from a single roll.",
    "feedbackHighlights": [
      "Each roll measures 10cm wide x 400cm long (3",
      "Adds a vibrant, colorful accent to any room",
      "Leaves no residue when removed, making it ideal for apartments and rental homes"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0049"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "C"
      },
      {
        "label": "Theme",
        "value": "Rainbow"
      },
      {
        "label": "Subject Character",
        "value": "Rainbow"
      },
      {
        "label": "Product Style",
        "value": "Art Deco"
      },
      {
        "label": "Item Form",
        "value": "Roll"
      },
      {
        "label": "Seasons",
        "value": "Summer"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      },
      {
        "label": "Additional Features",
        "value": "Peel and Stick"
      }
    ]
  },
  {
    "id": "cw-0050-peel-and-stick-wall-decor-vehicle-road-border-decals-for-kids-room-nursery-diy-vinyl-murals-boys-bedroom-decorations",
    "sku": "CW-0050",
    "name": "Peel and Stick Wall Decor Vehicle Road Border Decals for Kids Room Nursery DIY Vinyl Murals Boys Bedroom Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-product-0275.jpg",
    "gallery": [
      "/images/products/cw-product-0275.jpg",
      "/images/products/cw-product-0276.jpg",
      "/images/products/cw-product-0277.jpg",
      "/images/products/cw-product-0278.jpg",
      "/images/products/cw-product-0279.jpg",
      "/images/products/cw-product-0280.jpg",
      "/images/products/cw-product-0281.jpg",
      "/images/products/cw-product-0282.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "feedbackHighlights": [
      "The pattern of the car in the product image is only for decorative purposes and is not included",
      "bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0050"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "No"
      },
      {
        "label": "Theme",
        "value": "Automobile"
      },
      {
        "label": "Subject Character",
        "value": "Bubble"
      },
      {
        "label": "Product Style",
        "value": "Modern"
      },
      {
        "label": "Item Form",
        "value": "Roll"
      },
      {
        "label": "Pattern",
        "value": "Bordered"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Surface Recommendation",
        "value": "Wall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Indoor Outdoor Usage",
        "value": "Indoor"
      }
    ]
  },
  {
    "id": "cw-0051-wall-border-road-stickers-nursery-decor-street-boys-bedroom-decals-vehicle-removable-wallpaper-kids-room-vinyl-murals-di",
    "sku": "CW-0051",
    "name": "Wall Border Road Stickers Nursery Decor Street Boys Bedroom Decals Vehicle Removable Wallpaper Kids Room Vinyl Murals DIY Cute Decorations",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-product-0275.jpg",
    "gallery": [
      "/images/products/cw-product-0275.jpg",
      "/images/products/cw-product-0276.jpg",
      "/images/products/cw-product-0283.jpg",
      "/images/products/cw-product-0278.jpg",
      "/images/products/cw-product-0279.jpg",
      "/images/products/cw-product-0280.jpg",
      "/images/products/cw-product-0281.jpg",
      "/images/products/cw-product-0282.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "feedbackHighlights": [
      "The pattern of the car in the product image is only for decorative purposes and is not included",
      "bright color matching, with road in a variety of shapes and colors, very suitable for a little boy’s bedroom or nursery, but also can be used to dress up home wall border",
      "Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0051"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "No"
      },
      {
        "label": "Item Dimensions",
        "value": "157.48 x 3.94 x 0.1 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "3.94*157.48 inch"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#8,225 in Baby ( See Top 100 in Baby ) #43 in Kids' & Baby Wall Stickers #118 in Wall Stickers & Murals"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      }
    ]
  },
  {
    "id": "cw-0052-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy-decor-pvc-4-sheets",
    "sku": "CW-0052",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0284.jpg",
    "gallery": [
      "/images/products/cw-product-0284.jpg",
      "/images/products/cw-product-0285.jpg",
      "/images/products/cw-product-0286.jpg",
      "/images/products/cw-product-0287.jpg",
      "/images/products/cw-product-0288.jpg",
      "/images/products/cw-product-0289.jpg",
      "/images/products/cw-product-0290.jpg",
      "/images/products/cw-product-0291.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0052"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "D"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "4"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "4"
      }
    ]
  },
  {
    "id": "cw-0053-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy-decor-pvc-4-sheets",
    "sku": "CW-0053",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0292.jpg",
    "gallery": [
      "/images/products/cw-product-0292.jpg",
      "/images/products/cw-product-0293.jpg",
      "/images/products/cw-product-0294.jpg",
      "/images/products/cw-product-0295.jpg",
      "/images/products/cw-product-0296.jpg",
      "/images/products/cw-product-0297.jpg",
      "/images/products/cw-product-0298.jpg",
      "/images/products/cw-product-0299.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0053"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "F"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "4"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "4"
      }
    ]
  },
  {
    "id": "cw-0054-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy-decor-pvc-4-sheets",
    "sku": "CW-0054",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0300.jpg",
    "gallery": [
      "/images/products/cw-product-0300.jpg",
      "/images/products/cw-product-0301.jpg",
      "/images/products/cw-product-0302.jpg",
      "/images/products/cw-product-0303.jpg",
      "/images/products/cw-product-0304.jpg",
      "/images/products/cw-product-0305.jpg",
      "/images/products/cw-product-0306.jpg",
      "/images/products/cw-product-0307.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0054"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "I"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "4"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "4"
      }
    ]
  },
  {
    "id": "cw-0055-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy-decor-pvc-4-sheets",
    "sku": "CW-0055",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 136.08,
    "currency": "USD",
    "priceDisplay": "$136.08",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0308.jpg",
    "gallery": [
      "/images/products/cw-product-0308.jpg",
      "/images/products/cw-product-0309.jpg",
      "/images/products/cw-product-0310.jpg",
      "/images/products/cw-product-0311.jpg",
      "/images/products/cw-product-0312.jpg",
      "/images/products/cw-product-0313.jpg",
      "/images/products/cw-product-0314.jpg",
      "/images/products/cw-product-0315.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0055"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$136.08"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Animal Theme",
        "value": "Duck, Sea Animals"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0056-nursery-watercolor-wall-stickers-boho-kid-room-decals-peel-and-stick-diy-pvc-decor-8-sheets",
    "sku": "CW-0056",
    "name": "Nursery Watercolor Wall Stickers Boho Kid Room Decals Peel and Stick DIY PVC Decor 8 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0284.jpg",
    "gallery": [
      "/images/products/cw-product-0284.jpg",
      "/images/products/cw-product-0286.jpg",
      "/images/products/cw-product-0285.jpg",
      "/images/products/cw-product-0287.jpg",
      "/images/products/cw-product-0316.jpg",
      "/images/products/cw-product-0317.jpg",
      "/images/products/cw-product-0290.jpg",
      "/images/products/cw-product-0318.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0056"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "D"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.2 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.27*11.02inch*8pcs"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#12,025 in Baby ( See Top 100 in Baby ) #110 in Kids' & Baby Wall Stickers #314 in Wall Stickers & Murals"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0057-nursery-watercolor-wall-stickers-boho-kid-room-decals-peel-and-stick-diy-pvc-decor-8-sheets",
    "sku": "CW-0057",
    "name": "Nursery Watercolor Wall Stickers Boho Kid Room Decals Peel and Stick DIY PVC Decor 8 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0293.jpg",
    "gallery": [
      "/images/products/cw-product-0293.jpg",
      "/images/products/cw-product-0294.jpg",
      "/images/products/cw-product-0295.jpg",
      "/images/products/cw-product-0292.jpg",
      "/images/products/cw-product-0319.jpg",
      "/images/products/cw-product-0320.jpg",
      "/images/products/cw-product-0321.jpg",
      "/images/products/cw-product-0322.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0057"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "F"
      },
      {
        "label": "Theme",
        "value": "Floral"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.2 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.27*11.02inch*8pcs"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#12,025 in Baby ( See Top 100 in Baby ) #110 in Kids' & Baby Wall Stickers #314 in Wall Stickers & Murals"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      }
    ]
  },
  {
    "id": "cw-0058-nursery-watercolor-wall-stickers-boho-kid-room-decals-peel-and-stick-diy-pvc-decor-8-sheets",
    "sku": "CW-0058",
    "name": "Nursery Watercolor Wall Stickers Boho Kid Room Decals Peel and Stick DIY PVC Decor 8 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0300.jpg",
    "gallery": [
      "/images/products/cw-product-0300.jpg",
      "/images/products/cw-product-0301.jpg",
      "/images/products/cw-product-0305.jpg",
      "/images/products/cw-product-0304.jpg",
      "/images/products/cw-product-0323.jpg",
      "/images/products/cw-product-0302.jpg",
      "/images/products/cw-product-0324.jpg",
      "/images/products/cw-product-0325.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0058"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "I"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.2 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.27*11.02inch*8pcs"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#12,025 in Baby ( See Top 100 in Baby ) #110 in Kids' & Baby Wall Stickers #314 in Wall Stickers & Murals"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0059-nursery-watercolor-wall-stickers-boho-kid-room-decals-peel-and-stick-diy-pvc-decor-8-sheets",
    "sku": "CW-0059",
    "name": "Nursery Watercolor Wall Stickers Boho Kid Room Decals Peel and Stick DIY PVC Decor 8 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 136.08,
    "currency": "USD",
    "priceDisplay": "$136.08",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0308.jpg",
    "gallery": [
      "/images/products/cw-product-0308.jpg",
      "/images/products/cw-product-0311.jpg",
      "/images/products/cw-product-0310.jpg",
      "/images/products/cw-product-0314.jpg",
      "/images/products/cw-product-0313.jpg",
      "/images/products/cw-product-0326.jpg",
      "/images/products/cw-product-0309.jpg",
      "/images/products/cw-product-0327.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0059"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$136.08"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.2 inches"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.27*11.02inch*8pcs"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#12,025 in Baby ( See Top 100 in Baby ) #110 in Kids' & Baby Wall Stickers #314 in Wall Stickers & Murals"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0060-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy-decor-pvc-4-sheets",
    "sku": "CW-0060",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0284.jpg",
    "gallery": [
      "/images/products/cw-product-0284.jpg",
      "/images/products/cw-product-0285.jpg",
      "/images/products/cw-product-0286.jpg",
      "/images/products/cw-product-0287.jpg",
      "/images/products/cw-product-0288.jpg",
      "/images/products/cw-product-0289.jpg",
      "/images/products/cw-product-0290.jpg",
      "/images/products/cw-product-0291.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0060"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Color",
        "value": "D"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "4"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "4"
      }
    ]
  },
  {
    "id": "cw-0061-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy-decor-pvc-4-sheets",
    "sku": "CW-0061",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 81.62,
    "currency": "USD",
    "priceDisplay": "$81.62",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0292.jpg",
    "gallery": [
      "/images/products/cw-product-0292.jpg",
      "/images/products/cw-product-0293.jpg",
      "/images/products/cw-product-0294.jpg",
      "/images/products/cw-product-0295.jpg",
      "/images/products/cw-product-0296.jpg",
      "/images/products/cw-product-0297.jpg",
      "/images/products/cw-product-0298.jpg",
      "/images/products/cw-product-0299.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0061"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$81.62"
      },
      {
        "label": "Color",
        "value": "F"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Item Dimensions",
        "value": "11.02 x 8.27 x 0.1 inches"
      },
      {
        "label": "Number of Pieces",
        "value": "4"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Number of Items",
        "value": "4"
      }
    ]
  },
  {
    "id": "cw-0062-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy-decor-pvc-4-sheets",
    "sku": "CW-0062",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Stickers",
    "category": "Nursery wall sticker",
    "room": "Nursery",
    "price": 136.08,
    "currency": "USD",
    "priceDisplay": "$136.08",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-product-0308.jpg",
    "gallery": [
      "/images/products/cw-product-0308.jpg",
      "/images/products/cw-product-0309.jpg",
      "/images/products/cw-product-0310.jpg",
      "/images/products/cw-product-0311.jpg",
      "/images/products/cw-product-0312.jpg",
      "/images/products/cw-product-0313.jpg",
      "/images/products/cw-product-0314.jpg",
      "/images/products/cw-product-0315.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Removable",
      "Nursery decor"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "feedbackHighlights": [
      "4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8",
      "Watercolor boho features is very suitable for expressing animal and plant themes",
      "Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0062"
      },
      {
        "label": "Product type",
        "value": "Nursery wall sticker"
      },
      {
        "label": "Collection",
        "value": "Nursery Wall Stickers"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$136.08"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject Character",
        "value": "Animal"
      },
      {
        "label": "Product Style",
        "value": "Bohemian"
      },
      {
        "label": "Item Form",
        "value": "Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      },
      {
        "label": "Animal Theme",
        "value": "Duck, Sea Animals"
      },
      {
        "label": "Surface Recommendation",
        "value": "Drywall"
      },
      {
        "label": "Recommended Uses For Product",
        "value": "Wall"
      }
    ]
  },
  {
    "id": "cw-0063-watercolor-leaves-static-window-film-laser-suncatcher-glass-cling-privacy-decal-living-room-sun-blocking-decor-large-sti",
    "sku": "CW-0063",
    "name": "Watercolor Leaves Static Window Film Laser Suncatcher Glass Cling Privacy Decal Living Room Sun Blocking Decor Large Stickers DIY Decorations",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0003.jpg",
    "gallery": [
      "/images/products/cw-product-0003.jpg",
      "/images/products/cw-product-0328.jpg",
      "/images/products/cw-product-0329.jpg",
      "/images/products/cw-product-0330.jpg",
      "/images/products/cw-product-0331.jpg",
      "/images/products/cw-product-0332.jpg",
      "/images/products/cw-product-0333.jpg",
      "/images/products/cw-product-0334.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "feedbackHighlights": [
      "16",
      "Large size for privacy protection & UV blocking",
      "Easy to install on smooth, flat, dry surfaces"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0063"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "True"
      },
      {
        "label": "Size",
        "value": "16.92*39.37 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "39.37&#34;L x 16.92&#34;W"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      }
    ]
  },
  {
    "id": "cw-0064-watercolor-privacy-window-film-laser-suncatcher-static-cling-vintage-seamless-repeat-glass-decal-bathroom-non-adhesive-r",
    "sku": "CW-0064",
    "name": "Watercolor Privacy Window Film Laser Suncatcher Static Cling Vintage Seamless Repeat Glass Decal Bathroom Non-Adhesive Removable Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 47.59,
    "currency": "USD",
    "priceDisplay": "$47.59",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0003.jpg",
    "gallery": [
      "/images/products/cw-product-0003.jpg",
      "/images/products/cw-product-0335.jpg",
      "/images/products/cw-product-0336.jpg",
      "/images/products/cw-product-0337.jpg",
      "/images/products/cw-product-0338.jpg",
      "/images/products/cw-product-0339.jpg",
      "/images/products/cw-product-0340.jpg",
      "/images/products/cw-product-0341.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
      "Watercolor Leaves Laser Pattern: Features a timeless retro botanical design with a seamless repeat layout, perfect for adding greenery charm to any room.",
      "Privacy Without Darkness: Laser effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors.",
      "Rental Friendly & Cut-to-Size: Non-adhesive and removable, won't damage windows. This 16.92*118.11 inch roll fits large windows or multiple panes.",
      "Versatile Home Decor: Works on bathroom windows, kitchen cabinets, office glass partitions, and sidelights.Upgraded classic and fresh style."
    ],
    "details": "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
    "feedbackHighlights": [
      "No glue needed, sticks directly to smooth glass via static adhesion",
      "Features a timeless retro botanical design with a seamless repeat layout, perfect for adding greenery charm to any room",
      "Laser effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0064"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$47.59"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "A"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "Yes"
      },
      {
        "label": "Size",
        "value": "16.92*118.11 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "118.11&#34;L x 16.92&#34;W"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      }
    ]
  },
  {
    "id": "cw-0065-watercolor-leaves-static-window-film-laser-suncatcher-glass-cling-privacy-decal-living-room-sun-blocking-decor-large-sti",
    "sku": "CW-0065",
    "name": "Watercolor Leaves Static Window Film Laser Suncatcher Glass Cling Privacy Decal Living Room Sun Blocking Decor Large Stickers DIY Decorations",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 163.31,
    "currency": "USD",
    "priceDisplay": "$163.31",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0342.jpg",
    "gallery": [
      "/images/products/cw-product-0342.jpg",
      "/images/products/cw-product-0343.jpg",
      "/images/products/cw-product-0344.jpg",
      "/images/products/cw-product-0345.jpg",
      "/images/products/cw-product-0346.jpg",
      "/images/products/cw-product-0347.jpg",
      "/images/products/cw-product-0348.jpg",
      "/images/products/cw-product-0349.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "feedbackHighlights": [
      "16",
      "Large size for privacy protection & UV blocking",
      "Easy to install on smooth, flat, dry surfaces"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0065"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$163.31"
      },
      {
        "label": "Manufacturer",
        "value": "COWINLIFE"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "L"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "Ultraviolet Light Protection"
      },
      {
        "label": "Size",
        "value": "16.92*39.37 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "39.37&#34;L x 16.92&#34;W"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      }
    ]
  },
  {
    "id": "cw-0066-floral-static-window-privacy-film-watercolor-laser-suncatcher-cling-3d-living-room-sun-blocking-decal-diy-glass-decor-no",
    "sku": "CW-0066",
    "name": "Floral Static Window Privacy Film Watercolor Laser Suncatcher Cling 3D Living Room Sun Blocking Decal DIY Glass Decor Non-Adhesive Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 40.44,
    "currency": "USD",
    "priceDisplay": "$40.44",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0350.jpg",
    "gallery": [
      "/images/products/cw-product-0350.jpg",
      "/images/products/cw-product-0351.jpg",
      "/images/products/cw-product-0352.jpg",
      "/images/products/cw-product-0353.jpg",
      "/images/products/cw-product-0354.jpg",
      "/images/products/cw-product-0355.jpg",
      "/images/products/cw-product-0356.jpg",
      "/images/products/cw-product-0357.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "feedbackHighlights": [
      "16",
      "Large size for privacy protection & UV blocking",
      "Easy to install on smooth, flat, dry surfaces"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0066"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$40.44"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "No"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "No"
      },
      {
        "label": "Size",
        "value": "16.92*39.37 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "39.37&#34;L x 16.92&#34;W"
      }
    ]
  },
  {
    "id": "cw-0067-watercolor-privacy-window-film-laser-suncatcher-static-cling-vintage-seamless-repeat-glass-decal-bathroom-non-adhesive-r",
    "sku": "CW-0067",
    "name": "Watercolor Privacy Window Film Laser Suncatcher Static Cling Vintage Seamless Repeat Glass Decal Bathroom Non-Adhesive Removable Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 61.2,
    "currency": "USD",
    "priceDisplay": "$61.20",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0350.jpg",
    "gallery": [
      "/images/products/cw-product-0350.jpg",
      "/images/products/cw-product-0358.jpg",
      "/images/products/cw-product-0352.jpg",
      "/images/products/cw-product-0359.jpg",
      "/images/products/cw-product-0360.jpg",
      "/images/products/cw-product-0354.jpg",
      "/images/products/cw-product-0355.jpg",
      "/images/products/cw-product-0356.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
      "Watercolor Leaves Laser Pattern: Features a timeless retro botanical design with a seamless repeat layout, perfect for adding greenery charm to any room.",
      "Privacy Without Darkness: Laser effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors.",
      "Rental Friendly & Cut-to-Size: Non-adhesive and removable, won't damage windows. This 16.92*118.11 inch roll fits large windows or multiple panes.",
      "Versatile Home Decor: Works on bathroom windows, kitchen cabinets, office glass partitions, and sidelights.Upgraded classic and fresh style."
    ],
    "details": "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
    "feedbackHighlights": [
      "No glue needed, sticks directly to smooth glass via static adhesion",
      "Features a timeless retro botanical design with a seamless repeat layout, perfect for adding greenery charm to any room",
      "Laser effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0067"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$61.20"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "No"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "Yes"
      },
      {
        "label": "Size",
        "value": "16.92*118.11 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "118.11&#34;L x 16.92&#34;W"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      }
    ]
  },
  {
    "id": "cw-0068-floral-static-window-privacy-film-watercolor-laser-suncatcher-cling-3d-living-room-sun-blocking-decal-diy-glass-decor-no",
    "sku": "CW-0068",
    "name": "Floral Static Window Privacy Film Watercolor Laser Suncatcher Cling 3D Living Room Sun Blocking Decal DIY Glass Decor Non-Adhesive Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 68.01,
    "currency": "USD",
    "priceDisplay": "$68.01",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0361.jpg",
    "gallery": [
      "/images/products/cw-product-0361.jpg",
      "/images/products/cw-product-0362.jpg",
      "/images/products/cw-product-0363.jpg",
      "/images/products/cw-product-0364.jpg",
      "/images/products/cw-product-0365.jpg",
      "/images/products/cw-product-0366.jpg",
      "/images/products/cw-product-0367.jpg",
      "/images/products/cw-product-0368.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "feedbackHighlights": [
      "16",
      "Large size for privacy protection & UV blocking",
      "Easy to install on smooth, flat, dry surfaces"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0068"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$68.01"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "P"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "No"
      },
      {
        "label": "Size",
        "value": "16.92*39.37 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "39.37&#34;L x 16.92&#34;W"
      }
    ]
  },
  {
    "id": "cw-0069-floral-static-window-privacy-film-watercolor-laser-suncatcher-cling-3d-living-room-sun-blocking-decal-diy-glass-decor-no",
    "sku": "CW-0069",
    "name": "Floral Static Window Privacy Film Watercolor Laser Suncatcher Cling 3D Living Room Sun Blocking Decal DIY Glass Decor Non-Adhesive Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 136.08,
    "currency": "USD",
    "priceDisplay": "$136.08",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0342.jpg",
    "gallery": [
      "/images/products/cw-product-0342.jpg",
      "/images/products/cw-product-0369.jpg",
      "/images/products/cw-product-0370.jpg",
      "/images/products/cw-product-0345.jpg",
      "/images/products/cw-product-0349.jpg",
      "/images/products/cw-product-0348.jpg",
      "/images/products/cw-product-0371.jpg",
      "/images/products/cw-product-0372.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Value Package: 16.92*118.11 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*118.11 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "feedbackHighlights": [
      "16",
      "Large size for privacy protection & UV blocking",
      "Easy to install on smooth, flat, dry surfaces"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0069"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$136.08"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "L"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "No"
      },
      {
        "label": "Size",
        "value": "16.92*118.11 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "118.11&#34;L x 16.92&#34;W"
      }
    ]
  },
  {
    "id": "cw-0070-vintage-privacy-window-film-seamless-repeat-static-cling-frosted-glass-decal-bathroom-non-adhesive-removable-cover",
    "sku": "CW-0070",
    "name": "Vintage Privacy Window Film Seamless Repeat Static Cling Frosted Glass Decal Bathroom Non-Adhesive Removable Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 47.59,
    "currency": "USD",
    "priceDisplay": "$47.59",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0373.jpg",
    "gallery": [
      "/images/products/cw-product-0373.jpg",
      "/images/products/cw-product-0374.jpg",
      "/images/products/cw-product-0375.jpg",
      "/images/products/cw-product-0376.jpg",
      "/images/products/cw-product-0377.jpg",
      "/images/products/cw-product-0378.jpg",
      "/images/products/cw-product-0379.jpg",
      "/images/products/cw-product-0380.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
      "Vintage Floral Seamless Pattern: Features a timeless retro botanical design with a seamless repeat layout, perfect for adding old-world charm to any room.",
      "Privacy Without Darkness: Frosted effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors.",
      "Rental Friendly & Cut-to-Size: Non-adhesive and removable, won't damage windows. This 16.92*118.11 inch roll fits large windows or multiple panes.",
      "Versatile Home Decor: Works on bathroom windows, kitchen cabinets, office glass partitions, and sidelights. A classic Victorian/Art Nouveau style upgrade."
    ],
    "details": "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
    "feedbackHighlights": [
      "No glue needed, sticks directly to smooth glass via static adhesion",
      "Features a timeless retro botanical design with a seamless repeat layout, perfect for adding old-world charm to any room",
      "Frosted effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0070"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$47.59"
      },
      {
        "label": "Number of Items",
        "value": "1"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "Q"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "Yes"
      },
      {
        "label": "Size",
        "value": "16.92*118.11 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "118.11&#34;L x 16.92&#34;W"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      }
    ]
  },
  {
    "id": "cw-0071-vintage-privacy-window-film-seamless-repeat-static-cling-frosted-glass-decal-bathroom-non-adhesive-removable-cover",
    "sku": "CW-0071",
    "name": "Vintage Privacy Window Film Seamless Repeat Static Cling Frosted Glass Decal Bathroom Non-Adhesive Removable Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 122.47,
    "currency": "USD",
    "priceDisplay": "$122.47",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0381.jpg",
    "gallery": [
      "/images/products/cw-product-0381.jpg",
      "/images/products/cw-product-0382.jpg",
      "/images/products/cw-product-0383.jpg",
      "/images/products/cw-product-0384.jpg",
      "/images/products/cw-product-0385.jpg",
      "/images/products/cw-product-0386.jpg",
      "/images/products/cw-product-0387.jpg",
      "/images/products/cw-product-0388.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
      "Vintage Floral Seamless Pattern: Features a timeless retro botanical design with a seamless repeat layout, perfect for adding old-world charm to any room.",
      "Privacy Without Darkness: Frosted effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors.",
      "Rental Friendly & Cut-to-Size: Non-adhesive and removable, won't damage windows. This 16.92*118.11 inch roll fits large windows or multiple panes.",
      "Versatile Home Decor: Works on bathroom windows, kitchen cabinets, office glass partitions, and sidelights. A classic Victorian/Art Nouveau style upgrade."
    ],
    "details": "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
    "feedbackHighlights": [
      "No glue needed, sticks directly to smooth glass via static adhesion",
      "Features a timeless retro botanical design with a seamless repeat layout, perfect for adding old-world charm to any room",
      "Frosted effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0071"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$122.47"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "R"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "Yes"
      },
      {
        "label": "Size",
        "value": "16.92*118.11 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "118.11&#34;L x 16.92&#34;W"
      }
    ]
  },
  {
    "id": "cw-0072-vintage-privacy-window-film-seamless-repeat-static-cling-frosted-glass-decal-bathroom-non-adhesive-removable-cover",
    "sku": "CW-0072",
    "name": "Vintage Privacy Window Film Seamless Repeat Static Cling Frosted Glass Decal Bathroom Non-Adhesive Removable Cover",
    "collection": "Window Static Films",
    "category": "Window static film",
    "room": "Window",
    "price": 54.39,
    "currency": "USD",
    "priceDisplay": "$54.39",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "Shipping and delivery date confirmed before checkout",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-product-0389.jpg",
    "gallery": [
      "/images/products/cw-product-0389.jpg",
      "/images/products/cw-product-0390.jpg",
      "/images/products/cw-product-0391.jpg",
      "/images/products/cw-product-0392.jpg",
      "/images/products/cw-product-0393.jpg",
      "/images/products/cw-product-0394.jpg",
      "/images/products/cw-product-0395.jpg",
      "/images/products/cw-product-0396.jpg"
    ],
    "tags": [
      "COWINLIFE",
      "Peel and stick",
      "Static cling",
      "Window privacy"
    ],
    "features": [
      "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
      "Vintage Floral Seamless Pattern: Features a timeless retro botanical design with a seamless repeat layout, perfect for adding old-world charm to any room.",
      "Privacy Without Darkness: Frosted effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors.",
      "Rental Friendly & Cut-to-Size: Non-adhesive and removable, won't damage windows. This 16.92*118.11 inch roll fits large windows or multiple panes.",
      "Versatile Home Decor: Works on bathroom windows, kitchen cabinets, office glass partitions, and sidelights. A classic Victorian/Art Nouveau style upgrade."
    ],
    "details": "Static Cling & Reusable: No glue needed, sticks directly to smooth glass via static adhesion. Easy to apply, remove, and reposition without leaving residue.",
    "feedbackHighlights": [
      "No glue needed, sticks directly to smooth glass via static adhesion",
      "Features a timeless retro botanical design with a seamless repeat layout, perfect for adding old-world charm to any room",
      "Frosted effect obscures outside view while allowing natural light to pass through, ideal for bathrooms, living rooms, and front doors"
    ],
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-0072"
      },
      {
        "label": "Product type",
        "value": "Window static film"
      },
      {
        "label": "Collection",
        "value": "Window Static Films"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$54.39"
      },
      {
        "label": "Unit Count",
        "value": "1.0 Count"
      },
      {
        "label": "Best Sellers Rank",
        "value": "#169,146 in Home & Kitchen ( See Top 100 in Home & Kitchen ) #227 in Window Films"
      },
      {
        "label": "Installation Type",
        "value": "Static Cling"
      },
      {
        "label": "Material Type",
        "value": "Vinyl"
      },
      {
        "label": "Color",
        "value": "S"
      },
      {
        "label": "Ultraviolet Light Protection",
        "value": "Yes"
      },
      {
        "label": "Size",
        "value": "16.92*118.11 inch"
      },
      {
        "label": "Item Dimensions L x W",
        "value": "118.11&#34;L x 16.92&#34;W"
      }
    ]
  }
];
