import { requirePermission } from '@/lib/admin-api';
import { query } from '@/lib/database';
import { rangeFromRequest } from '@/lib/admin-date-range';
export const runtime='nodejs';
const safe=(v:string)=>`"${String(v||'').replaceAll('"','""')}"`;
export async function GET(request:Request){
  const blocked=await requirePermission('growth');if(blocked)return blocked;
  let range; try { range=rangeFromRequest(request); } catch { return Response.json({error:'Invalid date range'},{status:400}); }
  const r=await query<{event_time:string;page_path:string;source:string;channel:string;device:string;country:string}>("SELECT event_time::text,page_path,source,channel,device,country FROM analytics_events WHERE event_type='page_view' AND metadata->>'tracking_version'='2' AND event_time >= $1 AND event_time < $2 ORDER BY event_time DESC LIMIT 10000",[range.start,range.end]);
  const csv=['time,page,source,channel,device,country',...r.rows.map(x=>[x.event_time,x.page_path,x.source,x.channel,x.device,x.country].map(safe).join(','))].join('\n');
  return new Response(csv,{headers:{'Content-Type':'text/csv; charset=utf-8','Content-Disposition':'attachment; filename="cowinlife-analytics.csv"','Cache-Control':'private, no-store'}});
}
