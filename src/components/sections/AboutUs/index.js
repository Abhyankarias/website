'use client';

import { useState } from 'react';
import styles from './styles.module.css';

import { ABOUT_US_TITLE as TITLE, WHO_ARE_WE, OBJECTIVES_AND_VISION } from '@/data/about';

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
