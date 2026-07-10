const baseUrl = process.env.SITE_BASE_URL || "http://127.0.0.1:3000";

async function checkPage(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`);
  const text = await response.text();
  const issues = [];
  if (response.status !== (options.status || 200)) issues.push(`expected ${options.status || 200}, got ${response.status}`);
  if (options.mustContain) {
    for (const item of options.mustContain) {
      if (!text.includes(item)) issues.push(`missing text: ${item}`);
    }
  }
  if (options.seo !== false && response.status === 200) {
    if (!/<title>[^<]+<\/title>/i.test(text)) issues.push("missing title tag");
    if (!/name="description"/i.test(text)) issues.push("missing meta description");
  }
  return { path, status: response.status, ok: issues.length === 0, issues };
}

async function postJson(path, payload, expectedStatus = 200) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload)
  });
  const body = await response.json().catch(() => ({}));
  const issues = [];
  if (response.status !== expectedStatus) issues.push(`expected ${expectedStatus}, got ${response.status}: ${JSON.stringify(body)}`);
  return { path, status: response.status, ok: issues.length === 0, issues, body };
}

async function main() {
  const catalogResponse = await fetch(`${baseUrl}/api/storefront/products`);
  const catalog = await catalogResponse.json();
  const firstProduct = catalog.products[0];
  const customProductsResponse = await fetch(`${baseUrl}/custom-products`);
  const customProductsHtml = await customProductsResponse.text();
  const firstCustomHref = (customProductsHtml.match(/href="(\/custom-products\/[^"]+)"/) || [])[1];
  const firstCollectionSlug = "nursery-wall-stickers";
  const pageChecks = [
    ["/", { mustContain: ["COWINLIFE"] }],
    ["/products", { mustContain: [firstProduct.sku] }],
    [`/products/${firstProduct.slug}`, { mustContain: [firstProduct.sku, firstProduct.name] }],
    ["/custom-products", { mustContain: ["Custom Products", "products - Page", "No stock price"] }],
    [firstCustomHref || "/custom-products/missing", { mustContain: ["Request quote", "No stock price shown"] }],
    [`/collections/${firstCollectionSlug}`, { mustContain: ["Nursery Wall Stickers"] }],
    ["/search?q=window", { mustContain: ["Search"] }],
    ["/cart", { mustContain: ["Cart"] }],
    ["/checkout", { mustContain: ["Validated checkout"] }],
    ["/blog", { mustContain: ["Cowinlife guides"] }],
    ["/blog/how-to-apply-peel-and-stick-wall-decals", { mustContain: ["How to apply"] }],
    ["/news", { mustContain: ["Store updates"] }],
    ["/about", { mustContain: ["Cowinlife"] }],
    ["/contact", { mustContain: ["Contact Cowinlife"] }],
    ["/privacy", { mustContain: ["Privacy Policy"] }],
    ["/terms", { mustContain: ["Terms of Service"] }],
    ["/sitemap.xml", { seo: false, mustContain: ["sitemapindex", "/sitemaps/products-1.xml"] }],
    ["/sitemaps/products-1.xml", { seo: false, mustContain: ["<urlset", "/products/"] }],
    ["/sitemaps/posts-1.xml", { seo: false, mustContain: ["<urlset", "/blog/"] }],
    ["/robots.txt", { seo: false, mustContain: ["Sitemap"] }],
    ["/admin", { mustContain: ["后台"] }]
  ];

  const results = [];
  for (const [path, options] of pageChecks) {
    results.push(await checkPage(path, options));
  }

  results.push(await checkPage("/api/admin/console?module=dashboard", { status: 401, seo: false }));
  results.push(await postJson("/api/storefront/cart", { items: [{ productId: firstProduct.id, quantity: 2 }] }));
  results.push(await postJson("/api/storefront/forms", { email: "invalid" }, 400));
  results.push(await postJson("/api/storefront/orders", {
    email: "audit@example.com",
    name: "Audit User",
    address: "100 Test Street, New York, NY 10001",
    country: "US",
    items: [{ productId: firstProduct.id, quantity: 1 }]
  }, 201));

  const failed = results.filter((result) => !result.ok);
  for (const result of results) {
    const marker = result.ok ? "PASS" : "FAIL";
    console.log(`${marker} ${result.status} ${result.path}`);
    for (const issue of result.issues) console.log(`  - ${issue}`);
  }
  if (failed.length) {
    console.error(`Self-check failed: ${failed.length} issue group(s).`);
    process.exit(1);
  }
  console.log(`Self-check passed: ${results.length} checks.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
