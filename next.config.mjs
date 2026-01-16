/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    quietDeps: true, // This will silence deprecation warnings
    silenceDeprecations: [
      "import",
      "global-builtin",
      "color-functions",
      "slash-div",
      "mixed-decls",
      "abs-percent",
      "function-units",
      "strict-unary",
      "legacy-js-api",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "oliviers45.sg-host.com",
      },
    ],
  },
};

export default nextConfig;
