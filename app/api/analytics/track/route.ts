import { NextResponse } from 'next/server';
import { recordEvent } from '@/lib/analytics';
import { isAdmin } from '@/lib/admin-auth';

export const runtime = 'nodejs';
export async function POST(request: Request) {
  try {
    if (await isAdmin()) return NextResponse.json({ ok: true, skipped: true });
    if (/(bot|crawler|spider|slurp|headless|lighthouse|pagespeed)/i.test(request.headers.get('user-agent') || '')) return NextResponse.json({ ok: true, skipped: true });
    const body = await request.json();
    if (!body.visitorId || !body.sessionId || !body.page) return NextResponse.json({ ok: false }, { status: 400 });
    await recordEvent({ ...body, country: request.headers.get('x-vercel-ip-country') || 'Unknown', region: request.headers.get('x-vercel-ip-country-region') || '' });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ ok: false }, { status: 500 }); }
}
