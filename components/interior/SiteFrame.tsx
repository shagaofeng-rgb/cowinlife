import { ArrowRight, Mail, Menu, Search } from 'lucide-react';
import brand from '@/config/brand.json';
import './interior.css';

const navigation = [
  ['Products', '/product.html'],
  ['Solutions', '/container-office.html'],
  ['Services', '/services.html'],
  ['Resources', '/resources.html'],
  ['About', '/about-us.html'],
] as const;

export function QuoteLink({ href = '/contact-us.html#inquiry', children = 'Request a quote' }: {
  href?: string;
  children?: React.ReactNode;
}) {
  return <a className="cl-button" href={href}>{children}<ArrowRight size={17} aria-hidden /></a>;
}

export default function SiteFrame({ children, quoteHref }: { children: React.ReactNode; quoteHref?: string }) {
  return (
    <div className="cl-site" data-layout="cowinlife-interior">
      <a className="cl-skip" href="#main-content">Skip to content</a>
      <header className="cl-header">
        <div className="cl-wrap cl-header-row">
          <a className="cl-brand" href="/" aria-label="Cowinlife home">{brand.name}</a>
          <nav className="cl-nav" aria-label="Main navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="cl-header-actions">
            <a className="cl-search-link" href="/search.html" aria-label="Search Cowinlife"><Search size={20} aria-hidden /></a>
            <QuoteLink href={quoteHref} />
            <details className="cl-mobile-menu">
              <summary aria-label="Open navigation"><Menu size={22} aria-hidden /></summary>
              <nav aria-label="Mobile navigation">
                {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
                <a href="/search.html">Search</a>
                <a href="/contact-us.html">Contact</a>
              </nav>
            </details>
          </div>
        </div>
      </header>
      {children}
      <footer className="cl-footer">
        <div className="cl-wrap cl-footer-row">
          <a className="cl-brand" href="/">{brand.name}</a>
          <a href={`mailto:${brand.email}`}><Mail size={16} aria-hidden /> {brand.email}</a>
          <a href="/contact-us.html">Contact</a>
          <a href="/doc/privacy-policy.html">Privacy policy</a>
        </div>
      </footer>
    </div>
  );
}
