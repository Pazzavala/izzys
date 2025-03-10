import React from 'react';
import Image from 'next/image';
import AboutUsHero1 from '@/public/assets/image2.png';
import AboutUsHero2 from '@/public/assets/image3.png';
import AboutUsHero3 from '@/public/assets/image4.png';

export default function LandscapingServicesPage() {
  return (
    <div className='w-full bg-white px-12 min-h-[50rem] flex flex-col items-center'>
      {/* About Us Title */}
      <h1 className='text-5xl md:text-7xl lg:text-8xl font-light text-orange-300 mt-12 md:mt-5'>
        About Us
      </h1>

      {/* Triptych Image Grid - Consistent Alignment */}
      <div className='grid grid-cols-3 gap-4 max-w-6xl w-full mt-12 md:mt-10'>
        {/* Left Image - Ensuring consistent height */}
        <div className='relative w-full h-[450px]'>
          <Image
            src={AboutUsHero1}
            alt='Landscaping example 1'
            className='rounded-lg object-cover'
            fill
          />
        </div>

        {/* Center Image - Taller for triptych effect */}
        <div className='relative w-full h-[450px]'>
          <Image
            src={AboutUsHero2}
            alt='Landscaping example 2'
            className='rounded-lg object-cover'
            fill
          />
        </div>

        {/* Right Image - Ensuring consistent height */}
        <div className='relative w-full h-[450px] '>
          <Image
            src={AboutUsHero3}
            alt='Landscaping example 3'
            className='rounded-lg object-cover'
            fill
          />
        </div>
      </div>

      {/* Description Text */}
      <p className='max-w-4xl text-center text-gray-600 text-sm md:text-base font-light leading-relaxed tracking-wide mt-6'>
        Izzy's Landscaping is dedicated to creating beautiful, high-quality
        outdoor spaces across Minnesota. From lush gardens to durable
        hardscapes, we bring expert craftsmanship and attention to detail.
        Whether it's a residential retreat or a commercial project, we take
        pride in creating beautiful, sustainable landscapes that stand the test
        of time. Let us turn your outdoor dreams into reality!
      </p>
    </div>
  );
}
