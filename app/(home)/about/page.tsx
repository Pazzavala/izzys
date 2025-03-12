
import MobileView from "@/components/home/about/MobileView";
import WindowView from "@/components/home/about/WindowView";

export default function AboutPage() {
  return (
    <>
      {/* Show MobileView on small Screens */}
      <div className=''>
        <MobileView />
      </div>

      {/* Show WindowView on larger screens */}
      <div className='hidden'>
        <WindowView />
      </div>
    </>
  );
}

// export default function AboutPage() {
//   return (
//     <div className='w-full bg-white hidden px-12 min-h-screen md:flex flex-col'>
//       {/* Main content area - flex-grow to fill available space */}
//       <div className='mt-12 flex-grow flex flex-col'>
//         {/* About Us title - large, light orange text */}
//         <h1 className='text-5xl md:text-7xl lg:text-8xl font-light text-orange-300 mb-10'>
//           About Us
//         </h1>

//         {/* Main content grid - flex-grow to extend to the bottom */}
//         <div className='grid grid-cols-12 gap-6 flex-grow'>
//           {/* Left column - text content */}
//           <div className='col-span-6 lg:col-span-6 flex flex-col'>
//             <p className='text-gray-600 text-sm md:text-base font-light leading-relaxed tracking-wide'>
//               Izzy's Landscaping Is Dedicated To Creating Beautiful, High-
//               Quality Outdoor Spaces Across Minnesota, From Lush Gardens To
//               Durable Hardscapes, With Expert Craftsmanship And Attention To
//               Detail. Whether It's A Residential Retreat Or A Commercial
//               Project, We Take Pride In Creating Beautiful, Sustainable
//               Landscapes That Stand The Test Of Time. Let Us Turn Your Outdoor
//               Dreams Into Reality!
//             </p>

//             {/* Bottom left image - flex-grow to push it to the bottom */}
//             <div className='mt-8 md:mt-12 flex-grow grid grid-cols-12 gap-6'>
//               <div className='col-span-6' />
//               <div className='col-span-6 relative'>
//                 <div className='absolute inset-0'>
//                   <Image
//                     src={AboutUsHero1}
//                     alt='Stone pathway hardscape example'
//                     className='rounded-lg object-cover self-center'
//                     fill
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Middle column - full height */}
//           <div className='col-span-3 md:pl-4 flex flex-col'>
//             <div className='relative w-full h-full'>
//               <Image
//                 src={AboutUsHero2}
//                 alt='Fire pit hardscape example'
//                 className='rounded-lg object-cover'
//                 fill
//               />
//             </div>
//           </div>

//           {/* Right column - full-height image from top of heading */}
//           <div className='col-span-3 md:-mt-24 flex flex-col'>
//             <div className='relative w-full h-full'>
//               <Image
//                 src={AboutUsHero3}
//                 alt='Stone steps hardscape example'
//                 className='rounded-lg object-cover'
//                 fill
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
