import { processServiceData } from "@/lib/actions/actions";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { services } from "@/lib/data";

interface ServiceCardProps {
  showAmount?: number;
}

async function getServicesData() {
  return services.map((service) => processServiceData(service));
}

export default async function ServiceCard({
  showAmount,
}: Readonly<ServiceCardProps>) {
  const servicesWithImages = await getServicesData();

  const displayedServices = showAmount
    ? servicesWithImages.slice(0, showAmount)
    : servicesWithImages;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {displayedServices.map((service) => (
        <Link
          key={service.id}
          href={`/services/${service.id}`}
          className='border border-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition'
        >
          <div className='relative h-64 w-full'>
            <Image
              src={service.src}
              alt={service.name}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className='object-cover'
            />
          </div>
          <div className='p-4'>
            <h2 className='text-xl font-semibold mb-2 text-gray-800'>
              {service.name}
            </h2>
            <p className='text-gray-600'>{service.description}</p>
            <div className='mt-3 text-blue-600 font-medium'>Learn more</div>
          </div>
        </Link>
      ))}
    </div>
  );
}
