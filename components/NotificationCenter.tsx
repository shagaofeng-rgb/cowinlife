'use client';

import { useEffect, useState } from 'react';

type Notice = { id: string; title: string; body: string | null; created_at: string; read_at: string | null };

export default function NotificationCenter() {
  const [items, setItems] = useState<Notice[]>([]);
  const [open, setOpen] = useState(false);
  useEffect(() => { fetch('/api/notifications').then(r => r.ok ? r.json() : []).then(setItems).catch(() => undefined); }, []);
  const unread = items.filter(item => !item.read_at).length;
  const markRead = async () => { await fetch('/api/notifications/read', { method: 'POST' }); setItems(items.map(item => ({ ...item, read_at: item.read_at || new Date().toISOString() }))); };
  return <div className="admin-notices"><button className="admin-notice-button" onClick={() => { setOpen(!open); if (!open && unread) markRead(); }} aria-label="查看通知">通知{unread ? <b>{unread > 9 ? '9+' : unread}</b> : null}</button>{open ? <div className="admin-notice-menu"><strong>通知中心</strong>{items.length ? items.slice(0, 6).map(item => <article key={item.id}><b>{item.title}</b>{item.body ? <span>{item.body}</span> : null}<time>{new Date(item.created_at).toLocaleString('zh-CN')}</time></article>) : <p>暂无通知</p>}</div> : null}</div>;
}
