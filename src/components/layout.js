import cx from 'classnames';
import Navbar from './Navbar';

export default function Layout({ className, children }) {
  return (
    <div className={cx(className, 'max-w-dvw bg-[#ECECE7]')}>
      {/* <Navbar className={className} /> */}
      <Navbar>
        <main>{children}</main>
      </Navbar>
    </div>
  );
}
