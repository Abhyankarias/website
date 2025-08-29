'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

// import FoundationProgramme from '@public/images/FoundationProgramme.png';
import LearnMore from '@/shared_components/LearnMore';

const TITLE = 'Courses';
const PROGRAMME_LIST = [
  {
    name: 'Foundation Programme',
    imgSrc: '/website/images/FoundationProgramme.png',
    content: [
      'Integrated with 1 years civil service preparations',
      // 'Eligibility : 12th pass/ undergraduate',
      // 'Duration : 1 Year ( 2 Semesters)',
      // 'Intake : 35 students',
      // 'Mode: Hybrid ( both online & offline ) mode of attendance would be available',
    ],
  },
  {
    name: 'Master in Social Studies',
    imgSrc: '/website/images/MasterInSocialStudies.png',
    content: [
      'Integrated with 2 years civil service preparations',
      // 'Eligibility : Graduation/ final year aspirants',
      // 'Duration : 2 Years ( 4 Semesters)',
      // 'Intake : 35 students',
      // 'Mode: Hybrid ( both online & offline ) mode of attendance would be available',
    ],
  },
];

export default function Courses({ className }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  return (
    <section className={className}>
      <h1 className='title text-center mb-8'>{TITLE}</h1>
      <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
        {/* Card maker */}
        {PROGRAMME_LIST.map(({ name, imgSrc, content }, index) => {
          return (
            <div
              key={index}
              className='flex flex-col p-4 gap-4 bg-[#FFFFFF] rounded-md drop-shadow-md md:w-auto'
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

              <LearnMore />
            </div>
          );
        })}
      </div>
    </section>
  );
}
