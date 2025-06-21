import Image from 'next/image';

import Button from './Button';

const TITLE = 'Courses';
const PROGRAMME_LIST = [
  {
    name: 'Foundation Programme',
    imgSrc: '/FoundationProgramme.png',
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
    imgSrc: '/MasterInSocialStudies.png',
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
      <h1 className='title text-center mb-8'>{TITLE}</h1>
      <div className='flex flex-col gap-4 md:flex-row md:justify-between'>
        {/* Card maker */}
        {PROGRAMME_LIST.map(({ name, imgSrc, content }, index) => {
          return (
            <div
              key={index}
              className='flex flex-col gap-4 bg-[#FFFFFF] rounded-md drop-shadow-md'
            >
              <img
                className='rounded-md max-h-[171.84px] md:max-h-[234.23px]'
                src={imgSrc}
                alt={`Picture of ${name}`}
                // style={{ maxHeight: '171.84px' }}
              />

              <div className='flex flex-col p-4 gap-2'>
                <h2 className='title'>{name}</h2>
                {content.map((item, itemIndex) => {
                  return (
                    <p key={itemIndex} className='font-ls-regular'>
                      {item}
                    </p>
                  );
                })}
                <Button
                  className='font-league-spartan-medium md:w-full'
                  text='Learn More'
                  textColorPrimary={false}
                  backgroundPrimary={false}
                  style={{ backgroundColor: '#FFF0E8' }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
