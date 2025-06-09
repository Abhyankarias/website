import Image from 'next/image';

import Button from './Button';

const TITLE = 'Courses';
const PROGRAMME_LIST = [
  {
    name: 'Foundation Programme',
    imgSrc: '/images/FoundationProgramme.png',
    content: [
      'Integrated with 1 years civil service preparations',
      'Eligibility : 12th pass/ undergraduate',
      'Duration : 1 Year ( 2 Semesters)',
      'Intake : 35 students',
      'Mode: Hybrid ( both online & offline ) mode of attendance would be available',
    ],
  },
  {
    name: 'Master in Social Studies',
    imgSrc: '/images/MasterInSocialStudies.png',
    content: [
      'Integrated with 2 years civil service preparations',
      'Eligibility : Graduation/ final year aspirants',
      'Duration : 2 Years ( 4 Semesters)',
      'Intake : 35 students',
      'Mode: Hybrid ( both online & offline ) mode of attendance would be available',
    ],
  },
];

export default function Courses({ className }) {
  return (
    <section className={className}>
      <h1 className='title text-center'>{TITLE}</h1>
      <div className='flex flex-col gap-4'>
        {/* Card maker */}
        {PROGRAMME_LIST.map(({ name, imgSrc, content }, index) => {
          return (
            <div key={index} className='bg-[#FFFFFF]'>
              <Image
                className='mx-auto'
                sizes='(max-width: 510)'
                height={169}
                width={200}
                src={imgSrc}
                alt='Picture of Dr. Ajit Abhyankar'
              />
              <h2 className='title text-center'>{name}</h2>
              {content.map((item, itemIndex) => {
                return <p key={itemIndex}>{item}</p>;
              })}
              <Button
                className='md:max-w-1/2'
                text='Learn More'
                textColorPrimary={false}
                backgroundPrimary
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
