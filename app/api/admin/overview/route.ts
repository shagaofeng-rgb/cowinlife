import { NextResponse } from 'next/server';
import { isAdmin } from '@/lib/admin-auth';
import { dashboardData } from '@/lib/analytics';
import { rangeFromRequest } from '@/lib/admin-date-range';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  if (!await isAdmin()) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    return NextResponse.json(await dashboardData(rangeFromRequest(request)), { headers: { 'Cache-Control': 'private, no-store' } });
  } catch {
    return NextResponse.json({ error: '无法读取所选时间范围' }, { status: 400 });
  }
}
