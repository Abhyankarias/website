import cx from 'classnames';

const TITLE = 'Objectives and Vision';

const OBJECTIVES_VISION_LIST = [
  {
    imgSrc: '/website/images/ObjectivesAndVision1.svg',
    listContent: `The Academy is dedicated to preparing aspirants for the Civil Services Examination through rigorous, targeted training.`,
  },
  {
    imgSrc: '/website/images/ObjectivesAndVision2.svg',
    listContent: `With dynamic training modules led by experienced mentors and experts, the Academy ensures aspirants meet the high standards required for success. `,
  },
  {
    imgSrc: '/website/images/ObjectivesAndVision3.svg',
    listContent: `Its vision is to nurture young talent with top-notch academic and intellectual support, empowering them to qualify with distinction and serve society with responsibility and excellence.`,
  },
  {
    imgSrc: '/website/images/ObjectivesAndVision4.svg',
    listContent: `Recognizing the challenges and prestige of a career in the Indian Administrative Services, the Academy equips students to excel in the UPSC’s three-stage process: Preliminary, Mains, and Interview`,
  },
];

function CreateList({ listSet }) {
  return (
    <ul className='flex flex-col gap-4'>
      {listSet.map(({ imgSrc, listContent }, listIndex) => (
        <li key={listIndex} className='flex bg-[#FFF0E8] p-2 rounded-md'>
          <img
            className='self-start md:self-center ms-1 me-4'
            src={imgSrc}
            alt={`point ${listIndex}`}
            width='36px'
            height='36px'
          />

          <p className='w-[26ch]  md:w-[82ch]'>{listContent}</p>
        </li>
      ))}
    </ul>
  );
}

export default function ObjectivesAndVision({ className }) {
  return (
    <section className={className}>
      <h1 className='title text-center mb-8'>{TITLE}</h1>
      {/* Who are we */}
      <CreateList listSet={OBJECTIVES_VISION_LIST} />
    </section>
  );
}
