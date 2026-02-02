/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/content/**',
      },
      {
        protocol: 'https',
        hostname: '**.squarespace-cdn.com',
      },
    ],
    domains: ['images.squarespace-cdn.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig