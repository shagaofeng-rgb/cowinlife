import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PackageCheck, Search, SlidersHorizontal } from "lucide-react";
import { PublicShell, RouteHero } from "@/components/storefront-shell";
import { customProductCategories, customProductImage, customProducts, searchCustomProducts } from "@/lib/custom-products";

const pageSize = 48;

type CustomProductSearchParams = { q?: string; category?: string; page?: string };

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<CustomProductSearchParams>;
}): Promise<Metadata> {
  const { q = "", category = "", page = "1" } = await searchParams;
  const isFiltered = Boolean(q || category);
  const requestedPage = Math.max(1, Number(page) || 1);
  const totalPages = Math.max(1, Math.ceil(customProducts.length / pageSize));
  const currentPage = Math.min(requestedPage, totalPages);
  const canonical = !isFiltered && currentPage > 1 ? `/custom-products?page=${currentPage}` : "/custom-products";

  return {
    title: currentPage > 1 && !isFiltered ? `Custom Products - Page ${currentPage}` : "Custom Products",
    description: "Browse made-to-order custom decor products. No stock pricing is displayed; contact Cowinlife for quotation and customization.",
    alternates: { canonical },
    robots: isFiltered ? { index: false, follow: true } : { index: true, follow: true }
  };
}

export default async function CustomProductsPage({
  searchParams
}: {
  searchParams: Promise<CustomProductSearchParams>;
}) {
  const { q = "", category = "", page = "1" } = await searchParams;
  const currentPage = Math.max(1, Number(page) || 1);
  const filtered = searchCustomProducts(q, category);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const visible = filtered.slice((safePage - 1) * pageSize, safePage * pageSize);

  const pageHref = (nextPage: number) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (nextPage > 1) params.set("page", String(nextPage));
    const query = params.toString();
    return query ? `/custom-products?${query}` : "/custom-products";
  };

  return (
    <PublicShell>
      <RouteHero
        eyebrow="Made to order"
        title="Custom Products"
        text={`${customProducts.length} synchronized custom products for OEM, ODM, sample-based, design-based, packaging, and material customization. Prices are not displayed because these products are made to order.`}
      />
      <section className="section route-section">
        <form className="custom-filter-bar" action="/custom-products">
          <label>
            <Search size={17} />
            <input name="q" defaultValue={q} placeholder="Search custom products, material, pattern, SKU..." aria-label="Search custom products" />
          </label>
          <label>
            <SlidersHorizontal size={17} />
            <select name="category" defaultValue={category} aria-label="Custom product category">
              <option value="">All custom categories</option>
              {customProductCategories.map((item) => <option value={item} key={item}>{item}</option>)}
            </select>
          </label>
          <button className="button primary">Filter</button>
          {(q || category) && <Link className="button secondary" href="/custom-products">Reset</Link>}
        </form>

        <div className="custom-count">
          <PackageCheck size={18} />
          <span>{filtered.length} products - Page {safePage} of {totalPages} - quotation required</span>
        </div>

        <div className="custom-product-grid">
          {visible.map((product) => (
            <article className="custom-card" key={product.id}>
              <Link href={`/custom-products/${product.slug}`} aria-label={`View ${product.name}`}>
                <Image src={customProductImage(product)} alt={product.name} width={520} height={520} />
              </Link>
              <div>
                <span>{product.category} / {product.sku}</span>
                <h3>{product.name}</h3>
                <p>{product.tags.slice(0, 4).join(" / ")}</p>
                <div className="product-meta">
                  <span>MOQ: {product.moq}</span>
                  <span>No stock price</span>
                </div>
                <div className="card-actions">
                  <Link className="button primary" href={`/custom-products/${product.slug}`}>View details</Link>
                  <Link className="button secondary" href={`/contact?product=${product.sku}`}>Request quote</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <nav className="pagination" aria-label="Custom products pagination">
          {safePage > 1 && <Link className="button secondary" href={pageHref(safePage - 1)}>Previous</Link>}
          <span>Page {safePage} / {totalPages}</span>
          {safePage < totalPages && <Link className="button secondary" href={pageHref(safePage + 1)}>Next</Link>}
        </nav>
      </section>
    </PublicShell>
  );
}
