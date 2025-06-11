import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import AboutUs from '@/components/AboutUs';
import ObjectivesAndVision from '@/components/ObjectivesAndVision';
import Testimonials from '@/components/Testimonials';
import Courses from '@/components/Courses';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className='container mx-auto pb-8 px-4'>
      <HeroSection className='mt-10' />
      <FounderSection className='mt-20' />
      <AboutUs className='mt-20' />
      <ObjectivesAndVision className='mt-20' />
      <Testimonials className='mt-20' />
      <Courses className='mt-20' />
      <Contact className='mt-20' />
    </div>
  );
}
