// import React from "react";
// import Image from "next/image";
// import { getCloudinaryImageData } from "@/lib/actions/actions";

// export default async function MeetTeamSeaction() {
//   const founderImage = await getCloudinaryImageData(
//     "founder",
//     400,
//     400,
//     "team"
//   );

//   return (
//     <div className='container mx-auto px-4 py-16'>
//       <h3 className='mb-12 text-center'>
//         Meet Our Team
//       </h3>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
//         {[
//           { name: "John Smith", role: "Founder & CEO", image: founderImage },
//           {
//             name: "Sarah Johnson",
//             role: "Lead Designer",
//             image: await getCloudinaryImageData("designer", 400, 400, "team"),
//           },
//           {
//             name: "Mike Roberts",
//             role: "Project Manager",
//             image: await getCloudinaryImageData("manager", 400, 400, "team"),
//           },
//           {
//             name: "Lisa Chen",
//             role: "Horticulture Specialist",
//             image: await getCloudinaryImageData("specialist", 400, 400, "team"),
//           },
//         ].map((member, index) => (
//           <div
//             key={index}
//             className='bg-white rounded-xl overflow-hidden shadow-sm text-center'
//           >
//             <div className='relative h-64 w-full'>
//               <Image
//                 src={member.image}
//                 alt={member.name}
//                 className='object-cover'
//                 fill
//               />
//             </div>
//             <div className='p-6'>
//               <h5 className='text-gray-800 mb-1'>
//                 {member.name}
//               </h5>
//               <p className='text-gray-600 mb-4'>{member.role}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
