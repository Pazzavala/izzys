import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section
      className='
      py-16 
      w-full 
      bg-[#FF8106]/95
      text-white
    '
    >
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <h3 className='custom-h3 text-center'>What Our Customers Say</h3>
        <TestimonialsSlider />
      </div>
    </section>
  );
}
