import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin-auth';
import { dashboardData } from '@/lib/analytics';
import AdminDashboard from '@/components/AdminDashboard';
export const dynamic = 'force-dynamic';
export default async function AdminPage() { if (!await isAdmin()) redirect('/admin/login'); return <main className="admin-shell"><aside><a href="/admin">COWINLIFE</a><span>运营总览</span><span>客户询盘</span><span>流量分析</span><span>页面表现</span><span>访问路径</span></aside><article><AdminDashboard initial={await dashboardData('7d')} /></article></main>; }
