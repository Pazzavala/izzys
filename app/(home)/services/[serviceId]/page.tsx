import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getServiceByID,
  processServiceData,
  getImagesFromFolder,
} from "@/lib/actions/actions";
import { services } from "@/lib/data";
import Gallery from "@/components/ui/Gallery";

// Generate static params at build time
export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

async function getServiceData(id: string) {
  console.log("Fetching service for ID:", id);
  const service = getServiceByID(id);
  console.log("Service found:", service);

  if (!service) return null;

  // get gallery Images from service's folder
  const galleryFolderPath = `${service.folderPath}/gallery`;
  const galleryImages = await getImagesFromFolder(galleryFolderPath);

  // Process service data with cldnry images
  return processServiceData(service, galleryImages);
}

export default async function ServicePage({
  params,
}: Readonly<{
  params: {
    serviceId: string;
  };
}>) {
  console.log("params.id:", params.serviceId);
  const service = await getServiceData(params.serviceId);

  if (!service) {
    return (
      <div className='container mx-auto px-4 py-8 md:px-8 text-gray-800 text-center'>
        <Link
          href={"/services"}
          className='flex items-center text-blue-600 mb-6'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5 mr-1'
            viewBox='0 0 20 20'
            fill='currentColor'
          >
            <path
              fillRule='evenodd'
              d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
              clipRule='evenodd'
            />
          </svg>
          Back to all services
        </Link>
        <div>Service Not Found</div>
      </div>
    );
  }

  return (
    <div className='container mx-auto px-4 py-8 md:px-8 text-gray-800'>
      <Link
        href={"/services"}
        className='flex items-center text-blue-600 mb-6'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5 mr-1'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z'
            clipRule='evenodd'
          />
        </svg>
        Back to all services
      </Link>

      <div className='relative h-96 w-full mb-8 rounded-lg overflow-hidden'>
        <Image
          src={service.src}
          alt={service.name}
          fill
          sizes='100vw'
          className='object-cover'
          priority
          // placeholder='blur'
          // blurDataURL={service.blurDataUrl}
        />
      </div>

      <h1 className='text-4xl font-bold mb-4'>{service.name}</h1>
      <p className='text-xl text-gray-600 mb-8'>{service.description}</p>

      <div>
        <div>
          <h2>About this service</h2>
          <p>{service.fullDescription}</p>

          <h2>Service Gallery</h2>
          <Gallery gallery={service.gallery} />
        </div>
        <div className='bg-gray-50 p-6 rounded-lg h-fit'>
          <h3 className='text-xl font-semibold mb-4'>Service Features</h3>
          <ul className='space-y-2'>
            {service.features.map((feature) => (
              <li
                key={feature}
                className='flex items-start'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-green-500 mr-2 mt-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <div className='mt-8'>
            <Link
              href='/contact'
              className='block w-full bg-green-600 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-green-700 transition-colors'
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add metadata generation for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const service = await getServiceData(params.id);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | Our Services`,
    description: service.description,
    openGraph: {
      images: [{ url: service.src }],
    },
  };
}
