import React from 'react';
import { navLinks, socials } from '@/lib/data';
import Image from 'next/image';
import IzzysLogo from '@/public/assets/izzy_banner.png';
import Button from '@/components/ui/Button';

export default function NavBar() {
  return (
    <nav className='bg-white text-gray-700 shadow-md'>
      <div className='mx-auto px-4 md:px-10'>
        <div className='flex flex-col sm:flex-row justify-between items-center py-5'>
          {/* Logo */}
          <div className='mb-4 sm:mb-0'>
            <Image
              src={IzzysLogo}
              alt='Izzys Landscaping and Construction'
              width={200}
              height={100}
              className='w-48 sm:w-52'
            />
          </div>

          {/* Navigation Links */}
          <div className='hidden sm:flex flex-wrap justify-end items-center gap-4 sm:gap-16 mb-4 sm:mb-0'>
            {navLinks.map((navLink) => (
              <a
                key={navLink.name}
                href={`/${navLink.name.toLowerCase()}`} // Fixed href
                className='hover:text-[#FF8106] transition-colors duration-200'
              >
                {navLink.name}
              </a>
            ))}
          </div>

          {/* Socials and Button */}
          <div className='lg:flex items-center gap-4 hidden'>
            {/* Social Icons */}
            <div className='flex gap-4'>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 hover:text-[#FF8106] transition-colors duration-200'
                >
                  <social.icon className='w-6 h-6 rounded-full' />
                </a>
              ))}
            </div>

            {/* Button */}
            <Button text='(612) 978-9411' />
          </div>
        </div>
      </div>
    </nav>
  );
}
