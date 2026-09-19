import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
export type Carousel = { id: string; [key: string]: unknown };
export type PageData = { path: string; title: string; displayTitle: string; description: string; html: string; headerHtml: string; footerHtml: string; styles: string[]; carousels: Carousel[]; inquiryHtml: string; thumbnail: string };
export type Entry = { path: string; file: string; title: string; description: string; kind: string; thumbnail: string };
let indexPromise: Promise<Entry[]> | undefined;
const pageCache = new Map<string, Promise<PageData | null>>();
export const getIndex = (): Promise<Entry[]> => {
  indexPromise ||= readFile(path.join(process.cwd(), 'content/index.json'), 'utf8').then(JSON.parse);
  return indexPromise;
};
export const getPage = (pathname: string): Promise<PageData | null> => {
  const cached = pageCache.get(pathname);
  if (cached) return cached;
  const result = (async () => {
  const entry = (await getIndex()).find(p => p.path === pathname);
  if (!entry) return null;
  return JSON.parse(await readFile(path.join(process.cwd(), 'content/pages', entry.file), 'utf8'));
  })();
  pageCache.set(pathname, result);
  if (pageCache.size > 300) pageCache.delete(pageCache.keys().next().value!);
  return result;
};
