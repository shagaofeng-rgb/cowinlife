import { NextResponse } from 'next/server';
import { z } from 'zod';
import { log, requireAdmin } from '@/lib/admin-api';
import { query } from '@/lib/database';
import { passwordHash } from '@/lib/admin-auth';
const input=z.object({email:z.string().email(),name:z.string().min(1).max(120),password:z.string().min(8).max(200),role:z.string().min(1)});
export const runtime='nodejs';
export async function GET(){const b=await requireAdmin();if(b)return b;const r=await query('SELECT u.id,u.email,u.name,u.active,coalesce(array_agg(r.name) filter(where r.name is not null),\'{}\') roles FROM users u LEFT JOIN user_roles ur ON ur.user_id=u.id LEFT JOIN roles r ON r.id=ur.role_id GROUP BY u.id ORDER BY u.created_at DESC');return NextResponse.json(r.rows)}
export async function POST(request:Request){const b=await requireAdmin();if(b)return b;const p=input.safeParse(await request.json());if(!p.success)return NextResponse.json({error:'Invalid user'},{status:400});const d=p.data;const user=await query<{id:string}>('INSERT INTO users(email,name,password_hash) VALUES($1,$2,$3) RETURNING id',[d.email,d.name,passwordHash(d.password)]);const role=await query<{id:string}>('SELECT id FROM roles WHERE name=$1',[d.role]);if(role.rows[0])await query('INSERT INTO user_roles(user_id,role_id) VALUES($1,$2)',[user.rows[0].id,role.rows[0].id]);await log('created','user',user.rows[0].id);return NextResponse.json(user.rows[0],{status:201})}
