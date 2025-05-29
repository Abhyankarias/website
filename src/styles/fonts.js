import localFont from 'next/font/local';

const libreBaskervilleRegular = localFont({
  src: '../fonts/libreBaskerville-regular.woff',
  display: 'swap',
  preload: true,
  variable: '--font-libre-baskerville-regular',
});

const libreBaskervilleItalic = localFont({
  src: '../fonts/libreBaskerville-italic.woff',
  display: 'swap',
  preload: true,
  variable: '--font-libre-baskerville-italic',
});

const libreBaskervilleBold = localFont({
  src: '../fonts/libreBaskerville-bold.woff',
  display: 'swap',
  preload: true,
  variable: '--font-libre-baskerville-bold',
});

const leagueSpartanBold = localFont({
  src: '../fonts/leagueSpartan-bold.woff',
  weight: '700',
  display: 'swap',
  preload: true,
  variable: '--font-league-spartan-bold',
});

export {
  libreBaskervilleRegular,
  libreBaskervilleItalic,
  libreBaskervilleBold,
  leagueSpartanBold,
};
