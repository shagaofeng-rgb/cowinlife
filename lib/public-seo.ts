import { unstable_cache } from 'next/cache';
import { query } from '@/lib/database';

type SeoOverride = { title: string | null; description: string | null; canonical: string | null };

export const publicSeoCacheTag = 'cowinlife-public-seo';

const getPublicSeoOverrides = unstable_cache(
  async () => {
    const { rows } = await query<SeoOverride & { path: string }>(`
      SELECT path, title, description, canonical
      FROM seo_pages
      WHERE title <> '' OR description <> '' OR canonical <> ''
    `);
    return Object.fromEntries(rows.map(({ path, ...override }) => [path, override]));
  },
  ['cowinlife-public-seo-on-demand'],
  { tags: [publicSeoCacheTag], revalidate: false },
);

export async function getPublicSeoOverride(path: string): Promise<SeoOverride | undefined> {
  if (!process.env.DATABASE_URL) return undefined;

  try {
    return (await getPublicSeoOverrides())[path];
  } catch {
    // Keep the page's file-based metadata available when the database is unavailable.
    return undefined;
  }
}
