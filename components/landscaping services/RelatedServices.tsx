import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getCloudinaryImageData } from "@/lib/actions/actions";

// Define the service type
interface Service {
  id: string;
  name: string;
  description: string;
  mainImageId: string;
}

interface RelatedServicesProps {
  currentServiceId: string;
  services: Service[];
}

export default function RelatedServices({
  currentServiceId,
  services,
}: Readonly<RelatedServicesProps>) {
  // Filter out current service and limit to 3
  const relatedServices = services
    .filter((service) => service.id !== currentServiceId)
    .slice(0, 3);

  return (
    <div className='bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <h3 className='mb-12 text-center'>Other Services You Might Like</h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {relatedServices.map((relatedService) => (
            <Link
              href={`/services/${relatedService.id}`}
              key={relatedService.id}
              className='group'
            >
              <div className='bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow'>
                <div className='relative h-64'>
                  <ServiceImage
                    imageId={relatedService.mainImageId}
                    alt={relatedService.name}
                  />
                </div>
                <div className='p-6'>
                  <h5 className='text-gray-800 mb-2 group-hover:text-[#FF8106] transition-colors'>
                    {relatedService.name}
                  </h5>
                  <p className='text-gray-600 line-clamp-2'>
                    {relatedService.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

async function ServiceImage({
  imageId,
  alt,
}: Readonly<{
  imageId: string;
  alt: string;
}>) {
  const imageSrc = getCloudinaryImageData(imageId, 800, 600, "service-card");

  return (
    <Image
      src={imageSrc}
      alt={alt}
      className='object-cover group-hover:scale-105 transition-transform duration-300'
      fill
    />
  );
}
