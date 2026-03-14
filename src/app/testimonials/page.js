import Testimonials from '@/components/Testimonials';

export const metadata = {
  title: "Testimonials | Abhyankar's IAS",
  description: "Success stories and reviews from students of Abhyankar's IAS Coaching",
};

export default function TestimonialsPage() {
  return (
    <div className='container mx-auto px-4'>
      <Testimonials className='mt-20' />
    </div>
  );
}
