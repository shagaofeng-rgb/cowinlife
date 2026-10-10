'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BarChart3, Boxes, ChevronRight, ClipboardList, FileText, Globe2, House, LayoutDashboard, LogOut, Menu, MessageSquare, Search, Settings, Users, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import NotificationCenter from './NotificationCenter';

type Area = 'all' | 'content' | 'growth' | 'system';
type Item = { href: string; label: string; icon: LucideIcon; area: Area };
const groups: { label: string; items: Item[] }[] = [
  { label: '运营', items: [{ href: '/admin', label: '数据总览', icon: LayoutDashboard, area: 'all' }, { href: '/admin/analytics', label: '流量分析', icon: BarChart3, area: 'all' }] },
  { label: '销售', items: [{ href: '/admin/leads', label: '客户询盘', icon: MessageSquare, area: 'all' }, { href: '/admin/customers', label: '客户', icon: Users, area: 'all' }, { href: '/admin/follow-ups', label: '跟进任务', icon: ClipboardList, area: 'all' }] },
  { label: '网站', items: [{ href: '/admin/products', label: '产品', icon: Boxes, area: 'content' }, { href: '/admin/content', label: '内容', icon: FileText, area: 'content' }, { href: '/admin/forms', label: '网站表单', icon: House, area: 'content' }, { href: '/admin/seo', label: 'SEO / GEO', icon: Search, area: 'growth' }] },
  { label: '系统', items: [{ href: '/admin/settings', label: '设置与日志', icon: Settings, area: 'system' }] },
];
const canSee = (role: string | null, area: Area) => {
  if (area === 'all') return true;
  if (area === 'content') return ['Super Admin', 'Admin', 'Content Manager'].includes(role || '');
  if (area === 'growth') return ['Super Admin', 'Admin', 'SEO Manager', 'Analyst'].includes(role || '');
  return role === 'Super Admin';
};

export default function AdminFrame({ children, role }: { children: React.ReactNode; role: string | null }) {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMenuOpen(false), [path]);
  if (path === '/admin/login') return <>{children}</>;
  const logout = async () => { await fetch('/api/admin/logout', { method: 'POST' }); window.location.assign('/admin/login'); };
  return <div className="admin-frame">
    <aside className={`admin-frame-side ${menuOpen ? 'open' : ''}`} aria-label="后台主导航">
      <Link href="/admin" className="admin-frame-brand">COWINLIFE</Link>
      {groups.map(group => {
        const visible = group.items.filter(item => canSee(role, item.area));
        return visible.length ? <section key={group.label}><small>{group.label}</small>{visible.map(({ href, label, icon: Icon }) => <Link key={href} className={path === href ? 'active' : ''} href={href} aria-current={path === href ? 'page' : undefined}><Icon size={18} strokeWidth={1.8} aria-hidden="true"/>{label}</Link>)}</section> : null;
      })}
      <a className="admin-view-site" href="/" target="_blank" rel="noreferrer"><Globe2 size={17} aria-hidden="true"/>查看网站 <ChevronRight size={16} aria-hidden="true"/></a>
    </aside>
    {menuOpen ? <button className="admin-nav-backdrop" aria-label="关闭导航" onClick={() => setMenuOpen(false)} /> : null}
    <div className="admin-frame-body">
      <header className="admin-topbar"><div className="admin-topbar-title"><button type="button" className="admin-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? '关闭导航' : '打开导航'} aria-expanded={menuOpen}>{menuOpen ? <X size={21} /> : <Menu size={21}/>}</button><span>企业运营后台</span></div><nav aria-label="账户操作"><NotificationCenter />{canSee(role, 'system') ? <Link href="/admin/settings"><Settings size={17} aria-hidden="true"/>账号设置</Link> : null}<button className="admin-logout" onClick={logout}><LogOut size={17} aria-hidden="true"/>退出</button></nav></header>
      {children}
    </div>
  </div>;
}
