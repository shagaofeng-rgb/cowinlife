import media from '@/content/cleaned-media.json';

// Existing article and media-library URLs continue to resolve to cleaned assets.
export async function GET(
  _request: Request,
  context: { params: Promise<{ asset: string }> },
) {
  const { asset } = await context.params;
  const target = (media as Record<string, string>)[`/assets/${asset}`];
  if (!target || !target.startsWith('/cleaned/') && !target.startsWith('/assets/')) {
    return new Response(null, { status: 404 });
  }
  return new Response(null, {
    status: 307,
    headers: { Location: target, 'Cache-Control': 'public, max-age=300' },
  });
}

export const HEAD = GET;
