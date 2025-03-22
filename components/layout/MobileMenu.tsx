"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks, contactAndSocials } from "@/lib/data";
import IzzysLogo from "@/public/assets/izzy_banner.jpg";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white text-gray-700 shadow-md z-50'>
      {/* Fixed Nav Bar - Always visible */}
      <div className='container mx-auto px-4 py-4 z-30'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <Link href={"/"}>
              <Image
                src={IzzysLogo}
                alt='Izzys Landscaping and Construction'
                width={150}
                height={60}
                className='w-32'
              />
            </Link>
          </div>

          {/* Hamburger Icon or X icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-gray-700 focus:outline-none relative'
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open Menu"}
          >
            {isOpen ? (
              <FaTimes
                className='w-6 h-6'
                aria-hidden
              /> // Close icon (X)
            ) : (
              <FaBars
                className='w-6 h-6'
                aria-hidden
              /> // Hamburger icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Full Screen with Animation */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-500 ease-in-out z-10 ${
          isOpen
            ? "opacity-100 scale-y-100 origin-top"
            : "opacity-0 scale-y-0 origin-top pointer-events-none"
        }`}
        style={{
          top: "69px",
          left: "0",
          right: "0",
          height: "calc(100vh - 69px)",
        }}
      >
        <div className='container mx-auto px-10 py-8 h-full flex flex-col'>
          {/* Navigation Links */}
          <div className='flex flex-col gap-4'>
            {navLinks.map((navLink) => (
              <Link
                key={`${navLink.name} mobile`}
                href={`/${
                  navLink.name.toLowerCase() === "home"
                    ? "/"
                    : navLink.name.toLowerCase()
                }`}
                className='block py-3 text-2xl font-bold'
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {navLink.name}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className='flex gap-7 mt-4'>
            {contactAndSocials.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={social.name}
                className='text-gray-700'
              >
                <social.icon
                  className='w-8 h-8'
                  aria-hidden
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
