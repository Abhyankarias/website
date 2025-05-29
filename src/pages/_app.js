import {
  libreBaskervilleRegular,
  libreBaskervilleItalic,
  libreBaskervilleBold,
  leagueSpartanBold,
} from '@/styles/fonts';
import '@/styles/globals.css';

import Head from 'next/head';
import Layout from '@/components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abhyankar’s IAS</title>
      </Head>
      <Layout />
      <main
        className={`${libreBaskervilleRegular.variable} ${libreBaskervilleItalic.variable} ${libreBaskervilleBold.variable} ${leagueSpartanBold.variable} main-body`}
      >
        {/* Apply the font class here */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
