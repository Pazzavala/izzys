import { getCloudinaryImageData } from "@/lib/actions/actions";
import Button from "../ui/Button";

export default function HeroSection() {
  const heroImage = getCloudinaryImageData(
    "hero-image-public-id",
    2000,
    1334,
    "hero"
  );

  return (
    <section
      className='w-full min-h-[65vh] md:min-h-[70vh] xl:min-h-[80vh] h-screen flex items-center justify-center py-16 px-4 bg-cover bg-center relative'
      style={{ backgroundImage: `url(${heroImage.src})` }}
    >
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/50' />

      {/* Content container */}
      <div className='relative flex flex-col items-center z-10 container mx-auto max-w-4xl text-center text-white px-6'>
        <h1 className='max-w-2xl text-[clamp(4rem,5vw,5rem)] sm:text-7xl font-montserrat tracking-wider font-black leading-tight mb-2'>
          IZZYS
        </h1>
        {/* Headline */}
        <h1 className='max-w-2xl text-[clamp(2rem,5vw,3rem)] sm:text-6xl font-mono font-black leading-tight mb-20'>
          Landscaping & Construction
        </h1>

        {/* CTA Button */}
        <Button
          link='/contact'
          text='Schedule A Free Estimate'
        />

        {/* Subheading */}
        <h3 className='text-lg sm:text-xl md:text-4xl mt-14 font-normal'>
          Trusted Minnesota Landscaper For 20+ Years
        </h3>
      </div>
    </section>
  );
}
