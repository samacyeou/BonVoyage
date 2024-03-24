/** @type {import('next').NextConfig} */
const nextConfig = {
  ignoreBuildErrors: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
