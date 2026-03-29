import { Suspense } from 'react';
import Testimonials from '@/components/sections/Testimonials';

export const metadata = {
  title: "Testimonials | Abhyankar's IAS",
  description: "Success stories and reviews from students of Abhyankar's IAS Coaching",
};

export default function TestimonialsPage() {
  return (
    <div className='container mx-auto px-4'>
      <Suspense>
        <Testimonials className='mt-20' />
      </Suspense>
    </div>
  );
}
