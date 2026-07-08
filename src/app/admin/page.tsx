import "./admin.css";
import AdminClient from "./admin-client";

export const metadata = {
  title: "QUCHENG 管理后台",
  robots: "noindex,nofollow"
};

export default function AdminPage() {
  return <AdminClient />;
}
