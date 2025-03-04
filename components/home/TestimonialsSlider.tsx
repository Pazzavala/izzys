'use client';
import { testimonials } from '@/lib/data';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import TestimonialCard from './TestimonialCard';
import SlideNextButton from '../ui/SlideNextButton';
import SlidePrevButton from '../ui/SlidePrevButton';

export default function TestimonialsSlider() {
  return (
    <div className=' px-4'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={80}
        slidesPerView={1}
        speed={300}
        allowTouchMove={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        watchOverflow={true}
        resistance={true}
        resistanceRatio={0.5}
        className='relative'
      >
        <div
          slot='container-start'
          className='hidden absolute top-1/2 left-0 right-0 transform -translate-y-1/2 md:flex justify-between px-4 z-10'
        >
          <SlidePrevButton />
          <SlideNextButton />
        </div>
        {testimonials.map((testimonial) => (
          <SwiperSlide
            key={testimonial.clientName}
            className='h-auto'
          >
            <TestimonialCard {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination Styles */}
      <style>
        {`
          .swiper-pagination-bullet {
            background-color: #ccc; /* Inactive bullet color */
            opacity: 1;
          }

          .swiper-pagination-bullet-active {
            background-color: #666; /* Active bullet color */
          }
        `}
      </style>
    </div>
  );
}
