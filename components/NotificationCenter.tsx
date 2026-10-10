'use client';

import { useEffect, useState } from 'react';
import { Bell } from 'lucide-react';

type Notice = { id: string; title: string; body: string | null; created_at: string; read_at: string | null };

export default function NotificationCenter() {
  const [items, setItems] = useState<Notice[]>([]);
  const [unread, setUnread] = useState(0);
  const [open, setOpen] = useState(false);
  useEffect(() => { fetch('/api/notifications',{cache:'no-store'}).then(r => r.ok ? r.json() : {rows:[],unread:0}).then((data:{rows:Notice[];unread:number}) => {setItems(data.rows);setUnread(data.unread)}).catch(() => undefined); }, []);
  const markRead = async () => { const response=await fetch('/api/notifications/read', { method: 'POST' }); if(response.ok){setUnread(0);setItems(current=>current.map(item => ({ ...item, read_at: item.read_at || new Date().toISOString() })));} };
  return <div className="admin-notices"><button className="admin-notice-button" onClick={() => { setOpen(!open); if (!open && unread) markRead(); }} aria-label="查看通知" aria-expanded={open}><Bell size={17} aria-hidden="true"/>通知{unread ? <b>{unread > 9 ? '9+' : unread}</b> : null}</button>{open ? <div className="admin-notice-menu"><strong>通知中心</strong>{items.length ? items.map(item => <article key={item.id}><b>{item.title}</b>{item.body ? <span>{item.body}</span> : null}<time>{new Date(item.created_at).toLocaleString('zh-CN')}</time></article>) : <p>暂无通知</p>}</div> : null}</div>;
}
