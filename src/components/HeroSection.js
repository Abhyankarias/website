import cx from 'classnames';
import Button from '@/components/Button';

const HeroSection = ({ className }) => {
  return (
    <section className={cx(className, 'flex flex-col gap-4 md:flex-row')}>
      {/* Left half */}
      <div className='flex flex-col justify-center order-last gap-8 md:order-first '>
        <div className='text-center md:text-left'>
          <h2 className='max-w-[25ch] px-4 md:max-w-[17ch]'>
            At Abhyankar’s IAS prepare to witness a transformation to scale{' '}
            <span className='text-[#e57b3e]'>UPSC & beyond</span>
          </h2>
        </div>

        <Button
          className='md:max-w-1/2'
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
