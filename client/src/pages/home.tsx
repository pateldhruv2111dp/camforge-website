import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CompanyOverview from "@/components/company-overview";
import ServicesSection from "@/components/services-section";
import TrainingSection from "@/components/training-section";
import FounderSection from "@/components/founder-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyOverview />
      <ServicesSection />
      <TrainingSection />
      <FounderSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
