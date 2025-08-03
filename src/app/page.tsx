import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import About from "@/components/About";
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Technologies from '@/components/Tools-Technologies';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
    <main className="min-h-screen mx-auto overflow-x-hidden" style={{ maxWidth: "100rem" }}>
      <Hero />
      <About />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <Technologies />
      <ContactSection />
      <Footer />
    </main>
    </>
  );
}
