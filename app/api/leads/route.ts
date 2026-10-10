import { NextResponse } from 'next/server';
import { leadInput, log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
import { rangeFromRequest } from '@/lib/admin-date-range';
export const runtime = 'nodejs';
export async function GET(request: Request) {
  const blocked = await requireAdmin(); if (blocked) return blocked;
  let range; try { range = rangeFromRequest(request); } catch { return NextResponse.json({ error: 'Invalid date range' }, { status: 400 }); }
  const url = new URL(request.url);
  const page = Math.max(1, Math.floor(Number(url.searchParams.get('page')) || 1));
  const limit = [20,50,100].includes(Number(url.searchParams.get('limit'))) ? Number(url.searchParams.get('limit')) : 20;
  const status = url.searchParams.get('status') || '';
  const search = (url.searchParams.get('q') || '').trim().slice(0, 120);
  const values: unknown[] = [range.start, range.end];
  let where = 'created_at >= $1 AND created_at < $2';
  if (status) { values.push(status); where += ` AND status=$${values.length}`; }
  if (search) { values.push(`%${search}%`); where += ` AND (name ILIKE $${values.length} OR company ILIKE $${values.length} OR email ILIKE $${values.length})`; }
  const [rows,summary] = await Promise.all([
    query(`SELECT id,name,company,email,country,product,source,status,score,created_at FROM leads WHERE ${where} ORDER BY created_at DESC LIMIT ${limit} OFFSET ${(page-1)*limit}`, values),
    query<{total:string;new_count:string;high_count:string}>(`SELECT count(*)::text total, count(*) FILTER (WHERE status='new')::text new_count, count(*) FILTER (WHERE score>=70)::text high_count FROM leads WHERE ${where}`, values),
  ]);
  const counts=summary.rows[0];
  return NextResponse.json({ rows:rows.rows, total:Number(counts?.total||0), page, limit, summary:{ total:Number(counts?.total||0), pending:Number(counts?.new_count||0), high:Number(counts?.high_count||0) }, range:{from:range.from,to:range.to,label:range.label} },{headers:{'Cache-Control':'private, no-store'}});
}
export async function POST(request: Request) { const blocked = await requireAdmin(); if (blocked) return blocked; const parsed = leadInput.safeParse(await request.json()); if (!parsed.success) return NextResponse.json({ error: 'Invalid lead' }, { status: 400 }); const l = parsed.data; const result = await query<{id:string}>('INSERT INTO leads (name,company,email,country,product,message,status,score,source) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id',[l.name||'',l.company||'',l.email||'',l.country||'',l.product||'',l.message||'',l.status||'new',l.score||0,'Manual']); await log('created','lead',result.rows[0].id); return NextResponse.json(result.rows[0],{status:201}); }
