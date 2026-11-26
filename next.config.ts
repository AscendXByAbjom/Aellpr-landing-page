import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export (26 Nov): `npm run build` writes plain files to `out/`,
  // hosted as a DigitalOcean App Platform static site. No server at runtime.
  output: "export",
  // `/privacy` is served from `privacy/index.html`, which every static host
  // understands.
  trailingSlash: true,
  // `cacheComponents` / `partialPrefetching` removed: they're for a running
  // Next server and clash with `dynamic = "force-static"`, which the static
  // export needs on robots.txt, sitemap.xml and the share image.
  // No image server in a static export, so images are served as they are
  // (the source files in public/ are already sized for the web).
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
