import { notFound } from 'next/navigation';
import { getPage, getIndex } from '@/lib/content';
import Website from '@/components/Website';
import InteriorPage from '@/components/interior/InteriorPage';
import { getInteriorContent } from '@/lib/interior-content';
import { getPublicSeoOverride } from '@/lib/public-seo';
import { brandText } from '@/lib/optimize-page';
type Props = { params: Promise<{ slug?: string[] }> };
export const revalidate = 300;
export const dynamic = 'force-static';
export async function generateMetadata({ params }: Props) {
  const { slug = [] } = await params;
  const path = '/' + slug.join('/');
  const page = await getPage(path);
  const configured = page ? await getPublicSeoOverride(path) : undefined;
  const title = brandText(configured?.title || page?.title || 'Cowinlife');
  const description = brandText(configured?.description || page?.description || '');
  // Imported external canonicals must never send search engines to the old company.
  let canonical = path;
  if (configured?.canonical) {
    try {
      const url = new URL(configured.canonical, 'https://www.cowinlife.com');
      if (['cowinlife.com', 'www.cowinlife.com'].includes(url.hostname) && !/dxh/i.test(url.pathname)) canonical = url.href;
    } catch { /* Use this page's canonical when a stored URL is invalid. */ }
  }
  return {
    title,
    description,
    alternates: { canonical },
  };
}
export default async function Page({ params }: Props) {
  const { slug = [] } = await params;
  const pathname = '/' + slug.join('/');
  const page = await getPage(pathname);
  if (!page) notFound();

  if (pathname === '/') {
    const { html, styles, carousels, inquiryHtml, thumbnail, displayTitle } = page;
    return <Website page={{ html, styles, carousels, inquiryHtml, thumbnail, displayTitle }} />;
  }

  const index = await getIndex();
  const entry = index.find(item => item.path === pathname);
  if (!entry) notFound();
  return <InteriorPage page={getInteriorContent(page, entry, index)} />;
}
