import { ArrowRight, BookOpen, Box, ChevronRight, FileText, Play } from 'lucide-react';
import { sectionNames, type InteriorCard, type InteriorContent, type InteriorText, type InteriorVideo } from '@/lib/interior-content';
import Photo from './Photo';

export function Breadcrumbs({ page }: { page: InteriorContent }) {
  return (
    <nav className="cl-crumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      {page.crumbs.map(crumb => (
        <span key={crumb.href}><ChevronRight size={13} aria-hidden /><a href={crumb.href}>{crumb.title}</a></span>
      ))}
      <span><ChevronRight size={13} aria-hidden /><span aria-current="page">{sectionNames[page.kind]}{page.pageNumber > 1 ? ` · Page ${page.pageNumber}` : ''}</span></span>
    </nav>
  );
}

export function Hero({ page, photo = true }: { page: InteriorContent; photo?: boolean }) {
  const image = photo ? page.thumbnail : undefined;
  return (
    <section className="cl-hero">
      <div className="cl-wrap">
        <Breadcrumbs page={page} />
        <div className={image ? 'cl-hero-grid' : undefined}>
          <div>
            <p className="cl-eyebrow">{sectionNames[page.kind]}</p>
            <h1 className={page.title.length > 66 ? 'cl-long-title' : undefined}>{page.title}</h1>
            {page.description && <p className="cl-lead">{page.description}</p>}
            {page.date && <time dateTime={page.date}>{page.date}</time>}
          </div>
          {image && <Photo image={image} sizes="(max-width: 640px) 90vw, 45vw" eager />}
        </div>
      </div>
    </section>
  );
}

export function RichText({ content }: { content: InteriorText }) {
  if (!content.html.trim()) return null;
  return <div className="cl-prose" dangerouslySetInnerHTML={{ __html: content.html }} />;
}

const cardIcons = { product: Box, article: BookOpen, video: Play, page: FileText };

export function Cards({ cards }: { cards: InteriorCard[] }) {
  if (!cards.length) return null;
  return (
    <div className="cl-cards">
      {cards.map(card => {
        const Icon = cardIcons[card.kind];
        return (
          <a key={card.href} href={card.href} className={card.photo ? 'cl-card' : 'cl-card cl-card-text'}>
            {card.photo ? <Photo image={card.photo} sizes="(max-width: 850px) 45vw, 30vw" /> : <Icon size={23} aria-hidden />}
            <h3>{card.title}</h3>
            {card.description && <p>{card.description}</p>}
            <span className="cl-text-link">
              {card.kind === 'product' ? 'View model' : card.kind === 'video' ? 'View guide' : 'Explore'}
              <ArrowRight size={15} aria-hidden />
            </span>
          </a>
        );
      })}
    </div>
  );
}

export function Pagination({ items, current }: { items: InteriorContent['pagination']; current: number }) {
  if (items.length < 2) return null;
  const shown = items.filter(({ number }, i) => i === 0 || i === items.length - 1 || Math.abs(number - current) <= 2);
  return (
    <nav className="cl-pagination" aria-label="Pagination">
      {shown.map(({ href, number }, i) => (
        <span key={href}>
          {i > 0 && number - shown[i - 1].number > 1 && <span aria-hidden="true">…</span>}
          <a href={href} aria-label={`Page ${number}`} aria-current={number === current ? 'page' : undefined}>{number}</a>
        </span>
      ))}
    </nav>
  );
}

export function Video({ media, label }: { media: InteriorVideo; label: string }) {
  return (
    <video className="cl-video" controls preload="none" playsInline poster={media.poster?.src} aria-label={label}>
      <source src={media.src} />
      <a href={media.src}>Open video</a>
    </video>
  );
}
