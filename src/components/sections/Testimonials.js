'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

import Carousel from '@/components/ui/Carousel';
import Button from '@/components/ui/Button';
import LearnMore from '@/components/ui/LearnMore';

import { TITLE, ALUMNI_LIST } from '@/data/testimonials';
function truncateText(text) {
  const maxLength = 193;
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '.....';
}

export default function Testimonials({ className }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <section className={className}>
      {isHomePage && <h1 className='title text-center mb-8'>{TITLE}</h1>}
      {isHomePage ? (
        // home page
        <Carousel>
          {ALUMNI_LIST.map(({ name, imgSrc, rank, institute, text }, index) => {
            return (
              <div
                className='flex flex-col w-full bg-[#FFF8F5] rounded-2xl gap-4 p-4 drop-shadow-md md:flex-row'
                key={index}
              >
                <div className='flex flex-col gap-4'>
                  <div className='mx-auto relative h-[170] w-[200] md:ms-0'>
                    <Image
                      className='relative z-[2] mx-auto md:place-self-start'
                      // style={{ maxHeight: '170px' }}
                      src={imgSrc}
                      alt={`Picture of ${name}`}
                      width={169}
                      height={170}
                    />
                    <div
                      className='absolute left-0 bottom-0 z-[1] h-[139] w-[157] rounded-md'
                      style={{ background: '#e57b3e' }}
                    ></div>
                  </div>

                  <div className='flex flex-col gap-2 title text-center md:text-left'>
                    <p>{name}</p>
                    <p>{rank || institute}</p>
                  </div>
                </div>

                <div className='flex flex-col gap-3 md:gap-6 md:pt-7'>
                  <p className='font-regular text-center whitespace-pre-wrap md:text-left'>
                    {truncateText(text[0])}
                  </p>
                  <LearnMore href='/testimonials' />
                </div>
              </div>
            );
          })}
        </Carousel>
      ) : (
        // testimonials page
        <Carousel>
          {ALUMNI_LIST.map(({ name, imgSrc, rank, institute, text }, index) => {
            return (
              <div
                className='flex flex-col w-full rounded-2xl p-10 gap-4 drop-shadow-md md:flex-row'
                key={index}
              >
                <div className='flex flex-col gap-2'>
                  <div className='mx-auto relative max-h-[170] max-w-[200] md:ms-0'>
                    <Image
                      className='relative z-[2] mx-auto md:place-self-start'
                      style={{ maxHeight: '170px' }}
                      src={imgSrc}
                      alt={`Picture of ${name}`}
                      width={169}
                      height={170}
                    />
                    <div
                      className='absolute bottom-0 z-[1] h-[139] w-[157] rounded-md'
                      style={{ background: '#e57b3e' }}
                    ></div>
                  </div>

                  <p className='title text-center md:text-left'>
                    <span>{name}</span>
                    <p className='block md:inline-block'>{rank || institute}</p>
                  </p>
                </div>

                <div className='flex flex-col gap-2 md:gap-6 md:p-7'>
                  {text.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className='font-regular text-center whitespace-pre-wrap md:w-[70ch] md:text-left'
                    >
                      {paragraph}
                    </p>
                  ))}
                  <div className='flex flex-col gap-2 md:gap-6 md:pt-7'>
                    <p className='text-center md:text-left'>{'Thank you,'}</p>
                    <p className='title text-center md:text-left'>{name}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </section>
  );
}
