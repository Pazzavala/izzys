import React from "react";
import Image from "next/image";
import AboutUsHero1 from "@/public/assets/izzy_banner.jpg";
import AboutUsHero3 from "@/public/assets/izzy_banner.jpg";
import Gallery from "@/components/ui/Gallery";

export default function LandscapingServicesPage() {
  return (
    <div className='w-full max-w-7xl mx-auto px-12 min-h-[50rem] flex flex-col '>
      <div className='flex flex-col lg:flex-row py-12'>
        <div className='container'>
          {/* About Us Title */}
          <h1 className='text-5xl md:text-6xl lg:text-7xl text-center lg:text-start font-light text-orange-300 mt-5 md:mt-5 lg:mt-10'>
            Our Services
          </h1>
          {/* Description Text */}
          <p className='text-center lg:text-left text-gray-600 text-sm lg:text-base font-light leading-relaxed tracking-wide mt-6 lg:mr-16'>
            Izzy's Landscaping is dedicated to creating beautiful, high-quality
            outdoor spaces across Minnesota. From lush gardens to durable
            hardscapes, we bring expert craftsmanship and attention to detail.
          </p>
        </div>

        {/* Triptych Image Grid - Consistent Alignment */}
        <div className='grid grid-cols-2 gap-4 max-w-6xl w-full mt-12 lg:mt-10'>
          {/* Left Image - Ensuring consistent height */}
          <div className='relative w-full h-[450px]'>
            <Image
              src={AboutUsHero1}
              alt='Landscaping example 1'
              className='rounded-lg object-cover'
              fill
            />
          </div>

          {/* Right Image - Ensuring consistent height */}
          <div className='relative w-full h-[450px]'>
            <Image
              src={AboutUsHero3}
              alt='Landscaping example 3'
              className='rounded-lg object-cover'
              fill
            />
          </div>
        </div>
      </div>

      <Gallery />
    </div>
  );
}
