export default function AboutPage() {
  return (
    <div
      className='max-w-7xl w-full mx-auto px-12 min-h-screen pb-10 bg-cover bg-center'
      style={{ backgroundImage: `url('/assets/PreCut.png' )` }}
    >
      <div className='grid grid-cols-12'>
        <div className='container col-span-6'>
          {/* About Us Title */}
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-light text-orange-300 mt-12 md:mt-16'>
            About Us
          </h1>
          {/* Description Text */}
          <p className='text-left max-w-4xl pr-7 text-gray-600 text-sm md:text-base font-light leading-relaxed tracking-wide mt-6'>
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
    </div>
  );
}
