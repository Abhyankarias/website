import Image from 'next/image';

// import FoundationProgramme from '@public/images/FoundationProgramme.png';
import LearnMore from '@/components/ui/LearnMore';

import { TITLE, PROGRAMME_LIST } from '@/data/courses';
export default function Courses({ className }) {
  return (
    <section className={className}>
      <h1 className='title text-center mb-8'>{TITLE}</h1>
      <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
        {/* Card maker */}
        {PROGRAMME_LIST.map(({ name, imgSrc, content }, index) => {
          return (
            <div
              key={index}
              className='flex flex-col p-4 gap-4 bg-[#FFFFFF] rounded-md drop-shadow-md md:w-auto md:grow'
            >
              <div className='relative h-50'>
                <Image
                  className='rounded-md'
                  src={imgSrc}
                  alt={`Picture of ${name}`}
                  fill
                />
              </div>

              <div className='flex flex-col py-4 gap-4'>
                <h2 className='title text-center md:text-left'>{name}</h2>
                {content.map((item, itemIndex) => {
                  return (
                    <p
                      key={itemIndex}
                      className='font-ls-regular text-center md:text-left'
                    >
                      {item}
                    </p>
                  );
                })}
              </div>

              <LearnMore href='/courses' />
            </div>
          );
        })}
      </div>
    </section>
  );
}
