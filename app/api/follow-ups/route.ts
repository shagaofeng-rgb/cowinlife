import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
const input=z.object({leadId:z.string().uuid().optional(),customerId:z.string().uuid().optional(),title:z.string().min(1).max(200),dueAt:z.string().datetime().optional(),priority:z.enum(['low','normal','high','urgent']).default('normal')});
export const runtime='nodejs';
export async function GET(){const blocked=await requireAdmin();if(blocked)return blocked;const r=await query('SELECT * FROM follow_ups WHERE status=$1 ORDER BY due_at ASC NULLS LAST LIMIT 100',['pending']);return NextResponse.json(r.rows)}
export async function POST(request:Request){const blocked=await requireAdmin();if(blocked)return blocked;const parsed=input.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:'Invalid follow-up'},{status:400});const d=parsed.data;const r=await query<{id:string}>('INSERT INTO follow_ups (lead_id,customer_id,title,due_at,priority) VALUES ($1,$2,$3,$4,$5) RETURNING id',[d.leadId||null,d.customerId||null,d.title,d.dueAt||null,d.priority]);await log('created','follow-up',r.rows[0].id);return NextResponse.json(r.rows[0],{status:201});}
