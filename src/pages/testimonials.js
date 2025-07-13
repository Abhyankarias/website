import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Courses from '@/components/Courses';

export default function testimonials() {
  return (
    <Link href='/testimonials'>
      <div className='container mx-auto'>
        <Testimonials className='mt-20' />
        <Courses className='mt-20' />
      </div>
    </Link>
  );
}
