"use client";

import ContactForm from "@/components/home/ContactForm";
import { getCloudinaryImageData } from "@/lib/actions/actions";
import React from "react";

export default function ContactPage() {
  const contactBgImage = getCloudinaryImageData("contact-bg-image-public-id");
  return (
    <section
      className='relative w-full h-screen flex items-center justify-center py-16 px-4 bg-cover bg-center overflow-hidden'
      style={{
        backgroundImage: `url(${contactBgImage.src})`,
      }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60 backdrop-blur-xs' />

      {/* Content Container */}
      <div className='relative container text-center mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10 md:gap-20 z-10 items-center justify-center'>
        {/* Text and Form Section */}
        <ContactForm />
      </div>
    </section>
  );
}
