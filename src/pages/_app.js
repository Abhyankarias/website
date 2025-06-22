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
import { getImageProps } from 'next/image'

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

/*

  className={`${libreBaskervilleRegular.variable} ${libreBaskervilleItalic.variable} ${libreBaskervilleBold.variable} ${leagueSpartanBold.variable} ${leagueSpartanRegular.variable} ${leagueSpartanMedium.variable} main-body`}
  style={style}
*/

export default function MyApp({ Component, pageProps }) {
  const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 128, height: 128, src: '/images/backgroundImage.jpg' })
  const backgroundImage = getBackgroundImage(srcSet)
  const style = { height: '100vh', width: '100vw', backgroundImage }

  return (
    <>
      <Head>
        <title>Abhyankar’s IAS</title>
        {/* 
        className={`${leagueSpartanBold.variable} ${leagueSpartanMedium.variable} ${leagueSpartanRegular.variable}`}
        <link
          rel='preload'
          href='/images/BackgroundImage.jpg'
          as='image'
          media='(min-width: 48rem)'
        /> */}
      </Head>
      <Layout >
        {/* Apply the font class here */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
