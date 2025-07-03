/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable static exports for the 'output: export' option
  output: 'export',
  // Configure base path if needed (e.g., for GitHub Pages)
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  // Configure image optimization
  images: {
    unoptimized: true, // Required for static exports
  },
  // Enable trailing slashes for static exports
  trailingSlash: true,
  // Environment variables
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://damad-ascenseurs.vercel.app',
  },
};

module.exports = nextConfig;
