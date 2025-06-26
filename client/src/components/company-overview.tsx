import { Settings, GraduationCap, Handshake } from "lucide-react";

export default function CompanyOverview() {
  const features = [
    {
      icon: Settings,
      title: "Advanced Programming Services",
      description:
        "3-5 Axis milling, turning, and mill-turn programming with precision and efficiency for complex manufacturing requirements.",
    },
    {
      icon: GraduationCap,
      title: "Authorized Training",
      description:
        "Official MASTERCAM and CARVECO (ArtCAM) training programs with certified instructors and comprehensive curriculum.",
    },
    {
      icon: Handshake,
      title: "Trusted Partnership",
      description:
        "Authorized reseller for leading CAD/CAM software like MASTERCAM and CARVECO (ArtCAM) with complete support and consultation services.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-secondary mb-6">Leading <span className="text-primary">CAD/CAM</span> Excellence</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Camforge Technologies specializes in advanced <span className="text-primary">CAD/CAM</span> solutions, providing comprehensive programming services, authorized training programs, and cutting-edge technology solutions for modern manufacturing industries.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-secondary mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.title === "Authorized Training" ? (
                  <>
                    Official <strong>MASTER<span className="text-primary">CAM</span></strong> and <strong>CARVECO (ArtCAM)</strong> training programs with certified instructors and comprehensive curriculum.
                  </>
                ) : feature.title === "Trusted Partnership" ? (
                  <>
                    Authorized reseller for leading CAD/<span className="text-primary">CAM</span> software like <strong>MASTER<span className="text-primary">CAM</span></strong> and <strong>CARVECO (ArtCAM)</strong> with complete support and consultation services.
                  </>
                ) : (
                  feature.description
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
