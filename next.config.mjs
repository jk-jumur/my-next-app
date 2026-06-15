/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */

  //"https://images.unsplash.com/photo-1780995174800-4b7b8802b680"
  reactCompiler: true,

   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
