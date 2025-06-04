/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_EXPORT === 'true';

const nextConfig = {
  ...(isStaticExport && {
    output: 'export',
    assetPrefix: './',
  }),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;