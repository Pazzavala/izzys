import IzzysLogo from '@/public/assets/izzy_banner.jpg';
import React from 'react';
import Image from 'next/image';
import { navLinks, services, socials } from '@/lib/data';

export default function Footer() {
  const shortServiceList = services.slice(0, 3);

  return (
    <footer className='bg-white text-gray-700 py-12 px-4 md:px-8'>
      <div className='container w-full max-w-6xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* Logo and Contact Info */}
          <div className='flex flex-col items-center md:items-start'>
            <Image
              src={IzzysLogo}
              alt="Izzy's Logo"
              width={250}
              height={100}
              className='object-contain mb-4'
            />
            <div className='text-center md:text-left space-y-2'>
              <p className='text-sm'>Monday - Friday: 7am - 3pm</p>
              <p className='text-sm'>
                <a
                  href='tel:6129789411'
                  className='hover:text-[#FF8106] transition-colors'
                >
                  (612) 978-9411
                </a>
              </p>
              <p className='text-sm'>
                <a
                  href='mailto:landscaping.izzy@gmail.com'
                  className='hover:text-[#FF8106] transition-colors'
                >
                  landscaping.izzy@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className='flex flex-col md:flex-ro items-center md:block '>
            <div className='flex md:flex-row justify-between gap-10'>
              {/* Navigation Links */}
              <div className='flex-1'>
                <h4 className=' text-nowrap text-lg font-semibold text-[#FF8106] mb-3'>
                  Quick Links
                </h4>
                <div className='grid grid-cols-1 gap-2'>
                  {navLinks.map((nav) => (
                    <a
                      key={nav.name}
                      href={'nav.url'}
                      className='text-sm hover:text-[#FF8106] transition-colors'
                    >
                      {nav.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Services Links */}
              <div className='flex-1'>
                <h4 className='text-lg font-semibold text-[#FF8106] mb-3'>
                  Services
                </h4>
                <div className='text-sm grid grid-cols-1 gap-2'>
                  {shortServiceList.map((service) => (
                    <a
                      key={service.name}
                      href={service.url}
                      className=' hover:text-[#FF8106] transition-colors'
                    >
                      {service.name}
                    </a>
                  ))}
                  <p className='text-orange-300 hover:text-[#FF8106]'>
                    See More...
                  </p>
                </div>
              </div>

              {/* Socials - Visible only on wide screens */}
              <div className='hidden md:flex flex-col'>
                <h4 className='text-nowrap text-lg font-semibold text-[#FF8106] mb-3'>
                  Follow Us
                </h4>
                <div className='flex space-x-4'>
                  {socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-gray-700 hover:text-[#FF8106] transition-colors'
                    >
                      <social.icon className='text-2xl' />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Socials - Visible only on mobile */}
            <div className='md:hidden flex justify-center mt-6'>
              <div className='flex space-x-4'>
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-700 hover:text-[#FF8106] transition-colors'
                  >
                    <social.icon className='text-2xl' />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-8 border-t border-gray-300 pt-6 text-center'>
          <p className='text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} Izzy's Landscaping. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
