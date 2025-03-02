import React from 'react';

export default function AboutSection() {
  return (
    <section className='h-96 flex flex-col justify-center items-center bg-[#FF8106]'>
      <div className='container mx-auto px-8'>
        <h2 className='text-center text-2xl mb-16'> Why Choose Us</h2>
        <p className='md:text-lg leading-10'>
          Izzy's Landscaping is dedicated to creating beautiful, high-quality
          outdoor spaces across Minnesota, from lush gardens to durable
          hardscapes, with expert craftsmanship and attention to detail. Whether
          it’s a residential retreat or a commercial project, we take pride in
          creating beautiful, sustainable landscapes that stand the test of
          time. Let us turn your outdoor dreams into reality!
        </p>
      </div>
    </section>
  );
}
