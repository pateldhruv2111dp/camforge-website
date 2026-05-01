import { Mail, Phone } from "lucide-react";
import logoImage from "@assets/6f1df9f1-721f-42b2-a6f3-7f216aa42081-removebg-preview_1750940759782.png";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const quickLinks = [
    { href: "home",     label: "Home"     },
    { href: "services", label: "Services" },
    { href: "training", label: "Training" },
    { href: "founder",  label: "About"    },
    { href: "contact",  label: "Contact"  },
  ];

  const services = [
    { label: "CAM Programming", prefix: "CAM" },
    { label: "CAD Services",    prefix: "CAD" },
    { label: "Corporate Training", prefix: null },
    { label: "Mastercam Training", prefix: null },
    { label: "Carveco Training",   prefix: null },
  ];

  return (
    <footer className="section-muted border-t border-black/[0.08]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="py-12 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <img
              src={logoImage}
              alt="Camforge Technologies"
              className="h-14 w-auto mb-5"
            />
            <p className="text-[#6e6e73] leading-relaxed text-base max-w-sm mb-6">
              Leading provider of <span className="text-primary">CAD/CAM</span> solutions,
              programming services, and authorized training programs for modern
              manufacturing industries.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:support@camforge.in"
                className="flex items-center gap-2 text-[#6e6e73] hover:text-primary text-base transition-colors"
              >
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                support@camforge.in
              </a>
              <a
                href="tel:+919825060415"
                className="flex items-center gap-2 text-[#6e6e73] hover:text-primary text-base transition-colors"
              >
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                +91 9825060415
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#1d1d1f] font-semibold mb-5 text-base tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-[#6e6e73] hover:text-primary transition-colors text-base text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#1d1d1f] font-semibold mb-5 text-base tracking-widest uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((s, i) => (
                <li key={i} className="text-[#6e6e73] text-base">
                  {s.prefix ? (
                    <>
                      <span className="text-primary">{s.prefix}</span>
                      {s.label.replace(s.prefix, "")}
                    </>
                  ) : s.label}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="h-px bg-black/[0.08]" />
        <div className="py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-[#6e6e73] text-base">
            © 2025 Camforge Technologies India Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-[#aeaeb2] text-sm">Powered by Camforge Technologies</p>
        </div>

      </div>
    </footer>
  );
}
