/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/auth/login",
          destination: "http://192.168.0.102:8080/auth/login",
        },
      ];
    },
  };

module.exports = nextConfig
