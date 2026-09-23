'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NotificationCenter from './NotificationCenter';

type Item = readonly [string, string];
type Group = readonly [string, readonly Item[]];
const groups: readonly Group[] = [
  ['运营', [['/admin', '数据总览'], ['/admin/analytics', '流量分析']]],
  ['销售', [['/admin/leads', '客户询盘'], ['/admin/customers', '客户'], ['/admin/follow-ups', '跟进任务']]],
  ['网站', [['/admin/products', '产品'], ['/admin/content', '内容'], ['/admin/seo', 'SEO / GEO']]],
  ['系统', [['/admin/settings', '设置与日志']]],
];

export default function AdminFrame({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  if (path === '/admin/login') return <>{children}</>;
  return <div className="admin-frame"><aside className="admin-frame-side"><Link href="/admin" className="admin-frame-brand">COWINLIFE</Link>{groups.map(([label, links]) => <section key={label}><small>{label}</small>{links.map(([href, name]) => <Link key={href} className={path === href ? 'active' : ''} href={href}>{name}</Link>)}</section>)}<a className="admin-view-site" href="/" target="_blank" rel="noreferrer">查看网站 ↗</a></aside><div className="admin-frame-body"><header><span>企业运营后台</span><nav><NotificationCenter /><Link href="/admin/settings">账号设置</Link></nav></header>{children}</div></div>;
}
