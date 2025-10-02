'use client';
import { getImageProps } from 'next/image';
import '@/styles/globals.css';
import {
  libreBaskervilleRegular,
  libreBaskervilleItalic,
  libreBaskervilleBold,
  leagueSpartanBold,
  leagueSpartanRegular,
  leagueSpartanMedium,
} from '@/styles/fonts';

import Head from 'next/head';
import Layout from '@/components/layout';

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ');
      return `url("${url}") ${dpi}`;
    })
    .join(', ');
  return `image-set(${imageSet})`;
}

export default function MyApp({ Component, pageProps }) {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: '',
    width: 320,
    height: 320,
    src: '/images/backgroundImage.jpg',
  });

  const backgroundImage = getBackgroundImage(srcSet);

  const style = { height: '100%', width: '100%', backgroundImage };

  return (
    <>
      <Head>
        <title>{`Abhynkar's IAS - Best UPSC Coaching in Pune | Interactive Civil Services Classes`}</title>
        <meta
          property='og:title'
          content={`Abhynkar's IAS - Best UPSC Coaching in Pune | Interactive Civil Services Classes`}
          key='title'
        />
        <meta
          name='google-site-verification'
          content='Z6fZa7SH4JtvuKqA8ckOluxWw0rb75eQTW_sEvyem38'
        />
      </Head>
      <Layout style={style}>
        {/* Apply the font class here */}
        <main
          className={`antialiased ${libreBaskervilleRegular.variable} ${libreBaskervilleItalic.variable} ${libreBaskervilleBold.variable} ${leagueSpartanBold.variable} ${leagueSpartanRegular.variable} ${leagueSpartanMedium.variable}`}
        >
          <Component {...pageProps} />
        </main>
      </Layout>
    </>
  );
}
