import {
  libreBaskervilleRegular,
  libreBaskervilleItalic,
  libreBaskervilleBold,
  leagueSpartanBold,
  leagueSpartanRegular,
  leagueSpartanMedium,
} from '@/styles/fonts';
import cx from 'classnames';
import '@/styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Contact from '@/components/layout/Contact';

export const metadata = {
  title: "Abhyankar's IAS - Best UPSC Coaching in Pune | Interactive Civil Services Classes",
  description: "Abhyankar's IAS - Best UPSC Coaching in Pune | Interactive Civil Services Classes",
  openGraph: {
    title: "Abhyankar's IAS - Best UPSC Coaching in Pune | Interactive Civil Services Classes",
    description: "Abhyankar's IAS - Best UPSC Coaching in Pune | Interactive Civil Services Classes",
  },
  verification: {
    google: 'Z6fZa7SH4JtvuKqA8ckOluxWw0rb75eQTW_sEvyem38',
  },
};

export default function RootLayout({ children }) {
  // Hardcoded for Server Component (replaces next/image getImageProps to avoid client boundary issues in root layout)
  // Background images in App Router root styles are best handled via CSS or inline styles directly without next/image at the <html> level
  const backgroundImage = 'url("/website/images/backgroundImage.webp")';
  const style = { height: '100%', width: '100%', backgroundImage, backgroundSize: 'cover', backgroundAttachment: 'fixed' };

  return (
    <html lang="en">
      <body className={`antialiased ${libreBaskervilleRegular.variable} ${libreBaskervilleItalic.variable} ${libreBaskervilleBold.variable} ${leagueSpartanBold.variable} ${leagueSpartanRegular.variable} ${leagueSpartanMedium.variable}`}>
        <div style={style}>
          <div className="max-w-dvw md:bg-[#ECECE7]">
            <Navbar className="container mx-auto px-4" />
          </div>

          <main>{children}</main>

          <div className="max-w-dvw md:bg-[#FCF6F3]">
            <Contact className="container mx-auto px-4 mt-20" />
          </div>
        </div>
      </body>
    </html>
  );
}
