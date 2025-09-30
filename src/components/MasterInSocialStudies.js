import React from 'react';
import Image from 'next/image';

const COURSE_DETAILS = [
  `Two years Masters Degree Course (4 Semesters):
No of classes per semester per course (credits)
`,
  `Affiliated to Tilak Maharashtra Vidyapeeth
(Deemed University) Pune (Maharashtra)
`,
  `Examinations, results and certificate will be
applicable as per the rules of the University (for
those opting for degree certificate)`,
];

export default function MasterInSocialStudies() {
  return (
    <div className='flex flex-col gap-8'>
      {/* First part */}
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <h1 className='title text-center md:text-left'>
            Master In Social Studies
          </h1>
          <p className='title text-center md:text-left'>{`( Integrated with Civil Services Examination Preprations )`}</p>
        </div>

        <div className='flex flex-col gap-3'>
          <p>
            <span className='font-bold'>{`Eligibility:`}</span>
            <span className='font-regular'>{` Graduation/ Final year aspirants`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Course Duration:`}</span>
            <span className='font-regular'>{` TWO YEARS (this has been
spread over 4 semesters)`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Commencement:`}</span>
            <span className='font-regular'>{` July/Aug ${new Date().getFullYear()}`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Intake:`}</span>
            <span className='font-regular'>{` 35 Students`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Class Timings Alternately:`}</span>
            <span className='font-regular'>{` Morning 7-10 AM,
Evening 6-9 PM
`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Days:`}</span>
            <span className='font-regular'>{` 5 days a week`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Hours:`}</span>
            <span className='font-regular'>{` 25 hours/ week`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Mode:`}</span>
            <span className='font-regular'>{` Hybrid (both online and offline) modes
of attendance would be available`}</span>
          </p>
        </div>
      </div>

      {/* Second part */}
      <div className='flex flex-col gap-8'>
        <h2 className='title'>Course Details</h2>

        <div className='flex flex-col gap-3'>
          <ul className='flex flex-col gap-4'>
            {COURSE_DETAILS.map((list, index) => (
              <li className='flex gap-4'>
                <Image
                  src='/website/images/Point.svg'
                  alt={`Point number ${index + 1}`}
                  width={18}
                  height={18}
                />
                <p key={index} className='font-regular'>
                  {list}
                </p>
              </li>
            ))}
          </ul>
          <p>
            <span className='font-bold'>{`Important:`}</span>
            <span className='font-regular'>{` The syllabus as the University prescribes will be valid
            for the semester examination. However, the focus of the course would
            be Civil Services preparation with Civil Services syllabi as
            prescribed by the UPSC covered through several modules to be
            separately circulated/ made available`}</span>
          </p>
        </div>
      </div>

      {/* Third part */}
      <div className='flex flex-col gap-8'>
        <h2 className='title'>Course Structure</h2>

        <div className='flex flex-col gap-3'>
          <p className='font-regular'>{`The focus of the course would be Civil Services preparation in a span of 2 years, spread over 4 semesters.`}</p>
          <p className='font-regular'>
            {
              'UPSC syllabi and other necessary components required for preparation for UPSC Civil services would be carefully incorporated into semesters in the required order/ sequence'
            }
          </p>
          <p className='font-regular'>
            {'The entire UPSC syllabus would be covered through:'}
          </p>
          <ul className='flex flex-col gap-4 font-regular list-disc pl-5'>
            <li>{'Classroom teaching'}</li>
            <li>{'Assignments'}</li>
            <li>{'Seminars'}</li>
            <li>{'Periodic reviews and tests'}</li>
            <li>{'Practice test sessions'}</li>
            <li>{'Assessment through objective MCQ based tests'}</li>
            <li>{'Answer writing sessions etc.'}</li>
          </ul>

          <p className='font-regular'>{`The course is divided into two phases:`}</p>
          <ul className='flex flex-col gap-4 font-regular list-disc pl-5'>
            <li>
              {`First Year -`}{' '}
              <span className='font-bold'>{`Preparatory Program`}</span>
            </li>
            <li>
              {`Second Year - `}
              <span className='font-bold'>{`Advanced Program`}</span>
            </li>
          </ul>

          <p className='font-bold'>{`First Year -Preparatory Program`}</p>
          <p className='font-regular'>{`The aim of the program in the first year shall be on capacity building encompassing conceptual basics and building blocks/structures of the General studies and optional subjects offered by the Academy, to create a foundation for 2nd year.`}</p>
          <p className='font-regular'>{`Some part of this module viewed also as capacity building would be continued alongside the semesters such as:`}</p>
          <ul className='flex flex-col gap-4 font-regular list-disc pl-5'>
            <li>
              {`Answer writing, essay writing, News and views (News analyses and reflection on current affairs in terms of their dimensions and depth)`}
            </li>
            <li>{`Communication techniques, debate, field visits, counselling, interactive sessions with experts etc.`}</li>
            <li>{`Basic Structure and concepts of the subjects`}</li>
            <li>{`All components of the General Studies Syllabi (Prelims and Mains).`}</li>
          </ul>

          <p className='font-bold'>{`Second Year -Preparatory Program`}</p>
          <p className='font-regular'>{`The aim of the program in the second year will involve a deep dive into the syllabi focusing on all the three stages of the examination.`}</p>
          <ul className='flex flex-col gap-4 font-regular list-disc pl-5'>
            <li>
              {`Rigorous evaluations in the form of subjective and objective tests. This includes sectional and full portions for all four papers of General Studies, Essay and Optional`}
            </li>
            <li>{`Answer writing for Previous Year Questions that have appeared in UPSC in the last 10 years and more`}</li>
            <li>{`Weekly solving of worksheets based on current affairs interspersed with periodic essay writing comprising a whole range of areas that are part of the civil services exam`}</li>
            <li>{`Personalized feedback to strengthen their weaker areas to hone and sharpen skills for a targeted focus.`}</li>
          </ul>
        </div>
      </div>

      {/* Fourth part */}
      <div className='flex flex-col gap-8'>
        <h2 className='title'>Our Facility</h2>

        <ul className='flex flex-col gap-4'>
          {COURSE_DETAILS.map((list, index) => (
            <li className='flex gap-4'>
              <Image
                src='/website/images/Point.svg'
                alt={`Point number ${index + 1}`}
                width={18}
                height={18}
              />
              <p key={index} className='font-regular'>
                {list}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
