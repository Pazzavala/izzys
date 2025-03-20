// import Image from "next/image";

export default function MobileView() {
  return (
    <div className='w-full max-w-[1350px] mx-auto px-4 sm:px-8 lg:px-12 mb-10 mt-16 lg:mt-28 flex flex-col '>
      <div className='flex flex-col mt-16 mb-6 sm:mb-14 justify-center items-center'>
        <h1 className='text-4xl md:text-4xl lg:text-5xl mb-6 text-center font-bold font-montserrat tracking-tight text-[#FF8106]/95'>
          About Us
        </h1>

        {/* Triptych Image Grid - Consistent Alignment */}
        {/* <div className='grid grid-cols-3 gap-4 max-w-6xl w-full md:mt-10'> */}
        {/* Left Image - Ensuring consistent height */}
        {/* <div className='relative w-full h-[450px]'>
          <Image
            src={AboutUsHero2}
            alt='Landscaping example 1'
            className='rounded-lg object-cover'
            fill
          />
        </div> */}

        {/* Center Image - Taller for triptych effect */}
        {/* <div className='relative w-full h-[450px]'>
          <Image
            src={AboutUsHero2}
            alt='Landscaping example 2'
            className='rounded-lg object-cover'
            fill
          />
        </div> */}

        {/* Right Image - Ensuring consistent height */}
        {/* <div className='relative w-full h-[450px]'>
          <Image
            src={AboutUsHero2}
            alt='Landscaping example 3'
            className='rounded-lg object-cover'
            fill
          />
        </div> */}
        {/* </div> */}

        {/* Description Text */}
        <p className='text-center text-gray-600 text-sm lg:text-base font-light leading-relaxed tracking-wide'>
          Izzy&apos;s Landscaping is dedicated to creating beautiful,
          high-quality outdoor spaces across Minnesota. From lush gardens to
          durable hardscapes, we bring expert craftsmanship and attention to
          detail. Whether it&apos;s a residential retreat or a commercial
          project, we take pride in creating beautiful, sustainable landscapes
          that stand the test of time. Let us turn your outdoor dreams into
          reality!
        </p>
      </div>
    </div>
  );
}
