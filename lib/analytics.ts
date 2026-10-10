import { query } from './database';
import type { AdminDateRange } from './admin-date-range';

function sourceFor(referrer: string, currentUrl: string) {
  const url = new URL(currentUrl, 'https://cowinlife.com');
  const utm = url.searchParams.get('utm_source');
  if (utm) return { source: utm.slice(0, 100), channel: (url.searchParams.get('utm_medium') || 'Campaign').slice(0, 100) };
  const host = (() => { try { return new URL(referrer).hostname.toLowerCase(); } catch { return ''; } })();
  if (!host || host === 'cowinlife.com' || host === 'www.cowinlife.com') return { source: 'Direct', channel: 'Direct' };
  if (/google|bing|yahoo|duckduckgo|baidu|yandex/.test(host)) return { source: host.replace(/^www\./, ''), channel: 'Organic Search' };
  if (/linkedin|facebook|instagram|youtube|tiktok|x\.com|twitter/.test(host)) return { source: host.replace(/^www\./, ''), channel: 'Social' };
  return { source: host.replace(/^www\./, ''), channel: 'Referral' };
}

export async function recordEvent(input: { visitorId: string; sessionId: string; page: string; previousPage?: string; referrer?: string; currentUrl?: string; device?: string; country?: string; region?: string }) {
  const page = String(input.page || '/').slice(0, 240);
  const attribution = sourceFor(String(input.referrer || ''), String(input.currentUrl || page));
  await query('INSERT INTO analytics_events (visitor_id,session_id,event_type,page_path,previous_path,referrer,source,channel,device,country,region,metadata) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)', [input.visitorId.slice(0, 80), input.sessionId.slice(0, 80), 'page_view', page, String(input.previousPage || '').slice(0, 240), String(input.referrer || '').slice(0, 300), attribution.source, attribution.channel, String(input.device || '').slice(0, 40), String(input.country || 'Unknown').slice(0, 8), String(input.region || '').slice(0, 120), JSON.stringify({ tracking_version: '2', site_environment: 'production' })]);
}

const eventWhere = "event_type='page_view' AND metadata->>'tracking_version'='2' AND metadata->>'site_environment'='production' AND event_time >= $1 AND event_time < $2";

export async function dashboardData(range: AdminDateRange) {
  const values = [range.start, range.end];
  const [summary, trend, sources, pages, journeys, geography, devices, inquiries, recentLeads] = await Promise.all([
    query<{ pv: string; visitors: string; sessions: string }>(`SELECT count(*)::text pv, count(DISTINCT visitor_id)::text visitors, count(DISTINCT session_id)::text sessions FROM analytics_events WHERE ${eventWhere}`, values),
    query<{ date: string; pv: string; uv: string }>(`SELECT to_char(event_time AT TIME ZONE 'Asia/Shanghai', 'YYYY-MM-DD') date, count(*)::text pv, count(DISTINCT visitor_id)::text uv FROM analytics_events WHERE ${eventWhere} GROUP BY 1 ORDER BY 1`, values),
    query<{ label: string; value: string }>(`SELECT source label, count(*)::text value FROM analytics_events WHERE ${eventWhere} GROUP BY 1 ORDER BY count(*) DESC LIMIT 8`, values),
    query<{ label: string; value: string }>(`SELECT page_path label, count(*)::text value FROM analytics_events WHERE ${eventWhere} GROUP BY 1 ORDER BY count(*) DESC LIMIT 8`, values),
    query<{ label: string; value: string }>(`SELECT concat(coalesce(nullif(previous_path, ''), '入口'), ' → ', page_path) label, count(*)::text value FROM analytics_events WHERE ${eventWhere} GROUP BY 1 ORDER BY count(*) DESC LIMIT 8`, values),
    query<{ label: string; value: string }>(`SELECT case when region is null or region='' then country else concat(country,' · ',region) end label, count(*)::text value FROM analytics_events WHERE ${eventWhere} GROUP BY 1 ORDER BY count(*) DESC LIMIT 8`, values),
    query<{ label: string; value: string }>(`SELECT coalesce(device,'Unknown') label, count(*)::text value FROM analytics_events WHERE ${eventWhere} GROUP BY 1 ORDER BY count(*) DESC LIMIT 8`, values),
    query<{ count: string }>('SELECT count(*)::text count FROM inquiries WHERE created_at >= $1 AND created_at < $2', values),
    query<{ id:string; name:string; company:string; email:string; country:string; product:string; source:string; status:string; created_at:string }>('SELECT id,name,company,email,country,product,source,status,created_at FROM leads WHERE created_at >= $1 AND created_at < $2 ORDER BY created_at DESC LIMIT 8', values),
  ]);
  return {
    summary: { ...summary.rows[0], inquiries: inquiries.rows[0]?.count || '0' },
    trend: trend.rows, sources: sources.rows, pages: pages.rows, journeys: journeys.rows,
    geography: geography.rows, devices: devices.rows, recentLeads: recentLeads.rows,
    range: { key: range.key, from: range.from, to: range.to, label: range.label },
  };
}
