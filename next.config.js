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
        hostname: 'verde-nyc.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
    ],
    domains: ['images.squarespace-cdn.com', 'files.elfsightcdn.com', 'verde-nyc.s3.eu-north-1.amazonaws.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

module.exports = nextConfig