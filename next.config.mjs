import { fileURLToPath } from 'node:url';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
  async rewrites() {
    return [
      {
        source: '/proxy/series',
        destination:
          process.env.NEXT_PUBLIC_URL_SERIES ||
          'https://api-ds.codeverse.dev.br/api/series',
      },
    ];
  },
};

export default nextConfig;
