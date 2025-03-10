import Image from 'next/image';
import Button from '../ui/Button';
import IzzysLogo from '@/public/assets/izzy_banner_white.png';

export default function HeroSection() {
  return (
    <section
      className='w-full min-h-[65vh] md:min-h-[70vh] xl:min-h-[80vh] flex items-center justify-center py-16 px-4 bg-cover bg-center relative'
      style={{ backgroundImage: "url('/assets/HeroExample4K.jpg')" }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Content container */}
      <div className='relative flex flex-col items-center z-10 container mx-auto max-w-4xl text-center text-white px-6'>
        {/* Logo */}
        <div className='flex justify-center'>
          <Image
            src={IzzysLogo}
            alt='Izzys Landscaping and Construction'
            priority
            className='max-w-[300px] sm:max-w-[400px] md:max-w-[600px] h-auto'
          />
        </div>

        {/* Headline */}
        <h1 className='max-w-2xl text-[clamp(2rem,5vw,3rem)] sm:text-6xl font-bodoni_moda font-bold leading-tight mb-20'>
          Landscaping & Construction
        </h1>

        {/* CTA Button */}
        <Button text='Schedule A Free Estimate' />

        {/* Subheading */}
        <h3 className='text-lg sm:text-xl md:text-4xl mt-14 font-normal'>
          Trusted Minnesota Landscaper For 20+ Years
        </h3>
      </div>
    </section>
  );
}
