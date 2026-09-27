import AdminFrame from '@/components/AdminFrame';
import './admin.css';
export const metadata={robots:{index:false,follow:false}};
export default function Layout({children}:{children:React.ReactNode}){return <AdminFrame>{children}</AdminFrame>}
