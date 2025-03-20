import React from "react";
// import Image from "next/image";
import ServiceCard from "@/components/home/ServiceCard";

export default function LandscapingServicesPage() {
  return (
    <div className='w-full max-w-[1350px] mx-auto px-4 sm:px-8 lg:px-12 mb-10 mt-16 lg:mt-28 flex flex-col '>
      <div className='flex flex-col mt-16 mb-6 sm:mb-14 justify-center items-center'>
        <div className='container'>
          <h1 className='text-4xl md:text-4xl lg:text-5xl mb-6 text-center font-bold font-montserrat tracking-tight text-[#FF8106]/95'>
            Our Services
          </h1>
          {/* Description Text */}
          <p className='text-center text-gray-600 text-sm lg:text-base font-light leading-relaxed tracking-wide'>
            Izzy&apos;s Landscaping is dedicated to creating beautiful,
            high-quality outdoor spaces across Minnesota. From lush gardens to
            durable hardscapes, we bring expert craftsmanship and attention to
            detail.
          </p>
        </div>

        {/* Triptych Image Grid - Consistent Alignment */}

        {/* <div className='grid grid-cols-2 gap-4 max-w-6xl w-full mt-20 sm:mt-10 lg:mt-10'>
          <div className='relative w-full h-[200] sm:h-[450px]'>
            <Image
              src={ServiceHero1}
              alt='Landscaping example 1'
              className='rounded-lg object-cover'
              fill
            />
          </div>

          <div className='relative w-full h-[200] sm:h-[450px]'>
            <Image
              src={ServiceHero2}
              alt='Landscaping example 3'
              className='rounded-lg object-cover'
              fill
            />
          </div>
        </div> */}
      </div>

      <ServiceCard />
    </div>
  );
}

// Add metadata for improved SEO
export const metadata = {
  title: "Our Landscaping Services",
  description:
    "Explore our full range of professional landscaping services for your home or business",
};
