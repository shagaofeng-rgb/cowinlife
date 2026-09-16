import { notFound } from 'next/navigation';
import { getPage, getIndex } from '@/lib/content';
import Website from '@/components/Website';
import SearchPage from '@/components/SearchPage';
type Props = { params: Promise<{ slug?: string[] }>; searchParams: Promise<{ keyword?: string }> };
export const dynamic = 'force-dynamic';
export async function generateMetadata({ params }: Props) {
  const { slug = [] } = await params;
  const page = await getPage('/' + slug.join('/'));
  return { title: page?.title || 'Search | NEW BRAND', description: page?.description };
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
