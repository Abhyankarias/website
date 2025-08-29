import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import AboutUs from '@/components/AboutUs';
import Testimonials from '@/components/Testimonials';
import Courses from '@/components/Courses';
import EffortsAndInnovation from '@/components/EffortsAndInnovation';

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      <HeroSection className='mt-10' />
      <FounderSection className='mt-20' />
      <AboutUs className='mt-20' />
      <Courses className='mt-20' />
      <Testimonials className='mt-20' />
      <EffortsAndInnovation className='mt-20' />
    </div>
  );
}
