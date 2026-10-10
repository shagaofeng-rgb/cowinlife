import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requirePermission } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({query:z.string().min(2).max(300),active:z.boolean().default(true)});
export const runtime='nodejs';
export async function GET(request:Request){const b=await requirePermission('growth');if(b)return b;const params=new URL(request.url).searchParams;const page=Math.max(1,Math.floor(Number(params.get('page'))||1));const limit=20;const search=(params.get('q')||'').trim().slice(0,120);const values=search?[`%${search}%`]:[];const where=search?'WHERE query ILIKE $1':'';const [rows,count]=await Promise.all([query(`SELECT id,query,active,created_at FROM geo_queries ${where} ORDER BY created_at DESC LIMIT ${limit} OFFSET ${(page-1)*limit}`,values),query<{count:string}>(`SELECT count(*)::text count FROM geo_queries ${where}`,values)]);return NextResponse.json({rows:rows.rows,total:Number(count.rows[0]?.count||0),page,limit},{headers:{'Cache-Control':'private, no-store'}})}
export async function POST(request:Request){const b=await requirePermission('growth');if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid GEO query'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO geo_queries(query,active) VALUES($1,$2) RETURNING id',[d.query,d.active]);await log('created','geo-query',r.rows[0].id);return NextResponse.json({...r.rows[0],status:'not_connected'},{status:201})}
