import cx from 'classnames';
import Navbar from './Navbar';

export default function Layout({ className, children }) {
  return (
    <div className={cx(className, 'max-w-dvw md:bg-[#ECECE7]')}>
      {/* <Navbar className={className} /> */}
      <Navbar className='container mx-auto mx-4'>
        <main>{children}</main>
      </Navbar>
    </div>
  );
}
