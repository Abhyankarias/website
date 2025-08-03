// import { PHASE_PRODUCTION_SERVER } from 'next/constants.js';

const nextConfig = () => {
  /**
   * @type {import('next').NextConfig}
   */
  // const isProductionServer = phase === PHASE_PRODUCTION_SERVER;
  // const basePath = isProductionServer ? '/website' : '';
  const returnObject = {
    reactStrictMode: true,
    // basePath,
    // assetPrefix: isProductionServer
    //   ? 'https://abhyankarias.github.io'
    //   : undefined,
    // images: {
    //   dangerouslyAllowSVG: true,
    //   contentDispositionType: 'attachment',
    //   contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // },
  };

  return { ...returnObject };
};

export default nextConfig;

// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;
