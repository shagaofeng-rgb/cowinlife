'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { ArrowRight, Eye, FileText, Inbox, MessageSquare, TrendingUp, Users } from 'lucide-react';
import AdminDateRange, { rangeQuery, type RangeValue } from './AdminDateRange';
import type { dashboardData } from '@/lib/analytics';

type Data = Awaited<ReturnType<typeof dashboardData>>;
type Row = Data['sources'][number];
const number = (value: string) => Number(value || 0).toLocaleString('zh-CN');

function Empty({ children }: { children: React.ReactNode }) {
  return <div className="admin-visual-empty"><Inbox aria-hidden="true" size={28}/><p>{children}</p></div>;
}

export function AdminBars({ title, rows, href, rangeLabel }: { title: string; rows: Row[]; href?: string; rangeLabel: string }) {
  const max = Math.max(...rows.map(row => Number(row.value)), 1);
  return <section className="admin-panel admin-insight-panel">
    <div className="admin-panel-heading"><div><h2>{title}</h2><span>页面浏览 · {rangeLabel}</span></div>{href ? <Link href={href}>查看详情 <ArrowRight size={15} aria-hidden="true" /></Link> : null}</div>
    {rows.length ? <div className="admin-bars">{rows.map(row => <div className="admin-bar" key={row.label}>
      <span title={row.label}>{row.label}</span><i aria-hidden="true"><b style={{ width: `${Number(row.value) / max * 100}%` }} /></i><strong>{number(row.value)}</strong>
    </div>)}</div> : <Empty>暂无可用访问数据</Empty>}
  </section>;
}

function Trend({ rows, rangeLabel }: { rows: Data['trend']; rangeLabel: string }) {
  const max = Math.max(...rows.map(row => Number(row.pv)), 1);
  return <section className="admin-panel admin-trend-panel">
    <div className="admin-panel-heading"><div><h2><TrendingUp size={20} aria-hidden="true"/>访问趋势</h2><span>页面浏览量 · {rangeLabel}</span></div><Link href="/admin/analytics">流量分析 <ArrowRight size={15} aria-hidden="true" /></Link></div>
    {rows.length ? <div className="admin-chart" role="img" aria-label={`${rangeLabel}页面浏览趋势：${rows.map(row => `${row.date} ${row.pv}次`).join('，')}`}>
      {rows.map(row => <div key={row.date} title={`${row.date} · ${row.pv} 次`}><i style={{ height: `${Number(row.pv) / max * 100}%` }} /><span>{row.date.slice(5)}</span></div>)}
    </div> : <Empty>暂无可用访问数据</Empty>}
  </section>;
}

function RecentLeads({ rows, range }: { rows: Data['recentLeads']; range: Data['range'] }) {
  return <section className="admin-panel admin-recent-leads">
    <div className="admin-panel-heading"><h2><MessageSquare size={19} aria-hidden="true"/>最近客户询盘</h2><Link href="/admin/leads">查看全部 <ArrowRight size={15} aria-hidden="true" /></Link></div>
    {rows.length ? <ul className="admin-lead-list">{rows.map(lead => <li key={lead.id}>
      <Link href={`/admin/leads?${rangeQuery(range)}&q=${encodeURIComponent(lead.email || lead.name || lead.company || '')}`}>
        <strong>{lead.name || lead.company || lead.email || '未填写姓名'}</strong>
        <small>{lead.company || lead.product || '未填写公司或产品'}</small>
        <span>{new Date(lead.created_at).toLocaleDateString('zh-CN')} <ArrowRight size={14} aria-hidden="true"/></span>
      </Link>
    </li>)}</ul> : <Empty>暂无客户询盘</Empty>}
  </section>;
}

export default function AdminDashboard({ initial }: { initial: Data }) {
  const [data, setData] = useState(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const request = useRef(0);
  const change = async (range: RangeValue) => {
    const current = ++request.current;
    setLoading(true); setError('');
    try {
      const response = await fetch(`/api/admin/overview?${rangeQuery(range)}`, { cache: 'no-store' });
      if (!response.ok) throw new Error('读取失败，请重试');
      const next = await response.json() as Data;
      if (current === request.current) setData(next);
    } catch { if (current === request.current) setError('读取失败，请重试'); }
    finally { if (current === request.current) setLoading(false); }
  };
  const metrics = [
    { label: '页面浏览', value: data.summary.pv, icon: Eye, href: '/admin/analytics' },
    { label: '独立访客', value: data.summary.visitors, icon: Users, href: '/admin/analytics' },
    { label: '访问会话', value: data.summary.sessions, icon: MessageSquare, href: '/admin/analytics' },
    { label: '客户询盘', value: data.summary.inquiries, icon: FileText, href: '/admin/leads' },
  ];
  return <main className="admin-content dashboard-workspace">
    <div className="admin-dashboard-layout">
      <div className="admin-dashboard-main">
        <header className="admin-head"><div><p>运营总览</p><h1>企业运营中心</h1><span>网站访问与客户询盘</span></div><AdminDateRange value={data.range} onChange={change} busy={loading}/></header>
        {error ? <div className="admin-error" role="alert">{error}</div> : null}
        <section className="admin-metrics" aria-label={`${data.range.label}核心指标`}>
          {metrics.map(({label,value,icon:Icon,href}) => <Link key={label} href={href} className="admin-metric"><span><Icon size={20} aria-hidden="true" />{label}</span><small>{data.range.label}</small><strong>{number(value)}</strong></Link>)}
        </section>
        <Trend rows={data.trend} rangeLabel={data.range.label}/>
        <div className="admin-grid"><AdminBars title="来源渠道" rows={data.sources} href="/admin/analytics" rangeLabel={data.range.label}/><AdminBars title="热门页面" rows={data.pages} href="/admin/analytics" rangeLabel={data.range.label}/></div>
      </div>
      <RecentLeads rows={data.recentLeads} range={data.range}/>
    </div>
    {loading ? <p className="admin-status" role="status">正在更新所选时间范围…</p> : null}
  </main>;
}
