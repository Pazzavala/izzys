// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { getCloudinaryImageData } from "@/lib/actions/actions";

// export default async function WhyChooseUsSection() {
//   return (
//     <div className='bg-[#FF8106]/95 text-white py-16'>
//       <div className='container mx-auto px-4'>
//         <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
//           <div>
//             <h2 className='text-3xl font-bold mb-6'>Why Choose Us?</h2>
//             <ul className='space-y-4'>
//               {[
//                 "Over 20 years of industry experience",
//                 "Fully licensed and insured professionals",
//                 "Customized solutions for your unique space",
//                 "Sustainable and eco-friendly practices",
//                 "Transparent pricing with no hidden fees",
//                 "Ongoing maintenance and support",
//               ].map((point, index) => (
//                 <li
//                   key={index}
//                   className='flex items-start'
//                 >
//                   <svg
//                     xmlns='http://www.w3.org/2000/svg'
//                     className='h-5 w-5 text-white mr-2 mt-1'
//                     viewBox='0 0 20 20'
//                     fill='currentColor'
//                   >
//                     <path
//                       fillRule='evenodd'
//                       d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
//                       clipRule='evenodd'
//                     />
//                   </svg>
//                   <span>{point}</span>
//                 </li>
//               ))}
//             </ul>
//             <div className='mt-8'>
//               <Link
//                 href='/contact'
//                 className='inline-block px-8 py-3 bg-white text-[#FF8106] font-medium rounded-lg hover:bg-gray-100 transition-colors'
//               >
//                 Get in Touch
//               </Link>
//             </div>
//           </div>
//           <div className='relative h-[400px] rounded-lg overflow-hidden shadow-lg'>
//             <Image
//               src={await getCloudinaryImageData(
//                 "why-choose-us",
//                 800,
//                 600,
//                 "about"
//               )}
//               alt='Our team at work'
//               className='object-cover'
//               fill
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
