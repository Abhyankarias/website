import { Libre_Baskerville } from 'next/font/google';
import localFont from 'next/font/local';
import cx from 'classnames';
import '@/styles/globals.css';
import Head from 'next/head';
import Layout from '@/components/layout';

const libreBaskerville = Libre_Baskerville({
  weight: '400',
  subsets: ['latin'], // Specify the character subsets you need
  preload: true,
  variable: '--font-libre-baskerville', // Optional: Define a CSS variable
});

const leagueSpartanBold = localFont({
  src: '../fonts/leagueSpartan-bold.woff',
  display: 'swap',
  preload: true,
  variable: '--font-league-spartan-bold',
});

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Abhyankar’s IAS</title>
      </Head>
      <Layout />
      <main
        className={`${leagueSpartanBold.variable}  ${libreBaskerville.variable}main-body`}
      >
        {/* Apply the font class here */}
        <Component {...pageProps} />
      </main>
    </>
  );
}
