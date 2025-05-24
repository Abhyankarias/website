import React, { useState } from 'react';

import './style.css';

const Carousel = ({ reviewList }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const [timerID, setTimerID] = useState(null);

  const nextSlide = () => {
    clearTimeout(timerID);

    setActiveIndex((prevIndex) =>
      prevIndex === reviewList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    clearInterval(timerID);

    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? reviewList.length - 1 : prevIndex - 1
    );
  };

  // setInterval(() => {
  //   activeIndex === reviewList.length - 1
  //     ? setActiveIndex(0)
  //     : setActiveIndex(activeIndex + 1);
  // }, 10000);

  return (
    <div className='carousel'>
      <div className='flex flex-col min-h-48 p-5 bg-[#FFD96C]'>
        <div>
          <img
            src={reviewList[activeIndex].imgSrc}
            alt={reviewList[activeIndex].name}
            style={{ width: '78px', height: '78px', borderRadius: '50%' }}
          ></img>
        </div>
        <div className='my-2'>
          <span className='font-bold mr-2'>{reviewList[activeIndex].name}</span>
          {reviewList[activeIndex].relation}
        </div>
        <div>{reviewList[activeIndex].review}</div>
        <button
          onClick={prevSlide}
          className='carousel__btn carousel__btn--prev'
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className='carousel__btn carousel__btn--next'
        >
          &gt;
        </button>
      </div>
    </div>
  );
};
export default Carousel;
