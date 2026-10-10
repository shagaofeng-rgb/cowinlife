import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const [rows,count]=await Promise.all([query('SELECT id,title,body,created_at,read_at FROM notifications ORDER BY created_at DESC LIMIT 6'),query<{count:string}>('SELECT count(*)::text count FROM notifications WHERE read_at IS NULL')]);return NextResponse.json({rows:rows.rows,unread:Number(count.rows[0]?.count||0)},{headers:{'Cache-Control':'private, no-store'}})}
