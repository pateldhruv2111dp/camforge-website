import { Settings, GraduationCap, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import advancedProgrammingImage from "@assets/image_1750951012248.png";

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
      description:
        "Official MASTERCAM and CARVECO (ArtCAM) training programs with certified instructors and comprehensive curriculum.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    },
    {
      icon: Handshake,
      title: "Trusted Partnership",
      description:
        "Authorized reseller for leading CAD/CAM software like MASTERCAM and CARVECO (ArtCAM) with complete support and consultation services.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=300",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-secondary mb-6">Leading <span className="text-primary">CAD/CAM</span> Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"><strong>CAMFORGE TECHNOLOGIES</strong> specializes in advanced <span className="text-primary">CAD/CAM</span> solutions, providing comprehensive programming services, authorized training programs, and cutting-edge technology solutions for modern manufacturing industries.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {feature.title === "Authorized Training" ? (
                    <>
                      Official <strong>MASTER<span className="text-primary">CAM</span></strong> and <strong>CARVECO (ArtCAM)</strong> training programs with certified instructors and comprehensive curriculum.
                    </>
                  ) : feature.title === "Trusted Partnership" ? (
                    <>
                      Authorized reseller for leading <span className="text-primary">CAD/CAM</span> software like <strong>MASTER<span className="text-primary">CAM</span></strong> and <strong>CARVECO (ArtCAM)</strong> with complete support and consultation services.
                    </>
                  ) : (
                    feature.description
                  )}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
