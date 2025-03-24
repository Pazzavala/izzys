"use client";
import { truncateReview } from "@/lib/helpers";
import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import ReviewModal from "../home/Testimonial Section/ReviewModal";

interface AboutTestimonialsProps {
  id?: string;
  clientName: string;
  location: string;
  review: string;
  rating: number;
}

export default function AboutTestimonials({
  clientName,
  location,
  review,
  rating,
}: Readonly<AboutTestimonialsProps>) {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to track if component is mounted (for SSR Compability)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Truncate Review to consitent length
  const truncatedReview = truncateReview(review);
  const hasFullReview = review.length > 100;

  // Handlers for modal
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  // Make the whole card clickable
  const handleCardClick = () => {
    if (hasFullReview) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div
        onClick={handleCardClick}
        className='container mx-auto px-4 lg:pb-16 cursor-pointer'
      >
        <div
          key={clientName}
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
            &quot;{truncatedReview}&quot;
          </p>

          <div>
            <p className='font-bold text-gray-800'>{clientName}</p>
            <p className='text-gray-500 text-sm'>{location}</p>
          </div>
          {hasFullReview && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleOpenModal();
              }}
              className='
              absolute 
              bottom-4 
              right-4 
              flex 
              items-center 
              gap-2 
              text-sm 
              text-gray-600 
              hover:text-gray-800 
              transition-colors
            '
            >
              <FaEye />
              See Full Review
            </button>
          )}
        </div>
      </div>
      {isMounted && (
        <ReviewModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          clientName={clientName}
          location={location}
          review={review}
          rating={rating}
        />
      )}
    </>
  );
}
