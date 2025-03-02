import React from 'react';

interface ButtonProps {
  text: string;
}

export default function Button({ text }: Readonly<ButtonProps>) {
  return (
    <button className='bg-[#FF8106] text-white px-6 py-3 rounded-lg hover:bg-[#FF8106]/90 hover:scale-105 transition duration-300'>
      {text}
    </button>
  );
}
