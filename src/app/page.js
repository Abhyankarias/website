import HeroSection from '@/components/sections/HeroSection';
import FounderSection from '@/components/sections/FounderSection';
import AboutUs from '@/components/sections/AboutUs';
import Testimonials from '@/components/sections/Testimonials';
import Courses from '@/components/sections/Courses';
import EffortsAndInnovation from '@/components/sections/EffortsAndInnovation';
import Outcome from '@/components/sections/Outcome';

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      <HeroSection className='mt-10' />
      <FounderSection className='mt-20' />
      <AboutUs className='mt-20' />
      <Courses className='mt-20' />
      <Testimonials className='mt-20' />
      <EffortsAndInnovation className='mt-20' />
      <Outcome className='mt-20' />
    </div>
  );
}
