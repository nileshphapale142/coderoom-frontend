/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BACKEND_API_URL:process.env?.BACKEND_API_URL
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios-glyphs/30/leaderboard.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios-glyphs/30/conference-call--v1.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios-filled/50/source-code.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios/50/exit--v1.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios-filled/50/test-partial-passed.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios/50/teacher.png',
      },
      {
        protocol: 'https',
        hostname: 'img.icons8.com',
        port: '',
        pathname: '/ios/50/graduation-cap.png',
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
