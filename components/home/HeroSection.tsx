import Button from "../ui/Button";

// interface HeroSectionProps {
//   src: string;
//   width: number;
//   height: number;
//   alt?: string;
// }

const cloudName = process.env.CLOUDINARY_CLOUD_NAME;

export default function HeroSection() {
  const resourceType = "video";
  const transformations = "f_auto,q_auto,w_1800";
  const publicId = "Hero-Video_v14le4";
  const videoUrl = `https://res.cloudinary.com/${cloudName}/${resourceType}/upload/${transformations}/${publicId}.mp4`;

  return (
    // min-h-[65vh] md:min-h-[70vh] xl:min-h-[80vh]
    <section className='w-full h-screen flex items-center justify-center py-16 px-4 bg-cover bg-center relative'>
      {/* <Image
        src={src}
        alt={alt ?? "hero section"}
        fill
        priority
        className='object-cover'
      /> */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className='absolute inset-0 w-full h-full object-cover'
      >
        <source
          src={videoUrl}
          type='video/mp4'
        />
      </video>
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/60' />

      {/* Content container */}
      <div className='relative flex flex-col items-center z-10 container mx-auto max-w-4xl text-center text-white px-6'>
        <h1 className='max-w-2xl text-6xl sm:text-7xl font-montserrat tracking-wider font-black leading-tight mb-2'>
          IZZYS
        </h1>
        {/* Headline */}
        <h1 className='max-w-2xl text-4xl sm:text-6xl font-mono font-black leading-tight mb-20'>
          Landscaping & Construction
        </h1>

        {/* CTA Button */}
        <Button
          link='/contact'
          text='Schedule A Free Estimate'
        />

        {/* Subheading */}
        <h3 className='text-xl sm:text-xl md:text-4xl mt-14'>
          Trusted Minnesota Landscaper For 20+ Years
        </h3>
      </div>
    </section>
  );
}
