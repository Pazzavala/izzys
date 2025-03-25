import React from "react";
import Image from "next/image";
// import ContactForm from "@/components/ui/ContactForm";
import HubSpotForm from "@/components/ui/HubspotForm";

export default async function ContactPage() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const resourceType = "image";
  const transformations = "c_fill,h_1200,w_1800";
  const publicId = "contact-bg-image-public-id";
  const bgImage = `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${transformations}/${publicId}.webp`;

  return (
    <section className='relative w-full h-screen flex items-center justify-center py-16 px-4 mt-16 lg:mt-24  bg-cover bg-center overflow-hidden'>
      <Image
        src={bgImage}
        alt={publicId ?? "contact page"}
        fill
        priority
        className='object-cover'
      />
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/60 backdrop-blur-xs' />

      {/* Content Container */}
      <div className='relative container text-center mx-auto px-4 md:px-6 lg:px-8 flex flex-col gap-10 md:gap-20 z-10 items-center justify-center'>
        {/* Text and Form Section */}
        {/* <ContactForm /> */}
        <HubSpotForm />
      </div>
    </section>
  );
}

export const revalidate = 86400;
