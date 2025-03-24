import React from "react";
import { createPortal } from "react-dom";
import { FaStar, FaTimes } from "react-icons/fa";

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

export default function ReviewModal({
  isOpen,
  onClose,
  clientName,
  location,
  review,
  rating,
}: {
  isOpen: boolean;
  onClose: () => void;
  clientName: string;
  location: string;
  review: string;
  rating: number;
}) {
  if (!isOpen) return null;

  return createPortal(
    <div
      className='fixed inset-0 z-[9999] flex items-center justify-center p-4'
      role='close card'
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(2px)",
      }}
      onClick={onClose}
    >
      <div
        className='bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto p-8 relative shadow-xl'
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors'
          aria-label='Close modal'
        >
          <FaTimes className='w-5 h-5' />
        </button>

        {/* Modal content */}
        <div className='mb-6'>
          <h3 className='text-xl font-medium mb-1 text-gray-900'>
            {clientName}
          </h3>
          <p className='text-gray-500 mb-4'>{location}</p>
          <div className='flex mb-6'>{renderStars(rating)}</div>
        </div>

        <div className='prose max-w-none'>
          <p className='text-gray-700 whitespace-pre-line leading-relaxed'>
            &quot;{review}&quot;
          </p>
        </div>

        <div className='mt-8 flex justify-end'>
          <button
            onClick={onClose}
            className='px-6 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-colors font-medium'
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
