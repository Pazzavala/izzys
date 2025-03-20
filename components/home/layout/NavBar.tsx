import React from "react";
import { navLinks, socials } from "@/lib/data";
import Image from "next/image";
import IzzysLogo from "@/public/assets/izzy_banner.jpg";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white text-gray-700 shadow-md z-50'>
      <div className='mx-auto px-4 md:px-10 shadow-md'>
        <div className='flex flex-col md:flex-row justify-between items-center py-5'>
          {/* Logo */}
          <div className='mb-4 md:mb-0'>
            <Link href={"/"}>
              <Image
                src={IzzysLogo}
                alt='Izzys Landscaping and Construction'
                width={200}
                height={100}
                className='w-48 md:w-52'
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className='hidden lg:flex flex-wrap justify-end items-center lg:gap-12 xl:gap-16 mb-4 md:mb-0'>
            {navLinks.map((navLink) => (
              <Link
                key={navLink.name}
                href={`/${
                  navLink.name.toLowerCase() === "home"
                    ? "/"
                    : navLink.name.toLowerCase()
                }`}
                className='hover:text-[#FF8106] transition-colors duration-200'
              >
                {navLink.name}
              </Link>
            ))}
          </div>

          {/* Socials and Button */}
          <div className='lg:flex items-center gap-4 hidden'>
            {/* Social Icons */}
            <div className='flex gap-4'>
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.name}
                  className='text-gray-700 hover:text-[#FF8106] transition-colors duration-200'
                >
                  <social.icon
                    className='w-6 h-6 rounded-full'
                    aria-hidden
                  />
                </Link>
              ))}
            </div>

            {/* Button */}
            <Button
              link='tel:6129789411'
              text='(612) 978-9411'
              py={"py-[.35rem]"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
