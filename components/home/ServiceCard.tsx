import { processServiceData } from "@/lib/actions/actions";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { services } from "@/lib/data";

interface ServiceCardProps {
  showAmount?: number;
  filterOut?: string;
}

async function getServicesData() {
  return services.map((service) => processServiceData(service));
}

export default async function ServiceCard({
  showAmount,
  filterOut,
}: Readonly<ServiceCardProps>) {
  let servicesWithImages = await getServicesData();

  if (filterOut) {
    servicesWithImages = servicesWithImages.filter(
      (service) => service.id !== filterOut
    );
  }
  const displayedServices = showAmount
    ? servicesWithImages.slice(0, showAmount)
    : servicesWithImages;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {displayedServices.map((service) => (
        <Link
          href={`/services/${service.id}`}
          key={service.id}
          className='group'
        >
          <div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
            <div className='relative h-64'>
              <Image
                src={service.src}
                alt={service.name}
                className='object-cover group-hover:scale-105 transition-transform duration-300'
                fill
              />
            </div>
            <div className='p-6'>
              <h5 className='text-gray-800 mb-2 group-hover:text-[#FF8106] transition-colors'>
                {service.name}
              </h5>
              <p className='text-gray-600 line-clamp-2'>
                {service.description}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
