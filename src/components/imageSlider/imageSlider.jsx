import React, { useEffect, useState, useCallback } from "react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
// import {TiMediaRecordOutline} from 'react-icons/ti'

function ImageSlider() {
  const slides = [1, 2, 3, 4].map((el) => ({
    url: `../../images/carousel-${el}.jpeg`,
  }));

  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    setCurrSlide((currSlide) =>
      currSlide === 0 ? slides.length - 1 : currSlide - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrSlide((currSlide) =>
      currSlide === slides.length - 1 ? 0 : currSlide + 1
    );
  }, [slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrSlide(slideIndex);
  };

  useEffect(() => {
    const photoScrollInterval = setInterval(() => {
      // console.log(`${currSlide}`);
      nextSlide();
    }, 7000);

    return () => clearInterval(photoScrollInterval);
  }, [nextSlide]);

  return (
    <div className="group relative h-full w-full">
      <div
        style={{ backgroundImage: `url(${slides[currSlide].url})` }}
        className="h-full w-full rounded bg-cover bg-top transition-all delay-1000 duration-1000 ease-out"
      ></div>
      {/* Left Arrow */}
      <div className="text-1xl absolute top-[50%] left-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-lg bg-black/20 p-1 text-white group-hover:block">
        <BsFillCaretLeftFill onClick={prevSlide} size={13} />
      </div>
      {/* Right Arrow */}
      <div className="text-1xl absolute top-[50%] right-5 hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-lg bg-black/20 p-1 text-white group-hover:block">
        <BsFillCaretRightFill onClick={nextSlide} size={13} />
      </div>
      {/* Slide Dot, Click to go to the slide */}
      <div className="top-4 flex justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="cursor-pointer text-2xl"
          >
            {/* <TiMediaRecordOutline onClick={goToSlide}/> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
