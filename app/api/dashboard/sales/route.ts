import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const [leads,customers,followUps,notifications]=await Promise.all([query<{status:string;count:string}>('SELECT status,count(*)::text count FROM leads GROUP BY status'),query<{count:string}>('SELECT count(*)::text count FROM customers'),query<{count:string}>('SELECT count(*)::text count FROM follow_ups WHERE status=$1 AND due_at<now()',['pending']),query<{count:string}>('SELECT count(*)::text count FROM notifications WHERE read_at IS NULL')]);return NextResponse.json({leads:leads.rows,customers:customers.rows[0]?.count||'0',overdueFollowUps:followUps.rows[0]?.count||'0',unreadNotifications:notifications.rows[0]?.count||'0'})}
