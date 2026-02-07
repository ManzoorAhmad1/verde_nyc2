/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'files.elfsightcdn.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dm4kmpvzhijsu.cloudfront.net',
        pathname: '/**',
      },
    ],
    domains: ['images.squarespace-cdn.com', 'files.elfsightcdn.com', 'dm4kmpvzhijsu.cloudfront.net'],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig