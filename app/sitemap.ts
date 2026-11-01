import type { MetadataRoute } from 'next';
import { getIndex } from '@/lib/content';

const origin = 'https://cowinlife.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getIndex();
  return pages.map(({ path }) => ({ url: new URL(path, origin).href }));
}
