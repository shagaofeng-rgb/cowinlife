import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/admin-auth';
import { dashboardData } from '@/lib/analytics';
import AdminDashboard from '@/components/AdminDashboard';
export const dynamic = 'force-dynamic';
export default async function AdminPage() { if (!await isAdmin()) redirect('/admin/login'); return <AdminDashboard initial={await dashboardData('7d')} />; }
