/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
      
    ];
  },
  webpack: (config, {isServer}) => {
    if (!isServer) {
      config.node = {
        fs: 'empty',
      };
};}
}
module.exports = nextConfig;
