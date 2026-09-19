import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({company:z.string().min(1).max(200),country:z.string().max(80).optional(),industry:z.string().max(120).optional(),level:z.enum(['A','B','C','D']).default('C')});
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT * FROM customers ORDER BY updated_at DESC LIMIT 100');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requireAdmin();if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid customer'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO customers(company,country,industry,level) VALUES($1,$2,$3,$4) RETURNING id',[d.company,d.country||'',d.industry||'',d.level]);await log('created','customer',r.rows[0].id);return NextResponse.json(r.rows[0],{status:201})}
