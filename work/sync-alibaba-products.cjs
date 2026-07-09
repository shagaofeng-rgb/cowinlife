const fs = require("fs");

const base = "https://zjalxcl.en.alibaba.com";
const firstUrl = `${base}/productlist.html?scene=all`;
const headers = {
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/126 Safari/537.36",
  "accept-language": "en-US,en;q=0.9"
};

function absolutize(url) {
  if (!url) return "";
  const cleaned = String(url).replaceAll("\\/", "/");
  if (cleaned.startsWith("//")) return `https:${cleaned}`;
  if (cleaned.startsWith("/")) return `${base}${cleaned}`;
  return cleaned;
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 120);
}

function decodeModules(html) {
  return Array.from(html.matchAll(/module-data='([^']+)'/g))
    .map((match) => {
      try {
        return JSON.parse(decodeURIComponent(match[1]));
      } catch {
        return null;
      }
    })
    .filter(Boolean);
}

function findProductModule(modules) {
  for (const module of modules) {
    const data = module?.mds?.moduleData?.data;
    if (Array.isArray(data?.productList)) return data;
  }
  return null;
}

function findGroupMap(modules) {
  const groups = new Map();
  function visit(items) {
    for (const item of items || []) {
      if (item?.id && item?.name) groups.set(Number(item.id), item.name);
      if (Array.isArray(item?.children)) visit(item.children);
    }
  }
  for (const module of modules) {
    const data = module?.mds?.moduleData?.data;
    if (Array.isArray(data?.groups)) visit(data.groups);
  }
  return groups;
}

async function fetchText(url, attempt = 1) {
  const response = await fetch(url, { headers });
  if (!response.ok && attempt < 3) {
    await new Promise((resolve) => setTimeout(resolve, attempt * 1200));
    return fetchText(url, attempt + 1);
  }
  if (!response.ok) throw new Error(`Fetch failed ${response.status} ${url}`);
  return response.text();
}

async function fetchProductPage(url, attempt = 1) {
  const html = await fetchText(url);
  const modules = decodeModules(html);
  const productData = findProductModule(modules);
  const list = productData?.productList || [];
  if (!list.length && attempt < 3) {
    await new Promise((resolve) => setTimeout(resolve, attempt * 1600));
    return fetchProductPage(url, attempt + 1);
  }
  return { modules, productData, list };
}

function imageCandidates(product) {
  const images = [];
  const fromObject = (item) => item?.original || item?.x350 || item?.x220 || item?.x120 || "";
  for (const image of product.imageUrlList || []) images.push(fromObject(image));
  if (product.imageUrls) images.push(fromObject(product.imageUrls));
  for (const image of product.skuImg || []) images.push(image);
  return Array.from(new Set(images.map(absolutize).filter(Boolean)));
}

function normalizeProduct(product, index, groupMap) {
  const sku = `CP-${String(index + 1001).padStart(4, "0")}`;
  const images = imageCandidates(product);
  const certificates = [
    ...(product.productAuthTagList || []),
    ...(product.productCertificateLogos || []).map((item) => item?.name).filter(Boolean)
  ];
  const tags = Array.from(new Set([
    "Custom product",
    "Made to order",
    product.rtsProduct ? "Sample available" : "",
    product.quickDelivery ? "Quick delivery available" : "",
    product.arrivalGuarantee ? "Delivery guarantee" : "",
    ...certificates
  ].filter(Boolean)));
  const sourceCategory = groupMap.get(Number(product.groupId)) || "Custom Products";
  const category = sourceCategory.toLowerCase().includes("stock") ? "Custom Products" : sourceCategory;
  return {
    id: `custom-${product.id}`,
    sourceId: String(product.id || ""),
    sku,
    slug: slugify(`${sku}-${product.subject}`),
    name: String(product.subject || "").trim(),
    category,
    collection: "Custom Products",
    type: "custom",
    moq: product.moq || "Contact for MOQ",
    unit: product.fobUnit || "",
    image: images[0] || "/images/qucheng-hero.png",
    gallery: images.slice(0, 12),
    tags,
    certificates: Array.from(new Set(certificates.filter(Boolean))),
    detailUrl: absolutize(product.url),
    parameters: [
      { label: "SKU", value: sku },
      { label: "Product type", value: category },
      { label: "Minimum order", value: product.moq || "Contact for MOQ" },
      { label: "Customization", value: "Made to order, no stock price displayed" },
      { label: "Unit", value: product.fobUnit || "Contact for details" }
    ],
    details:
      "This made-to-order product is available for custom projects. Product images, style options, minimum order quantity, certificates, and category data are synchronized from the manufacturer catalog. Contact Cowinlife for material, size, pattern, packaging, sample, and production requirements."
  };
}

async function main() {
  fs.mkdirSync("work/alibaba-sync", { recursive: true });
  const firstHtml = await fetchText(firstUrl);
  fs.writeFileSync("work/alibaba-sync/productlist.html", firstHtml);
  const firstModules = decodeModules(firstHtml);
  const firstProductData = findProductModule(firstModules);
  if (!firstProductData) throw new Error("Product list data not found on first page");
  const groupMap = findGroupMap(firstModules);
  const pageNav = firstProductData.pageNavView || {};
  const totalLines = Number(pageNav.totalLines || firstProductData.productList.length);
  const pageLines = Number(pageNav.pageLines || firstProductData.productList.length || 16);
  const totalPages = Math.ceil(totalLines / pageLines);
  const rawProducts = [];

  for (let page = 1; page <= totalPages; page += 1) {
    const url = page === 1 ? firstUrl : `${base}/productlist-${page}.html?filter=null&sortType=modified-desc`;
    const pageData = page === 1 ? { list: firstProductData.productList || [] } : await fetchProductPage(url);
    const list = pageData.list;
    rawProducts.push(...list);
    console.log(`page ${page}/${totalPages}: ${list.length} products`);
    await new Promise((resolve) => setTimeout(resolve, 160));
  }

  const byId = new Map();
  for (const product of rawProducts) {
    if (product?.id && !byId.has(String(product.id))) byId.set(String(product.id), product);
  }
  const customProducts = Array.from(byId.values()).map((product, index) => normalizeProduct(product, index, groupMap));
  const payload = {
    syncedAt: new Date().toISOString(),
    sourceSite: "Zhejiang Oron New Materials Co., Ltd.",
    sourceUrl: firstUrl,
    total: customProducts.length,
    categories: Array.from(new Set(customProducts.map((product) => product.category))).sort(),
    products: customProducts
  };
  fs.writeFileSync("src/data/custom-products.json", JSON.stringify(payload, null, 2));
  fs.writeFileSync("work/alibaba-sync/custom-products-summary.json", JSON.stringify({
    totalLines,
    pageLines,
    totalPages,
    uniqueProducts: customProducts.length,
    categories: payload.categories
  }, null, 2));
  console.log(`wrote ${customProducts.length} custom products`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
