import cx from 'classnames';
import Navbar from './Navbar';
import Contact from './Contact';

export default function Layout({ className, children, style }) {
  return (
    <div style={style} className={className}>
      <div className={cx("", 'max-w-dvw md:bg-[#ECECE7]')}>
        {/* <Navbar className={className} /> */}
        <Navbar className='container mx-auto px-4' />
      </div>
      <main>{children}</main>
      <div className={cx(className, 'max-w-dvw md:bg-[#FCF6F3]')}>
        <Contact className='container mx-auto px-4 mt-20' />
      </div>
    </div>
  );
}
