import SiteFrame from '@/components/interior/SiteFrame';

export default function NotFound() {
  return (
    <SiteFrame>
      <main id="main-content" className="cl-wrap cl-utility">
        <p className="cl-eyebrow">404 · Page not found</p>
        <h1>This page isn’t available.</h1>
        <p className="cl-lead">Explore the product catalogue or search for what you need.</p>
        <div className="cl-actions">
          <a className="cl-button" href="/product.html">Browse products</a>
          <a className="cl-button cl-button-outline" href="/search.html">Search Cowinlife</a>
        </div>
      </main>
    </SiteFrame>
  );
}
