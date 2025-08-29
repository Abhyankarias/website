import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

const TITLE = 'Our Efforts & Innovation';
const LIST_OF_EFFORTS_AND_INNOVATION = [
  'Experienced teachers with good academic pedagogic skills.',
  'Tutors for feedback and recapitulation sessions.',
  'Foundational concept-based teaching/ pedagogy based upon NCERT and University recommended texts and journals (additional subject/ issues specific reading/ reference and updating) in the journals in the respective fields and domains.',
  'More of interaction (interactive classroom sessions) would be encouraged along with conceptual understanding and analytical depth.',
];

export default function EffortsAndInnovation({ className }) {
  return (
    <section
      className={cx(
        className,
        'flex flex-col gap-4 p-4 bg-[#FFFFFF] rounded-md'
      )}
    >
      <h2 className='title ml-9'>{TITLE}</h2>
      <ul className='flex flex-col gap-4'>
        {LIST_OF_EFFORTS_AND_INNOVATION.map((list, index) => (
          <li className='flex gap-4'>
            <Image
              src='website/images/point.svg'
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
