import { Settings, GraduationCap, Handshake } from "lucide-react";
import advancedProgrammingImage from "@assets/image_1750951012248.png";
import partnershipImage from "@assets/istockphoto-1916729901-612x612_1750951366612.jpg";

export default function CompanyOverview() {
  const features = [
    {
      icon: Settings,
      title: "Advanced Programming Services",
      description:
        "3-5 Axis milling, turning, and mill-turn programming with precision and efficiency for complex manufacturing requirements.",
      image: advancedProgrammingImage,
    },
    {
      icon: GraduationCap,
      title: "Authorized Training",
      description: null,
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    },
    {
      icon: Handshake,
      title: "Trusted Partnership",
      description: null,
      image: partnershipImage,
    },
  ];

  return (
    <section id="about" className="py-24 section-muted relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Leading <span className="text-gradient-red">CAD/CAM</span> Excellence
          </h2>
          <div className="divider-red mx-auto mb-6" />
          <p className="text-lg text-[#6e6e73] max-w-3xl mx-auto leading-relaxed">
            <strong className="text-[#1d1d1f]">CAMFORGE TECHNOLOGIES</strong> specializes
            in advanced <span className="text-primary">CAD/CAM</span> solutions, providing
            comprehensive programming services, authorized training programs, and
            cutting-edge technology solutions for modern manufacturing industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group animate-slide-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 border border-primary/15 w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-[#1d1d1f] leading-tight">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-[#6e6e73] leading-relaxed text-sm">
                  {feature.title === "Authorized Training" ? (
                    <>
                      Official{" "}
                      <strong className="text-[#1d1d1f]">MASTERCAM</strong>{" "}
                      and <strong className="text-[#1d1d1f]">CARVECO (ArtCAM)</strong>{" "}
                      training programs with certified instructors and comprehensive
                      curriculum.
                    </>
                  ) : feature.title === "Trusted Partnership" ? (
                    <>
                      Authorized reseller for leading{" "}
                      <span className="text-primary">CAD/CAM</span> software like{" "}
                      <strong className="text-[#1d1d1f]">MASTERCAM</strong>{" "}
                      and{" "}
                      <strong className="text-[#1d1d1f]">CARVECO (ArtCAM)</strong> with
                      complete support and consultation.
                    </>
                  ) : (
                    feature.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
