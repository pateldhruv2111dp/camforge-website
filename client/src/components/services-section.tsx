import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Compass, Users, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Cpu,
      title: "CAM Programming Services",
      description:
        "Expert programming solutions for complex manufacturing requirements with precision and efficiency.",
      image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      features: [
        "3 Axis to 5 Axis Milling",
        "Turning & Turn-Mill Operations",
        "C & Y Axis Programming",
        "Mill-Turn Solutions",
      ],
    },
    {
      icon: Compass,
      title: "CAD Services",
      description:
        "Professional CAD design and drafting services for product development and manufacturing documentation.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      features: [
        "3D Modeling & Design",
        "Technical Drawings",
        "Product Development",
        "Design Optimization",
      ],
    },
    {
      icon: Users,
      title: "CAD/<span className='text-primary'>CAM</span> Corporate Training",
      description:
        "Comprehensive training programs designed to enhance your team's CAD/CAM skills and productivity.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
      features: [
        "Online Training Programs",
        "Offline Classroom Training",
        "Customized Curriculum",
        "Certification Programs",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-secondary mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive CAD CAM solutions tailored to meet your manufacturing
            and design requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary" dangerouslySetInnerHTML={{ __html: service.title }}>
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 text-gray-600">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
