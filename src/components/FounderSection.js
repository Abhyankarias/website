import cx from 'classnames';
import Image from 'next/image';

const FIRST_PARAGRAPH = `The ultimate aim of education is human refinement. Education should enable the learner to formulate a positive outlook towards life and to accept a stand which suits both the well-being of the individual and society,at large.`;
const SECOND_PARAGRAPH = `The attitude and potential to work has determined the human race's destiny, progress and cultural development`;
const THIRD_PARAGRAPH = ` The educational process expected in and outside our formal schools should concentrate upon inculcating concepts, abilities, attitudes and values in tune with this 'work culture `;

export default function FounderSection({ className }) {
  return (
    <section
      className={cx(
        className,
        'flex flex-col gap-4 shadow-lg  rounded-md md:flex-row'
      )}
      style={{
        background: '#FFFFFF',
      }}
    >
      {/* Photograph, name and title */}
      <div className='flex flex-col place-items-center gap-2 mt-4 md:justify-center-safe md:gap-5'>
        <div className='relative max-h-[170] max-w-[200] md:place-self-start'>
          <Image
            className='relative z-[2] mx-auto md:place-self-start'
            sizes='(max-width: 200)'
            height={169}
            width={200}
            src='/images/AjitAbhyankar.png'
            alt='Picture of Dr. Ajit Abhyankar'
          />
          <div
            className='absolute top-0 z-[1] h-[169] w-[192] rounded-t-md '
            style={{ background: '#e57b3e' }}
          ></div>
        </div>
        <div>
          <div className='w-full text-center md:text-left font-bold text-[20px] md:mb-1'>
            Dr. Ajit Abhyankar
          </div>
          <div className='w-full text-center md:text-left'>
            <p className='font-italic text-[20px] md:w-[24ch]'>
              Our Founder and Guiding Light
            </p>
          </div>
        </div>
      </div>

      {/* Text section */}
      <div className='flex flex-col gap-4 w-[27ch] text-center text-black pb-10 self-center md:w-[45ch] md:text-left md:pt-10 md:pl-5'>
        <p className='font-italic'>{FIRST_PARAGRAPH}</p>
        <p className='font-bold'>{SECOND_PARAGRAPH}</p>
        <p className='font-italic'>{THIRD_PARAGRAPH}</p>
      </div>
    </section>
  );
}
