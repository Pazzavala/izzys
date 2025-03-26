"use client";
import React from "react";

import Button from "@/components/ui/Button";

export default function ReviewEncouragementSection() {
  return (
    <section className='bg-[#FF8106]/95 py-16'>
      <div className='container mx-auto px-4'>
        {/* Content Container */}
        <div className='bg-white rounded-xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto text-center'>
          <h3 className='mb-6 text-gray-800'>We Value Your Feedback</h3>

          <p className='text-gray-600 mb-8 max-w-4xl mx-auto text-base'>
            Your honest review helps us improve and assists other homeowners in
            making informed decisions about their landscaping projects. If
            you&apos;re happy with our work, we&apos;d appreciate you taking a
            moment to share your experience.
          </p>

          <div className='flex flex-col md:flex-row justify-center gap-4'>
            <Button
              text='Leave a Google Review'
              link='https://search.google.com/local/writereview?placeid=ChIJM7J5tuigigoRGj0L_xHPlL8'
            />
            <Button
              text='Review on Social Media'
              link='https://www.facebook.com/IzzysLandscaping/reviews'
              variant='outline'
            />
          </div>

          <p className='mt-6 text-sm text-gray-500'>
            Your feedback is important to us and helps our local business grow.
          </p>
        </div>
      </div>
    </section>
  );
}
