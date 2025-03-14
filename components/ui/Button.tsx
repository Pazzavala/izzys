import React from "react";

interface ButtonProps {
  text: string;
  py?: string;
}

export default function Button({ text, py = "p-3" }: Readonly<ButtonProps>) {
  return (
    <button
      className={`shadow-lg bg-[#FF8106] text-white font-bold px-6 ${py} rounded-lg hover:bg-[#ff7206] hover:scale-105 transition duration-300`}
    >
      {text}
    </button>
  );
}
