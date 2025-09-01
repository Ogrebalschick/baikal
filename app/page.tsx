
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import DestinationsSection from '@/components/DestinationsSection';
import BookingSection from '@/components/BookingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <DestinationsSection />
      <BookingSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
