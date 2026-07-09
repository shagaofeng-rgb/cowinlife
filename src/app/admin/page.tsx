import "./admin.css";
import AdminClient from "./admin-client";

export const metadata = {
  title: "COWINLIFE 管理后台",
  robots: "noindex,nofollow"
};

export default function AdminPage() {
  return <AdminClient />;
}
