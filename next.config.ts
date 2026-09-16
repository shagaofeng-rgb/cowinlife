import type { NextConfig } from 'next';
const config: NextConfig = {
  outputFileTracingIncludes: { '/*': ['./content/pages/**/*.json', './content/index.json'] },
  poweredByHeader: false,
  devIndicators: false,
};
export default config;
