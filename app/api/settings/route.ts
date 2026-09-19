import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({key:z.string().regex(/^[a-z0-9_.-]+$/),value:z.unknown()});
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT key,value,updated_at FROM site_settings ORDER BY key');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requireAdmin();if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid setting'},{status:400});await query('INSERT INTO site_settings(key,value) VALUES($1,$2) ON CONFLICT(key) DO UPDATE SET value=EXCLUDED.value,updated_at=now()',[p.data.key,JSON.stringify(p.data.value)]);await log('updated','settings',p.data.key);return NextResponse.json({ok:true})}
