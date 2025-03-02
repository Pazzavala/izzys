import React from 'react';
import { navLinks, socials } from '@/lib/data';
import Image from 'next/image';
import IzzysLogo from '@/public/assets/izzy_banner.jpg';
import Button from '@/components/ui/Button';

export default function NavBar() {
  return (
    <nav className='bg-white text-gray-700 shadow-md'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col sm:flex-row justify-between items-center py-4'>
          {/* Logo */}
          <div className='mb-4 sm:mb-0'>
            <Image
              src={IzzysLogo}
              alt='Izzys Landscaping and Construction'
              width={250}
              height={100}
              className='w-48 sm:w-64'
            />
          </div>

          {/* Navigation Links */}
          <div className='hidden md:flex flex-wrap justify-center gap-4 sm:gap-6 mb-4 sm:mb-0'>
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
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 hover:text-[#FF8106] transition-colors duration-200'
                >
                  <social.icon className='w-6 h-6' />
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
