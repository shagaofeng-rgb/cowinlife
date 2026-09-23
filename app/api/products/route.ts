import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requirePermission } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({name:z.string().min(1).max(200),slug:z.string().regex(/^[a-z0-9-]+$/),sku:z.string().max(80).optional(),status:z.enum(['draft','published','archived']).default('draft')});
export const runtime='nodejs';
export async function GET(){const b=await requirePermission('content');if(b)return b;const r=await query('SELECT * FROM products ORDER BY updated_at DESC LIMIT 100');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requirePermission('content');if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid product'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO products(name,slug,sku,status) VALUES($1,$2,$3,$4) RETURNING id',[d.name,d.slug,d.sku||null,d.status]);await log('created','product',r.rows[0].id);return NextResponse.json(r.rows[0],{status:201})}
