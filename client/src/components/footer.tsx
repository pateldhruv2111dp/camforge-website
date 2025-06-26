import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "home", label: "Home" },
    { href: "services", label: "Services" },
    { href: "training", label: "Training" },
    { href: "founder", label: "About" },
    { href: "contact", label: "Contact" },
  ];

  const services = [
    "CAM Programming",
    "CAD Services",
    "Corporate Training",
    "Mastercam Training",
    "Carveco Training",
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img
              src="@assets/6f1df9f1-721f-42b2-a6f3-7f216aa42081_1750940404709.jpg"
              alt="Camforge Technologies"
              className="h-8 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading provider of CAD CAM solutions, programming services, and
              authorized training programs for modern manufacturing industries.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-200"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-200"
              >
                <Twitter className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 bg-gray-800 rounded-full hover:bg-primary transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Camforge Technologies. All rights reserved. | Designed with
            precision and innovation.
          </p>
        </div>
      </div>
    </footer>
  );
}
