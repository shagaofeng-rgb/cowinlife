import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
export const runtime='nodejs';
export async function POST(){const b=await requireAdmin();if(b)return b;await query('UPDATE notifications SET read_at=now() WHERE read_at IS NULL');return NextResponse.json({ok:true})}
