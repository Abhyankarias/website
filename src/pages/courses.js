import React from 'react';
import Link from 'next/link';

import DetailedCourseView from '@/components/DetailedCourseView';

export default function courses() {
  return (
    <Link href='/courses'>
      <div className='container mx-auto px-4'>
        <DetailedCourseView className='mt-20' />
      </div>
    </Link>
  );
}
