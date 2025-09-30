import React from 'react';
import Link from 'next/link';
import Testimonials from '@/components/Testimonials';
import Courses from '@/components/Courses';

export default function testimonials() {
  return (
    <Link href='/testimonials'>
      <div className='container mx-auto px-4'>
        <Testimonials className='mt-20' />
      </div>
    </Link>
  );
}
