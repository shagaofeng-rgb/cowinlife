import { notFound } from 'next/navigation';
import { getPage, getIndex } from '@/lib/content';
import Website from '@/components/Website';
import SearchPage from '@/components/SearchPage';
import { query } from '@/lib/database';
type Props = { params: Promise<{ slug?: string[] }>; searchParams: Promise<{ keyword?: string }> };
export const dynamic = 'force-dynamic';
export async function generateMetadata({ params }: Props) {
  const { slug = [] } = await params;
  const path = '/' + slug.join('/');
  const [page, seo] = await Promise.all([getPage(path), query<{title:string;description:string;canonical:string}>('SELECT title,description,canonical FROM seo_pages WHERE path=$1 LIMIT 1',[path])]);
  const configured = seo.rows[0];
  return { title: configured?.title || page?.title || 'Cowinlife', description: configured?.description || page?.description, alternates: configured?.canonical ? { canonical: configured.canonical } : undefined };
}
export default async function Page({ params, searchParams }: Props) {
  const { slug = [] } = await params;
  const pathname = '/' + slug.join('/');
  if (pathname === '/search.html') {
    const home = await getPage('/');
    if (!home) notFound();
    return <SearchPage shell={home} entries={await getIndex()} keyword={(await searchParams).keyword || ''} />;
  }
  const page = await getPage(pathname);
  if (!page) notFound();
  return <Website page={page} />;
}
