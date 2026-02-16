import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 启用静态导出
  images: {
    unoptimized: true, // 静态站点无法使用 Next.js 默认图片优化
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  // GitHub Pages 部署在 /ouyi 子目录下，需要配置 basePath
  basePath: process.env.NODE_ENV === "production" ? "/ouyi" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/ouyi/" : "",
};

export default nextConfig;
