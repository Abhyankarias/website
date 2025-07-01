import {
  libreBaskervilleRegular,
  libreBaskervilleItalic,
  libreBaskervilleBold,
  leagueSpartanBold,
  leagueSpartanRegular,
  leagueSpartanMedium,
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
      <Layout
        className={`${leagueSpartanBold.variable} ${leagueSpartanMedium.variable} ${leagueSpartanRegular.variable}`}
      >
        <main
          className={`${libreBaskervilleRegular.variable} ${libreBaskervilleItalic.variable} ${libreBaskervilleBold.variable} ${leagueSpartanBold.variable} ${leagueSpartanRegular.variable} ${leagueSpartanMedium.variable} main-body`}
        >
          {/* Apply the font class here */}
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
