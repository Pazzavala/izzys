import React from "react";
import Image from "next/image";
import ServiceCard from "@/components/home/ServiceCard";
import { getCloudinaryImageData } from "@/lib/actions/actions";
import Button from "@/components/ui/Button";

export default async function LandscapingServicesPage() {
  const heroImage = await getCloudinaryImageData(
    "about-hero",
    1920,
    800,
    "about-page"
  );
  return (
    <div className='bg-white'>
      {/* Hero Section */}
      <div className='relative h-[500px] w-full'>
        <Image
          src={heroImage}
          alt='Landscaping Services'
          className='object-cover'
          priority
          fill
        />
        <div className='absolute inset-0 bg-black/50'>
          <div className='container mx-auto px-4 h-full flex flex-col justify-center'>
            <div className='max-w-3xl'>
              <h2 className='text-white mb-4'>Our Services</h2>
              <p className='text-lg text-gray-100 max-w-2xl'>
                Izzy&apos;s Landscaping is dedicated to creating beautiful,
                high-quality outdoor spaces across Minnesota. From lush gardens
                to durable hardscapes, we bring expert craftsmanship and
                attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className='container mx-auto px-4 py-16'>
        <div className='mb-12'>
          <h3 className='mb-8 flex items-center'>
            <span className='mr-3'>Landscaping Services</span>
            <div className='h-px bg-gray-300 flex-grow mt-1'></div>
          </h3>
        </div>

        {/* ServiceCard component will render the grid of services */}
        <ServiceCard showAmount={0} />
      </div>

      {/* Call to Action */}
      <div className='bg-[#FF8106]/95 py-16'>
        <div className='container mx-auto px-4'>
          <div className='bg-white rounded-xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto text-center'>
            <h3 className='mb-4'>Ready to Transform Your Outdoor Space?</h3>
            <p className='text-gray-600 mb-8 max-w-2xl mx-auto'>
              Contact us today for a free consultation and estimate on any of
              our professional landscaping services.
            </p>
            <div className='flex justify-center'>
              <Button
                text='Get a Free Quote'
                link='/contact'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add metadata for improved SEO
export const metadata = {
  title: "Our Landscaping Services | Izzy's Landscaping",
  description:
    "Explore our full range of professional landscaping services for your home or business in Minnesota.",
};
