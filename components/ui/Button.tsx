import Link from "next/link";
import React from "react";

interface ButtonProps {
  text: string;
  link: string;
  py?: string;
}

export default function Button({
  text,
  link,
  py = "p-3",
}: Readonly<ButtonProps>) {
  return (
    <Link href={link}>
      <button
        className={`shadow-lg bg-[#FF8106] text-white font-bold px-6 ${py} rounded-lg hover:bg-[#ff7206] hover:scale-105 transition duration-300`}
      >
        {text}
      </button>
    </Link>
  );
}
