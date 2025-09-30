import React from 'react';
import Carousel from './Carousel';

import FoundationProgram from './FoundationProgram';
import MasterInSocialStudies from './MasterInSocialStudies';

export default function DetailedCourseView({ className }) {
  return (
    <section className={className}>
      <Carousel>
        <article>
          <FoundationProgram />
        </article>
        <article>
          <MasterInSocialStudies />
        </article>
      </Carousel>
    </section>
  );
}
