import localFont from 'next/font/local';

const libreBaskervilleRegular = localFont({
  src: '../fonts/libreBaskerville-regular.woff2',
  display: 'swap',
  preload: true,
  variable: '--font-libre-baskerville-regular',
});

const libreBaskervilleItalic = localFont({
  src: '../fonts/libreBaskerville-italic.woff2',
  display: 'swap',
  preload: true,
  variable: '--font-libre-baskerville-italic',
});

const libreBaskervilleBold = localFont({
  src: '../fonts/libreBaskerville-bold.woff2',
  display: 'swap',
  preload: true,
  variable: '--font-libre-baskerville-bold',
});

const leagueSpartanBold = localFont({
  src: '../fonts/leagueSpartan-bold.woff2',
  weight: '700',
  display: 'swap',
  preload: true,
  variable: '--font-league-spartan-bold',
});

const leagueSpartanRegular = localFont({
  src: '../fonts/leagueSpartan-regular.woff2',
  display: 'swap',
  preload: true,
  variable: '--font-league-spartan-regular',
});

const leagueSpartanMedium = localFont({
  src: '../fonts/leagueSpartan-medium.woff2',
  display: 'swap',
  preload: true,
  variable: '--font-league-spartan-medium',
});

export {
  libreBaskervilleRegular,
  libreBaskervilleItalic,
  libreBaskervilleBold,
  leagueSpartanBold,
  leagueSpartanRegular,
  leagueSpartanMedium,
};
