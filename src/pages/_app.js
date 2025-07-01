import Image, { getImageProps } from 'next/image'
import '@/styles/globals.css';

import Head from 'next/head';
import Layout from '@/components/layout';


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

export default function MyApp({ Component, pageProps }) {

  const {
    props: { srcSet },
  } = getImageProps({ alt: '', width: 320, height: 320, src: '/images/backgroundImage.jpg' })
  const backgroundImage = getBackgroundImage(srcSet)
  const style = { height: '100%', width: '100%', backgroundImage }

  return (
    <>
      <Head>
        <title>Abhyankar’s IAS</title>
      </Head>
      <Layout style={style} >
        {/* Apply the font class here */}
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
