import React from 'react';

interface ButtonProps {
  text: string;
}

export default function Button({ text }: Readonly<ButtonProps>) {
  return (
    <button className='shadow-lg bg-[#FF8106] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#ff7206] hover:scale-105 transition duration-300'>
      {text}
    </button>
  );
}
