import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-secondary via-blue-900 to-secondary"
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex justify-center items-center min-h-screen">
        <div className="max-w-4xl animate-fade-in text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            <div className="text-center">
              Precision <span className="text-primary">CAD/CAM</span> Solutions
            </div>
            <div className="text-center my-2">
              &
            </div>
            <div className="text-center">
              Industrial Training Institute
            </div>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Empowering industries with cutting-edge CAD CAM programming services,
            authorized training, and comprehensive solutions for modern
            manufacturing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("services")}
              className="bg-primary text-white hover:bg-red-700 transition-all duration-300 font-semibold text-lg group"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white hover:bg-white hover:text-secondary transition-all duration-300 font-semibold text-lg"
            >
              Get in Touch
              <Phone className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
