import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCloudinaryImageData } from "@/lib/actions/actions";
import AboutTestimonials from "@/components/about/AboutTestimonials";
// import MeetTeamSeaction from "@/components/home/about/MeetTeamSeaction";
// import WhyChooseUsSection from "@/components/home/about/WhyChooseUsSection";

export default async function AboutPage() {
  // Fetch hero and team images
  const heroImage = await getCloudinaryImageData(
    "about-hero",
    1920,
    800,
    "about-page"
  );
  // const founderImage = await getCloudinaryImageData(
  //   "founder",
  //   400,
  //   400,
  //   "team"
  // );

  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative h-[500px] w-full'>
        <Image
          src={heroImage}
          alt='About Us'
          className='object-cover'
          priority
          fill
        />
        <div className='absolute inset-0 bg-black/50'>
          <div className='container mx-auto px-4 h-full flex flex-col justify-center'>
            <div className='max-w-3xl'>
              <h2 className='text-white mb-6'>About Our Company</h2>
              <p className='text-xl text-gray-100 max-w-2xl'>
                We&apos;ve been creating beautiful outdoor spaces for over 20
                years with a focus on sustainability and quality.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className='container mx-auto px-4 py-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
          <div>
            <h3 className='mb-6'>Our Story</h3>
            <div className='prose prose-lg text-gray-600'>
              <p>
                Founded in 2013, our journey began with a simple vision: to
                transform outdoor spaces into beautiful, functional environments
                that enhance people&apos;s lives.
              </p>
              <p>
                What started as a small family business has grown into a
                full-service landscaping company with a reputation for
                excellence. Our founder&apos;s passion for horticulture and
                sustainable landscaping practices continues to guide everything
                we do.
              </p>
              <p>
                Today, we&apos;re proud to serve homeowners and businesses
                throughout the region with comprehensive landscaping solutions
                tailored to the unique characteristics of our local climate and
                environment.
              </p>
            </div>
          </div>
          <div className='relative h-[400px] rounded-lg overflow-hidden shadow-lg'>
            <Image
              src={getCloudinaryImageData("our-story", 800, 600, "about")}
              alt='Our landscaping journey'
              className='object-cover'
              fill
            />
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className='bg-gray-50 py-16'>
        <div className='container mx-auto px-4'>
          <h3 className='mb-12 text-center'>Our Core Values</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-xl shadow-sm text-center'>
              <div className='bg-[#FF8106]/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-[#FF8106]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
              </div>
              <h5 className='text-gray-800 mb-4'>Quality</h5>
              <p className='text-gray-600'>
                We never compromise on quality, using only the finest materials
                and plants to ensure lasting beauty and durability.
              </p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-sm text-center'>
              <div className='bg-[#FF8106]/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-[#FF8106]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M7 11.5V14m0-2.5v-6a2.5 2.5 0 015 0v6a2.5 2.5 0 01-5 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z'
                  />
                </svg>
              </div>
              <h5 className='text-gray-800 mb-4'>Sustainability</h5>
              <p className='text-gray-600'>
                We&apos;re committed to eco-friendly practices that conserve
                water, promote biodiversity, and create healthy environments.
              </p>
            </div>
            <div className='bg-white p-8 rounded-xl shadow-sm text-center'>
              <div className='bg-[#FF8106]/30 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-[#FF8106]'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h5 className='text-gray-800 mb-4'>Customer Focus</h5>
              <p className='text-gray-600'>
                Every project begins with understanding your vision, needs, and
                budget to deliver results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet the Team Section */}
      {/* <MeetTeamSeaction /> */}
      {/* Why Choose Us Section */}
      {/* <WhyChooseUsSection /> */}

      {/* Testimonials Section */}
      <AboutTestimonials />

      {/* Call to Action */}
      <div className='bg-[#FF8106]/95 py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h3 className='custom-h3 text-white mb-6'>
            Ready to Transform Your Outdoor Space?
          </h3>
          <p className='text-green-100 max-w-2xl mx-auto mb-8'>
            Contact us today to schedule a consultation with one of our
            landscape design experts.
          </p>
          <Link
            href='/contact'
            className='inline-block px-8 py-3 bg-white text-[#FF8106] font-medium rounded-lg hover:bg-gray-100 transition-colors'
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
