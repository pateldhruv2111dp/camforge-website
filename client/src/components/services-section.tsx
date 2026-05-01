import { Cpu, Compass, Users, Check } from "lucide-react";
import corporateTrainingImage from "@assets/mcmaster-continuing-education_CorporateTraining_1200x628_1750951612043.jpg";
import camProgrammingImage from "@assets/workstation-cam-software_1750951717860.webp";
import cadServicesImage from "@assets/Computer-Aided-Design_1750951801368.jpg";

export default function ServicesSection() {
  const services = [
    {
      icon: Users,
      title: "CAD/CAM Corporate Training",
      description:
        "Comprehensive training programs designed to enhance your team's CAD/CAM skills and productivity.",
      image: corporateTrainingImage,
      features: [
        "Online Training Programs",
        "Offline Classroom Training",
        "Customized Curriculum",
        "Certification Programs",
      ],
      featured: false,
    },
    {
      icon: Cpu,
      title: "CAM Programming Services",
      description:
        "Expert programming solutions for complex manufacturing requirements with precision and efficiency.",
      image: camProgrammingImage,
      features: [
        "3 Axis to 5 Axis Milling",
        "Turning & Turn-Mill Operations",
        "C & Y Axis Programming",
        "Mill-Turn Solutions",
      ],
      featured: true,
    },
    {
      icon: Compass,
      title: "CAD Services",
      description:
        "Professional CAD design and drafting services for product development and manufacturing documentation.",
      image: cadServicesImage,
      features: [
        "3D Modeling & Design",
        "Technical Drawings",
        "Product Development",
        "Design Optimization",
      ],
      featured: false,
    },
  ];

  return (
    <section id="services" className="py-24 section-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Our Services
          </h2>
          <div className="divider-red mx-auto mb-6" />
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
            Comprehensive <span className="text-primary">CAD/CAM</span> solutions tailored
            to meet your manufacturing and design requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative glass-card glass-card-hover rounded-2xl overflow-hidden group animate-slide-up ${
                service.featured ? "ring-2 ring-primary/20 ring-offset-2 ring-offset-[#f5f5f7]" : ""
              }`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              {service.featured && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold tracking-wide shadow-md">
                  Popular
                </div>
              )}
              <div className="relative overflow-hidden h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <div className="bg-primary/10 border border-primary/15 w-10 h-10 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                    <service.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-base font-bold text-[#1d1d1f] leading-tight">
                    {service.title === "CAD/CAM Corporate Training" ? (
                      <><span className="text-primary">CAD/CAM</span> Corporate Training</>
                    ) : (
                      service.title
                    )}
                  </h3>
                </div>
                <p className="text-[#6e6e73] mb-4 leading-relaxed text-sm">
                  {service.description.includes("CAD/CAM") ? (
                    <>
                      {service.description.split("CAD/CAM")[0]}
                      <span className="text-primary">CAD/CAM</span>
                      {service.description.split("CAD/CAM")[1]}
                    </>
                  ) : (
                    service.description
                  )}
                </p>
                <div className="h-px bg-black/[0.06] mb-4" />
                <ul className="space-y-2.5">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-[#1d1d1f]">
                      <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
