/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,
  images: {
  unoptimized: true,
  },
  allowedDevOrigins: ['10.33.133.177'],
};

export default nextConfig;
