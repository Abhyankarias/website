import { PHASE_PRODUCTION_SERVER } from 'next/constants.js';

const nextConfig = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const isProductionServer = phase === PHASE_PRODUCTION_SERVER;
  const basePath = isProductionServer ? '/website' : '';
  const returnObject = {
    reactStrictMode: isProductionServer ? false : true,
    basePath,
    assetPrefix: isProductionServer ? 'https://abhyankarias.github.io' : '',
    // images: {
    //   dangerouslyAllowSVG: true,
    //   contentDispositionType: 'attachment',
    //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // },
  };

  return { ...(defaultConfig || {}), ...returnObject };
};

export default nextConfig;
