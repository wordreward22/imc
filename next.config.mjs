/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'imc.local',
      },
      {
        protocol: 'https',
        hostname: 'imc.iq',
      },
    ],
  },
};

export default nextConfig;
