'use client';

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons
import { navLinks, socials } from '@/lib/data'; // Import your data
import Button from '@/components/ui/Button'; // Import your button component
import Image from 'next/image';
import IzzysLogo from '@/public/assets/izzy_banner.jpg';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

  return (
    <nav className='bg-white text-gray-700 shadow-md sm:hidden'>
      <div className='container mx-auto px-4 py-4'>
        {/* Logo and Hamburger Icon */}
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <Image
              src={IzzysLogo}
              alt='Izzys Landscaping and Construction'
              width={150}
              height={60}
              className='w-32'
            />
          </div>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-700 focus:outline-none'
          >
            {isOpen ? (
              <FaTimes className='w-6 h-6' /> // Close icon (X)
            ) : (
              <FaBars className='w-6 h-6' /> // Hamburger icon
            )}
          </button>
        </div>

        {/* Mobile Menu Pop-up */}
        {isOpen && (
          <div className='mt-4'>
            {/* Navigation Links */}
            <div className='flex flex-col gap-4'>
              {navLinks.map((navLink) => (
                <a
                  key={`${navLink.name} mobile`}
                  href={`/${navLink.name.toLowerCase()}`}
                  className='block py-2 hover:text-green-600 transition-colors duration-200'
                  onClick={() => setIsOpen(false)} // Close menu on link click
                >
                  {navLink.name}
                </a>
              ))}
            </div>

            {/* Social Icons */}
            <div className='flex gap-4 mt-4'>
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-700 hover:text-green-600 transition-colors duration-200'
                >
                  <social.icon className='w-6 h-6' />
                </a>
              ))}
            </div>

            {/* Button */}
            <div className='mt-4'>
              <Button text='(612) 978-9411' />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
