import cx from 'classnames';
import Button from '@/components/Button';

const HeroSection = ({ className }) => {
  return (
    <section
      className={cx(className, 'flex flex-col gap-4 md:flex-row md:w-fit')}
    >
      {/* Left half */}
      <div className='flex flex-col justify-center order-last gap-8 md:order-first '>
        <h2 className='hero-section mx-auto text-center md:text-left max-w-[25ch] md:max-w-[17ch]'>
          At Abhyankar’s IAS prepare to witness a transformation to scale{' '}
          <span className='text-[#e57b3e]'>UPSC & beyond</span>
        </h2>
        <div className=''></div>

        <Button
          className='font-league-spartan-medium md:max-w-1/2'
          text='Contact Us'
          textColorPrimary={false}
          backgroundPrimary
        />
      </div>

      {/* Right half */}
      <div className='order-first'>
        <div className='text-center '>
          {/* <h1 className=''>At Abhyankar’s IAS prepare</h1> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
