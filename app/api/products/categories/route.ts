import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({name:z.string().min(1).max(160),slug:z.string().regex(/^[a-z0-9-]+$/),parentId:z.string().uuid().optional(),description:z.string().max(1000).optional(),sortOrder:z.number().int().default(0),status:z.enum(['active','archived']).default('active')});
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT * FROM product_categories ORDER BY sort_order,name');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requireAdmin();if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid category'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO product_categories(name,slug,parent_id,description,sort_order,status) VALUES($1,$2,$3,$4,$5,$6) RETURNING id',[d.name,d.slug,d.parentId||null,d.description||'',d.sortOrder,d.status]);await log('created','product-category',r.rows[0].id);return NextResponse.json(r.rows[0],{status:201})}
