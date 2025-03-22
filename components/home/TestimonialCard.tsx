import React from "react";
import { FaStar, FaEye } from "react-icons/fa6";
import Link from "next/link";

interface TestimonialsCardProps {
  id?: string;
  clientName: string;
  location: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  id,
  clientName,
  location,
  review,
  rating,
}: Readonly<TestimonialsCardProps>) {
  // Truncate review to a consistent length
  const truncateReview = (text: string, maxLength: number = 200) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

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

  const truncatedReview = truncateReview(review);
  const hasFullReview = review.length > 200;

  return (
    <div
      className='
        container 
        flex flex-col 
        justify-center 
        items-center 
        max-w-sm 
        sm:max-w-lg 
        md:max-w-xl 
        lg:max-w-3xl 
        xl:max-w-4xl 
        w-full 
        mx-auto 
        p-12 
        m-10 
        bg-gray-100 
        text-gray-800 
        rounded-xl
        transition-all 
        duration-300 
        ease-in-out
        relative
      '
    >
      <div className='flex items-center justify-center'>
        <p className='font-medium pb-10'>
          {clientName} | {location}
        </p>
      </div>

      <p className='text-center max-w-6xl sm:max-w-4xl mb-8 text-gray-600'>
        {truncatedReview}
      </p>

      {hasFullReview && (
        <Link
          href={`/reviews/${
            id ?? clientName.toLowerCase().replace(/\s+/g, "-")
          }`}
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
        </Link>
      )}

      <div className='flex justify-center gap-2'>{renderStars(rating)}</div>
    </div>
  );
}

// Optional: Review Modal Component (alternative to full page)
export function ReviewModal({
  isOpen,
  onClose,
  review,
}: Readonly<{
  isOpen: boolean;
  onClose: () => void;
  review: TestimonialsCardProps;
}>) {
  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='bg-white p-8 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h4>{review.clientName}</h4>
          <button
            onClick={onClose}
            className='text-gray-600 hover:text-gray-800'
          >
            Close
          </button>
        </div>
        <p className='text-gray-700 mb-4'>{review.review}</p>
        <div className='flex justify-center'></div>
      </div>
    </div>
  );
}
