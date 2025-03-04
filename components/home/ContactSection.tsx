import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import TeamImage from '@/public/assets/team.jpg';

export default function ContactSection() {
  return (
    <section
      className='w-full min-h-[65vh] md:min-h-[70vh] xl:min-h-[80vh] flex items-center justify-center py-16 px-4 bg-cover bg-center relative'
      style={{ backgroundImage: `url(/assets/image1.png)` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50 backdrop-blur-xs' />

      {/* Content Container */}
      <div className='relative container flex flex-col-reverse lg:flex-row gap-10 md:gap-20 p-10 z-10 items-center justify-center w-full mx-auto'>
        {/* Text and Button Section */}
        <div className='flex flex-col gap-8 text-center md:text-left max-w-md'>
          <h3 className='text-2xl sm:text-3xl md:text-4xl font-bodoni_moda font-bold text-white'>
            Ready To Transform Your Outdoor Space?
          </h3>
          <Button
            text='Contact Us Today For a Free Consultation!'
            // className='w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors'
          />
        </div>

        {/* Image Section */}
        <div className='w-full max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-xl overflow-hidden shadow-lg'>
          <Image
            src={TeamImage}
            alt="Izzy's Team"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
