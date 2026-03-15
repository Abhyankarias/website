import React from 'react';
import Image from 'next/image';
import cx from 'classnames';

import { EFFORTS_AND_INNOVATION_TITLE as TITLE, LIST_OF_EFFORTS_AND_INNOVATION } from '@/data/about';

export default function EffortsAndInnovation({ className }) {
  return (
    <section
      className={cx(
        className,
        'flex flex-col gap-4 p-4 bg-[#FFFFFF] drop-shadow-md rounded-md'
      )}
    >
      <h2 className='title ml-9'>{TITLE}</h2>
      <ul className='flex flex-col gap-4'>
        {LIST_OF_EFFORTS_AND_INNOVATION.map((list, index) => (
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
    </section>
  );
}
