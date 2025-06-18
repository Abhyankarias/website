import cx from 'classnames';

const TITLE = 'About us';

const WHO_ARE_WE = [
  `Abhyankar's IAS Academy, established 20 years ago by Dr. Ajit Abhyankar, aims to revolutionize rote-based education.`,
  `Drawing from his own civil services success and a family legacy of over 10 IAS/IFS officers, Ajit Sir has mentored countless students into prestigious services, enhancing the Academy's. `,
];

const WHAT_WE_DO = [
  `We focus on cultivating curious, agile minds, often neglected in traditional academics. `,
  `Through innovative teaching methods, students master clear and precise answer-writing, fostering creativity and sharpening problem-solving skills. `,
];

const WHAT_YOU_WILL_GAIN = [
  `Rigorous training in critical thinking equips you to tackle UPSC challenges effectively. This effectively helps you become influential decision-makers as public servants`,
  `You will be able to write fact and data informed answers and essay which is crucial in this day and age of public administration where the lines between real and the fake are blurred`,
  `Your fact finding and research skills will get honed which gives you an edge amongst others who still follow the rote learning approach when it comes to competitive exams like UPSC`,
];

function CreateList({ listSet }) {
  return (
    <ul className='flex flex-col gap-6'>
      {listSet.map((listContent, listIndex) => (
        <li key={listIndex} className='flex'>
          <img
            className='self-start mx-4'
            src='images/BulletPoint.svg'
            alt={`point ${listIndex}`}
            width='16'
            height='16'
          />

          <p className='w-[26ch] md:w-[38ch]'>{listContent}</p>
        </li>
      ))}
    </ul>
  );
}

export default function AboutUs({ className }) {
  return (
    <section className={className}>
      <h1 className='title text-center mb-8'>{TITLE}</h1>

      {/* Sub-sections */}
      <div className='flex flex-col gap-4 md:flex-row md:flex-wrap'>
        {/* Who are we */}
        <div
          className='flex flex-col border border-2 border-(--color-primary) rounded-md pt-8 pb-8 gap-8 md:w-[calc(50%-8px)] drop-shadow-md'
          style={{
            background: '#FFFFFF',
          }}
        >
          <h2 className='title text-center'>Who are we?</h2>
          <CreateList listSet={WHO_ARE_WE} />
        </div>
        {/* What we do */}
        <div
          className='flex flex-col border border-2 border-(--color-primary) rounded-md pt-8 pb-8 gap-8 md:w-[calc(50%-8px)] drop-shadow-md'
          style={{
            background: '#FFFFFF',
          }}
        >
          <h2 className='title text-center'>What we do?</h2>
          <CreateList listSet={WHAT_WE_DO} />
        </div>
        {/* What you will gain */}
        <div
          className='flex flex-col border border-2 border-(--color-primary) rounded-md pt-8 pb-8 gap-8 md:w-full drop-shadow-md'
          style={{
            background: '#FFFFFF',
          }}
        >
          <h2 className='title text-center'>What you will gain?</h2>
          <CreateList listSet={WHAT_YOU_WILL_GAIN} />
        </div>
      </div>
    </section>
  );
}
