import Navbar from './Navbar';

export default function Layout({ className }) {
  return (
    <div className='max-w-dvw bg-[#ECECE7]'>
      <Navbar className={className} />
      {/* <Navbar>
        <main>{children}</main>
      </Navbar> */}
    </div>
  );
}
