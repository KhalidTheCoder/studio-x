import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsTicker from "@/components/ClientsTicker";
import CoreServices from "@/components/CoreServices";
import ProcessSection from "@/components/ProcessSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black text-[#D6D6DA] overflow-x-hidden">
      {/* Absolute positioned transparent navigation bar */}
      <Navbar />

      <main className="w-full flex-1 flex flex-col items-center">
        {/* Sections of the landing page */}
        <div id="hero" className="w-full">
          <HeroSection />
        </div>
        
        <div id="clients" className="w-full">
          <ClientsTicker />
        </div>
        
        <div id="services" className="w-full">
          <CoreServices />
        </div>
        
        <div id="process" className="w-full">
          <ProcessSection />
        </div>
        
        <div id="portfolio" className="w-full">
          <FeaturedProjects />
        </div>
        
        <div id="testimonials" className="w-full">
          <TestimonialsSection />
        </div>
        
        <div id="faq" className="w-full">
          <FAQSection />
        </div>
      </main>

      {/* Large footer/CTA section */}
      <div id="contact" className="w-full">
        <FooterSection />
      </div>
    </div>
  );
}
