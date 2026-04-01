'use client';

import { useState } from 'react';
import Link from 'next/link';
import cx from 'classnames';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Button from '@/components/ui/Button';

import { navLinks } from '@/data/navigation';
const Navbar = ({ className }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const pathname = usePathname();

  return (
    <nav className={cx(className, 'navbar col-span-12 py-[20px]')}>
      <div className='flex flex-wrap items-center justify-between'>
        <Link href='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <Image
            className='relative z-[2] mx-auto md:place-self-start'
            height={98}
            width={86}
            src='/website/images/abhyankars_ias_logo.svg'
            alt='Abhyankar IAS Logo'
          />
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => {
            setIsCollapsed((prev) => !prev);
          }}
        >
          <span className='sr-only'>Open main menu</span>

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
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21 6H3'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21 14H3'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M18 18H6'
              stroke='black'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>
        <div
          className={cx('w-full md:block md:w-auto', {
            hidden: isCollapsed,
            relative: isCollapsed,
          })}
          id='navbar-default'
        >
          <ul
            className={cx(
              'flex flex-col items-center p-4 h-fit md:p-0 mt-4 md:flex-row md:gap-[37px] rtl:space-x-reverse md:mt-0 md:border-0 text-base'
            )}
          >
            {navLinks.map(({ link, display }) => (
              <li key={link}>
                <Link
                  href={`/${link === 'home' ? '' : link}`}
                  className='relative font-league-spartan-medium block text-[20px] py-2 px-3 rounded md:p-0'
                  aria-current='page'
                >
                  {display}
                  {pathname === `/${link}` && (
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='auto'
                      height='4'
                      className='absolute'
                      viewBox='0 0 auto 4'
                      fill='none'
                    >
                      <path
                        d={`M2 2 H${display.length * 10 - 2}`}
                        stroke='#E57B3E'
                        strokeWidth='3'
                        strokeLinecap='round'
                      />
                    </svg>
                  )}
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
