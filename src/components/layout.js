import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className='max-w-dvw bg-[#ECECE7]'>
      <Navbar>
        <main>{children}</main>
      </Navbar>
    </div>
  );
}
