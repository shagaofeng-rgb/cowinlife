import { redirect } from 'next/navigation';
import { adminRole } from '@/lib/admin-auth';
import { adminDateRange } from '@/lib/admin-date-range';
import { dashboardData } from '@/lib/analytics';
import { AnalyticsWorkspace } from '@/components/GrowthWorkspace';
export const dynamic='force-dynamic';
export default async function Analytics(){const identity=await adminRole();if(!identity)redirect('/admin/login');return <AnalyticsWorkspace data={await dashboardData(adminDateRange(new URLSearchParams({ range: 'today' })))} canExport={['Super Admin','Admin','SEO Manager','Analyst'].includes(identity.role)} />}
