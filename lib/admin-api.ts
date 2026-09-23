import { z } from 'zod';
import { adminRole, isAdmin } from './admin-auth';
import { query } from './database';

export const leadInput = z.object({ name: z.string().trim().max(160).optional(), company: z.string().trim().max(160).optional(), email: z.string().email().optional().or(z.literal('')), country: z.string().trim().max(80).optional(), product: z.string().trim().max(200).optional(), message: z.string().trim().max(5000).optional(), status: z.enum(['new','contacted','qualified','quoting','negotiating','won','lost','invalid']).optional(), score: z.number().int().min(0).max(100).optional() });
export async function requireAdmin() { return (await isAdmin()) ? null : Response.json({ error: 'Unauthorized' }, { status: 401 }); }
const permissions:Record<string,string[]>={sales:['Super Admin','Admin','Sales Manager','Sales'],content:['Super Admin','Admin','Content Manager'],growth:['Super Admin','Admin','SEO Manager','Analyst'],system:['Super Admin']};
export async function requirePermission(area:keyof typeof permissions) { const identity=await adminRole(); if(!identity) return Response.json({error:'Unauthorized'},{status:401}); return permissions[area].includes(identity.role) ? null : Response.json({error:'Forbidden'},{status:403}); }
export async function log(action: string, module: string, recordId?: string) { await query('INSERT INTO activity_logs (action,module,record_id) VALUES ($1,$2,$3)', [action,module,recordId || null]); }
