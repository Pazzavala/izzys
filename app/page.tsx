import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import { getCloudinaryImageData } from "@/lib/actions/actions";

// This will run at build time for static generation
async function getStaticImages() {
  const contactImage = getCloudinaryImageData(
    "contact-bg-image-public-id",
    1800,
    1200
  );

  // const heroImage = getCloudinaryImageData("hero-image-public-id", 2000, 1334);

  return {
    contactImage,
    // heroImage,
  };
}

export default async function RootPage() {
  const { contactImage } = await getStaticImages();

  return (
    <div className='flex flex-col'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection {...contactImage} />
    </div>
  );
}

export const revalidate = 86400;
