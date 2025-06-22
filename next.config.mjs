import { PHASE_PRODUCTION_SERVER } from 'next/constants.js';
/** @type {import('next').NextConfig} */


const nextConfig = (phase, { defaultConfig }) => {
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
  console.log('nextConfig', JSON.stringify(returnObject, null, 2));
  return { ...defaultConfig, ...returnObject };
};

export default nextConfig;
