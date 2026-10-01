import type { NextConfig } from 'next';
import legacyBrandRedirects from './content/legacy-brand-redirects.json';
const config: NextConfig = {
  outputFileTracingIncludes: { '/*': ['./content/pages/**/*.json', './content/index.json'] },
  poweredByHeader: false,
  devIndicators: false,
  async redirects() {
    return Object.entries(legacyBrandRedirects).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  async headers() {
    return ['/optimized/:path*', '/cleaned/:path*'].map(source => ({ source, headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }));
  },
};
export default config;
