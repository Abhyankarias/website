import React from 'react';
import Image from 'next/image';

const OUR_FACILITY = [
  'Exclusive access to Abhyankar’s IAS Academy Learning Management Software for access to all online reading material. magazines/e -books, current affairs etc.',
  'Students will have access to Academy’s Repository of recorded classroom sessions for a limited period only',
  'Reading hall/ room/ space available.',
  'Hostel/ Residential Tie Up Facility available.',
  'Internet/ access to online Library/ journal through online search Engines.',
];

export default function FoundationProgram() {
  return (
    <div className='flex flex-col gap-8'>
      {/* First part */}
      <div className='flex flex-col gap-8'>
        <div className='flex flex-col gap-3'>
          <h1 className='title text-center md:text-left'>Foundation Program</h1>
          <p className='title text-center md:text-left'>{`( Integrated with Civil Services Examination Preprations )`}</p>
        </div>

        <div className='flex flex-col gap-3'>
          <p>
            <span className='font-bold'>{`Eligibility:`}</span>
            <span className='font-regular'>{` XII pass/
                undergraduate students`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Course Duration:`}</span>
            <span className='font-regular'>{` ONE YEAR (this has been
spread over 2 semesters)`}</span>
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
            <span className='font-regular'>{` Evening 5-8 pm
(weekdays)/ Saturday 3-6 pm/Sunday 9-12 pm)`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Days:`}</span>
            <span className='font-regular'>{` 3 days a week (2 weekdays/ 1 weekend)`}</span>
          </p>
          <p>
            <span className='font-bold'>{`Hours:`}</span>
            <span className='font-regular'>{` 12 hours/week-14/15 sessions per month`}</span>
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
        <h2 className='title'>Why Foundation Program</h2>

        <div className='flex flex-col gap-3'>
          <p className='font-regular'>{`The UPSC Civil Services Examination requires a blend of theoretical knowledge and practical understanding of different domains.`}</p>

          <p className='font-regular'>{`This course aims to equip learners with essential knowledge and skills to build a strong learning foundation for UPSC preparation, focusing on information acquisition, notemaking, analysis, answer organization, articulation, and logical debate.`}</p>

          <p className='font-regular'>{`The purpose of this course is to sensitize the learners with the essential knowledge and skills which will lay a sound foundation for his/her pursuit of learning and will help them become matured individuals.`}</p>
        </div>
      </div>

      {/* Third part */}
      <div className='flex flex-col gap-8'>
        <h2 className='title'>Course Structure</h2>

        <div className='flex flex-col gap-3'>
          <p className='font-regular'>{`The course is designed to ambitiously take off. NCERT Syllabus and basic recommended texts, journal and magazines shall serve as academic guides through the learning process.`}</p>

          <p className='font-regular'>
            {'The program shall encapsulate the following:'}
          </p>
          <ul className='flex flex-col gap-4 font-regular list-disc pl-5'>
            <li>Current affairs</li>
            <li>Public administration</li>
            <li>Ethical governance Essay</li>
            <li>Analytical skills</li>
            <li>Quantitative aptitude</li>
            <li>News and views</li>
          </ul>

          <p className='font-regular'>{`Eminent speakers from diverse fields will integrate into the course curriculum to maintain its dynamic nature and provide students with hands-on practical experience.`}</p>

          <p className='font-regular'>{`The program periodically focuses on conducting comprehensive evaluations, both objective and subjective, to implement targeted interventions aimed at improving learning outcome`}</p>
        </div>
      </div>

      {/* Fourth part */}
      <div className='flex flex-col gap-8'>
        <h2 className='title'>Our Facility</h2>

        <ul className='flex flex-col gap-4'>
          {OUR_FACILITY.map((list, index) => (
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
