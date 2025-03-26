import React, { useEffect, useState } from "react";
import { FaStar, FaEye } from "react-icons/fa";
import ReviewModal from "./ReviewModal";
import { truncateReview } from "@/lib/helpers";

interface TestimonialsCardProps {
  id?: string;
  clientName: string;
  location: string;
  review: string;
  rating: number;
}

// Star Rendering Function
const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={`
          ${index < rating ? "text-yellow-400" : "text-gray-300"}
          w-5 h-5
        `}
    />
  ));
};

export default function TestimonialCard({
  clientName,
  location,
  review,
  rating,
}: Readonly<TestimonialsCardProps>) {
  // State for modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to track if component is mounted (for SSR compatibility)
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Truncate review to a consistent length
  const truncatedReview = truncateReview(review);
  const hasFullReview = review.length > 200;

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
      <button
        onClick={handleCardClick}
        className='relative flex flex-col m-10 text-gray-700 bg-white p-8 rounded-xl shadow-sm text-center max-w-4xl mx-auto'
      >
        <div className='flex items-center justify-center'>
          <p className='font-medium pb-10'>
            {clientName} | {location}
          </p>
        </div>

        <p className='text-center max-w-6xl sm:max-w-4xl mb-8 text-gray-600'>
          &quot;{truncatedReview}&quot;
        </p>

        {hasFullReview && (
          <div className='absolute bottom-4 right-4 flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 transition-colors'>
            <FaEye
              onClick={(e) => {
                e.stopPropagation();
                handleOpenModal();
              }}
            />
            See Full Review
          </div>
        )}

        <div className='flex justify-center gap-2'>{renderStars(rating)}</div>
      </button>

      {/* Modal via portal - only rendered on client side */}
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
