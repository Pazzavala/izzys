import React from 'react';
import Button from '../ui/Button';
import { services } from '@/lib/data';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section className='bg-white py-28'>
      <div className='container mx-auto px-8 max-w-7xl'>
        {/* Header Section */}
        <div className='flex gap-3 flex-col md:flex-row justify-center items-center mb-8'>
          <div className='max-w-4xl text-gray-800 flex gap-3 flex-col justify-center items-center'>
            <h2 className='text-3xl sm:text-4xl font-bold font-bodoni_moda'>
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
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-5'>
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              url={service.url}
            />
          ))}
        </div>

        {/* See all Services Section */}
        <div className='h-24 flex items-center justify-center'>
          <Button text='See More Services' />
        </div>
      </div>
    </section>
  );
}
