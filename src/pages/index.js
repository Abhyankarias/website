import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import AboutUs from '@/components/AboutUs';
import ObjectivesAndVision from '@/components/ObjectivesAndVision';

export default function Home() {
  return (
    <div className='container mx-auto pb-8 px-4'>
      <HeroSection className='mt-10' />
      <FounderSection className='mt-20' />
      <AboutUs className='mt-20' />
      <ObjectivesAndVision className='mt-20' />
    </div>
  );
}
