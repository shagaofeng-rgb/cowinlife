import 'server-only';
import dimensions from '@/content/image-dimensions.json';
import type { PageData } from './content';

const imageDimensions = dimensions as Record<string, number[]>;
const availableWidths = [384, 640, 750, 828, 1080, 1200, 1920];

function attribute(tag: string, name: string): string | undefined {
  return tag.match(new RegExp(`\\s${name}="([^"]*)"`, 'i'))?.[1];
}

function setAttribute(tag: string, name: string, value: string): string {
  const encoded = value.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  const pattern = new RegExp(`\\s${name}=(?:"[^"]*"|'[^']*'|[^\\s>]+)`, 'i');
  return pattern.test(tag)
    ? tag.replace(pattern, ` ${name}="${encoded}"`)
    : tag.replace(/\s*\/>$/, ` ${name}="${encoded}"/>`).replace(/(?<!\/)>(?=$)/, ` ${name}="${encoded}">`);
}

function imageUrl(src: string, width: number): string {
  if (src === '/assets/264d18c377579ba8eaaa.jpg') return `/optimized/home-hero-264d18c377579ba8eaaa-${width}.webp`;
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
}

function optimizeImages(html: string): string {
  let priorityAssigned = false;
  return html.replace(/<img\b[^>]*>/gi, tag => {
    const src = attribute(tag, 'src');
    const size = src && imageDimensions[src];
    if (!src || !size) return tag;
    const [width, height] = size;
    let result = setAttribute(setAttribute(tag, 'width', String(width)), 'height', String(height));
    if (width < 400 || !/\.(?:jpe?g|png|webp)$/i.test(src)) return result;

    const priority = !priorityAssigned && width >= 600;
    if (priority) priorityAssigned = true;
    const candidates = availableWidths.filter(candidate => candidate <= width * 1.15);
    if (!candidates.length) candidates.push(384);
    const sizes = priority ? '100vw' : '(max-width: 767px) 100vw, 50vw';
    result = setAttribute(result, 'src', imageUrl(src, candidates[candidates.length - 1]));
    result = setAttribute(result, 'srcset', candidates.map(candidate => `${imageUrl(src, candidate)} ${candidate}w`).join(', '));
    result = setAttribute(result, 'sizes', sizes);
    result = setAttribute(result, 'loading', priority ? 'eager' : 'lazy');
    result = setAttribute(result, 'fetchpriority', priority ? 'high' : 'low');
    return result;
  });
}

function readableName(value: string): string {
  return value.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function nameInputs(html: string): string {
  return html.replace(/<(?:input|textarea|select)\b[^>]*>/gi, tag => {
    if (/\s(?:aria-label|aria-labelledby)=/i.test(tag)) return tag;
    const type = attribute(tag, 'type');
    if (type && /^(?:hidden|submit|reset|button)$/i.test(type)) return tag;
    const raw = attribute(tag, 'data-title') || attribute(tag, 'placeholder') || attribute(tag, 'name');
    return raw ? setAttribute(tag, 'aria-label', readableName(raw)) : tag;
  });
}

function nameLinks(html: string): string {
  return html.replace(/<a\b[^>]*>[\s\S]*?<\/a>/gi, link => {
    const opening = link.match(/^<a\b[^>]*>/i)?.[0];
    if (!opening || /\s(?:aria-label|aria-labelledby)=/i.test(opening)) return link;
    const content = link.slice(opening.length, -4);
    const visible = content.replace(/<[^>]*>/g, '').replace(/&(?:nbsp|zwnj|zwj|shy);|&#(?:160|8203);/gi, '').trim();
    const imageAlt = content.match(/<img\b[^>]*\balt="([^"]+)"/i)?.[1];
    const generic = /^(?:read more|learn more|more|view more|→?\s*read more)$/i.test(visible);
    if (visible && !generic && !/^\d+$/.test(visible)) return link;
    if (imageAlt && !/^\d+$/.test(imageAlt)) return link;
    const combined = opening + content;
    const social = combined.match(/whatsapp|youtube|tiktok|facebook|linkedin|instagram|twitter|pinterest/i)?.[0];
    const action = combined.match(/search|email|phone|cart|home|next|previous|close|menu|top/i)?.[0];
    const href = attribute(opening, 'href') || '';
    const slug = href.split(/[?#]/)[0].split('/').filter(Boolean).pop()?.replace(/\.(?:html|php)$/, '');
    const label = imageAlt && /^\d+$/.test(imageAlt)
      ? `Cowinlife factory photo ${imageAlt}`
      : /^\d+$/.test(visible)
        ? `Page ${visible}`
        : generic && slug
          ? `Read more about ${readableName(slug)}`
          : social ? `Cowinlife on ${social}` : action ? readableName(action) : slug ? readableName(slug) : 'Contact Cowinlife';
    return link.replace(opening, setAttribute(opening, 'aria-label', label));
  });
}

export function brandText(value: string): string {
  return value
    .replace(/\bNEW BRAND\b/g, 'Cowinlife')
    .replace(/\b(?:Suzhou\s+)?Da\s*xiang\b(?:\s+Container(?:\s+Hous(?:e|ing))?)?(?:\s+Co\.?[,]?\s*Ltd\.?)?|\bDXH(?=\b|container|prefab|expandable)(?:container)?/gi, '')
    .replace(/\[(?:Location|New company[^\]]*|Contact person|Contact details[^\]]*)\]\s*/gi, '');
}

export function optimizePage(page: PageData): PageData {
  let html = brandText(page.html);
  html = html.replace(/<div\b[^>]*package-block-type="main"[^>]*>/i, tag =>
    /\srole=/.test(tag) ? tag : setAttribute(tag, 'role', 'main'));
  html = nameLinks(nameInputs(optimizeImages(html)));
  return {
    ...page,
    title: brandText(page.title),
    displayTitle: brandText(page.displayTitle),
    description: brandText(page.description),
    html,
    headerHtml: brandText(page.headerHtml),
    footerHtml: brandText(page.footerHtml),
    inquiryHtml: nameLinks(nameInputs(brandText(page.inquiryHtml))),
  };
}
