import React from 'react';

export default function AboutSection() {
  return (
    <section className='w-full min-h-[50vh] md:min-h-[70vh] 3xl:min-h-[65vh] bg-[#FF8106] flex flex-col items-center justify-center text-white text-center'>
      <div className='container max-w-5xl px-6 md:px-12'>
        {/* Section Title */}
        <h2 className='text-3xl sm:text-4xl font-caladea font-bold mb-12'>
          Why Choose Us
        </h2>

        {/* Description */}
        <p className='text-base md:text-l font-caladea font-medium leading-loose'>
          Izzy's Landscaping is dedicated to crafting high-quality outdoor
          spaces across Minnesota. From lush gardens to durable hardscapes, we
          bring expert craftsmanship and attention to detail. Whether it’s a
          residential retreat or a commercial project, we take pride in
          designing sustainable landscapes that stand the test of time. Let us
          turn your outdoor dreams into reality!
        </p>
      </div>
    </section>
  );
}
