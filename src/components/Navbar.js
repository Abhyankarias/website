import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';

import Button from './Button';

const navLinks = [
  { link: 'courses', display: 'Courses' },
  { link: 'blog', display: 'Blog' },
  { link: 'testimonials', display: 'Testimonials' },
];

const Navbar = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  //const navbarRef = useRef(null);

  // useEffect(() => {
  //   const mainContent = document.querySelector('.main-body');
  //   console.log(
  //     'mainContent: ',
  //     mainContent,
  //     mainContent.getBoundingClientRect().width
  //   );

  //   if (mainContent && navbarRef.current) {
  //     const updateNavbarWidth = () => {
  //       const mainWidth = mainContent.getBoundingClientRect().width;
  //       navbarRef.current.style.width = `${mainWidth}px`;
  //     };

  //     updateNavbarWidth(); // Initial update
  //     window.addEventListener('resize', updateNavbarWidth); // Update on resize
  //   }

  //   return () => window.removeEventListener('resize', updateNavbarWidth); // Cleanup
  // }, []);

  return (
    <nav className={cx(className, 'navbar col-span-12 py-[20px]')}>
      <div class='flex flex-wrap items-center justify-between'>
        <a href='/' class='flex items-center space-x-3 rtl:space-x-reverse'>
          <img
            src='/images/abhyankars_ias_logo.svg'
            className='max-h-[98px]'
            alt='Flowbite Logo'
          />
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => {
            setIsCollapsed((prev) => !prev);
          }}
        >
          <span class='sr-only'>Open main menu</span>

          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18 10H6'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M21 6H3'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M21 14H3'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M18 18H6'
              stroke='black'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
        <div
          class={cx('w-full md:block md:w-auto', {
            hidden: isCollapsed,
            relative: isCollapsed,
          })}
          id='navbar-default'
        >
          <ul
            class={cx(
              'flex flex-col items-center p-4 h-fit md:p-0 mt-4 md:flex-row md:gap-[37px] rtl:space-x-reverse md:mt-0 md:border-0 text-base'
            )}
          >
            {navLinks.map(({ link, display }) => (
              <li key={link}>
                <Link
                  href={`/${link === 'home' ? '' : link}`}
                  class='font-league-spartan-medium text-[20px] block py-2 px-3 rounded md:p-0'
                  aria-current='page'
                >
                  {display}
                </Link>
              </li>
            ))}
            <Button
              className='font-league-spartan-medium text-[20px] px-[24px] py-[12px] md:ms-[43px]'
              text='Contact Us'
              textColorPrimary={false}
              backgroundPrimary
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
