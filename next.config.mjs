import { PHASE_PRODUCTION_SERVER } from 'next/constants.js';

const nextConfig = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const isProductionServer = phase === PHASE_PRODUCTION_SERVER;
  const basePath = isProductionServer ? '/website' : '';
  const returnObject = {
    reactStrictMode: true,
    basePath,
    assetPrefix: isProductionServer ? 'https://abhyankarias.github.io' : '',
    images: {
      dangerouslyAllowSVG: true,
      contentDispositionType: 'attachment',
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
  };
  console.log('phase', phase);
  //console.log('nextConfig', JSON.stringify(returnObject, null, 2));
  // console.log('defaultConfig: ', defaultConfig);
  // console.log('returnObject: ', returnObject);
  return { ...(defaultConfig || {}), ...returnObject };
};

export default nextConfig;
