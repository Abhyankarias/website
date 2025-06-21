import Button from '@/components/Button';

export default function Contact({ className }) {
  return (
    <section className={className}>
      <div className='flex flex-col gap-4 pb-4 rounded-md md:flex-row md:justify-between md:pt-15 md:pb-9'>
        {/* medium screen - left half */}
        <div className='flex flex-col gap-4 md:pt-3'>
          <h2 className='title'>{'Have any questions'}</h2>
          <p className='font-ls-regular w-full md:w-[36ch] md:me-2'>
            {
              'Contact us if you have any questions or want learn more about the courses, our team will get in touch with you.'
            }
          </p>
        </div>

        {/* medium screen - right half */}
        <div className='flex flex-col w-full gap-4 md:max-w-2/5'>
          <input
            className='font-ls-regular border rounded-md py-1 px-3'
            placeholder='Enter Email or Phone Number'
          ></input>
          <textarea
            className='font-ls-regular border rounded-md align-middle py-1 px-3 min-h-[112px]'
            placeholder='Write a message or question (if any)'
          ></textarea>
          <div>
            <Button
              className='font-league-spartan-medium w-full md:w-auto'
              text='Send'
              textColorPrimary={false}
              backgroundPrimary={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
