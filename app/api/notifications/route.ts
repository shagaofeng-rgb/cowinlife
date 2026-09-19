import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT * FROM notifications ORDER BY created_at DESC LIMIT 50');return NextResponse.json(r.rows)}
