import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({type:z.enum(['blog','case-study','application','faq','download']),title:z.string().min(1),slug:z.string().regex(/^[a-z0-9-]+$/),content:z.string().optional(),status:z.enum(['draft','published','archived']).default('draft')});
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT * FROM content_posts ORDER BY updated_at DESC LIMIT 100');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requireAdmin();if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid content'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO content_posts(type,title,slug,content,status) VALUES($1,$2,$3,$4,$5) RETURNING id',[d.type,d.title,d.slug,d.content||'',d.status]);await log('created','content',r.rows[0].id);return NextResponse.json(r.rows[0],{status:201})}
