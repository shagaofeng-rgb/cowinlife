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
  parameters: ProductParameter[];
};

export const collections = [
  {
    "name": "Nursery Wall Decals",
    "description": "Removable wall decals for kids rooms, nursery walls, and playful room refresh projects.",
    "image": "/images/products/cw-1001-1.jpg"
  },
  {
    "name": "Rose Floral Furniture Stickers",
    "description": "Rose, butterfly, and floral peel-and-stick PVC decor for walls, cabinets, and furniture.",
    "image": "/images/products/cw-1009-1.jpg"
  },
  {
    "name": "Chinoiserie Peel and Stick Wallpaper",
    "description": "Vintage Toile de Jouy and chinoiserie wall decals for living rooms and bedroom projects.",
    "image": "/images/products/cw-1017-1.jpg"
  },
  {
    "name": "Window Privacy Films",
    "description": "Static glass films for privacy, UV blocking, and suncatcher light effects.",
    "image": "/images/products/cw-1029-1.jpg"
  }
];

export const products: Product[] = [
  {
    "id": "cw-1001-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 13.99,
    "currency": "USD",
    "priceDisplay": "$13.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1001-1.jpg",
    "gallery": [
      "/images/products/cw-1001-1.jpg",
      "/images/products/cw-1001-2.jpg",
      "/images/products/cw-1001-3.jpg",
      "/images/products/cw-1001-4.jpg",
      "/images/products/cw-1001-5.jpg",
      "/images/products/cw-1001-6.jpg",
      "/images/products/cw-1001-7.jpg",
      "/images/products/cw-1001-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1001"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$13.99"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject",
        "value": "Character Heart"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Item",
        "value": "Dimensions 8.23 x 5.67 x 0.16 inches"
      }
    ],
    "sku": "CW-1001"
  },
  {
    "id": "cw-1002-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 4.99,
    "currency": "USD",
    "priceDisplay": "$4.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1002-1.jpg",
    "gallery": [
      "/images/products/cw-1002-1.jpg",
      "/images/products/cw-1002-2.jpg",
      "/images/products/cw-1002-3.jpg",
      "/images/products/cw-1002-4.jpg",
      "/images/products/cw-1002-5.jpg",
      "/images/products/cw-1002-6.jpg",
      "/images/products/cw-1002-7.jpg",
      "/images/products/cw-1002-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1002"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$4.99"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject",
        "value": "Character Heart"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Item",
        "value": "Dimensions 8.23 x 5.67 x 0.16 inches"
      }
    ],
    "sku": "CW-1002"
  },
  {
    "id": "cw-1003-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 7.99,
    "currency": "USD",
    "priceDisplay": "$7.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1003-1.jpg",
    "gallery": [
      "/images/products/cw-1003-1.jpg",
      "/images/products/cw-1003-2.jpg",
      "/images/products/cw-1003-3.jpg",
      "/images/products/cw-1003-4.jpg",
      "/images/products/cw-1003-5.jpg",
      "/images/products/cw-1003-6.jpg",
      "/images/products/cw-1003-7.jpg",
      "/images/products/cw-1003-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1003"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$7.99"
      },
      {
        "label": "Theme",
        "value": "Supernatural"
      },
      {
        "label": "Subject",
        "value": "Character Flower"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Surface",
        "value": "Recommendation Wall"
      }
    ],
    "sku": "CW-1003"
  },
  {
    "id": "cw-1004-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 9.99,
    "currency": "USD",
    "priceDisplay": "$9.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1004-1.jpg",
    "gallery": [
      "/images/products/cw-1004-1.jpg",
      "/images/products/cw-1004-2.jpg",
      "/images/products/cw-1004-3.jpg",
      "/images/products/cw-1004-4.jpg",
      "/images/products/cw-1004-5.jpg",
      "/images/products/cw-1004-6.jpg",
      "/images/products/cw-1004-7.jpg",
      "/images/products/cw-1004-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1004"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$9.99"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject",
        "value": "Character Boho Leaves & Flowers"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Surface",
        "value": "Recommendation Wall"
      }
    ],
    "sku": "CW-1004"
  },
  {
    "id": "cw-1005-boho-wall-stickers-girls-bedroom-removable-wall-decals-nursery-kids-room",
    "name": "Boho Wall Stickers Girls Bedroom Removable Wall Decals Nursery Kids Room Decor Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 9.99,
    "currency": "USD",
    "priceDisplay": "$9.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1005-1.jpg",
    "gallery": [
      "/images/products/cw-1005-1.jpg",
      "/images/products/cw-1005-2.jpg",
      "/images/products/cw-1005-3.jpg",
      "/images/products/cw-1005-4.jpg",
      "/images/products/cw-1005-5.jpg",
      "/images/products/cw-1005-6.jpg",
      "/images/products/cw-1005-7.jpg",
      "/images/products/cw-1005-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1005"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$9.99"
      },
      {
        "label": "Theme",
        "value": "Boho"
      },
      {
        "label": "Subject",
        "value": "Character Spiral"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Surface",
        "value": "Recommendation Wall"
      }
    ],
    "sku": "CW-1005"
  },
  {
    "id": "cw-1006-boho-wall-decal-stickers-star-kids-toddler-bedroom-art-removable-sticker",
    "name": "Boho Wall Decal Stickers Star Kids Toddler Bedroom Art Removable Stickers Decor Nursery Playroom Vinyl Waterproof Wall Decoration 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 7.99,
    "currency": "USD",
    "priceDisplay": "$7.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.5,
    "ratingText": "4.5 out of 5 stars",
    "reviewCount": 209,
    "colors": [
      "Star a"
    ],
    "image": "/images/products/cw-1006-1.jpg",
    "gallery": [
      "/images/products/cw-1006-1.jpg",
      "/images/products/cw-1006-2.jpg",
      "/images/products/cw-1006-3.jpg",
      "/images/products/cw-1006-4.jpg",
      "/images/products/cw-1006-5.jpg",
      "/images/products/cw-1006-6.jpg",
      "/images/products/cw-1006-7.jpg",
      "/images/products/cw-1006-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery"
    ],
    "features": [
      "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
      "Adorable Design:Boho style is the curren trend,it's vintage,eclectic,and entirely personal.Choe classic Boho elements such as polka dots,lines,and pairde them with a neutral color(suitable for both boy's and girl's rooms) on white or neutral walls,which will be a wonderful combination.Boho style can create an eclectic vibe and make Baby's room feel supei cozy and homey",
      "Waterproof & Reliable: All the wall decal stickers are made of superior vinyl. It's waterproof and sun-proof, can ensure the gloss and brightness of the material for a long time. Apartment from that,it's has excellent repeated tackiness, easy to peel and stick，leaves no residue after peeling",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides",
      "Wide Application: It can be used in nursery bedroom, living room, home, Hotel, Coffee shop, office, shopping mall and etc.The lovely and distinctive watercolors will bring childishness and cuteness to your space, impressing your family and friends"
    ],
    "details": "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1006"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$7.99"
      },
      {
        "label": "Color",
        "value": "Star a"
      },
      {
        "label": "Theme",
        "value": "Baby"
      },
      {
        "label": "Subject",
        "value": "Character Star"
      },
      {
        "label": "Product",
        "value": "Style Star C"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Polka Dot"
      },
      {
        "label": "Shape",
        "value": "Square"
      }
    ],
    "sku": "CW-1006"
  },
  {
    "id": "cw-1007-boho-polka-dots-wall-decal-stickers-kids-toddler-bedroom-removable-circl",
    "name": "Boho Polka Dots Wall Decal Stickers Kids Toddler Bedroom Removable Circle Stickers Decor Nursery Livingroom Vinyl Waterproof Wall Decoration 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 7.99,
    "currency": "USD",
    "priceDisplay": "$7.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.5,
    "ratingText": "4.5 out of 5 stars",
    "reviewCount": 209,
    "colors": [
      "Polka Dots a"
    ],
    "image": "/images/products/cw-1007-1.jpg",
    "gallery": [
      "/images/products/cw-1007-1.jpg",
      "/images/products/cw-1007-2.jpg",
      "/images/products/cw-1007-3.jpg",
      "/images/products/cw-1007-4.jpg",
      "/images/products/cw-1007-5.jpg",
      "/images/products/cw-1007-6.jpg",
      "/images/products/cw-1007-7.jpg",
      "/images/products/cw-1007-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery"
    ],
    "features": [
      "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
      "Adorable Design:Boho style is the curren trend,it's vintage,eclectic,and entirely personal.Choe classic Boho elements such as polka dots,lines,and pairde them with a neutral color(suitable for both boy's and girl's rooms) on white or neutral walls,which will be a wonderful combination.Boho style can create an eclectic vibe and make Baby's room feel supei cozy and homey",
      "Waterproof & Reliable: All the wall decal stickers are made of superior vinyl. It's waterproof and sun-proof, can ensure the gloss and brightness of the material for a long time. Apartment from that,it's has excellent repeated tackiness, easy to peel and stick，leaves no residue after peeling",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides",
      "Wide Application: It can be used in nursery bedroom, living room, home, Hotel, Coffee shop, office, shopping mall and etc.The lovely and distinctive watercolors will bring childishness and cuteness to your space, impressing your family and friends"
    ],
    "details": "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1007"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$7.99"
      },
      {
        "label": "Color",
        "value": "Polka Dots a"
      },
      {
        "label": "Theme",
        "value": "Baby"
      },
      {
        "label": "Subject",
        "value": "Character Boho Polka Dots"
      },
      {
        "label": "Product",
        "value": "Style Polka Dots C"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Polka Dot"
      },
      {
        "label": "Shape",
        "value": "Square"
      }
    ],
    "sku": "CW-1007"
  },
  {
    "id": "cw-1008-polka-dots-wall-stickers-boho-irregular-decal-terrazzo-dots-wall-decor-k",
    "name": "Polka Dots Wall Stickers Boho Irregular Decal Terrazzo Dots Wall Decor Kids Toddler Bedroom Removable Stickers Decor Nursery Livingroom Vinyl Waterproof Wall Decoration 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 9.99,
    "currency": "USD",
    "priceDisplay": "$9.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.5,
    "ratingText": "4.5 out of 5 stars",
    "reviewCount": 209,
    "colors": [
      "Polka Dots C"
    ],
    "image": "/images/products/cw-1008-1.jpg",
    "gallery": [
      "/images/products/cw-1008-1.jpg",
      "/images/products/cw-1008-2.jpg",
      "/images/products/cw-1008-3.jpg",
      "/images/products/cw-1008-4.jpg",
      "/images/products/cw-1008-5.jpg",
      "/images/products/cw-1008-6.jpg",
      "/images/products/cw-1008-7.jpg",
      "/images/products/cw-1008-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery"
    ],
    "features": [
      "Package size: 8.66*6.3inches/21*14.8cm; Package layout size: 8.26*5.83inch*6 sheets; Weight: about 65g.Attention:Please carefully confirm the product size in the main drawing;To achieve the picture effect, about 2 sets of products are needed",
      "Adorable Design:Boho style is the curren trend,it's vintage,eclectic,and entirely personal.Choose classic Boho elements such as polka dots,lines,and pairde them with a neutral color(suitable for both boy's and girl's rooms) on white or neutral walls,which will be a wonderful combination.Boho style can create an eclectic vibe and make Baby's room feel supei cozy and homey",
      "Waterproof & Reliable: All the wall decal stickers are made of superior vinyl. It's waterproof and sun-proof, can ensure the gloss and brightness of the material for a long time. Apartment from that,it's has excellent repeated tackiness, easy to peel and stick，leaves no residue after peeling",
      "Simple Operation: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides",
      "Wide Application: It can be used in nursery bedroom, livingroom, home, Hotel, Coffee shop, office, shopping mall and etc.The lovely and distinctive watercolors will bring childishness and cuteness to your space, impressing your family and friends"
    ],
    "details": "Package size: 8.66*6.3inches/21*14.8cm; Package layout size: 8.26*5.83inch*6 sheets; Weight: about 65g.Attention:Please carefully confirm the product size in the main drawing;To achieve the picture effect, about 2 sets of products are needed",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1008"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$9.99"
      },
      {
        "label": "Color",
        "value": "Polka Dots C"
      },
      {
        "label": "Theme",
        "value": "Baby"
      },
      {
        "label": "Subject",
        "value": "Character Polka Dots"
      },
      {
        "label": "Product",
        "value": "Style Polka Dots A"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Polka Dot"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      }
    ],
    "sku": "CW-1008"
  },
  {
    "id": "cw-1009-boho-flower-wall-decal-stickers-butterfly-kids-toddler-bedroom-removable",
    "name": "Boho Flower Wall Decal Stickers Butterfly Kids Toddler Bedroom Removable Stickers Decor Nursery Livingroom Vinyl Waterproof Wall Decoration 6 Sheets",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 17.99,
    "currency": "USD",
    "priceDisplay": "$17.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.5,
    "ratingText": "4.5 out of 5 stars",
    "reviewCount": 209,
    "colors": [
      "Butterfly a"
    ],
    "image": "/images/products/cw-1009-1.jpg",
    "gallery": [
      "/images/products/cw-1009-1.jpg",
      "/images/products/cw-1009-2.jpg",
      "/images/products/cw-1009-3.jpg",
      "/images/products/cw-1009-4.jpg",
      "/images/products/cw-1009-5.jpg",
      "/images/products/cw-1009-6.jpg",
      "/images/products/cw-1009-7.jpg",
      "/images/products/cw-1009-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral",
      "Butterfly"
    ],
    "features": [
      "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
      "Butterfly Decoration:This charming set of wall decals features colorful butterflies, bringing a playful and whimsical feeling to any space. Paired with other styles such as flowers, polka dots, etc., it creates a beautiful focal point for children's rooms or reading corners.",
      "Waterproof & Reliable: All the wall decal stickers are made of superior vinyl. It's waterproof and sun-proof, can ensure the gloss and brightness of the material for a long time. Apartment from that,it's has excellent repeated tackiness, easy to peel and stick，leaves no residue after peeling",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides",
      "Wide Application: It can be used in nursery bedroom, living room, home, Hotel, Coffee shop, office, shopping mall and etc.The lovely and distinctive watercolors will bring childishness and cuteness to your space, impressing your family and friends"
    ],
    "details": "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1009"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$17.99"
      },
      {
        "label": "Color",
        "value": "Butterfly a"
      },
      {
        "label": "Theme",
        "value": "Animal, Baby"
      },
      {
        "label": "Subject",
        "value": "Character Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Butterfly A"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      },
      {
        "label": "Size",
        "value": "8.66inches*6.3inches*6sheets"
      }
    ],
    "sku": "CW-1009"
  },
  {
    "id": "cw-1010-dinosaur-wall-decals-animal-boys-bedroom-stickers-removable-decor-nurser",
    "name": "Dinosaur Wall Decals Animal Boys Bedroom Stickers Removable Decor Nursery Kids Room Modern Stylish Murals DIY Cute Decorations 5 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 8.54,
    "currency": "USD",
    "priceDisplay": "$8.54",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 125,
    "colors": [],
    "image": "/images/products/cw-1010-1.jpg",
    "gallery": [
      "/images/products/cw-1010-1.jpg",
      "/images/products/cw-1010-2.jpg",
      "/images/products/cw-1010-3.jpg",
      "/images/products/cw-1010-4.jpg",
      "/images/products/cw-1010-5.jpg",
      "/images/products/cw-1010-6.jpg",
      "/images/products/cw-1010-7.jpg",
      "/images/products/cw-1010-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
      "Diverse Styles: Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1010"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$8.54"
      },
      {
        "label": "Theme",
        "value": "Animal, Beverage"
      },
      {
        "label": "Subject",
        "value": "Character Dinosaur"
      },
      {
        "label": "Product",
        "value": "Style Dinosaur"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Animal",
        "value": "Theme Dinosaur"
      }
    ],
    "sku": "CW-1010"
  },
  {
    "id": "cw-1011-dinosaur-wall-decals-animal-boys-bedroom-stickers-removable-decor-nurser",
    "name": "Dinosaur Wall Decals Animal Boys Bedroom Stickers Removable Decor Nursery Kids Room Modern Stylish Murals DIY Cute Decorations 5 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 7.99,
    "currency": "USD",
    "priceDisplay": "$7.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 125,
    "colors": [],
    "image": "/images/products/cw-1011-1.jpg",
    "gallery": [
      "/images/products/cw-1011-1.jpg",
      "/images/products/cw-1011-2.jpg",
      "/images/products/cw-1011-3.jpg",
      "/images/products/cw-1011-4.jpg",
      "/images/products/cw-1011-5.jpg",
      "/images/products/cw-1011-6.jpg",
      "/images/products/cw-1011-7.jpg",
      "/images/products/cw-1011-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
      "Diverse Styles: Simple and fashionable black and white color system and light soft tones, dinosaur pattern design, very suitable for little boys' bedrooms or nurseries, can also be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 5 Sheets dinosaur wall stickers, each measures 20 cm*30 cm (7.87 inch * 11.81 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1011"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$7.99"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject",
        "value": "Character Dinosaur"
      },
      {
        "label": "Product",
        "value": "Style Dinosaur"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Animal",
        "value": "Theme Dinosaur"
      }
    ],
    "sku": "CW-1011"
  },
  {
    "id": "cw-1012-ocean-wall-decals-marine-animal-boys-bedroom-large-stickers-removable-wh",
    "name": "Ocean Wall Decals Marine Animal Boys Bedroom Large Stickers Removable Whale Decor Nursery Kids Room Murals DIY Cute Decorations",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 29.99,
    "currency": "USD",
    "priceDisplay": "$29.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 56,
    "colors": [],
    "image": "/images/products/cw-1012-1.jpg",
    "gallery": [
      "/images/products/cw-1012-1.jpg",
      "/images/products/cw-1012-2.jpg",
      "/images/products/cw-1012-3.jpg",
      "/images/products/cw-1012-4.jpg",
      "/images/products/cw-1012-5.jpg",
      "/images/products/cw-1012-6.jpg",
      "/images/products/cw-1012-7.jpg",
      "/images/products/cw-1012-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Cabinet refit"
    ],
    "features": [
      "Package: Includes 7 sheets. Final wall size: 98.43 x 78.74 inches. Made of multiple animal designs, sizes may vary. Shipped as a scroll—unroll and lay flat before applying.",
      "Styles: Features whales, sharks, shells, octopuses, starfish, and coral. Colorful, realistic designs perfect for kids' rooms, nurseries, or home decor.",
      "Materials: Premium vinyl decals for easy application on smooth, flat surfaces like walls, doors, or cabinets. Translucent and easy to peel and reposition.",
      "Installation: Clean, smooth surface required. Peel and stick—start from the center and smooth outward. Plan your layout or create your own design.",
      "Versatile Use: Ideal for kitchens, bedrooms, living rooms, hotels, cafes, and more. Apply to walls, windows, mirrors, fridges, or cabinets for a fun, decorative touch."
    ],
    "details": "Package: Includes 7 sheets. Final wall size: 98.43 x 78.74 inches. Made of multiple animal designs, sizes may vary. Shipped as a scroll—unroll and lay flat before applying.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1012"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$29.99"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject",
        "value": "Character Whale, Shark, Octopus"
      },
      {
        "label": "Product",
        "value": "Style Art Deco"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Animal",
        "value": "Theme Whale"
      }
    ],
    "sku": "CW-1012"
  },
  {
    "id": "cw-1013-wall-border-road-stickers-street-nursery-decor-boys-bedroom-decals-vehic",
    "name": "Wall Border Road Stickers Street Nursery Decor Boys Bedroom Decals Vehicle Removable Wallpaper Kids Room Vinyl Murals DIY Cute Decorations",
    "collection": "Nursery Wall Decals",
    "category": "Peel and stick wallpaper",
    "room": "Nursery",
    "price": 11.55,
    "currency": "USD",
    "priceDisplay": "$11.55",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-1013-1.jpg",
    "gallery": [
      "/images/products/cw-1013-1.jpg",
      "/images/products/cw-1013-2.jpg",
      "/images/products/cw-1013-3.jpg",
      "/images/products/cw-1013-4.jpg",
      "/images/products/cw-1013-5.jpg",
      "/images/products/cw-1013-6.jpg",
      "/images/products/cw-1013-7.jpg",
      "/images/products/cw-1013-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy's bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1013"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$11.55"
      },
      {
        "label": "Theme",
        "value": "Automobile"
      },
      {
        "label": "Subject",
        "value": "Character Bubble"
      },
      {
        "label": "Product",
        "value": "Style Contemporary"
      },
      {
        "label": "Item",
        "value": "Form Strip"
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
        "label": "Surface",
        "value": "Recommendation Ceramic"
      }
    ],
    "sku": "CW-1013"
  },
  {
    "id": "cw-1014-wall-border-road-stickers-street-nursery-decor-boys-bedroom-decals-vehic",
    "name": "Wall Border Road Stickers Street Nursery Decor Boys Bedroom Decals Vehicle Removable Wallpaper Kids Room Vinyl Murals DIY Cute Decorations",
    "collection": "Nursery Wall Decals",
    "category": "Peel and stick wallpaper",
    "room": "Nursery",
    "price": 11.55,
    "currency": "USD",
    "priceDisplay": "$11.55",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-1014-1.jpg",
    "gallery": [
      "/images/products/cw-1014-1.jpg",
      "/images/products/cw-1014-2.jpg",
      "/images/products/cw-1014-3.jpg",
      "/images/products/cw-1014-4.jpg",
      "/images/products/cw-1014-5.jpg",
      "/images/products/cw-1014-6.jpg",
      "/images/products/cw-1014-7.jpg",
      "/images/products/cw-1014-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy's bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1014"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$11.55"
      },
      {
        "label": "Theme",
        "value": "Automobile"
      },
      {
        "label": "Subject",
        "value": "Character Bubble"
      },
      {
        "label": "Product",
        "value": "Style Contemporary"
      },
      {
        "label": "Item",
        "value": "Form Strip"
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
        "label": "Surface",
        "value": "Recommendation Ceramic"
      }
    ],
    "sku": "CW-1014"
  },
  {
    "id": "cw-1015-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-r",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 98.43inch*1pcs",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Furniture sticker",
    "room": "Living room",
    "price": 29.99,
    "currency": "USD",
    "priceDisplay": "$29.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—ash Blonde"
    ],
    "image": "/images/products/cw-1015-1.jpg",
    "gallery": [
      "/images/products/cw-1015-1.jpg",
      "/images/products/cw-1015-2.jpg",
      "/images/products/cw-1015-3.jpg",
      "/images/products/cw-1015-4.jpg",
      "/images/products/cw-1015-5.jpg",
      "/images/products/cw-1015-6.jpg",
      "/images/products/cw-1015-7.jpg",
      "/images/products/cw-1015-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1015"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$29.99"
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
        "label": "Subject",
        "value": "Character Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Garden"
      },
      {
        "label": "Item",
        "value": "Dimensions 98.43 x 15.75 x 0.1 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      }
    ],
    "sku": "CW-1015"
  },
  {
    "id": "cw-1016-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-r",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 98.43inch*1pcs",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Furniture sticker",
    "room": "Living room",
    "price": 29.99,
    "currency": "USD",
    "priceDisplay": "$29.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—ash Blonde"
    ],
    "image": "/images/products/cw-1016-1.jpg",
    "gallery": [
      "/images/products/cw-1016-1.jpg",
      "/images/products/cw-1016-2.jpg",
      "/images/products/cw-1016-3.jpg",
      "/images/products/cw-1016-4.jpg",
      "/images/products/cw-1016-5.jpg",
      "/images/products/cw-1016-6.jpg",
      "/images/products/cw-1016-7.jpg",
      "/images/products/cw-1016-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1016"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$29.99"
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
        "label": "Subject",
        "value": "Character Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Garden"
      },
      {
        "label": "Item",
        "value": "Dimensions 98.43 x 15.75 x 0.1 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      }
    ],
    "sku": "CW-1016"
  },
  {
    "id": "cw-1017-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-",
    "name": "Monochrome Wallpaper Wall Decal Chinoiserie Vintage Peel and Stick Wall Sticker Toile de Jouy Landscape Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Chinoiserie Peel and Stick Wallpaper",
    "category": "Peel and stick wallpaper",
    "room": "Living room",
    "price": 18.99,
    "currency": "USD",
    "priceDisplay": "$18.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Toile De Jouy—ash Blonde"
    ],
    "image": "/images/products/cw-1017-1.jpg",
    "gallery": [
      "/images/products/cw-1017-1.jpg",
      "/images/products/cw-1017-2.jpg",
      "/images/products/cw-1017-3.jpg",
      "/images/products/cw-1017-4.jpg",
      "/images/products/cw-1017-5.jpg",
      "/images/products/cw-1017-6.jpg",
      "/images/products/cw-1017-7.jpg",
      "/images/products/cw-1017-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Chinoiserie",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed.Please carefully confirm the product size in the main drawing.This product is a DIY product.It should be put together by yourself.",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.The product is only suitable for smooth media,such as glass,metal,dust-free walls,furnitures and so on",
      "Removable Design:This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (<2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle.",
      "Due to the possible differences between different monitors (e.g., models, settings, color gamut, screen type, screen glare, etc.), the product photography is illustrative only and may not accurately reflect the actual color of the item received"
    ],
    "details": "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1017"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$18.99"
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
        "label": "Subject",
        "value": "Character Garden"
      },
      {
        "label": "Product",
        "value": "Style Garden"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Tree"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      }
    ],
    "sku": "CW-1017"
  },
  {
    "id": "cw-1018-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-",
    "name": "Monochrome Wallpaper Wall Decal Chinoiserie Vintage Peel and Stick Wall Sticker Toile de Jouy Landscape Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Chinoiserie Peel and Stick Wallpaper",
    "category": "Peel and stick wallpaper",
    "room": "Living room",
    "price": 18.99,
    "currency": "USD",
    "priceDisplay": "$18.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Toile De Jouy—green"
    ],
    "image": "/images/products/cw-1018-1.jpg",
    "gallery": [
      "/images/products/cw-1018-1.jpg",
      "/images/products/cw-1018-2.jpg",
      "/images/products/cw-1018-3.jpg",
      "/images/products/cw-1018-4.jpg",
      "/images/products/cw-1018-5.jpg",
      "/images/products/cw-1018-6.jpg",
      "/images/products/cw-1018-7.jpg",
      "/images/products/cw-1018-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Chinoiserie",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed.Please carefully confirm the product size in the main drawing.This product is a DIY product.It should be put together by yourself.",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.The product is only suitable for smooth media,such as glass,metal,dust-free walls,furnitures and so on",
      "Removable Design:This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (<2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle.",
      "Due to the possible differences between different monitors (e.g., models, settings, color gamut, screen type, screen glare, etc.), the product photography is illustrative only and may not accurately reflect the actual color of the item received"
    ],
    "details": "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1018"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$18.99"
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
        "label": "Subject",
        "value": "Character Garden"
      },
      {
        "label": "Product",
        "value": "Style Victorian"
      },
      {
        "label": "Item",
        "value": "Form Roll"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      }
    ],
    "sku": "CW-1018"
  },
  {
    "id": "cw-1019-monochrome-wallpaper-wall-decal-chinoiserie-vintage-peel-and-stick-wall-",
    "name": "Monochrome Wallpaper Wall Decal Chinoiserie Vintage Peel and Stick Wall Sticker Toile de Jouy Landscape Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Chinoiserie Peel and Stick Wallpaper",
    "category": "Peel and stick wallpaper",
    "room": "Living room",
    "price": 18.99,
    "currency": "USD",
    "priceDisplay": "$18.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Toile De Jouy—cream Coloured"
    ],
    "image": "/images/products/cw-1019-1.jpg",
    "gallery": [
      "/images/products/cw-1019-1.jpg",
      "/images/products/cw-1019-2.jpg",
      "/images/products/cw-1019-3.jpg",
      "/images/products/cw-1019-4.jpg",
      "/images/products/cw-1019-5.jpg",
      "/images/products/cw-1019-6.jpg",
      "/images/products/cw-1019-7.jpg",
      "/images/products/cw-1019-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Chinoiserie",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed.Please carefully confirm the product size in the main drawing.This product is a DIY product.It should be put together by yourself.",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.The product is only suitable for smooth media,such as glass,metal,dust-free walls,furnitures and so on",
      "Removable Design:This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (<2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle.",
      "Due to the possible differences between different monitors (e.g., models, settings, color gamut, screen type, screen glare, etc.), the product photography is illustrative only and may not accurately reflect the actual color of the item received"
    ],
    "details": "Roll Packging:Safe shipping;package layout size: 40cm*150cm/15.75*59.1inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1019"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$18.99"
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
        "label": "Subject",
        "value": "Character Garden"
      },
      {
        "label": "Product",
        "value": "Style Art Deco"
      },
      {
        "label": "Item",
        "value": "Form Roll"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item",
        "value": "Dimensions 59.1 x 15.53 x 0.1 inches"
      }
    ],
    "sku": "CW-1019"
  },
  {
    "id": "cw-1020-butterfly-wallpaper-wall-decal-rose-floral-peel-and-stick-wall-sticker-r",
    "name": "Butterfly Wallpaper Wall Decal Rose Floral Peel and Stick Wall Sticker Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Peel and stick wallpaper",
    "room": "Living room",
    "price": 7.99,
    "currency": "USD",
    "priceDisplay": "$7.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—cream Coloured"
    ],
    "image": "/images/products/cw-1020-1.jpg",
    "gallery": [
      "/images/products/cw-1020-1.jpg",
      "/images/products/cw-1020-2.jpg",
      "/images/products/cw-1020-3.jpg",
      "/images/products/cw-1020-4.jpg",
      "/images/products/cw-1020-5.jpg",
      "/images/products/cw-1020-6.jpg",
      "/images/products/cw-1020-7.jpg",
      "/images/products/cw-1020-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.",
      "Removable Design:This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (<2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle.",
      "Due to the possible differences between different monitors (e.g., models, settings, color gamut, screen type, screen glare, etc.), the product photography is illustrative only and may not accurately reflect the actual color of the item received"
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1020"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$7.99"
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
        "label": "Subject",
        "value": "Character Rose Floral+Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Garden"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Shape",
        "value": "Rectangular"
      }
    ],
    "sku": "CW-1020"
  },
  {
    "id": "cw-1021-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-r",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 62.99inch*1pcs",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Furniture sticker",
    "room": "Living room",
    "price": 23.99,
    "currency": "USD",
    "priceDisplay": "$23.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—ash Blonde"
    ],
    "image": "/images/products/cw-1021-1.jpg",
    "gallery": [
      "/images/products/cw-1021-1.jpg",
      "/images/products/cw-1021-2.jpg",
      "/images/products/cw-1021-3.jpg",
      "/images/products/cw-1021-4.jpg",
      "/images/products/cw-1021-5.jpg",
      "/images/products/cw-1021-6.jpg",
      "/images/products/cw-1021-7.jpg",
      "/images/products/cw-1021-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.",
      "Removable Design:This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (<2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle.",
      "Due to the possible differences between different monitors (e.g., models, settings, color gamut, screen type, screen glare, etc.), the product photography is illustrative only and may not accurately reflect the actual color of the item received"
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1021"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$23.99"
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
        "label": "Subject",
        "value": "Character Rose Floral+Butterfly"
      },
      {
        "label": "Product",
        "value": "Style French"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item",
        "value": "Dimensions 63 x 15.53 x 0.1 inches"
      }
    ],
    "sku": "CW-1021"
  },
  {
    "id": "cw-1022-butterfly-wallpaper-wall-decal-rose-floral-peel-and-stick-wall-sticker-r",
    "name": "Butterfly Wallpaper Wall Decal Rose Floral Peel and Stick Wall Sticker Removable PVC Wall Decor for Bedroom Living Room Cabinet Furniture",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Peel and stick wallpaper",
    "room": "Living room",
    "price": 19.99,
    "currency": "USD",
    "priceDisplay": "$19.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—black"
    ],
    "image": "/images/products/cw-1022-1.jpg",
    "gallery": [
      "/images/products/cw-1022-1.jpg",
      "/images/products/cw-1022-2.jpg",
      "/images/products/cw-1022-3.jpg",
      "/images/products/cw-1022-4.jpg",
      "/images/products/cw-1022-5.jpg",
      "/images/products/cw-1022-6.jpg",
      "/images/products/cw-1022-7.jpg",
      "/images/products/cw-1022-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless vintage florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self Adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment.",
      "Removable Design:This European retro-style wallpaper features a removable design with no adhesive residue, ensuring your walls stay pristine. Safely removable from most smooth, painted walls (latex paint). Not recommended for textured walls, wallpaper, or freshly painted (<2 weeks) walls. Test a small area first! To remove, SLOWLY peel from a corner at a 180-degree angle.",
      "Due to the possible differences between different monitors (e.g., models, settings, color gamut, screen type, screen glare, etc.), the product photography is illustrative only and may not accurately reflect the actual color of the item received"
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*160cm/15.75*62.99inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1022"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$19.99"
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
        "label": "Subject",
        "value": "Character Rose Floral+Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Italianate"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item",
        "value": "Dimensions 63 x 15.53 x 0.1 inches"
      }
    ],
    "sku": "CW-1022"
  },
  {
    "id": "cw-1023-peel-and-stick-wall-decor-vehicle-road-border-decals-for-kids-room-nurse",
    "name": "Peel and Stick Wall Decor Vehicle Road Border Decals for Kids Room Nursery DIY Vinyl Murals Boys Bedroom Decorations",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 31.99,
    "currency": "USD",
    "priceDisplay": "$31.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [
      "No"
    ],
    "image": "/images/products/cw-1023-1.jpg",
    "gallery": [
      "/images/products/cw-1023-1.jpg",
      "/images/products/cw-1023-2.jpg",
      "/images/products/cw-1023-3.jpg",
      "/images/products/cw-1023-4.jpg",
      "/images/products/cw-1023-5.jpg",
      "/images/products/cw-1023-6.jpg",
      "/images/products/cw-1023-7.jpg",
      "/images/products/cw-1023-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "PVC",
      "Nursery",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy's bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1023"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$31.99"
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
        "label": "Subject",
        "value": "Character Bubble"
      },
      {
        "label": "Product",
        "value": "Style Modern"
      },
      {
        "label": "Item",
        "value": "Form Roll"
      },
      {
        "label": "Pattern",
        "value": "Bordered"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      }
    ],
    "sku": "CW-1023"
  },
  {
    "id": "cw-1024-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 9.99,
    "currency": "USD",
    "priceDisplay": "$9.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-1024-1.jpg",
    "gallery": [
      "/images/products/cw-1024-1.jpg",
      "/images/products/cw-1024-2.jpg",
      "/images/products/cw-1024-3.jpg",
      "/images/products/cw-1024-4.jpg",
      "/images/products/cw-1024-5.jpg",
      "/images/products/cw-1024-6.jpg",
      "/images/products/cw-1024-7.jpg",
      "/images/products/cw-1024-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1024"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$9.99"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject",
        "value": "Character Animal"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Item",
        "value": "Dimensions 11.02 x 8.27 x 0.1 inches"
      },
      {
        "label": "Number",
        "value": "of Pieces 4"
      }
    ],
    "sku": "CW-1024"
  },
  {
    "id": "cw-1025-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 13.99,
    "currency": "USD",
    "priceDisplay": "$13.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-1025-1.jpg",
    "gallery": [
      "/images/products/cw-1025-1.jpg",
      "/images/products/cw-1025-2.jpg",
      "/images/products/cw-1025-3.jpg",
      "/images/products/cw-1025-4.jpg",
      "/images/products/cw-1025-5.jpg",
      "/images/products/cw-1025-6.jpg",
      "/images/products/cw-1025-7.jpg",
      "/images/products/cw-1025-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1025"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$13.99"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject",
        "value": "Character Animal"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Animal",
        "value": "Theme Duck, Sea Animals"
      }
    ],
    "sku": "CW-1025"
  },
  {
    "id": "cw-1026-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets, 8.27*11.02inch",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 13.99,
    "currency": "USD",
    "priceDisplay": "$13.99",
    "priceSource": "Catalog price",
    "availability": "Available",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 5,
    "ratingText": "5.0 out of 5 stars",
    "reviewCount": 5,
    "colors": [],
    "image": "/images/products/cw-1026-1.jpg",
    "gallery": [
      "/images/products/cw-1026-1.jpg",
      "/images/products/cw-1026-2.jpg",
      "/images/products/cw-1026-3.jpg",
      "/images/products/cw-1026-4.jpg",
      "/images/products/cw-1026-5.jpg",
      "/images/products/cw-1026-6.jpg",
      "/images/products/cw-1026-7.jpg",
      "/images/products/cw-1026-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1026"
      },
      {
        "label": "Availability",
        "value": "Available"
      },
      {
        "label": "Catalog price",
        "value": "$13.99"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject",
        "value": "Character Animal"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Variety Pack"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      },
      {
        "label": "Animal",
        "value": "Theme Yes"
      }
    ],
    "sku": "CW-1026"
  },
  {
    "id": "cw-1027-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 9.99,
    "currency": "USD",
    "priceDisplay": "$9.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-1027-1.jpg",
    "gallery": [
      "/images/products/cw-1027-1.jpg",
      "/images/products/cw-1027-2.jpg",
      "/images/products/cw-1027-3.jpg",
      "/images/products/cw-1027-4.jpg",
      "/images/products/cw-1027-5.jpg",
      "/images/products/cw-1027-6.jpg",
      "/images/products/cw-1027-7.jpg",
      "/images/products/cw-1027-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1027"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$9.99"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject",
        "value": "Character Animal"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Item",
        "value": "Dimensions 11.02 x 8.27 x 0.1 inches"
      },
      {
        "label": "Number",
        "value": "of Pieces 4"
      }
    ],
    "sku": "CW-1027"
  },
  {
    "id": "cw-1028-boho-watercolor-nursery-wall-stickers-kid-room-wall-decals-removable-diy",
    "name": "Boho Watercolor Nursery Wall Stickers Kid Room Wall Decals Removable DIY Decor PVC 4 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 9.99,
    "currency": "USD",
    "priceDisplay": "$9.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-1028-1.jpg",
    "gallery": [
      "/images/products/cw-1028-1.jpg",
      "/images/products/cw-1028-2.jpg",
      "/images/products/cw-1028-3.jpg",
      "/images/products/cw-1028-4.jpg",
      "/images/products/cw-1028-5.jpg",
      "/images/products/cw-1028-6.jpg",
      "/images/products/cw-1028-7.jpg",
      "/images/products/cw-1028-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral"
    ],
    "features": [
      "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 4 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1028"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$9.99"
      },
      {
        "label": "Theme",
        "value": "Animal"
      },
      {
        "label": "Subject",
        "value": "Character Animal"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Animal",
        "value": "Theme Duck, Sea Animals"
      }
    ],
    "sku": "CW-1028"
  },
  {
    "id": "cw-1029-suncatcher-static-window-film-glass-cling-watercolor-leaves-privacy-deca",
    "name": "Suncatcher Static Window Film Glass Cling Watercolor Leaves Privacy Decal Living Room Sun Blocking Stained Decor Large Stickers DIY Decorations, 16.93*39.37 inch",
    "collection": "Window Privacy Films",
    "category": "Window film",
    "room": "Living room",
    "price": 7.98,
    "currency": "USD",
    "priceDisplay": "$7.98",
    "priceSource": "Catalog price",
    "availability": "Available",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3,
    "ratingText": "3.0 out of 5 stars",
    "reviewCount": 5,
    "colors": [],
    "image": "/images/products/cw-1029-1.jpg",
    "gallery": [
      "/images/products/cw-1029-1.jpg",
      "/images/products/cw-1029-2.jpg",
      "/images/products/cw-1029-3.jpg",
      "/images/products/cw-1029-4.jpg",
      "/images/products/cw-1029-5.jpg",
      "/images/products/cw-1029-6.jpg",
      "/images/products/cw-1029-7.jpg"
    ],
    "tags": [
      "Peel and stick",
      "PVC",
      "Window decor",
      "Static cling"
    ],
    "features": [
      "Value Package: 43*100 cm/16.93*39.37 inch*1 pcs static film. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: Spring green leaves collocation, large size design, focus on home and office privacy protection and UV protection, suitable for a variety of transparent doors and windows.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto window, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, bedroom, living room, home, hotel and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 43*100 cm/16.93*39.37 inch*1 pcs static film. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1029"
      },
      {
        "label": "Availability",
        "value": "Available"
      },
      {
        "label": "Catalog price",
        "value": "$7.98"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Ultraviolet",
        "value": "Light Protection True"
      },
      {
        "label": "Size",
        "value": "16.93 x 39.37 inches"
      },
      {
        "label": "Item",
        "value": "Dimensions L x W 39.37\"L x 39.37\"W"
      },
      {
        "label": "Installation",
        "value": "Type Static Cling"
      }
    ],
    "sku": "CW-1029"
  },
  {
    "id": "cw-1030-suncatcher-static-window-film-glass-cling-watercolor-leaves-privacy-deca",
    "name": "Suncatcher Static Window Film Glass Cling Watercolor Leaves Privacy Decal Living Room Sun Blocking Stained Decor Large Stickers DIY Decorations, 16.93*39.37 inch",
    "collection": "Window Privacy Films",
    "category": "Window film",
    "room": "Living room",
    "price": 7.98,
    "currency": "USD",
    "priceDisplay": "$7.98",
    "priceSource": "Catalog price",
    "availability": "Available",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 4,
    "colors": [],
    "image": "/images/products/cw-1030-1.jpg",
    "gallery": [
      "/images/products/cw-1030-1.jpg",
      "/images/products/cw-1030-2.jpg",
      "/images/products/cw-1030-3.jpg",
      "/images/products/cw-1030-4.jpg",
      "/images/products/cw-1030-5.jpg",
      "/images/products/cw-1030-6.jpg",
      "/images/products/cw-1030-7.jpg",
      "/images/products/cw-1030-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "PVC",
      "Window decor",
      "Static cling"
    ],
    "features": [
      "Value Package: 43*100 cm/16.93*39.37 inch*1 pcs static film. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: Spring green leaves collocation, large size design, focus on home and office privacy protection and UV protection, suitable for a variety of transparent doors and windows.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto window, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, bedroom, living room, home, hotel and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 43*100 cm/16.93*39.37 inch*1 pcs static film. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1030"
      },
      {
        "label": "Availability",
        "value": "Available"
      },
      {
        "label": "Catalog price",
        "value": "$7.98"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Ultraviolet",
        "value": "Light Protection True"
      },
      {
        "label": "Size",
        "value": "16.93 x 39.37 inches"
      },
      {
        "label": "Item",
        "value": "Dimensions L x W 39.37\"L x 16.93\"W"
      },
      {
        "label": "Installation",
        "value": "Type Peel and Stick"
      }
    ],
    "sku": "CW-1030"
  },
  {
    "id": "cw-1031-watercolor-leaves-static-window-film-laser-suncatcher-glass-cling-privac",
    "name": "Watercolor Leaves Static Window Film Laser Suncatcher Glass Cling Privacy Decal Living Room Sun Blocking Decor Large Stickers DIY Decorations",
    "collection": "Window Privacy Films",
    "category": "Window film",
    "room": "Living room",
    "price": 6.99,
    "currency": "USD",
    "priceDisplay": "$6.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-1031-1.jpg",
    "gallery": [
      "/images/products/cw-1031-1.jpg",
      "/images/products/cw-1031-2.jpg",
      "/images/products/cw-1031-3.jpg",
      "/images/products/cw-1031-4.jpg",
      "/images/products/cw-1031-5.jpg",
      "/images/products/cw-1031-6.jpg",
      "/images/products/cw-1031-7.jpg",
      "/images/products/cw-1031-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Window decor",
      "Static cling",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1031"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$6.99"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Material",
        "value": "Type Vinyl"
      },
      {
        "label": "Ultraviolet",
        "value": "Light Protection True"
      },
      {
        "label": "Size",
        "value": "16.92*39.37 inch"
      },
      {
        "label": "Item",
        "value": "Dimensions L x W 39.37\"L x 16.92\"W"
      }
    ],
    "sku": "CW-1031"
  },
  {
    "id": "cw-1032-watercolor-leaves-static-window-film-laser-suncatcher-glass-cling-privac",
    "name": "Watercolor Leaves Static Window Film Laser Suncatcher Glass Cling Privacy Decal Living Room Sun Blocking Decor Large Stickers DIY Decorations",
    "collection": "Window Privacy Films",
    "category": "Window film",
    "room": "Living room",
    "price": 9.99,
    "currency": "USD",
    "priceDisplay": "$9.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-1032-1.jpg",
    "gallery": [
      "/images/products/cw-1032-1.jpg",
      "/images/products/cw-1032-2.jpg",
      "/images/products/cw-1032-3.jpg",
      "/images/products/cw-1032-4.jpg",
      "/images/products/cw-1032-5.jpg",
      "/images/products/cw-1032-6.jpg",
      "/images/products/cw-1032-7.jpg",
      "/images/products/cw-1032-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Window decor",
      "Static cling",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1032"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$9.99"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Material",
        "value": "Type Vinyl"
      },
      {
        "label": "Ultraviolet",
        "value": "Light Protection True"
      },
      {
        "label": "Size",
        "value": "16.92*39.37 inch"
      },
      {
        "label": "Item",
        "value": "Dimensions L x W 39.37\"L x 16.92\"W"
      }
    ],
    "sku": "CW-1032"
  },
  {
    "id": "cw-1033-watercolor-leaves-static-window-film-laser-suncatcher-glass-cling-privac",
    "name": "Watercolor Leaves Static Window Film Laser Suncatcher Glass Cling Privacy Decal Living Room Sun Blocking Decor Large Stickers DIY Decorations",
    "collection": "Window Privacy Films",
    "category": "Window film",
    "room": "Living room",
    "price": 23.99,
    "currency": "USD",
    "priceDisplay": "$23.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 97,
    "colors": [],
    "image": "/images/products/cw-1033-1.jpg",
    "gallery": [
      "/images/products/cw-1033-1.jpg",
      "/images/products/cw-1033-2.jpg",
      "/images/products/cw-1033-3.jpg",
      "/images/products/cw-1033-4.jpg",
      "/images/products/cw-1033-5.jpg",
      "/images/products/cw-1033-6.jpg",
      "/images/products/cw-1033-7.jpg",
      "/images/products/cw-1033-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Window decor",
      "Static cling",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
      "Laser Design, Stylish & Beautiful: Large size for privacy protection & UV blocking. Suitable for various transparent doors and windows",
      "Removable Material: Easy to install on smooth, flat, dry surfaces. Easy to peel off and replace",
      "Simple Installation Method: Ensure surface is smooth and dust-free, DIY cutting, paste in order. Apply from the center to the sides",
      "Wide Application Scenarios: living room, bathroom, glass door, windows, short-term rentals, furniture renovation, sunroof, appliances and other smooth surfaces …"
    ],
    "details": "Value Package: 16.92*39.37 inch*1 pcs static film. Rolled design for easy transportation, needs to be laid flat before use",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1033"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$23.99"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Material",
        "value": "Type Vinyl"
      },
      {
        "label": "Ultraviolet",
        "value": "Light Protection Ultraviolet Light Protection"
      },
      {
        "label": "Size",
        "value": "16.92*39.37 inch"
      },
      {
        "label": "Item",
        "value": "Dimensions L x W 39.37\"L x 16.92\"W"
      },
      {
        "label": "Installation",
        "value": "Type Static Cling"
      }
    ],
    "sku": "CW-1033"
  },
  {
    "id": "cw-1034-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-r",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 98.43inch*1pcs",
    "collection": "Window Privacy Films",
    "category": "Window film",
    "room": "Living room",
    "price": 29.99,
    "currency": "USD",
    "priceDisplay": "$29.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—ash Blonde"
    ],
    "image": "/images/products/cw-1034-1.jpg",
    "gallery": [
      "/images/products/cw-1034-1.jpg",
      "/images/products/cw-1034-2.jpg",
      "/images/products/cw-1034-3.jpg",
      "/images/products/cw-1034-4.jpg",
      "/images/products/cw-1034-5.jpg",
      "/images/products/cw-1034-6.jpg",
      "/images/products/cw-1034-7.jpg",
      "/images/products/cw-1034-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Window decor",
      "Static cling",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1034"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$29.99"
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
        "label": "Subject",
        "value": "Character Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Garden"
      },
      {
        "label": "Item",
        "value": "Dimensions 98.43 x 15.75 x 0.1 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      }
    ],
    "sku": "CW-1034"
  },
  {
    "id": "cw-1035-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-r",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 98.43inch*1pcs",
    "collection": "Window Privacy Films",
    "category": "Window film",
    "room": "Living room",
    "price": 29.99,
    "currency": "USD",
    "priceDisplay": "$29.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—ash Blonde"
    ],
    "image": "/images/products/cw-1035-1.jpg",
    "gallery": [
      "/images/products/cw-1035-1.jpg",
      "/images/products/cw-1035-2.jpg",
      "/images/products/cw-1035-3.jpg",
      "/images/products/cw-1035-4.jpg",
      "/images/products/cw-1035-5.jpg",
      "/images/products/cw-1035-6.jpg",
      "/images/products/cw-1035-7.jpg",
      "/images/products/cw-1035-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Window decor",
      "Static cling",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1035"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$29.99"
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
        "label": "Subject",
        "value": "Character Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Garden"
      },
      {
        "label": "Item",
        "value": "Dimensions 98.43 x 15.75 x 0.1 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      }
    ],
    "sku": "CW-1035"
  },
  {
    "id": "cw-1036-boho-flower-wall-decal-stickers-butterfly-kids-toddler-bedroom-removable",
    "name": "Boho Flower Wall Decal Stickers Butterfly Kids Toddler Bedroom Removable Stickers Decor Nursery Livingroom Vinyl Waterproof Mushroom Wall Decoration 6 Sheets",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 17.99,
    "currency": "USD",
    "priceDisplay": "$17.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.5,
    "ratingText": "4.5 out of 5 stars",
    "reviewCount": 209,
    "colors": [
      "Flower B"
    ],
    "image": "/images/products/cw-1036-1.jpg",
    "gallery": [
      "/images/products/cw-1036-1.jpg",
      "/images/products/cw-1036-2.jpg",
      "/images/products/cw-1036-3.jpg",
      "/images/products/cw-1036-4.jpg",
      "/images/products/cw-1036-5.jpg",
      "/images/products/cw-1036-6.jpg",
      "/images/products/cw-1036-7.jpg",
      "/images/products/cw-1036-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral",
      "Butterfly"
    ],
    "features": [
      "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
      "Adorable Design:Boho style is the curren trend,it's vintage,eclectic,and entirely personal.Choe classic Boho elements such as polka dots,lines,and pairde them with a neutral color(suitable for both boy's and girl's rooms) on white or neutral walls,which will be a wonderful combination.Boho style can create an eclectic vibe and make Baby's room feel supei cozy and homey",
      "Waterproof & Reliable: All the wall decal stickers are made of superior vinyl. It's waterproof and sun-proof, can ensure the gloss and brightness of the material for a long time. Apartment from that,it's has excellent repeated tackiness, easy to peel and stick，leaves no residue after peeling",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides",
      "Wide Application: It can be used in nursery bedroom, living room, home, Hotel, Coffee shop, office, shopping mall and etc.The lovely and distinctive watercolors will bring childishness and cuteness to your space, impressing your family and friends"
    ],
    "details": "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1036"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$17.99"
      },
      {
        "label": "Color",
        "value": "Flower B"
      },
      {
        "label": "Theme",
        "value": "Baby"
      },
      {
        "label": "Subject",
        "value": "Character Flower"
      },
      {
        "label": "Product",
        "value": "Style Flower B"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral, Polka Dot"
      },
      {
        "label": "Shape",
        "value": "Irregular"
      }
    ],
    "sku": "CW-1036"
  },
  {
    "id": "cw-1037-boho-daisy-wall-decal-stickers-flower-kids-toddler-bedroom-removable-sti",
    "name": "Boho Daisy Wall Decal Stickers Flower Kids Toddler Bedroom Removable Stickers Decor Nursery Livingroom Vinyl Waterproof Wall Decoration 6 Sheets",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 8.99,
    "currency": "USD",
    "priceDisplay": "$8.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.5,
    "ratingText": "4.5 out of 5 stars",
    "reviewCount": 209,
    "colors": [
      "Flower a"
    ],
    "image": "/images/products/cw-1037-1.jpg",
    "gallery": [
      "/images/products/cw-1037-1.jpg",
      "/images/products/cw-1037-2.jpg",
      "/images/products/cw-1037-3.jpg",
      "/images/products/cw-1037-4.jpg",
      "/images/products/cw-1037-5.jpg",
      "/images/products/cw-1037-6.jpg",
      "/images/products/cw-1037-7.jpg",
      "/images/products/cw-1037-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral"
    ],
    "features": [
      "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
      "Adorable Design:Boho style is the curren trend,it's vintage,eclectic,and entirely personal.Choe classic Boho elements such as polka dots,lines,and pairde them with a neutral color(suitable for both boy's and girl's rooms) on white or neutral walls,which will be a wonderful combination.Boho style can create an eclectic vibe and make Baby's room feel supei cozy and homey",
      "Waterproof & Reliable: All the wall decal stickers are made of superior vinyl. It's waterproof and sun-proof, can ensure the gloss and brightness of the material for a long time. Apartment from that,it's has excellent repeated tackiness, easy to peel and stick，leaves no residue after peeling",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides",
      "Wide Application: It can be used in nursery bedroom, living room, home, Hotel, Coffee shop, office, shopping mall and etc.The lovely and distinctive watercolors will bring childishness and cuteness to your space, impressing your family and friends"
    ],
    "details": "Package size: 8.66*6.22inches/22*15.8cm; Package layout size: 8.27*5.83inch*6 sheets; Weight: about 50g.Note: The product size is in the main drawing, and the product is translucent, please carefully confirm the product size and wall color before purchase",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1037"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$8.99"
      },
      {
        "label": "Color",
        "value": "Flower a"
      },
      {
        "label": "Theme",
        "value": "Baby"
      },
      {
        "label": "Subject",
        "value": "Character Flower"
      },
      {
        "label": "Product",
        "value": "Style Flower A"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral, Polka Dot, Line"
      },
      {
        "label": "Shape",
        "value": "Flower"
      }
    ],
    "sku": "CW-1037"
  },
  {
    "id": "cw-1038-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 6 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 14.99,
    "currency": "USD",
    "priceDisplay": "$14.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1038-1.jpg",
    "gallery": [
      "/images/products/cw-1038-1.jpg",
      "/images/products/cw-1038-2.jpg",
      "/images/products/cw-1038-3.jpg",
      "/images/products/cw-1038-4.jpg",
      "/images/products/cw-1038-5.jpg",
      "/images/products/cw-1038-6.jpg",
      "/images/products/cw-1038-7.jpg",
      "/images/products/cw-1038-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 6 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1038"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$14.99"
      },
      {
        "label": "Theme",
        "value": "Rainbow"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Surface",
        "value": "Recommendation Glass, Metal, Plastic, Wall, Wood"
      },
      {
        "label": "Recommended",
        "value": "Uses For Product Wall"
      }
    ],
    "sku": "CW-1038"
  },
  {
    "id": "cw-1039-wall-border-road-stickers-street-nursery-decor-boys-bedroom-decals-vehic",
    "name": "Wall Border Road Stickers Street Nursery Decor Boys Bedroom Decals Vehicle Removable Wallpaper Kids Room Vinyl Murals DIY Cute Decorations",
    "collection": "Nursery Wall Decals",
    "category": "Peel and stick wallpaper",
    "room": "Nursery",
    "price": 31.99,
    "currency": "USD",
    "priceDisplay": "$31.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 3.8,
    "ratingText": "3.8 out of 5 stars",
    "reviewCount": 243,
    "colors": [],
    "image": "/images/products/cw-1039-1.jpg",
    "gallery": [
      "/images/products/cw-1039-1.jpg",
      "/images/products/cw-1039-2.jpg",
      "/images/products/cw-1039-3.jpg",
      "/images/products/cw-1039-4.jpg",
      "/images/products/cw-1039-5.jpg",
      "/images/products/cw-1039-6.jpg",
      "/images/products/cw-1039-7.jpg",
      "/images/products/cw-1039-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
      "Diverse Styles: bright color matching, with road in a variety of shapes and colors, very suitable for a little boy's bedroom or nursery, but also can be used to dress up home wall border.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.(Because this product is transparent material, it is recommended to paste on a smooth surface such as a white wall or a cabinet, otherwise it is not easy to display the color.)",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: The pattern of the car in the product image is only for decorative purposes and is not included. The size of the special mask is irregular, depending on the actual received goods. In order to facilitate transportation, we made a scroll shape, which needs to be paved before pasting.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1039"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$31.99"
      },
      {
        "label": "Pattern",
        "value": "Geometric"
      },
      {
        "label": "Item",
        "value": "Dimensions 157.48 x 3.94 x 0.1 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Size",
        "value": "3.94*157.48 inch"
      },
      {
        "label": "Material",
        "value": "Type Vinyl"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      },
      {
        "label": "Surface",
        "value": "Recommendation Drywall"
      }
    ],
    "sku": "CW-1039"
  },
  {
    "id": "cw-1040-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 12.99,
    "currency": "USD",
    "priceDisplay": "$12.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1040-1.jpg",
    "gallery": [
      "/images/products/cw-1040-1.jpg",
      "/images/products/cw-1040-2.jpg",
      "/images/products/cw-1040-3.jpg",
      "/images/products/cw-1040-4.jpg",
      "/images/products/cw-1040-5.jpg",
      "/images/products/cw-1040-6.jpg",
      "/images/products/cw-1040-7.jpg",
      "/images/products/cw-1040-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1040"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$12.99"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
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
        "label": "Item",
        "value": "Dimensions 8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number",
        "value": "of Pieces 12"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      }
    ],
    "sku": "CW-1040"
  },
  {
    "id": "cw-1041-butterfly-furniture-sticker-rose-floral-wall-decal-peel-and-stick-wall-r",
    "name": "Butterfly Furniture Sticker Rose Floral Wall Decal Peel and Stick Wall Removable PVC Decor for Cabinet 15.75 * 98.43inch*1pcs",
    "collection": "Rose Floral Furniture Stickers",
    "category": "Furniture sticker",
    "room": "Living room",
    "price": 29.99,
    "currency": "USD",
    "priceDisplay": "$29.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.2,
    "ratingText": "4.2 out of 5 stars",
    "reviewCount": 144,
    "colors": [
      "Rose Floral Butterfly—ash Blonde"
    ],
    "image": "/images/products/cw-1041-1.jpg",
    "gallery": [
      "/images/products/cw-1041-1.jpg",
      "/images/products/cw-1041-2.jpg",
      "/images/products/cw-1041-3.jpg",
      "/images/products/cw-1041-4.jpg",
      "/images/products/cw-1041-5.jpg",
      "/images/products/cw-1041-6.jpg",
      "/images/products/cw-1041-7.jpg",
      "/images/products/cw-1041-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "Waterproof",
      "PVC",
      "Floral",
      "Butterfly",
      "Cabinet refit"
    ],
    "features": [
      "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
      "Rose Garden Design:The classic and elegant roses,butterflies and leaves are used to outline a leisurely and peaceful European pastoral scenery.The vintage and timeless monochrome florals are also easier to apply and match on the wall or furniture",
      "Durable and Waterproof:Made primarily from abundant mineral-based powder, this innovative material eliminates the need for tree pulp and significantly reduces plastic use, offering a direct environmental benefit by conserving forests and water. It stands out as a durable, waterproof, and high-end alternative that delivers a premium look and feel for sophisticated packaging, aligning strong ecological values with exceptional product quality.",
      "Self adhesive: The back of matte texture DIY wallpaper is attached to glue, just peel and stick, there are size lines on the back of removable wallpaper peel and stick, easy to cut and adjust, meet to remodel your different projects needed",
      "Easy Application: Clean wall first! Apply at room temperature. Start from the top, use a credit card to smooth out bubbles as you go. Larger decals may require 2 people for perfect alignment."
    ],
    "details": "Roll Packaging:Safe shipping;package layout size: 40cm*250cm/15.75*98.43inch*1pcs;Feature:Grainy Frosted PVC.ATTENTION: ACTUAL SIZE SHOWN IN IMAGE 2! PLEASE CHECK BEFORE BUYING! This is a SINGLE LARGE decal.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1041"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$29.99"
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
        "label": "Subject",
        "value": "Character Butterfly"
      },
      {
        "label": "Product",
        "value": "Style Garden"
      },
      {
        "label": "Item",
        "value": "Dimensions 98.43 x 15.75 x 0.1 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Number",
        "value": "of Items 1"
      }
    ],
    "sku": "CW-1041"
  },
  {
    "id": "cw-1042-nursery-watercolor-wall-stickers-boho-kid-room-decals-peel-and-stick-diy",
    "name": "Nursery Watercolor Wall Stickers Boho Kid Room Decals Peel and Stick DIY PVC Decor 8 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 12.99,
    "currency": "USD",
    "priceDisplay": "$12.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-1042-1.jpg",
    "gallery": [
      "/images/products/cw-1042-1.jpg",
      "/images/products/cw-1042-2.jpg",
      "/images/products/cw-1042-3.jpg",
      "/images/products/cw-1042-4.jpg",
      "/images/products/cw-1042-5.jpg",
      "/images/products/cw-1042-6.jpg",
      "/images/products/cw-1042-7.jpg",
      "/images/products/cw-1042-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral"
    ],
    "features": [
      "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1042"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$12.99"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item",
        "value": "Dimensions 11.02 x 8.27 x 0.2 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.27*11.02inch*8pcs"
      },
      {
        "label": "Material",
        "value": "Type Vinyl"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      },
      {
        "label": "Surface",
        "value": "Recommendation Drywall"
      }
    ],
    "sku": "CW-1042"
  },
  {
    "id": "cw-1043-nursery-watercolor-wall-stickers-boho-kid-room-decals-peel-and-stick-diy",
    "name": "Nursery Watercolor Wall Stickers Boho Kid Room Decals Peel and Stick DIY PVC Decor 8 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 12.99,
    "currency": "USD",
    "priceDisplay": "$12.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.4,
    "ratingText": "4.4 out of 5 stars",
    "reviewCount": 98,
    "colors": [],
    "image": "/images/products/cw-1043-1.jpg",
    "gallery": [
      "/images/products/cw-1043-1.jpg",
      "/images/products/cw-1043-2.jpg",
      "/images/products/cw-1043-3.jpg",
      "/images/products/cw-1043-4.jpg",
      "/images/products/cw-1043-5.jpg",
      "/images/products/cw-1043-6.jpg",
      "/images/products/cw-1043-7.jpg",
      "/images/products/cw-1043-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Waterproof",
      "PVC",
      "Nursery",
      "Floral"
    ],
    "features": [
      "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
      "Diverse Styles: Watercolor boho features is very suitable for expressing animal and plant themes. Infants and young children are attracted by natural elements that are full of fun and vibrant colors.Daisy, mushroom, duck, sea animals and ducks are common poultry and livestock that are very close to daily life.",
      "Reliable Materials: Transparent PVC material, waterproof, high saturation, comes with adhesive backing, easy to peel off and clean. Simple steps to install the wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery, bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 8 Sheets watercolor boho nursery wall stickers, each measures 21 cm*28 cm (8.27 inch * 11.02 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1043"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$12.99"
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
        "label": "Item",
        "value": "Dimensions 11.02 x 8.27 x 0.2 inches"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      },
      {
        "label": "Size",
        "value": "8.27*11.02inch*8pcs"
      },
      {
        "label": "Material",
        "value": "Type Vinyl"
      },
      {
        "label": "Brand",
        "value": "Name QUCHENG"
      }
    ],
    "sku": "CW-1043"
  },
  {
    "id": "cw-1044-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 15.49,
    "currency": "USD",
    "priceDisplay": "$15.49",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1044-1.jpg",
    "gallery": [
      "/images/products/cw-1044-1.jpg",
      "/images/products/cw-1044-2.jpg",
      "/images/products/cw-1044-3.jpg",
      "/images/products/cw-1044-4.jpg",
      "/images/products/cw-1044-5.jpg",
      "/images/products/cw-1044-6.jpg",
      "/images/products/cw-1044-7.jpg",
      "/images/products/cw-1044-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1044"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$15.49"
      },
      {
        "label": "Theme",
        "value": "Botanical, Rainbow"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item",
        "value": "Dimensions 8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number",
        "value": "of Pieces 12"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      }
    ],
    "sku": "CW-1044"
  },
  {
    "id": "cw-1045-nursery-wall-stickers-boho-kids-room-decor-girls-bedroom-removable-wall-",
    "name": "Nursery Wall Stickers Boho Kids Room Decor Girls Bedroom Removable Wall Decals Vinyl Murals DIY Cute Decorations 12 Sheets",
    "collection": "Nursery Wall Decals",
    "category": "Wall decal",
    "room": "Nursery",
    "price": 12.99,
    "currency": "USD",
    "priceDisplay": "$12.99",
    "priceSource": "Catalog price",
    "availability": "Availability varies",
    "promotion": "",
    "shipping": "",
    "unitPrice": "",
    "unitBase": "",
    "rating": 4.6,
    "ratingText": "4.6 out of 5 stars",
    "reviewCount": 980,
    "colors": [],
    "image": "/images/products/cw-1045-1.jpg",
    "gallery": [
      "/images/products/cw-1045-1.jpg",
      "/images/products/cw-1045-2.jpg",
      "/images/products/cw-1045-3.jpg",
      "/images/products/cw-1045-4.jpg",
      "/images/products/cw-1045-5.jpg",
      "/images/products/cw-1045-6.jpg",
      "/images/products/cw-1045-7.jpg",
      "/images/products/cw-1045-8.jpg"
    ],
    "tags": [
      "Peel and stick",
      "Removable",
      "PVC",
      "Nursery",
      "Floral",
      "Cabinet refit"
    ],
    "features": [
      "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
      "Diverse Styles: Gentle warm color matching, bohemian pattern design, with falling leaves, flowers, rainbow, sun and other patterns, very suitable for a little girl's bedroom or kindergarten, but also can be used to dress up home cabinets.",
      "Reliable Materials: Simple steps to install the vinyl wall decal onto door, painted wall or any smooth, flat, dry and dust free surface.It's easy to peel and stick. Translucent material, which can be visited on both sides.",
      "Installation Method: Make sure that the surface to be pasted is smooth, without floating dust and oil stains. Make a simple plan according to the pasting order, you can also DIY according to your own creativity. Gently peel the sticker from the bottom paper and paste directly, first paste the middle and then spread it to the sides.",
      "Wide Application: It can be used in office, kitchen, nursery bedroom, living room, home, Hotel, Coffee shop, shopping mall and can be stuck to windows, mirrors, cars, electrical appliances and etc."
    ],
    "details": "Value Package: 12 Sheets Boho wall stickers, each measures 14.8 cm*21 cm (5.82 inch * 8.26 inch) wall stickers in total.",
    "parameters": [
      {
        "label": "SKU",
        "value": "CW-1045"
      },
      {
        "label": "Availability",
        "value": "Availability varies"
      },
      {
        "label": "Catalog price",
        "value": "$12.99"
      },
      {
        "label": "Theme",
        "value": "Botanical"
      },
      {
        "label": "Product",
        "value": "Style Bohemian"
      },
      {
        "label": "Item",
        "value": "Form Sheet"
      },
      {
        "label": "Pattern",
        "value": "Floral"
      },
      {
        "label": "Item",
        "value": "Dimensions 8.23 x 5.67 x 0.16 inches"
      },
      {
        "label": "Number",
        "value": "of Pieces 12"
      },
      {
        "label": "Unit",
        "value": "Count 1.0 Count"
      }
    ],
    "sku": "CW-1045"
  }
];

export const blogPosts = [
  {
    "title": "How to plan a decal wall before peeling the backing",
    "tag": "DIY guide",
    "readTime": "5 min",
    "summary": "Measure, tape, preview, then apply. A practical installation checklist for smoother results."
  },
  {
    "title": "Choosing between wall decals, wallpaper, and window film",
    "tag": "Buying guide",
    "readTime": "6 min",
    "summary": "A quick comparison by surface type, durability, cleaning, removal, and rental friendliness."
  },
  {
    "title": "Nursery refresh ideas that do not require paint",
    "tag": "Room ideas",
    "readTime": "4 min",
    "summary": "Build a focal wall with removable shapes, soft palettes, and small matching details."
  }
];
