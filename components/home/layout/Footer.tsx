import React from 'react';
import IzzysLogo from '@/public/assets/izzy_banner.jpg';
import Image from 'next/image';
import { navLinks, services } from '@/lib/data';

export default function Footer() {
  return (
    <section className='bg-black text-white py-12 px-4 sm:px-8'>
      <div className='container max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-10'>
        {/* Logo and Contact Info */}
        <div className='flex flex-col items-center sm:items-start gap-4'>
          <Image
            src={IzzysLogo}
            alt="Izzy's Logo"
            width={250}
            height={100}
            className='object-contain'
          />
          <p className='text-sm text-gray-400'>Monday - Friday: 7am - 3pm</p>
          <p className='text-sm text-gray-400'>(612) 978-9411</p>
        </div>

        {/* Navigation Links */}
        <div className='flex gap-10 sm:gap-20'>
          <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-semibold text-[#FF8106]'>
              Navigate To
            </h4>
            <div className='flex flex-col gap-2'>
              {navLinks.map((nav) => (
                <a
                  key={nav.name}
                  href={nav.name}
                  // href={nav.url}
                  className='text-sm text-gray-400 hover:text-white transition-colors'
                >
                  {nav.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className='flex flex-col gap-3'>
            <h4 className='text-lg font-semibold text-[#FF8106]'>Services</h4>
            <div className='flex flex-col gap-2'>
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.url}
                  className='text-sm text-gray-400 hover:text-white transition-colors'
                >
                  {service.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='container mx-auto mt-10 border-t border-gray-700 pt-6 text-center'>
        <p className='text-sm text-gray-400'>
          &copy; {new Date().getFullYear()} Izzy's. All rights reserved.
        </p>
      </div>
    </section>
  );
}
