import React from 'react';
import Button from '../ui/Button';
import { services } from '@/lib/data';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section className='bg-white py-28'>
      <div className='container mx-auto px-8 max-w-6xl'>
        {/* Header Section */}
        <div className='flex gap-3 flex-col md:flex-row justify-between items-center mb-8'>
          <div className='text-gray-800 flex gap-3 flex-col justify-center items-center md:items-start'>
            <h2 className='text-3xl sm:text-4xl font-bold'>Our Services</h2>
            <p className='text-gray-600 text-base sm:text-lg font-medium'>
              Quality Landscaping at a Price You Can Trust!
            </p>
          </div>

          <Button text='See More Services' />
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              url={service.url}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
