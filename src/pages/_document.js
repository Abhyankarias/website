import { Html, Head, Main, NextScript } from 'next/document';
import Image, { getImageProps } from 'next/image';

// function getBackgroundImage(srcSet = '') {
//   const imageSet = srcSet
//     .split(', ')
//     .map((str) => {
//       const [url, dpi] = str.split(' ');
//       return `url("${url}") ${dpi}`;
//     })
//     .join(', ');
//   return `image-set(${imageSet})`;
// }

export default function Document() {
  // style={/* style */}
  // const {
  //   props: { srcSet },
  // } = getImageProps({
  //   alt: '',
  //   width: 320,
  //   height: 320,
  //   src: '/images/backgroundImage.jpg',
  // });
  // const backgroundImage = getBackgroundImage(srcSet);
  // const style = { height: '100%', width: '100%', backgroundImage };
  return (
    <Html lang='en'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
