"use client";
import React from "react";
import Image from "next/image";
import IzzyBanner from "@/public/assets/izzy_banner.jpg";
import HubSpotForm from "../ui/HubspotForm";
// import ContactForm from "../ui/ContactForm";

interface ContactSectionProps {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

export default function ContactSection({
  src,
  alt,
}: Readonly<ContactSectionProps>) {
  return (
    <section className='w-full min-h-[65vh] md:min-h-[70vh] xl:min-h-[80vh] flex items-center justify-center py-16 px-4 bg-cover bg-center relative'>
      <Image
        src={src}
        alt={alt ?? "contact section"}
        fill
        priority
        className='object-cover'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60 backdrop-blur-xs' />

      {/* Content Container */}
      <div className='relative container mx-auto px-4 md:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-10 md:gap-20 z-10 items-center justify-center'>
        {/* Text and Form Section */}
        <div className='flex flex-col gap-8 text-center lg:text-left items-center lg:items-start'>
          <h3 className='custom-h3 text-wrap md:w-lg'>
            Ready To Transform Your Outdoor Space?
          </h3>

          <HubSpotForm />
          {/* <ContactForm /> */}
        </div>

        {/* Image Section */}
        <div className='w-full md:max-w-lg lg:max-w-xl h-auto rounded-xl overflow-hidden shadow-lg'>
          <Image
            src={IzzyBanner}
            alt="Izzy's Team"
            className='w-full h-full object-cover'
          />
        </div>
      </div>
    </section>
  );
}
