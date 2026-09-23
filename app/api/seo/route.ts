import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requirePermission } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({path:z.string().min(1).max(240),title:z.string().max(180).optional(),description:z.string().max(500).optional(),canonical:z.string().url().optional().or(z.literal('')),schema:z.record(z.string(),z.unknown()).default({})});
export const runtime='nodejs';
export async function GET(){const b=await requirePermission('growth');if(b)return b;const r=await query('SELECT * FROM seo_pages ORDER BY updated_at DESC LIMIT 200');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requirePermission('growth');if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid SEO page'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO seo_pages(path,title,description,canonical,schema) VALUES($1,$2,$3,$4,$5) ON CONFLICT(path) DO UPDATE SET title=EXCLUDED.title,description=EXCLUDED.description,canonical=EXCLUDED.canonical,schema=EXCLUDED.schema,updated_at=now() RETURNING id',[d.path,d.title||'',d.description||'',d.canonical||'',JSON.stringify(d.schema)]);await log('saved','seo',r.rows[0].id);return NextResponse.json(r.rows[0])}
