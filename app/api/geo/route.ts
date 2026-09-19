import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({query:z.string().min(2).max(300),active:z.boolean().default(true)});
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT * FROM geo_queries ORDER BY created_at DESC LIMIT 200');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requireAdmin();if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid GEO query'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO geo_queries(query,active) VALUES($1,$2) RETURNING id',[d.query,d.active]);await log('created','geo-query',r.rows[0].id);return NextResponse.json({...r.rows[0],status:'not_connected'},{status:201})}
