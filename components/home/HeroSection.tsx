import Image from 'next/image';
import Button from '../ui/Button';
import IzzysLogo from '@/public/assets/izzy_banner_white.png';

export default function HeroSection() {
  return (
    <section
      className='w-full min-h-[70vh] md:min-h-[80vh] xl:min-h-[80vh] flex items-center justify-center py-16 px-4 bg-cover bg-center relative'
      style={{ backgroundImage: "url('/assets/HeroExample4K.jpg')" }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Content container */}
      <div className='relative z-10 container mx-auto max-w-4xl text-center text-white px-6'>
        {/* Logo */}
        <div className='flex justify-center mb-6'>
          <Image
            src={IzzysLogo}
            alt='Izzys Landscaping and Construction'
            priority
            className='w-auto max-w-[280px] sm:max-w-[350px] md:max-w-[600px] h-auto'
          />
        </div>

        {/* Headline */}
        <h1 className='text-[clamp(2rem,5vw,3rem)] md:text-6xl font-bodoni_moda font-bold leading-tight mb-20'>
          Landscaping & Construction
        </h1>

        {/* CTA Button */}
        <Button text='Schedule A Free Estimate' />

        {/* Subheading */}
        <h3 className='text-lg sm:text-xl md:text-4xl mt-14 font-bodoni_moda font-bold'>
          Trusted Minnesota Landscaper For 20+ Years
        </h3>
      </div>
    </section>
  );
}
