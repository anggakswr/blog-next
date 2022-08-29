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
};

module.exports = nextConfig;
