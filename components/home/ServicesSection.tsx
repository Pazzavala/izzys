import React from 'react';
import Button from '../ui/Button';
import { services } from '@/lib/data';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section className='bg-white py-28'>
      <div className='container mx-auto px-8'>
        {/* Header Section */}
        <div className='flex gap-3 flex-col md:flex-row justify-between items-center mb-8'>
          <div className='flex gap-3 flex-col justify-center items-center md:items-start'>
            <h2 className='text-gray-800 text-2xl'>Out Services</h2>
            <p className='text-[#FF8106]'>
              Quality Landscaping at a Price You Can Trust!
            </p>
          </div>

          <Button text='See More Services' />
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
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
