import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { services } from "../data";
import {
  CloudinaryApiResponse,
  CloudinaryImageData,
  CloudinaryReource,
  Service,
  ServiceBase,
} from "../types";

const cldCloudName = process.env.CLOUDINARY_CLOUD_NAME;
const cldApiKey = process.env.CLOUDINARY_API_KEY;
const cldApiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cldCloudName || !cldApiKey || !cldApiSecret) {
  console.error("Cloudinary API credentials not found");
  throw new Error("Missing Cloudinary environment variables.");
}

// Init Cloudinary instance
const cld = new Cloudinary({
  cloud: {
    cloudName: cldCloudName,
    apiKey: cldApiKey,
    apiSecret: cldApiSecret,
  },
});

export const getServiceByID = (id: string): ServiceBase | undefined => {
  return services.find((service) => service.id === id);
};

// Get cldnry img URL and blur data for specific path
export const getCloudinaryImageData = (
  public_id: string,
  width: number,
  height: number,
  key?: string,
  alt?: string
): CloudinaryImageData => {
  const img = cld.image(public_id);
  img.resize(fill().width(width).height(height));

  const blurImg = cld.image(public_id);
  blurImg.resize(fill().width(20).height(20));

  if (!img) throw new Error(`Image data not found for public_id: ${public_id}`);

  return {
    src: img.toURL(),
    // blurDataUrl: blurImg.toURL(),
    width,
    height,
    key: key ?? public_id,
    alt: alt ?? public_id,
  };
};

// export const getCloudinaryImageData = (
//   resource: CloudinaryReource
// ): CloudinaryImageData => {
//   return {
//     src: resource.secure_url,
//     width: resource.width,
//     height: resource.height,
//     // blurDataUrl: getBlurDataUrl(resource.secure_url),
//     key: resource.public_id,
//     alt: resource.public_id,
//   };
// };

// Get all images from a folder in cldnry
export const getImagesFromFolder = async (
  folderPath: string
): Promise<CloudinaryImageData[]> => {
  try {
    const cloudinaryURL = `https://api.cloudinary.com/v1_1/${
      cld.getConfig().cloud?.cloudName
    }/resources/image/upload?prefix=${folderPath}/&max_results=10`;

    const response = await fetch(cloudinaryURL, {
      headers: {
        Authorization: `Basic ${Buffer.from(
          cldApiKey + ":" + cldApiSecret
        ).toString("base64")}`,
      },
    });

    const data = (await response.json()) as CloudinaryApiResponse;

    if (data.resources) {
      return data.resources.map((resource: CloudinaryReource) => {
        return getCloudinaryImageData(
          resource.public_id,
          resource.width,
          resource.height
        );
      });
    }

    return [];
  } catch (error) {
    console.error("Error fetching images from Cloudinary folder:", error);
    return [];
  }
};

// Process services data with main cldnry image
export const processServiceData = (
  service: ServiceBase,
  galleryImages: CloudinaryImageData[] = []
): Service => {
  // Get main img
  const mainImagePath = `${service.folderPath}/main`;
  console.log(mainImagePath);

  const { src /*blurDataUrl*/ } = getCloudinaryImageData(
    mainImagePath,
    800,
    600
  );

  return {
    ...service,
    src,
    // blurDataUrl,
    gallery: galleryImages,
  };
};
