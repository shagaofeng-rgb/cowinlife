import type { Metadata } from 'next';
import { Search } from 'lucide-react';
import { getIndex } from '@/lib/content';
import { entryTitle } from '@/lib/interior-content';
import SiteFrame from '@/components/interior/SiteFrame';

export const metadata: Metadata = {
  title: 'Search | Cowinlife',
  alternates: { canonical: '/search.html' },
  robots: { index: false, follow: true },
};

const filters = [
  ['all', 'All'],
  ['product', 'Products'],
  ['article', 'Articles'],
  ['video', 'Videos'],
  ['document', 'Documents'],
] as const;
const resultsPerPage = 20;

function first(input: string | string[] | undefined) {
  return Array.isArray(input) ? input[0] || '' : input || '';
}

export default async function SearchPage({ searchParams }: {
  searchParams: Promise<{ keyword?: string | string[]; kind?: string | string[]; page?: string | string[] }>;
}) {
  const params = await searchParams;
  const keyword = first(params.keyword).trim().slice(0, 160);
  const selected = filters.find(([value]) => value === first(params.kind))?.[0] || 'all';
  const terms = keyword.toLowerCase().split(/\s+/).filter(Boolean);
  const index = terms.length ? await getIndex() : [];
  const results = index.filter(entry => {
    if (entry.path === '/') return false;
    const kind = entry.path.startsWith('/video/') ? 'video'
      : entry.path.startsWith('/doc/') || entry.path === '/data-download.html' ? 'document'
        : entry.kind;
    if (selected !== 'all' && selected !== kind) return false;
    const text = `${entryTitle(entry)} ${entry.description} ${entry.path}`.toLowerCase();
    return terms.every(term => text.includes(term));
  });
  const maxPage = Math.max(1, Math.ceil(results.length / resultsPerPage));
  const requestedPage = Number(first(params.page));
  const currentPage = Number.isSafeInteger(requestedPage) ? Math.max(1, Math.min(maxPage, requestedPage)) : 1;
  const start = (currentPage - 1) * resultsPerPage;
  const url = (kind: string, page = 1) => {
    const query = new URLSearchParams({ keyword, kind });
    if (page > 1) query.set('page', String(page));
    return '/search.html?' + query.toString();
  };

  return (
    <SiteFrame>
      <main id="main-content" className="cl-wrap cl-utility">
        <p className="cl-eyebrow">Search</p>
        <h1>Find a product or guide</h1>
        <form className="cl-search-form" method="get" action="/search.html" role="search">
          <input type="search" name="keyword" aria-label="Search catalogue" defaultValue={keyword} maxLength={160} placeholder="Product name or keyword" required />
          {selected !== 'all' && <input type="hidden" name="kind" value={selected} />}
          <button className="cl-button" type="submit"><Search size={18} aria-hidden /> Search</button>
        </form>
        {keyword && (
          <>
            <nav className="cl-resource-links" aria-label="Result types">
              {filters.map(([kind, label]) => <a key={kind} href={url(kind)} aria-current={selected === kind ? 'page' : undefined}>{label}</a>)}
            </nav>
            <div className="cl-search-results">
              <p>{results.length} {results.length === 1 ? 'result' : 'results'} for “{keyword}”</p>
              {results.slice(start, start + resultsPerPage).map(entry => (
                <a key={entry.path} href={entry.path}>
                  <strong>{entryTitle(entry)}</strong>
                  {entry.description && <p>{entry.description}</p>}
                </a>
              ))}
              {!results.length && <p className="cl-note">Try a model name, a shorter keyword, or a different result type.</p>}
            </div>
            {maxPage > 1 && (
              <nav className="cl-pagination" aria-label="Search results pagination">
                {currentPage > 1 && <a href={url(selected, currentPage - 1)}>Previous</a>}
                <span>Page {currentPage} of {maxPage}</span>
                {currentPage < maxPage && <a href={url(selected, currentPage + 1)}>Next</a>}
              </nav>
            )}
          </>
        )}
      </main>
    </SiteFrame>
  );
}
