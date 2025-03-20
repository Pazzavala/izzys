import React from "react";
import Button from "../ui/Button";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section className='w-full py-20 md:py-28 bg-white'>
      <div className='container mx-auto px-6 md:px-12'>
        {/* Header Section */}
        <div className='flex gap-3 flex-col md:flex-row justify-center items-center mb-12'>
          <div className='max-w-4xl text-[#FF8106] flex gap-3 flex-col justify-center items-center'>
            <h2
              className='
              text-center 
              text-3xl 
              sm:text-4xl 
              font-bold
              font-caladea'
            >
              Our Services
            </h2>
            <p className='text-center text-gray-600 text-base sm:text-lg font-medium'>
              Transform your outdoor space with our expert landscaping services,
              including design, installation, and maintenance for stunning,
              sustainable landscapes.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <ServiceCard showAmount={6} />

        {/* See all Services Section */}
        <div className='h-24 flex items-center justify-center'>
          <Button
            link='/services'
            text='See More Services'
          />
        </div>
      </div>
    </section>
  );
}
