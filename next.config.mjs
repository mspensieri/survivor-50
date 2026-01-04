const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

/** @type {import('next').NextConfig} */
const nextConfig = isGithubActions
  ? {
      output: "export",
      distDir: "docs",
      assetPrefix: assetPrefix,
      basePath: basePath,
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            port: "",
            pathname: "**",
          },
        ],
      },
    }
  : {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            port: "",
            pathname: "**",
          },
        ],
      },
    };

export default nextConfig;
