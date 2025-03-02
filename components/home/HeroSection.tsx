import Image from 'next/image';
import Button from '../ui/Button';

import IzzysLogo from '@/public/assets/izzy_banner_white.png';

// components/home/HeroSection.tsx
export default function HeroSection() {
  return (
    <section
      className='w-full py-20 bg-cover bg-center relative'
      style={{ backgroundImage: "url('/assets/HeroExample.png')" }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Content container */}
      <div className='relative z-10 container mx-auto px-4 text-center text-white'>
        <div className='flex justify-center mb-6'>
          <Image
            src={IzzysLogo}
            alt='Izzys Landscaping and Construction'
            priority
            width={300}
            height={100}
          />
        </div>
        <h1 className='text-4xl md:text-5xl font-bold mb-4'>
          Landscaping & Construction
        </h1>
        <Button text='Schedule A Free Estimate' />
        <h3 className='text-2xl mt-6 font-medium'>
          Trusted Minnesota Landscaper For 20+ Years
        </h3>
      </div>
    </section>
  );
}
