/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects: async () => {
    return [
      {
        source: "/post",
        destination: "/",
        permanent: true,
      },
    ];
  },
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000",
  },
};

module.exports = nextConfig;
