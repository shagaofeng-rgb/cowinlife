import { notFound } from 'next/navigation';
import { getPage, getIndex } from '@/lib/content';
import Website from '@/components/Website';
import SearchPage from '@/components/SearchPage';
import { query } from '@/lib/database';
type Props = { params: Promise<{ slug?: string[] }>; searchParams: Promise<{ keyword?: string }> };
export const revalidate = 300;
export const dynamic = 'force-static';
export async function generateMetadata({ params }: Props) {
  const { slug = [] } = await params;
  const path = '/' + slug.join('/');
  const page = await getPage(path);
  let configured: { title: string; description: string; canonical: string } | undefined;
  if (process.env.DATABASE_URL) {
    try {
      const seo = await query<{title:string;description:string;canonical:string}>('SELECT title,description,canonical FROM seo_pages WHERE path=$1 LIMIT 1',[path]);
      configured = seo.rows[0];
    } catch {
      // The public page can still render its file-based metadata if SEO storage is unavailable.
    }
  }
  return { title: configured?.title || page?.title || 'Cowinlife', description: configured?.description || page?.description, alternates: configured?.canonical ? { canonical: configured.canonical } : undefined };
}
export default async function Page({ params, searchParams }: Props) {
  const { slug = [] } = await params;
  const pathname = '/' + slug.join('/');
  if (pathname === '/search.html') {
    const home = await getPage('/');
    if (!home) notFound();
    const { headerHtml, footerHtml, styles, inquiryHtml, thumbnail, displayTitle } = home;
    return <SearchPage shell={{ headerHtml, footerHtml, styles, inquiryHtml, thumbnail, displayTitle, carousels: [] }} entries={await getIndex()} keyword={(await searchParams).keyword || ''} />;
  }
  const page = await getPage(pathname);
  if (!page) notFound();
  const { html, styles, carousels, inquiryHtml, thumbnail, displayTitle } = page;
  return <Website page={{ html, styles, carousels, inquiryHtml, thumbnail, displayTitle }} />;
}
