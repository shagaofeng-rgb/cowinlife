import 'server-only';

import { load, type CheerioAPI } from 'cheerio/slim';
import cleanedMedia from '@/content/cleaned-media.json';
import dimensions from '@/content/image-dimensions.json';
import redirects from '@/content/legacy-brand-redirects.json';
import type { Entry, PageData } from './content';

export const families = [
  '/expandable-container-house.html',
  '/detachable-container-house.html',
  '/folding-container-house.html',
  '/space-capsule-container.html',
  '/portable-toilet.html',
  '/sandwich-panel.html',
  '/custom-container-house.html',
];

export const solutions = [
  '/construction-site-use.html',
  '/container-office.html',
  '/residential-container-homes.html',
  '/garage-use.html',
  '/container-warehouse.html',
  '/container-shop.html',
  '/container-school.html',
  '/container-hospital.html',
  '/container-accommodation.html',
  '/other-use.html',
  '/warehouse-use.html',
  '/hospital-use.html',
  '/residential-use.html',
  '/shop-use.html',
  '/office-use.html',
];

const servicePages = new Set([
  '/services.html',
  '/customized.html',
  '/custom-container-home-manufacturer.html',
  '/what-our-clients-say.html',
  '/distributor.html',
  '/custom-container-house.html',
]);

const pageTypes = {
  '/product.html': 'catalog',
  '/news.html': 'news',
  '/case.html': 'cases',
  '/resources.html': 'resources',
  '/product-lives.html': 'media',
  '/video.html': 'media',
  '/data-download.html': 'downloads',
  '/contact-us.html': 'contact',
  '/doc/privacy-policy.html': 'policy',
  '/about-us.html': 'company',
  '/about-us1.html': 'company',
} as const;

export type InteriorKind = typeof pageTypes[keyof typeof pageTypes] | 'product' | 'article' | 'case' | 'solution' | 'service' | 'family' | 'video';

export const sectionNames: Record<InteriorKind, string> = {
  product: 'Product detail',
  catalog: 'Product catalogue',
  family: 'Product range',
  solution: 'Applications',
  cases: 'Case studies',
  case: 'Case study',
  news: 'News & insights',
  article: 'Resources',
  media: 'Video library',
  video: 'Video guide',
  resources: 'Resources',
  downloads: 'Downloads',
  service: 'Services',
  company: 'About Cowinlife',
  contact: 'Contact',
  policy: 'Legal',
};

const paginationPattern = /_list(\d*)\.html$/;
const safeMedia = cleanedMedia as Record<string, string>;
const sizeByPath = dimensions as Record<string, number[]>;
const legacyRedirects = redirects as Record<string, string>;
const pageTitleOverrides: Record<string, string> = {
  '/flat-pack-container-house-supplier1.html': 'Flat Pack Container House Supplier',
  '/services.html': 'Services & Customization',
  '/video.html': 'Video Library',
  '/data-download.html': 'Downloads',
};

export type InteriorPhoto = { src: string; alt: string; width: number; height: number };
export type InteriorLink = { href: string; title: string };
export type InteriorCard = InteriorLink & { description: string; photo?: InteriorPhoto; kind: 'product' | 'video' | 'article' | 'page' };
export type InteriorText = { html: string; headings: { id: string; label: string }[] };
export type InteriorVideo = { src: string; poster?: InteriorPhoto };

const cleanText = (value: string) => value.replace(/[\s\uFEFF]+/g, ' ').trim();
const legacyBrand = /dxhcontainer|\b(?:DXH|Daxiang|NEW BRAND)\b/i;
const meaningful = (value: string) => Boolean(value && !legacyBrand.test(value) && !value.includes('{{'));

function pageBase(path: string) {
  return path.replace(paginationPattern, '.html');
}

function pageNumber(path: string) {
  return Number(path.match(paginationPattern)?.[1] || '1');
}

export function entryTitle(entry: Entry) {
  return pageTitleOverrides[pageBase(entry.path)] || cleanText(entry.title.replace(/\s*\|\s*Cowinlife\s*$/i, ''));
}

function localAsset(input: string | undefined) {
  if (!input) return;
  if (input.startsWith('/_next/image?')) {
    input = new URLSearchParams(input.slice(input.indexOf('?') + 1)).get('url') || '';
  }
  if (/^\/(?:cleaned|assets|optimized)\/[\w.-]+$/.test(input)) return input;
}

export function interiorPhoto(input: string | undefined, alt: string): InteriorPhoto | undefined {
  const path = localAsset(input);
  if (!path) return;
  const src = safeMedia[path] || path;
  if (!/^\/cleaned\/[\w.-]+\.(?:png|jpe?g|webp|avif)$/i.test(src)) return;
  const [width, height] = sizeByPath[src] || sizeByPath[path] || [800, 800];
  return { src, alt: cleanText(alt), width, height };
}

function validUrl(input: string | undefined, entries: Map<string, Entry>, current: string) {
  if (!input || legacyBrand.test(input)) return;
  if (/^#[\w-]+$/.test(input)) return input;
  if (/^(?:mailto|tel):[^\s<>]+$/i.test(input)) return input;
  try {
    const url = new URL(input, 'https://cowinlife.com' + current);
    if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) return;
    if (!['cowinlife.com', 'www.cowinlife.com'].includes(url.hostname)) {
      if (url.protocol === 'https:') return url.href;
      return;
    }
    const destination = legacyRedirects[url.pathname] || url.pathname;
    if (entries.has(destination) || destination === '/search.html' || localAsset(destination)) {
      return destination + url.search + url.hash;
    }
  } catch { /* Skip malformed source links. */ }
}

const richTags = new Set([
  'a', 'abbr', 'address', 'b', 'blockquote', 'br', 'caption', 'code', 'col', 'colgroup',
  'dd', 'details', 'div', 'dl', 'dt', 'em', 'figcaption', 'figure', 'h2', 'h3', 'h4', 'h5', 'h6',
  'hr', 'i', 'img', 'li', 'ol', 'p', 'pre', 's', 'small', 'span', 'strong', 'sub', 'summary',
  'sup', 'table', 'tbody', 'td', 'tfoot', 'th', 'thead', 'tr', 'u', 'ul',
]);

function renderText(fragments: string[], entries: Map<string, Entry>, path: string, title: string, formIds = new Set<string>()): InteriorText {
  const $ = load(fragments.join('\n'), {}, false);
  $('script, style, noscript, template, iframe, svg, object, embed, form, input, button, select, textarea, link, meta').remove();
  $('h1').each((_, node) => {
    const h = $(node);
    if (cleanText(h.text()).toLowerCase() === title.toLowerCase()) h.remove();
    else h.replaceWith($('<h2>').append(h.contents()));
  });
  $('h2,h3,h4,h5,h6,p').each((_, node) => {
    const text = cleanText($(node).text());
    if (text === title || /^(?:leave a message|get in touch with us|recommended for you|if you have more questions, write to us)$/i.test(text) || /^just leave your email or phone number in the contact form/i.test(text)) {
      $(node).remove();
    }
  });

  const headings: InteriorText['headings'] = [];
  const ids = new Set<string>();
  $('*').each((_, node) => {
    if (!('tagName' in node)) return;
    const el = $(node);
    const tag = node.tagName.toLowerCase();
    if (!richTags.has(tag)) {
      el.replaceWith(el.contents());
      return;
    }
    const { href, src, alt, id, colspan, rowspan, scope } = node.attribs;
    for (const name of Object.keys(node.attribs)) el.removeAttr(name);
    if (id && /^[\w-]+$/.test(id) && !ids.has(id)) {
      el.attr('id', id);
      ids.add(id);
    }
    if (tag === 'a') {
      const safeHref = validUrl(href, entries, path);
      if (safeHref) el.attr('href', safeHref.startsWith(path + '#') ? safeHref.slice(path.length) : safeHref);
      else el.replaceWith(el.contents());
    } else if (tag === 'img') {
      const photo = interiorPhoto(src, meaningful(alt || '') ? alt : '');
      if (!photo) el.remove();
      else el.attr({
        src: photo.src,
        alt: photo.alt,
        width: String(photo.width),
        height: String(photo.height),
        loading: 'lazy',
        decoding: 'async',
      });
    } else if (tag === 'td' || tag === 'th') {
      if (/^\d{1,2}$/.test(colspan || '')) el.attr('colspan', colspan);
      if (/^\d{1,2}$/.test(rowspan || '')) el.attr('rowspan', rowspan);
      if (/^(row|col|rowgroup|colgroup)$/.test(scope || '')) el.attr('scope', scope);
    } else if (tag === 'h2' || tag === 'h3') {
      const label = cleanText(el.text());
      if (!meaningful(label)) return;
      let anchor = el.attr('id');
      if (!anchor) {
        anchor = 'detail-heading-' + (headings.length + 1);
        while (ids.has(anchor)) anchor += '-section';
        ids.add(anchor);
        el.attr('id', anchor);
      }
      headings.push({ id: anchor, label });
    }
  });

  $('a[href^="#"]').each((_, node) => {
    const link = $(node);
    const target = link.attr('href')!.slice(1);
    if (formIds.has(target)) link.attr('href', '#inquiry');
    else if (!ids.has(target)) link.replaceWith(link.contents());
  });
  $('table').each((_, node) => { $(node).wrap('<div class="table-scroll">'); });
  return { html: $.root().html() || '', headings };
}

function classify(entry: Entry, isCase: boolean): InteriorKind {
  const path = pageBase(entry.path);
  if (entry.kind === 'product') return 'product';
  if (entry.kind === 'article') return isCase ? 'case' : 'article';
  if (path.startsWith('/video/')) return 'video';
  if (path in pageTypes) return pageTypes[path as keyof typeof pageTypes];
  if (solutions.includes(path)) return 'solution';
  if (servicePages.has(path)) return 'service';
  if (path.startsWith('/video-') || path === '/expandable-container-internal-parts-installation.html') return 'media';
  return 'family';
}

function readVideo($: CheerioAPI, selector: string, title: string): InteriorVideo | undefined {
  const node = $(selector).filter((_, el) => !$(el).parents('.unit-list__item,.unit-video-list__item').length).first();
  const raw = node.attr('video-src') || node.attr('src');
  if (!raw) return;
  let src = localAsset(raw);
  if (!src) {
    try {
      const external = new URL(raw.startsWith('//') ? 'https:' + raw : raw);
      if (external.protocol === 'https:' && external.hostname === 'img.yfisher.com' && /\.(mp4|webm)$/i.test(external.pathname)) src = external.href;
    } catch { /* Skip invalid video URLs. */ }
  }
  if (!src || !/\.(mp4|webm)$/i.test(src)) return;
  return { src, poster: interiorPhoto(node.find('img[src]').first().attr('src'), title) };
}

export function interiorCard(entry: Entry): InteriorCard {
  const title = entryTitle(entry);
  return {
    href: entry.path,
    title,
    description: entry.description,
    photo: interiorPhoto(entry.thumbnail, ''),
    kind: entry.kind === 'product' || entry.kind === 'article' ? entry.kind : entry.path.startsWith('/video/') ? 'video' : 'page',
  };
}

export function getInteriorContent(page: PageData, entry: Entry, index: Entry[]) {
  const entries = new Map(index.map(item => [item.path, item]));
  const $ = load(page.html, {}, false);
  const crumb = $('[package-block-type="breadcrumb"]');
  const kind = classify(entry, Boolean(crumb.find('a[href="/case.html"]').length));
  const title = pageTitleOverrides[pageBase(page.path)] || cleanText(page.displayTitle) || entryTitle(entry);
  const path = page.path;
  const main = '[package-block-type="main"]';
  const info = $('[package-block-type="info"]');
  const description = cleanText(page.description);
  const mainUnits = $(main).find('[package-item="unit"]');
  const cardItems = $(main + ' .unit-list__item, ' + main + ' .unit-video-list__item, ' + main + ' .unit-product-lives__item, [package-block-type="extend"] .unit-list__item');
  const readLinks = (hrefs: (string | undefined)[]) => Array.from(new Set(hrefs.flatMap(href => {
    const dest = validUrl(href, entries, path)?.split(/[?#]/)[0];
    return dest && dest !== path && dest !== '/' && entries.has(dest) ? [dest] : [];
  })));
  const crumbs = readLinks(crumb.find('a[href]').toArray().map(a => $(a).attr('href'))).map(href => ({
    href, title: entryTitle(entries.get(href)!),
  }));
  const cardsByPath = new Map<string, InteriorCard>();
  for (const item of cardItems.toArray()) {
    const links = readLinks($(item).find('a[href]').toArray().map(a => $(a).attr('href')));
    const href = links[0];
    if (!href || cardsByPath.has(href)) continue;
    const card = interiorCard(entries.get(href)!);
    const altPhoto = $(item).find('img[src]').toArray().map(img => interiorPhoto($(img).attr('src'), '')).find(Boolean);
    cardsByPath.set(href, { ...card, photo: altPhoto || card.photo });
  }

  const isEditorial = kind === 'article' || kind === 'case' || kind === 'policy';
  const isList = ['catalog', 'family', 'solution', 'news', 'cases', 'media', 'resources'].includes(kind);
  const fragments: string[] = [];
  const specTables: string[] = [];
  const specSummary: { label: string; value: string }[] = [];
  const technicalField = /dimension|size|width|height|length|weight|thickness|material|color|floor|wall|roof|capacity|model|layout|frame|footprint|depth/i;
  const formIds = new Set($(main + ' [package-type="form"]').parentsUntil(main, '[id]').addBack('[id]')
    .toArray().flatMap(node => $(node).attr('id') || []));
  if (kind === 'product') {
    const profile = info.find('.unit-detail-profile').first().html();
    if (profile) fragments.push(profile);
  }
  for (const element of mainUnits.toArray()) {
    const unit = $(element);
    const type = unit.attr('package-type') || '';
    if (kind === 'product') {
      if (type === 'detail-html-tabs') {
        unit.find('[role="tabpanel"]').each((_, panel) => {
          if (($(panel).html() || '').includes('{{')) return;
          $(panel).find('table').each((_, table) => {
            const tableNode = $(table);
            if (tableNode.find('img, video, table').length) return;
            const rows = tableNode.find('tr').toArray().map(row => $(row).children('td,th').toArray().map(cell => cleanText($(cell).text())));
            const measurements = rows.flatMap(row => {
              if (row.length !== 2 || !technicalField.test(row[0]) || !meaningful(row[1]) || row[1].length > 120) return [];
              if (/^specification$|^item$/i.test(row[0])) return [];
              return [{ label: row[0], value: row[1] }];
            });
            const hasSpecHeader = rows[0]?.some(cell => /^(?:standard\s*(?:\/\s*specification|configuration)|specifications?)$/i.test(cell));
            if (!hasSpecHeader && measurements.length < 2) return;
            specSummary.push(...measurements);
            specTables.push($.html(table));
            tableNode.remove();
          });
          fragments.push($(panel).html() || '');
        });
      }
      continue;
    }
    if (isEditorial && !['article-detail-html', 'page-content-description', 'article-detail-part'].includes(type)) continue;
    if (['page-desc', 'text', 'image', 'button', 'article-detail-html', 'article-detail-part', 'video-detail', 'page-content-description', 'download-list'].includes(type)) {
      const html = unit.html();
      if (html) fragments.push(html);
    }
    if (!isList && ['list', 'video-list'].includes(type) && !isEditorial && kind !== 'video') {
      unit.find('.unit-list__item').each((_, item) => {
        if (!readLinks($(item).find('a[href]').toArray().map(a => $(a).attr('href'))).length) fragments.push($(item).html() || '');
      });
    }
  }

  const photos = new Map<string, InteriorPhoto>();
  const imageCandidates = info.find('.unit-detail-album__picture img[src]').toArray();
  if (kind === 'product') {
    for (const image of imageCandidates) {
      const src = $(image).attr('src');
      const alt = $(image).attr('alt')?.replaceAll('-', ' ') || title;
      const photo = interiorPhoto(src, meaningful(alt) ? alt : title);
      if (photo) photos.set(photo.src, photo);
    }
  }
  const thumbnail = interiorPhoto(page.thumbnail || entry.thumbnail, title);
  if (thumbnail && !photos.has(thumbnail.src)) photos.set(thumbnail.src, thumbnail);
  const photoList = Array.from(photos.values());

  const specs: { label: string; value: string }[] = [];
  info.find('.unit-detail-tradeinfo__item').each((_, item) => {
    const label = cleanText($(item).find('.unit-detail-tradeinfo__label').text()).replace(/[:：]$/, '');
    const value = cleanText($(item).find('.unit-detail-tradeinfo__value').text());
    if (meaningful(label) && meaningful(value) && technicalField.test(label)) {
      if (!specs.some(spec => spec.label === label && spec.value === value)) specs.push({ label, value });
    }
  });

  const base = pageBase(path);
  const pagination = index
    .filter(item => pageBase(item.path) === base && (item.path === base || paginationPattern.test(item.path)))
    .sort((a, b) => pageNumber(a.path) - pageNumber(b.path));
  const uniquePages = new Map(pagination.map(item => [pageNumber(item.path), item.path]));
  if (entries.has(base)) uniquePages.set(1, base);
  const railLinks = readLinks($(main + ' [package-type="list_sort"] a[href]').toArray().map(a => $(a).attr('href')));
  const guideLinks = readLinks($(main + ' [package-type="product-guide"] a[href]').toArray().map(a => $(a).attr('href')));
  const dateText = cleanText($(main + ' [package-type="detail-show-time"]').first().text());
  const date = /^\d{4}-\d{2}-\d{2}$/.test(dateText) ? dateText : undefined;
  const video = readVideo($, main + ' [video-src], ' + main + ' video[src]', title);
  const faqs = $(main + ' .faq-row').toArray().flatMap((node, index) => {
    const row = $(node);
    const question = row.find('.faq-title').first().clone();
    question.find('.faq-index').remove();
    const label = cleanText(question.text());
    const answer = row.find('.faq-content, .faq-answer').last().html();
    return meaningful(label) && answer ? [{ id: index, label, answer: renderText([answer], entries, path, '') }] : [];
  });
  const contact = kind === 'contact' || kind === 'product' || kind === 'service' || kind === 'solution' || kind === 'case' || mainUnits.is('[package-type="form"]');

  return {
    kind, title, description, path, base, crumbs, date, thumbnail, photos: photoList, specs, specSummary, video, contact, faqs,
    copy: renderText(fragments, entries, path, title, formIds),
    specTables: renderText(specTables, entries, path, title, formIds),
    cards: Array.from(cardsByPath.values()),
    rail: (railLinks.length ? railLinks : families).filter(href => entries.has(href)).map(href => ({ href, title: entryTitle(entries.get(href)!) })),
    guides: guideLinks.map(href => interiorCard(entries.get(href)!)),
    pagination: Array.from(uniquePages, ([number, href]) => ({ number, href })),
    pageNumber: pageNumber(path),
  };
}

export type InteriorContent = ReturnType<typeof getInteriorContent>;
