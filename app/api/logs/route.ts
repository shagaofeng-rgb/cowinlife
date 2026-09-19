import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT l.*,u.email user_email FROM activity_logs l LEFT JOIN users u ON u.id=l.user_id ORDER BY l.created_at DESC LIMIT 200');return NextResponse.json(r.rows)}
