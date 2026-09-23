import type { Metadata } from 'next';
import './globals.css';
import AnalyticsTracker from '@/components/AnalyticsTracker';
export const metadata: Metadata = { metadataBase: new URL('https://cowinlife.com'), robots: { index: true, follow: true } };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><AnalyticsTracker />{children}</body></html>;
}
