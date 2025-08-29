import React from 'react';
import Link from 'next/link';

import Courses from '@/components/Courses';

export default function courses() {
  return (
    <Link href='/courses'>
      <div className='container mx-auto'>
        <Courses />
      </div>
    </Link>
  );
}
