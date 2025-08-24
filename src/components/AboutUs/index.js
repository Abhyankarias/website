import { useState } from 'react';
import styles from './styles.module.css';

const TITLE = 'About us';

const WHO_ARE_WE = [
  `Abhyankar’s IAS Academy, founded 20 years ago, by Dr. Ajit Abhyankar was envisioned to bring about an innovative change in an environment of rote - memory-based education.`,
  `Ajit Sir had passed the civil services exam himself and belongs to a family with more than 10 members in the IAS/IFS and is solely credited with sending many more into the service, only adding to the glory of the Academy and its family. `,
  `The major thrust at the Academy is on developing a keen, curious and nimble mind, something that has eluded students during previous academic years. `,
  `The Academy incorporates an exciting innovation in teaching designed to hone the students’ answer-writing skills with clarity and precision, stimulating creativity and enhancing problem-solving skills. `,
  `The students are put through a grind of innovative and critical thinking that enables them to skilfully unravel and navigate the questions put forth by the examiners in the UPSC and prepare them to be influential decision-makers. Emphasis on this fact has been incorporated into our pedagogical approach.`,
];
const OBJECTIVES_AND_VISION = [
  `The Academy nurtures the objective of preparing students for Civil Services Examinations and meeting the needs of such aspirants through certain modes/ forms of rigorous training/preparation. `,
  `The Academy is clearly of the opinion that careers in Indian administrative services are challenging and lucrative and the selection process through examinations conducted by the Union Public Service Commission tries to select/ recommend the best of the resources, out of the lakhs who write this exam. `,
  `The aspirants have to undergo a rigorous examination process comprising of three stages
Preliminary
 Mains
Interview`,
  ` Keeping in mind the academic and intellectual talent (resources) required for such a career and to be able to meet the requirements of selection, the Academy has prepared a broad plan that will cater to this need. `,
  `This includes incorporating training/ preparatory programs and modules through experienced teachers, mentors, experts, and academics.`,
  ` These training modules are dynamic in nature so that the aspirants trained at the academy squarely meet the required standards.`,
  ` In a nutshell, harnessing the young aspirants with the best of the best academic and intellectual support so that they qualify for the examination with distinction and be able to meet the challenges of this career and responsibly serve society is the vision of the Academy`,
];

export default function AboutUs({ className }) {
  const [whoAreWeExpanded, setWhoAreWeExpanded] = useState(false);
  const [objectivesAndVisionExpanded, setObjectivesAndVisionExpanded] =
    useState(false);

  function CreateList({ listSet }) {
    return (
      <ul className='flex flex-col gap-6'>
        {listSet.map((listContent, listIndex) => (
          <li key={listIndex} className='flex'>
            <p className='font-regular text-center mx-auto w-[26ch] md:text-left md:mx-8 md:w-full'>
              {listContent}
            </p>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className={className}>
      <h1 className='title text-center mb-8'>{TITLE}</h1>

      {/* Sub-sections */}
      <div className='flex flex-col gap-4 md:flex-row md:flex-wrap'>
        {/* Who are we */}
        <div
          className='flex flex-col rounded-md pt-8 pb-8 gap-8 md:w-full drop-shadow-md'
          style={{
            background: '#FFFFFF',
          }}
        >
          <h2 className='title text-center md:text-left md:pl-8'>
            Who are we?
          </h2>

          {!whoAreWeExpanded ? (
            <CreateList listSet={[WHO_ARE_WE[0]]} />
          ) : (
            <CreateList listSet={WHO_ARE_WE} />
          )}
          <div
            className='mx-auto text-center'
            onClick={() => setWhoAreWeExpanded(!whoAreWeExpanded)}
          >
            <p className='font-league-spartan-bold'>
              Show {!whoAreWeExpanded ? 'More' : 'Less'}
            </p>{' '}
            {/* Wrap text in a div */}
            <span
              className={`block mx-auto item-center ${styles.accordionIcon} ${
                whoAreWeExpanded && styles.accordionIconRotated
              }`}
            />
          </div>
        </div>

        {/* Objectives & Vision */}
        <div
          className='flex flex-col rounded-md pt-8 pb-8 gap-8 md:w-full drop-shadow-md'
          style={{
            background: '#FFFFFF',
          }}
        >
          <h2 className='title text-center md:text-left md:pl-8'>
            Objectives & Vision
          </h2>

          {!objectivesAndVisionExpanded ? (
            <CreateList listSet={[OBJECTIVES_AND_VISION[0]]} />
          ) : (
            <CreateList listSet={OBJECTIVES_AND_VISION} />
          )}

          <div
            className='mx-auto text-center'
            onClick={() =>
              setObjectivesAndVisionExpanded(!objectivesAndVisionExpanded)
            }
          >
            <p className='font-league-spartan-bold'>
              Show {!objectivesAndVisionExpanded ? 'More' : 'Less'}
            </p>{' '}
            {/* Wrap text in a div */}
            <span
              className={`block mx-auto item-center ${styles.accordionIcon} ${
                objectivesAndVisionExpanded && styles.accordionIconRotated
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
