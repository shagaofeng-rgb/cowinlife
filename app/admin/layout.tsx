import AdminFrame from '@/components/AdminFrame';
import { adminRole } from '@/lib/admin-auth';
import './admin.css';
export const metadata={robots:{index:false,follow:false}};
export default async function Layout({children}:{children:React.ReactNode}){const identity=await adminRole();return <AdminFrame role={identity?.role || null}>{children}</AdminFrame>}
