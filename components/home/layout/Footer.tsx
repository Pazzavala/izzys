import IzzysLogo from "@/public/assets/izzy_banner.jpg";
import React from "react";
import Image from "next/image";
import { contactInfo, navLinks, services, socials } from "@/lib/data";
import Link from "next/link";

export default function Footer() {
  const shortServiceList = services.slice(0, 3);

  return (
    <footer className='bg-white text-gray-700 py-12 px-4 md:px-8'>
      <div className='container w-full max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row'>
          {/* Logo and Contact Info */}
          <div className='flex flex-1 flex-col items-center md:items-start'>
            <Link href={"/"}>
              <Image
                src={IzzysLogo}
                alt="Izzy's Logo"
                width={270}
                height={100}
                className='object-contain mb-5 rounded-md'
              />
            </Link>

            {/* Contact Info - Only visible in Mobile */}
            <div className='md:hidden text-left space-y-2 mb-6'>
              {contactInfo.map((contact) => (
                <div
                  key={contact.name}
                  className='flex gap-2'
                >
                  <contact.icon />
                  <p className='text-sm'>
                    <Link
                      href={contact.url}
                      className='hover:text-[#FF8106] transition-colors'
                    >
                      {contact.content}
                    </Link>
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className='text-nowrap flex flex-2 flex-col md:flex-ro items-center md:block '>
            <div className='flex md:flex-row justify-between gap-10'>
              {/* Navigation Links */}
              <div className='flex-1'>
                <h4 className=' font-semibold text-[#FF8106] mb-3'>
                  Quick Links
                </h4>
                <div className='grid grid-cols-1 gap-2'>
                  {navLinks.map((navLink) => (
                    <Link
                      key={navLink.name}
                      href={`/${
                        navLink.name.toLowerCase() === "home"
                          ? "/"
                          : navLink.name.toLowerCase()
                      }`}
                      className='text-sm hover:text-[#FF8106] transition-colors'
                    >
                      {navLink.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services Links */}
              <div className='flex-1'>
                <h4 className='font-semibold text-[#FF8106] mb-3'>Services</h4>
                <div className='text-sm grid grid-cols-1 gap-2'>
                  {shortServiceList.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className=' hover:text-[#FF8106] transition-colors'
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    href={"/services"}
                    className='text-[#FF8106]/60 hover:text-[#FF8106]'
                  >
                    See More...
                  </Link>
                </div>
              </div>

              {/* Contact - Visible only on wide screens */}
              <div className='hidden md:flex flex-col'>
                <h4 className='text-nowrap font-semibold text-[#FF8106] mb-3'>
                  Contact Us
                </h4>
                <div className='text-center md:text-left space-y-2 mb-4'>
                  {contactInfo.map((contact) => (
                    <div
                      key={contact.name}
                      className='flex gap-2'
                    >
                      <contact.icon />
                      <p className='text-sm'>
                        <Link
                          href={contact.url}
                          className='hover:text-[#FF8106] transition-colors'
                        >
                          {contact.content}
                        </Link>
                      </p>
                    </div>
                  ))}
                </div>
                <div className='flex space-x-4'>
                  {socials.map((social) => (
                    <Link
                      key={social.name}
                      href={social.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={social.name}
                      className='text-gray-700 hover:text-[#FF8106] transition-colors'
                    >
                      <social.icon
                        className='text-2xl'
                        aria-hidden
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info - Visible only on mobile */}
            <div className='sm:hidden flex flex-col items-center justify-center mt-6'>
              <div className='flex justify-center space-x-4'>
                {socials.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={social.name}
                    className=' text-gray-700 hover:text-[#FF8106] transition-colors'
                  >
                    <social.icon
                      className='bg-white text-3xl'
                      aria-hidden
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className='mt-8 border-t border-gray-300 pt-6 text-center'>
          <p className='text-sm text-gray-500'>
            &copy; {new Date().getFullYear()} Izzy&apos;s Landscaping. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
