// Cloudinary image data
export interface CloudinaryImageData {
  src: string;
  width: number;
  height: number;
  alt?: string;
}

// Base service without images
export interface ServiceBase {
  id: string;
  name: string;
  mainImageId: string;
  galleryTag: string;
  description: string;
  fullDescription: string;
  features: string[];
}

// Service with processed images
export interface Service extends ServiceBase {
  src: string;
  gallery: CloudinaryImageData[];
}

// Cloudinary resource from API
export interface CloudinaryReource {
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  url: string;
  secure_url: string;
}

// Cloudinary API response
export interface CloudinaryApiResponse {
  resources: CloudinaryResource[];
  next_cursor?: string;
  rate_limit_allowed?: number;
  rate_limit_remaining?: number;
  rate_limit_reset_at?: string;
}
