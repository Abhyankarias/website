import React, { useCallback, useEffect, useState } from 'react';
import cx from 'classnames';
import ChevronRight from './ChevronRight.jsx';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    console.log('next button called');

    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    console.log('useeffect called ', emblaApi);
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi]); // removed 'onSelect' from dependency list

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

const disabledColor = '#919191';
const deafultColor = '#000';

export const PrevButton = (props) => {
  const { children, className, disabled, ...restProps } = props;

  return (
    <button
      className={cx(
        'embla__button embla__button--prev cursor-pointer disabled:cursor-not-allowed',
        className
      )}
      type='button'
      disabled={disabled}
      {...restProps}
    >
      <ChevronRight
        width='48'
        height='48'
        flip
        color={disabled ? disabledColor : deafultColor}
      />
      {children}
    </button>
  );
};

export const NextButton = (props) => {
  const { children, className, disabled = false, ...restProps } = props;

  return (
    <button
      className={cx(
        'embla__button embla__button--next cursor-pointer disabled:cursor-not-allowed',
        className
      )}
      type='button'
      disabled={disabled}
      {...restProps}
    >
      <ChevronRight
        width='48'
        height='48'
        color={disabled ? disabledColor : deafultColor}
      />
      {children}
    </button>
  );
};
