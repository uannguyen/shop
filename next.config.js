/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")]
  },
  env: {},
  distDir: "build",
  trailingSlash: true
};

module.exports = nextConfig;
