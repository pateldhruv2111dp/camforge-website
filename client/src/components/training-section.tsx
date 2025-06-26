import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Palette } from "lucide-react";

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
    <section id="training" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        



        {/* Training Programs */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Mastercam Training */}
          <Card className="overflow-hidden animate-slide-up">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=250"
                alt="CNC training facility"
                className="w-full h-48 object-cover"
              />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">
                    <strong>MASTER<span className="text-primary">CAM</span></strong> Training Institute
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=250"
                alt="Design studio with 3D modeling"
                className="w-full h-48 object-cover"
              />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mr-4">
                  <Palette className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary">
                    <strong>CARVECO (ART<span className="text-primary">CAM</span>)</strong> Training
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
