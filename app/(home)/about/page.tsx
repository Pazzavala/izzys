import React from "react";
import Image from "next/image";
import { getCloudinaryImageData } from "@/lib/actions/actions";
import AboutTestimonials from "@/components/about/AboutTestimonials";
import Button from "@/components/ui/Button";
import { testimonials } from "@/lib/data";
import OurCoreValues from "@/components/about/OurCoreValues";

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
      <OurCoreValues />

      {/* Meet the Team Section */}
      {/* <MeetTeamSeaction /> */}
      {/* Why Choose Us Section */}
      {/* <WhyChooseUsSection /> */}

      {/* Testimonials Section */}
      <h3 className='my-12 text-center'>What Our Clients Say</h3>
      <div className='mb-16 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {testimonials.slice(0, 3).map((testimonial) => (
          <AboutTestimonials
            key={testimonial.clientName}
            {...testimonial}
          />
        ))}
      </div>

      {/* Call to Action bg-[#FF8106]/95 */}
      <div className='bg-[#FF8106]/95 py-16'>
        <div className='container mx-auto px-4'>
          <div className='bg-white rounded-xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto text-center'>
            <h3 className='mb-4'>Ready to Transform Your Outdoor Space?</h3>
            <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
              Contact us today for a free consultation and estimate on any of
              our professional landscaping services.
            </p>

            <div className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4'>
              <Button
                text='Request a Quote'
                link='/contact'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
