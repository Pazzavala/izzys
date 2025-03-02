import AboutSection from '@/components/home/AboutSection';
import ContactSection from '@/components/home/ContactSection';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

export default function RootPage() {
  return (
    <div className='flex flex-col'>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
