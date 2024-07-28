/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    X_RAPIDAPI_KEY: 'ea6410e850msh603cdbcd3cbc29cp120feejsn29f801f6a63f',
    X_RAPIDAPI_HOST: 'judge0-ce.p.rapidapi.com',
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
        destination: 'https://coderoom-backend.onrender.com/:path*',
      },
    ];
  },
};

export default nextConfig;
