import Button from '@/components/Button';

export default function Contact({ className }) {
  return (
    <section className={className}>
      <div className='flex flex-col gap-4'>
        {/* medium screen - left half */}
        <div className='flex flex-col gap-4'>
          <h2 className='title'>{'Have any questions'}</h2>
          <p className='font-ls-regular w-full md:w-[72ch]'>
            {
              'Contact us if you have any questions or want learn more about the courses, our team will get in touch with you.'
            }
          </p>
        </div>

        {/* medium screen - right half */}
        <div className='flex flex-col w-full  gap-4'>
          <input
            className='border rounded-md py-1 px-3'
            placeholder='Enter Email or Phone Number'
            // value={contact}
            // onChange={(e) => setContact(e.target.value)}
          ></input>
          <textarea
            className='border rounded-md align-middle py-1 px-3 min-h-[112px]'
            placeholder='Write a message or question (if any)'
            // value={emailBody}
            // onChange={(e) => setEmailBody(e.target.value)}
          ></textarea>
          <div>
            <Button
              className='w-full md:w-auto'
              text='Send'
              textColorPrimary={false}
              backgroundPrimary={true}
              //   onClick={sendMail}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
