import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';

const input = z.object({ company: z.string().trim().min(1).max(200).optional(), country: z.string().trim().max(80).optional(), industry: z.string().trim().max(120).optional(), level: z.enum(['A','B','C','D']).optional() });
export const runtime = 'nodejs';
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const blocked = await requireAdmin(); if (blocked) return blocked;
  const parsed = input.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: 'Invalid customer' }, { status: 400 });
  const { id } = await params; const data = parsed.data;
  await query('UPDATE customers SET company=COALESCE($1,company),country=COALESCE($2,country),industry=COALESCE($3,industry),level=COALESCE($4,level),updated_at=now() WHERE id=$5',[data.company,data.country,data.industry,data.level,id]);
  await log('updated', 'customer', id); return NextResponse.json({ ok: true });
}
