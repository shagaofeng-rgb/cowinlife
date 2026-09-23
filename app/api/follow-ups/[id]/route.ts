import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';

const input = z.object({ status: z.enum(['pending', 'completed', 'cancelled']).optional(), title: z.string().trim().min(1).max(200).optional(), priority: z.enum(['low', 'normal', 'high', 'urgent']).optional(), dueAt: z.string().datetime().nullable().optional() });
export const runtime = 'nodejs';
export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const blocked = await requireAdmin(); if (blocked) return blocked;
  const parsed = input.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: 'Invalid follow-up' }, { status: 400 });
  const { id } = await params; const data = parsed.data;
  await query('UPDATE follow_ups SET status=COALESCE($1,status),title=COALESCE($2,title),priority=COALESCE($3,priority),due_at=COALESCE($4,due_at),updated_at=now() WHERE id=$5',[data.status,data.title,data.priority,data.dueAt,id]);
  await log(data.status === 'completed' ? 'completed' : 'updated', 'follow-up', id);
  return NextResponse.json({ ok: true });
}
