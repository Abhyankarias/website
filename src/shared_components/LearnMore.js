import React from 'react';
import Image from 'next/image';

export default function LearnMore() {
  return (
    <button className='flex w-fit border-1 border-primary rounded-4xl mx-auto md:mx-0'>
      <div className='font-league-spartan-bold text-l self-center pl-5 pr-3'>
        Learn More
      </div>

      <Image
        className='rounded-4xl bg-primary m-[1px]'
        src='/website/images/ArrowRight.svg'
        alt='Arrow Right Icon'
        width={32}
        height={32}
      />
    </button>
  );
}
