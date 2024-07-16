/** @type {import('next').NextConfig} */

const nextConfig = {
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
        source: '/signup',
        destination: 'http://localhost:5000/auth/signup',
      },
      {
        source: '/signin',
        destination: 'http://localhost:5000/auth/signin',
      },
      {
        source: '/u/c/all',
        destination: 'http://localhost:5000/user/getCourses',
      },
      {
        source: '/u/c/:id',
        destination: 'http://localhost:5000/course/:id',
      },
      {
        source: '/new/class',
        destination: 'http://localhost:5000/course/create',
      },
      {
        source: '/join/class',
        destination: 'http://localhost:5000/course/addStudent',
      },
    ];
  },
};

export default nextConfig;
