import React from 'react';

interface ServiceCardProps {
  name: string;
  url: string;
}

export default function ServiceCard({ name, url }: Readonly<ServiceCardProps>) {
  return (
    <article
      className='group w-full h-64 bg-cover bg-center relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-105 transition duration-300'
      style={{ backgroundImage: `url(${url})` }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/45 group-hover:bg-black/50  transition duration-300' />

      {/* Content Container */}
      <div className='relative z-10 flex items-center justify-center h-full'>
        <h4 className='text-white text-2xl font-bold text-center'>{name}</h4>
      </div>
    </article>
  );
}
