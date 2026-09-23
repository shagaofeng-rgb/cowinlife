import { NextResponse } from 'next/server';
import { recordEvent } from '@/lib/analytics';

export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.visitorId || !body.sessionId || !body.page) return NextResponse.json({ ok: false }, { status: 400 });
    await recordEvent({ ...body, country: request.headers.get('x-vercel-ip-country') || 'Unknown', region: request.headers.get('x-vercel-ip-country-region') || '' });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ ok: false }, { status: 500 }); }
}
