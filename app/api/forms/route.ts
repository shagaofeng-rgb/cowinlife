import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requirePermission } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({name:z.string().min(1).max(160),type:z.enum(['general','product','oem-odm','quote','sample','contact']),settings:z.record(z.string(),z.unknown()).default({}),active:z.boolean().default(true)});
export const runtime='nodejs';
export async function GET(){const b=await requirePermission('content');if(b)return b;const r=await query('SELECT * FROM forms ORDER BY updated_at DESC LIMIT 100');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requirePermission('content');if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid form'},{status:400});const d=p.data;const r=await query<{id:string}>('INSERT INTO forms(name,type,settings,active) VALUES($1,$2,$3,$4) RETURNING id',[d.name,d.type,JSON.stringify(d.settings),d.active]);await log('created','form',r.rows[0].id);return NextResponse.json(r.rows[0],{status:201})}
