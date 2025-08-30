import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

const TITLE = 'Desired Outcome of Our Programme';
const LIST_OF_OUTCOMES = [
  'Students should be able to select and read appropriate quality material',
  'They should be able to dismiss fake and bad material in the market that is often wrongfully persuasive',
  'Students should be able to reflect on the material read and perspectives acquired and developed; be conceptually groomed and guided; based on proper comprehension of the focal points of the questions asked, be able to seek to or organize answers in logical, coherent manner with her/his information level, perspectives, analytical skills and language skills properly in place.',
  'Above all, our students should be able to write a unique answer with all the protocols in place and being intellectually persuasive',
];

export default function Outcome({ className }) {
  return (
    <section
      className={cx(
        className,
        'flex flex-col gap-4 p-4 bg-[#FFFFFF] rounded-md'
      )}
    >
      <h2 className='title ml-9'>{TITLE}</h2>
      <ul className='flex flex-col gap-4'>
        {LIST_OF_OUTCOMES.map((list, index) => (
          <li className='flex gap-4'>
            <Image
              src='website/images/Point.svg'
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
    </section>
  );
}
