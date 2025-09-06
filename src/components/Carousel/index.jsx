import React, { Children } from 'react';
import Image from 'next/image';
import cx from 'classnames';
// import {
//   PrevButton,
//   NextButton,
//   usePrevNextButtons,
// } from './CarouselArrowButtons';

import { DotButton, useDotButton } from './CarouselDotButton';
import styles from './carousel.module.css';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = (props) => {
  const { options, className, children } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // const slideCount = Children.count(children);

  const containerClasses = cx('container mx-auto', styles.embla__viewport);

  // const {
  //   prevBtnDisabled,
  //   nextBtnDisabled,
  //   onPrevButtonClick,
  //   onNextButtonClick,
  // } = usePrevNextButtons(emblaApi);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  console.log('scrollSnaps; ', scrollSnaps);

  let slideIndex = 0;
  return (
    <section className={cx(styles.embla, 'md:relative', className)}>
      <div className={containerClasses} ref={emblaRef}>
        <div className={styles.embla__container}>
          {Children.map(children, (child) => (
            <div className={styles.embla__slide} key={slideIndex++}>
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className='flex gap-3 mx-auto w-fit mt-10 embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className='embla__dot'
          >
            {index === selectedIndex ? (
              <Image
                src='/website/images/CarouselDotSelected.svg'
                alt={`Point number ${index + 1}`}
                width={14}
                height={14}
              />
            ) : (
              <Image
                src='/website/images/CarouselDot.svg'
                alt={`Point number ${index + 1}`}
                width={14}
                height={14}
              />
            )}
          </DotButton>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
export * from './CarouselArrowButtons';
