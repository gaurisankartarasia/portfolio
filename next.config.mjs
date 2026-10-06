/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  reactCompiler: true,
  images: {
    unoptimized: true,
  },
  compress: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "motion",
      "@animateicons/react",
      "@base-ui/react",
      "next-themes",
    ],
  },
  allowedDevOrigins: ['10.93.101.221', '192.168.1.5'],
};

export default nextConfig;
