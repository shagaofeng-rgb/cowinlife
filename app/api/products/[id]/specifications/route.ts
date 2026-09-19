import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({name:z.string().min(1).max(120),value:z.string().min(1).max(1000),sortOrder:z.number().int().default(0)});
export const runtime='nodejs';
export async function GET(_r:Request,{params}:{params:Promise<{id:string}>}){const b=await requireAdmin();if(b)return b;const{id}=await params;const r=await query('SELECT * FROM product_specifications WHERE product_id=$1 ORDER BY sort_order,id',[id]);return NextResponse.json(r.rows)}
export async function POST(request:Request,{params}:{params:Promise<{id:string}>}){const b=await requireAdmin();if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid specification'},{status:400});const{id}=await params;const d=p.data;const r=await query<{id:string}>('INSERT INTO product_specifications(product_id,name,value,sort_order) VALUES($1,$2,$3,$4) RETURNING id',[id,d.name,d.value,d.sortOrder]);await log('created','product-specification',r.rows[0].id);return NextResponse.json(r.rows[0],{status:201})}
