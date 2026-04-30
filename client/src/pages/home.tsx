import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import CompanyOverview from "@/components/company-overview";
import AuthorizedReseller from "@/components/authorized-reseller";
import ServicesSection from "@/components/services-section";
import TrainingSection from "@/components/training-section";
import FounderSection from "@/components/founder-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      {/* All sections below slide over the fixed video like elevator floors */}
      <div className="relative bg-white" style={{ zIndex: 2 }}>
        <CompanyOverview />
        <AuthorizedReseller />
        <ServicesSection />
        <TrainingSection />
        <FounderSection />
        <ContactSection />
        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
