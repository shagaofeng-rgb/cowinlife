import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import { dashboardData } from '@/lib/analytics';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const range = new URL(request.url).searchParams.get('range') || '7d';
  return NextResponse.json(await dashboardData(['7d', '30d', '90d'].includes(range) ? range : '7d'), { headers: { 'Cache-Control': 'private, max-age=30' } });
}
