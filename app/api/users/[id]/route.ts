import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { passwordHash } from '@/lib/admin-auth';
import { query } from '@/lib/database';

const input = z.object({ active:z.boolean().optional(), role:z.string().min(1).optional(), password:z.string().min(8).max(200).optional() });
export const runtime='nodejs';
export async function PATCH(request:Request,{params}:{params:Promise<{id:string}>}) { const blocked=await requireAdmin();if(blocked)return blocked;const parsed=input.safeParse(await request.json());if(!parsed.success)return NextResponse.json({error:'Invalid account update'},{status:400});const {id}=await params;const data=parsed.data;await query('UPDATE users SET active=COALESCE($1,active),password_hash=COALESCE($2,password_hash),updated_at=now() WHERE id=$3',[data.active,data.password?passwordHash(data.password):null,id]);if(data.role){const role=await query<{id:string}>('SELECT id FROM roles WHERE name=$1',[data.role]);if(role.rows[0]){await query('DELETE FROM user_roles WHERE user_id=$1',[id]);await query('INSERT INTO user_roles(user_id,role_id) VALUES($1,$2)',[id,role.rows[0].id]);}}await log('updated','user',id);return NextResponse.json({ok:true}); }
