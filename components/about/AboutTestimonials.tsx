import { testimonials } from "@/lib/data";
import React from "react";

export default function AboutTestimonials() {
  return (
    <div className='container mx-auto px-4 py-16'>
      <h3 className='mb-12 text-center'>What Our Clients Say</h3>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {testimonials.slice(0, 3).map((testimonial) => (
          <div
            key={testimonial.clientName}
            className='bg-gray-50 p-8 rounded-xl'
          >
            <div className='flex items-center mb-4'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-8 w-8 text-[#FF8106]/95'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
              </svg>
            </div>
            <p className='text-gray-600 mb-6 italic'>
              &quot;{testimonial.review.slice(0, 250)}&quot;
            </p>
            <div>
              <p className='font-bold text-gray-800'>
                {testimonial.clientName}
              </p>
              <p className='text-gray-500 text-sm'>{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
