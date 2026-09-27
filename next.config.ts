import type { NextConfig } from 'next';
const config: NextConfig = {
  outputFileTracingIncludes: { '/*': ['./content/pages/**/*.json', './content/index.json'] },
  poweredByHeader: false,
  devIndicators: false,
  async headers() {
    return [{ source: '/optimized/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }];
  },
};
export default config;
