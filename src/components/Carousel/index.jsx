import React, { Children } from 'react';
import cx from 'classnames';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './CarouselArrowButtons';
import styles from './carousel.module.css';
import useEmblaCarousel from 'embla-carousel-react';

const Carousel = (props) => {
  const { options, className, children } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // const slideCount = Children.count(children);

  const containerClasses = cx('container mx-auto', styles.embla__viewport);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
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

      <div
        className={cx(
          'static flex gap-x-16 justify-center',
          'md:w-full md:justify-between md:absolute md:top-[150%] md:-mt-[50%]'
        )}
      >
        <PrevButton
          className='md:translate-x-[-48px]'
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
        />
        <NextButton
          className='md:translate-x-[48px]'
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
        />
      </div>
    </section>
  );
};

export default Carousel;
export * from './CarouselArrowButtons';
