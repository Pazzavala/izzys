import React from 'react';
import { useSwiper } from 'swiper/react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

export default function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button onClick={() => swiper.slidePrev()}>
      <IoIosArrowDropleftCircle className='text-4xl text-gray-100 hover:text-gray-600 transition-colors' />
    </button>
  );
}
