import React from "react";
import Image from "next/image";
import AboutUsHero1 from "@/public/assets/izzy_banner.jpg";
import ServiceCard from "@/components/home/ServiceCard";

export default function LandscapingServicesPage() {
  return (
    <div className='w-full max-w-7xl mx-auto px-12 pb-10 min-h-[50rem] flex flex-col '>
      <div className='flex flex-col lg:flex-row py-12'>
        <div className='container'>
          {/* About Us Title */}
          <h1 className='text-5xl md:text-6xl lg:text-7xl text-center lg:text-start font-light text-orange-300 mt-5 md:mt-5 lg:mt-10 '>
            Our Landscaping Services
          </h1>
          {/* Description Text */}
          <p className='text-center lg:text-left text-gray-600 text-sm lg:text-base font-light leading-relaxed tracking-wide mt-6 lg:mr-16'>
            Izzy&apos;s Landscaping is dedicated to creating beautiful,
            high-quality outdoor spaces across Minnesota. From lush gardens to
            durable hardscapes, we bring expert craftsmanship and attention to
            detail.
          </p>
        </div>

        {/* Triptych Image Grid - Consistent Alignment */}
        <div className='grid grid-cols-2 gap-4 max-w-6xl w-full lg:mt-10'>
          {/* Left Image - Ensuring consistent height */}
          <div className='relative w-full h-[200] sm:h-[450px'>
            <Image
              src={AboutUsHero1}
              alt='Landscaping example 1'
              className='rounded-lg object-cover'
              fill
            />
          </div>

          {/* Right Image - Ensuring consistent height */}
          <div className='relative w-full h-[200] sm:h-[450px'>
            <Image
              src={AboutUsHero1}
              alt='Landscaping example 3'
              className='rounded-lg object-cover'
              fill
            />
          </div>
        </div>
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
