import React from "react";
import Image from "next/image";
import ContactForm from "@/components/home/ContactForm";
import { getCloudinaryImageData } from "@/lib/actions/actions";

// This will run at build time for static generation
async function getContactImage() {
  return getCloudinaryImageData(
    "contact-bg-image-public-id",
    1800,
    1200,
    "contact-section"
  );
}

export default async function ContactPage() {
  const contactImage = await getContactImage();

  return (
    <section className='relative w-full h-screen flex items-center justify-center py-16 px-4 bg-cover bg-center overflow-hidden'>
      <Image
        src={contactImage.src}
        alt={contactImage.alt ?? "contact page"}
        fill
        priority
        className='object-cover'
      />
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

export const revalidate = 86400;
