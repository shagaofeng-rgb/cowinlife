'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const id = (key: string) => { let value = localStorage.getItem(key); if (!value) { value = crypto.randomUUID(); localStorage.setItem(key, value); } return value; };
export default function AnalyticsTracker() {
  const pathname = usePathname();
  useEffect(() => {
    if (pathname.startsWith('/admin') || localStorage.getItem('cowin_admin_exclude') === '1') return;
    const visitorId = id('cowin_visitor');
    const now = Date.now();
    const lastActivity = Number(sessionStorage.getItem('cowin_last_activity') || 0);
    if (!sessionStorage.getItem('cowin_session') || now - lastActivity > 30 * 60 * 1000) {
      sessionStorage.setItem('cowin_session', crypto.randomUUID());
      sessionStorage.removeItem('cowin_previous_page');
      sessionStorage.setItem('cowin_entry_referrer', document.referrer);
      sessionStorage.setItem('cowin_entry_url', location.href);
    }
    const sessionId = sessionStorage.getItem('cowin_session')!;
    const previousPage = sessionStorage.getItem('cowin_previous_page') || '';
    fetch('/api/analytics/track', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ visitorId, sessionId, page: pathname + location.search, previousPage, currentUrl: sessionStorage.getItem('cowin_entry_url') || location.href, referrer: sessionStorage.getItem('cowin_entry_referrer') || '', device: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop' }) }).catch(() => {});
    sessionStorage.setItem('cowin_previous_page', location.pathname + location.search);
    sessionStorage.setItem('cowin_last_activity', String(now));
  }, [pathname]);
  return null;
}
