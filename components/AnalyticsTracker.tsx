'use client';
import { useEffect } from 'react';

const id = (key: string) => { let value = localStorage.getItem(key); if (!value) { value = crypto.randomUUID(); localStorage.setItem(key, value); } return value; };
export default function AnalyticsTracker() {
  useEffect(() => {
    const visitorId = id('cowin_visitor'); const sessionId = id('cowin_session');
    const previousPage = sessionStorage.getItem('cowin_previous_page') || '';
    fetch('/api/analytics/track', { method: 'POST', keepalive: true, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ visitorId, sessionId, page: location.pathname + location.search, previousPage, currentUrl: location.href, referrer: document.referrer, device: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop' }) }).catch(() => {});
    sessionStorage.setItem('cowin_previous_page', location.pathname + location.search);
  }, []);
  return null;
}
