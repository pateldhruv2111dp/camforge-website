import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Palette } from "lucide-react";
import mastercamTrainingImage from "@assets/hq720_1750952113347.jpg";
import carvecoTrainingImage from "@assets/touch-down2_1750952193596.webp";

export default function TrainingSection() {
  const mastercamPrograms = [
    {
      title: "Mill & Mill 3D",
      description: "2D and 3D milling operations",
    },
    {
      title: "4 & 5 Axis Programming",
      description: "Advanced multi-axis machining",
    },
    {
      title: "Turning & Turnmill",
      description: "Lathe and turn-mill operations",
    },
    {
      title: "C & Y Axis, Mill-Turn",
      description: "Complex axis programming",
    },
  ];

  const carvecoPrograms = [
    {
      title: "2D Design",
      description: "Vector design and illustration",
    },
    {
      title: "3D Design",
      description: "3D modeling and sculpting",
    },
    {
      title: "Toolpath Generation",
      description: "Efficient machining strategies",
    },
    {
      title: "Machining Operations",
      description: "CNC programming for production",
    },
  ];

  return (
    <section id="training" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-4xl font-bold text-secondary mb-4">
            Training Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive <span className="text-primary">CAD/CAM</span> training with certified instructors and industry-standard curriculum
          </p>
        </div>

        {/* Training Programs */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mastercam Training */}
          <Card className="overflow-hidden animate-slide-up">
            <div className="relative">
              <img
                src={mastercamTrainingImage}
                alt="Mastercam Training"
                className="w-full h-48 object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">
                    <strong>MASTER<span className="text-primary">CAM</span></strong> Training
                  </h3>
                  <p className="text-gray-500">Professional CAM Programming</p>
                </div>
              </div>

              <div className="space-y-4">
                {mastercamPrograms.map((program, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-secondary">
                      {program.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Carveco Training */}
          <Card className="overflow-hidden animate-slide-up">
            <div className="relative">
              <img
                src={carvecoTrainingImage}
                alt="Carveco Training"
                className="w-full h-48 object-cover"
              />
            </div>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">
                    <strong>CARVECO (ArtCAM)</strong> Training
                  </h3>
                  <p className="text-gray-500">Design & Machining Solutions</p>
                </div>
              </div>

              <div className="space-y-4">
                {carvecoPrograms.map((program, index) => (
                  <div key={index} className="border-l-4 border-secondary pl-4">
                    <h4 className="font-semibold text-secondary">
                      {program.title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {program.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
