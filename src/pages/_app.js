'use client';
import Image, { getImageProps } from 'next/image';
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
  // const backgroundImage =
  //   window.innerWidth > 48 ? getBackgroundImage(srcSet) : `background: #ffffff`;
  const backgroundImage = getBackgroundImage(srcSet);

  // For debugging purposes
  // console.log('window.innerWidth: ', window);
  // console.log('backgroundImage: ', backgroundImage);
  const style = { height: '100%', width: '100%', backgroundImage };

  console.log('this: ', this);
  console.log('pageProps: ', pageProps);

  return (
    <>
      <Head>
        <title>Abhyankar’s IAS</title>
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
