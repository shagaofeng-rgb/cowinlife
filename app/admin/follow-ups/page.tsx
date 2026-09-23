import { redirect } from 'next/navigation'; import { isAdmin } from '@/lib/admin-auth'; import CrmWorkspace from '@/components/CrmWorkspace';
export const dynamic='force-dynamic'; export default async function FollowUps(){if(!await isAdmin())redirect('/admin/login');return <CrmWorkspace mode="followups"/>}
