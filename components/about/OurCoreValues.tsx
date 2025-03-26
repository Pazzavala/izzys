import React from "react";

export default function OurCoreValues() {
  return (
    <section className='bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <h3 className='mb-12 text-center'>Our Core Values</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='bg-white p-8 rounded-xl shadow-sm text-center'>
            <div className='bg-[#FF8106]/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-[#FF8106]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M5 13l4 4L19 7'
                />
              </svg>
            </div>
            <h5 className='text-gray-800 mb-4'>Quality</h5>
            <p className='text-gray-600'>
              We never compromise on quality, using only the finest materials
              and plants to ensure lasting beauty and durability.
            </p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-sm text-center'>
            <div className='bg-[#FF8106]/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-[#FF8106]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M7 11.5V14m0-2.5v-6a2.5 2.5 0 015 0v6a2.5 2.5 0 01-5 0z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                />
              </svg>
            </div>
            <h5 className='text-gray-800 mb-4'>Sustainability</h5>
            <p className='text-gray-600'>
              We&apos;re committed to eco-friendly practices that conserve
              water, promote biodiversity, and create healthy environments.
            </p>
          </div>
          <div className='bg-white p-8 rounded-xl shadow-sm text-center'>
            <div className='bg-[#FF8106]/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-[#FF8106]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                />
              </svg>
            </div>
            <h5 className='text-gray-800 mb-4'>Customer Focus</h5>
            <p className='text-gray-600'>
              Every project begins with understanding your vision, needs, and
              budget to deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
