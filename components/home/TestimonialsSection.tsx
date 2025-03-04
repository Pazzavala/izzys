import React from 'react';
import TestimonialsSlider from './TestimonialsSlider';

export default function TestimonialsSection() {
  return (
    <section
      className='
      py-16 
      w-full 
      bg-[#FF8106] 
      text-white
    '
    >
      <div className='container mx-auto px-4'>
        <h2
          className='
          text-center 
          text-3xl 
          sm:text-4xl 
          font-bold
          text-white
          font-caladea
        '
        >
          What Our Customers Say
        </h2>
        <TestimonialsSlider />
      </div>
    </section>
  );
}
