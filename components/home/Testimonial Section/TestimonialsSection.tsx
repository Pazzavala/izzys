import React from "react";
import TestimonialsSlider from "./TestimonialsSlider";

export default function TestimonialsSection() {
  return (
    <section className='py-16 w-full bg-gray-50'>
      <div className='container mx-auto px-4 md:px-6 lg:px-8'>
        <h3 className='text-center'>What Our Customers Say</h3>
        <TestimonialsSlider />
      </div>
    </section>
  );
}
