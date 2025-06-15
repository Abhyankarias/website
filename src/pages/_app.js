import {
  libreBaskervilleRegular,
  libreBaskervilleItalic,
  libreBaskervilleBold,
  leagueSpartanBold,
  leagueSpartanRegular,
} from '@/styles/fonts';
import '@/styles/globals.css';

import Head from 'next/head';
import Layout from '@/components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abhyankar’s IAS</title>
      </Head>
      <Layout className={`${leagueSpartanRegular.variable}`} />
      <main
        className={`${libreBaskervilleRegular.variable} ${libreBaskervilleItalic.variable} ${libreBaskervilleBold.variable} ${leagueSpartanBold.variable} ${leagueSpartanRegular.variable} main-body`}
      >
        {/* Apply the font class here */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
