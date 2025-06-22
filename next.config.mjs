import { PHASE_PRODUCTION_SERVER } from 'next/constants.js';
/** @type {import('next').NextConfig} */


const nextConfig = (phase) => {
  const basePath = phase === PHASE_PRODUCTION_SERVER ? '/website' : '';
  const returnObject = {
    reactStrictMode: true,
    basePath,
    assetPrefix: basePath,
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  }
  return returnObject;
};

export default nextConfig;
