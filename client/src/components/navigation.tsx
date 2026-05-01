import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImage from "@assets/6f1df9f1-721f-42b2-a6f3-7f216aa42081-removebg-preview_1750940759782.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: "home",     label: "Home"     },
    { href: "services", label: "Services" },
    { href: "training", label: "Training" },
    { href: "about",    label: "About"    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-2xl backdrop-saturate-150 border-b border-white/50 shadow-[0_4px_32px_rgba(0,0,0,0.10),inset_0_1px_0_rgba(255,255,255,0.6)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logoImage}
              alt="Camforge Technologies"
              className="h-14 w-auto transition-transform duration-200 hover:scale-105"
            />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 transition-colors duration-200 font-medium text-base tracking-wide group ${
                  isScrolled
                    ? "text-[#1d1d1f] hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full transition-all duration-300 group-hover:w-4/5" />
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="ml-3 btn-premium text-white border-0 font-semibold px-6 rounded-xl"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={isScrolled ? "text-[#1d1d1f] hover:bg-black/5" : "text-white hover:bg-white/10"}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white/90 backdrop-blur-xl border-black/10">
                <div className="flex flex-col space-y-1 mt-10">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left px-4 py-3 text-base font-medium text-[#1d1d1f] hover:text-primary hover:bg-black/[0.04] rounded-xl transition-all"
                    >
                      {link.label}
                    </button>
                  ))}
                  <div className="pt-4">
                    <Button
                      onClick={() => scrollToSection("contact")}
                      className="btn-premium text-white border-0 w-full rounded-xl"
                    >
                      Contact Us
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </nav>
  );
}
