import 'server-only';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
export type Carousel = { id: string; [key: string]: unknown };
export type PageData = { path: string; title: string; displayTitle: string; description: string; html: string; headerHtml: string; footerHtml: string; styles: string[]; carousels: Carousel[]; inquiryHtml: string; thumbnail: string };
export type Entry = { path: string; file: string; title: string; description: string; kind: string; thumbnail: string };
export const getIndex = cache(async (): Promise<Entry[]> => JSON.parse(await readFile(path.join(process.cwd(), 'content/index.json'), 'utf8')));
export const getPage = cache(async (pathname: string): Promise<PageData | null> => {
  const entry = (await getIndex()).find(p => p.path === pathname);
  if (!entry) return null;
  return JSON.parse(await readFile(path.join(process.cwd(), 'content/pages', entry.file), 'utf8'));
});
