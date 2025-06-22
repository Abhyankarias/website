/** @type {import('next').NextConfig} */

import { PHASE_PRODUCTION_SERVER } from 'next/constants.js';

const isProduction = PHASE_PRODUCTION_SERVER === 'production';

//const nextConfig = {
//  reactStrictMode: true,
//  assetPrefix: PHASE_PRODUCTION_SERVER ? '/abhyankarias.github.io/website' : undefined,
//};


const nextConfig = (phase) => {

  /**
   * @type {import('next').NextConfig}
   */
  const config = {
    reactStrictMode: true,
  }
  return config
}

export default nextConfig;
