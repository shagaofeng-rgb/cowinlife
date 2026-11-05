import { ArrowUpRight, Download, Mail, MapPin, Play } from 'lucide-react';
import brand from '@/config/brand.json';
import type { InteriorContent } from '@/lib/interior-content';
import Inquiry from './Inquiry';
import { Breadcrumbs, Cards, Hero, Pagination, RichText, Video } from './InteriorParts';
import Photo from './Photo';
import ProductDetail from './ProductDetail';
import SiteFrame, { QuoteLink } from './SiteFrame';

function Catalogue({ page }: { page: InteriorContent }) {
  return (
    <>
      <Hero page={page} photo={page.kind !== 'catalog'} />
      <div className="cl-wrap cl-catalogue">
        <aside className="cl-rail" aria-label="Product categories">
          <h2>Product families</h2>
          {page.rail.map(link => <a key={link.href} href={link.href} aria-current={link.href === page.base ? 'page' : undefined}>{link.title}</a>)}
        </aside>
        <div>
          <div className="cl-list-head">
            <h2>{page.cards.some(card => card.kind === 'product') ? 'Explore models' : 'Explore the range'}</h2>
            <a href="/search.html">Search the catalogue</a>
          </div>
          <Cards cards={page.cards} />
          <Pagination items={page.pagination} current={page.pageNumber} />
          {page.copy.html && <section className="cl-section"><h2>About this range</h2><RichText content={page.copy} /></section>}
        </div>
      </div>
    </>
  );
}

function ResourceList({ page }: { page: InteriorContent }) {
  const links = [
    ['News & insights', '/news.html'],
    ['Project cases', '/case.html'],
    ['Video library', '/video.html'],
    ['Downloads', '/data-download.html'],
  ];
  const title = { news: 'Latest insights', cases: 'Explore projects', media: 'Explore videos', resources: 'Explore resources' }[page.kind as 'news' | 'cases' | 'media' | 'resources'];
  return (
    <>
      <Hero page={page} />
      <div className="cl-wrap">
        <nav className="cl-resource-links" aria-label="Resource categories">
          {links.map(([label, href]) => <a key={href} href={href} aria-current={page.base === href ? 'page' : undefined}>{label}</a>)}
        </nav>
        <section className="cl-section">
          <h2>{title}</h2>
          <Cards cards={page.cards} />
          {page.kind === 'media' && page.cards.length === 0 && <p className="cl-note">No videos on this page. <a href="/video.html">Browse the video library</a>.</p>}
          <Pagination items={page.pagination} current={page.pageNumber} />
          <RichText content={page.copy} />
        </section>
      </div>
    </>
  );
}

function Editorial({ page }: { page: InteriorContent }) {
  return (
    <>
      <Hero page={page} />
      <div className="cl-wrap">
        <div className={page.copy.headings.length > 0 ? 'cl-editorial' : 'cl-section'}>
          <div>
            {page.video && <Video media={page.video} label={page.title} />}
            <RichText content={page.copy} />
          </div>
          {page.copy.headings.length > 0 && (
            <nav className="cl-toc" aria-label="On this page">
              <strong>On this page</strong>
              {page.copy.headings.map(heading => <a key={heading.id} href={`#${heading.id}`}>{heading.label}</a>)}
            </nav>
          )}
        </div>
        {page.cards.length > 0 && (
          <section className="cl-section">
            <h2>{page.kind === 'solution' ? 'Explore suitable models' : 'Related resources'}</h2>
            <Cards cards={page.cards} />
            <Pagination items={page.pagination} current={page.pageNumber} />
          </section>
        )}
      </div>
    </>
  );
}

function Contact({ page }: { page: InteriorContent }) {
  const coordinates = `${brand.location.latitude},${brand.location.longitude}`;
  return (
    <>
      <section className="cl-hero">
        <div className="cl-wrap">
          <Breadcrumbs page={page} />
          <p className="cl-eyebrow">Contact Cowinlife</p>
          <h1>Let’s talk about your project.</h1>
          <p className="cl-lead">Contact us about modular buildings, product specifications, or distribution.</p>
        </div>
      </section>
      <div className="cl-wrap">
        <section className="cl-section cl-split">
          <div>
            <h2>Contact details</h2>
            <div className="cl-contact-links">
              <a href={`mailto:${brand.email}`}><Mail size={20} aria-hidden /> {brand.email}</a>
              <a href={brand.location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                <MapPin size={20} aria-hidden /> Open company location in Google Maps <ArrowUpRight size={17} aria-hidden />
              </a>
            </div>
            <p className="cl-note">For a quote, include the destination, quantity, intended use, and any layout requirements.</p>
          </div>
          <iframe className="cl-map" title="Company location on Google Maps" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(coordinates)}&z=15&hl=en&output=embed`} />
        </section>
      </div>
    </>
  );
}

function VideoDetail({ page }: { page: InteriorContent }) {
  return (
    <div className="cl-wrap cl-video-detail">
      <Breadcrumbs page={page} />
      <p className="cl-eyebrow">Installation library</p>
      <h1>{page.title}</h1>
      {page.description && <p className="cl-lead">{page.description}</p>}
      {page.date && <time dateTime={page.date}>{page.date}</time>}
      {page.video ? <Video media={page.video} label={page.title} /> : page.thumbnail ? (
        <Photo image={page.thumbnail} sizes="(max-width: 640px) 90vw, 920px" className="cl-video-cover" eager />
      ) : <p className="cl-note"><Play size={18} aria-hidden /> For this installation guide, contact Cowinlife.</p>}
      {page.copy.html && <section className="cl-section"><h2>About this guide</h2><RichText content={page.copy} /></section>}
      {page.guides.length > 0 && <section className="cl-section"><h2>Products in this guide</h2><Cards cards={page.guides} /></section>}
      {page.cards.length > 0 && <section className="cl-section"><h2>More video guides</h2><Cards cards={page.cards} /></section>}
    </div>
  );
}

function Downloads({ page }: { page: InteriorContent }) {
  return (
    <>
      <Hero page={page} photo={false} />
      <div className="cl-wrap cl-section">
        <h2><Download size={22} aria-hidden /> Product documentation</h2>
        <RichText content={page.copy} />
        <p>Contact us for the catalogue, technical sheets, and installation documents relevant to your project.</p>
        <QuoteLink>Request documentation</QuoteLink>
      </div>
    </>
  );
}

function Body({ page }: { page: InteriorContent }) {
  switch (page.kind) {
    case 'product': return <ProductDetail page={page} />;
    case 'catalog':
    case 'family': return <Catalogue page={page} />;
    case 'solution': return page.pageNumber > 1 ? <Catalogue page={page} /> : <Editorial page={page} />;
    case 'cases':
    case 'news':
    case 'media':
    case 'resources': return <ResourceList page={page} />;
    case 'contact': return <Contact page={page} />;
    case 'video': return <VideoDetail page={page} />;
    case 'downloads': return <Downloads page={page} />;
    default: return <Editorial page={page} />;
  }
}

export default function InteriorPage({ page }: { page: InteriorContent }) {
  return (
    <SiteFrame quoteHref={page.contact ? '#inquiry' : undefined}>
      <main id="main-content">
        <Body page={page} />
        {page.faqs.length > 0 && (
          <section className="cl-wrap cl-section">
            <h2>Frequently asked questions</h2>
            {page.faqs.map(faq => <details className="cl-faq" key={faq.id}><summary>{faq.label}</summary><RichText content={faq.answer} /></details>)}
          </section>
        )}
        {page.contact && <Inquiry path={page.path} title={page.title} product={page.kind === 'product' ? page.title : undefined} />}
      </main>
    </SiteFrame>
  );
}
