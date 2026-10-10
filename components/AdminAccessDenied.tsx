import Link from 'next/link';
import { LockKeyhole } from 'lucide-react';

export default function AdminAccessDenied() {
  return <main className="admin-content"><section className="admin-panel admin-access-denied" role="status"><LockKeyhole size={28} aria-hidden="true"/><h1>无权访问此栏目</h1><p>请使用具有对应权限的后台账号。</p><Link className="admin-secondary" href="/admin">返回数据总览</Link></section></main>;
}
