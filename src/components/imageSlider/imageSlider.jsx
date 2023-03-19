import React, { useEffect, useState } from 'react';
import { BsFillCaretRightFill,BsFillCaretLeftFill } from 'react-icons/bs';
// import {TiMediaRecordOutline} from 'react-icons/ti'

function ImageSlider() {
  const slides = [1,2,3,4].map((el)=>({url:`../../images/carousel-${el}.jpeg`}))
   

  const [currSlide, setCurrSlide] = useState(0);

  const prevSlide = () => {
    setCurrSlide((currSlide) => (currSlide === 0 ? slides.length - 1 : currSlide - 1))
  };

  const nextSlide = () => {
    setCurrSlide((currSlide) => (currSlide === slides.length - 1 ? 0 : currSlide + 1))
  };

  const goToSlide = (slideIndex) => {
    setCurrSlide(slideIndex);
  };

  useEffect(()=>{
    const photoScrollInterval = setInterval(() => {
    // console.log(`${currSlide}`);
      nextSlide();
    }, 4000);

    return ()=> clearInterval(photoScrollInterval);

  },[])

  return (
    <div className='h-full w-full relative group'>
      <div
        style={{ backgroundImage: `url(${slides[currSlide].url})`}}
        className='w-full h-full rounded bg-top bg-cover duration-1000 transition-all ease-out delay-1000'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-1xl rounded-lg p-1 bg-black/20 text-white cursor-pointer'>
        <BsFillCaretLeftFill onClick={prevSlide} size={13}/>
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-1xl rounded-lg p-1 bg-black/20 text-white cursor-pointer'>
        <BsFillCaretRightFill onClick={nextSlide} size={13} />
      </div>
      {/* Slide Dot, Click to go to the slide */}
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            {/* <TiMediaRecordOutline onClick={goToSlide}/> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;