import { Wrench, Palette } from "lucide-react";
import mastercamTrainingImage from "@assets/hq720_1750952113347.jpg";
import carvecoTrainingImage from "@assets/touch-down2_1750952193596.webp";

export default function TrainingSection() {
  const mastercamPrograms = [
    { title: "Mill & Mill 3D",         description: "2D and 3D milling operations"      },
    { title: "4 & 5 Axis Programming", description: "Advanced multi-axis machining"     },
    { title: "Turning & Turnmill",     description: "Lathe and turn-mill operations"    },
    { title: "C & Y Axis, Mill-Turn",  description: "Complex axis programming"          },
  ];
  const carvecoPrograms = [
    { title: "2D Design",              description: "Vector design and illustration"    },
    { title: "3D Design",              description: "3D modeling and sculpting"         },
    { title: "Toolpath Generation",    description: "Efficient machining strategies"    },
    { title: "Machining Operations",   description: "CNC programming for production"   },
  ];

  return (
    <section id="training" className="py-24 section-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
            Learn With Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Training Programs
          </h2>
          <div className="divider-red mx-auto mb-6" />
          <p className="text-lg text-[#6e6e73] max-w-3xl mx-auto leading-relaxed">
            Comprehensive <span className="text-primary">CAD/CAM</span> training with
            certified instructors and industry-standard curriculum
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Mastercam */}
          <div className="glass-card glass-card-hover rounded-2xl overflow-hidden group animate-slide-up">
            <div className="relative overflow-hidden h-48">
              <img
                src={mastercamTrainingImage}
                alt="Mastercam Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-primary/10 border border-primary/15 rounded-xl flex items-center justify-center mr-3">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">
                    MASTERCAM Training
                  </h3>
                  <p className="text-[#6e6e73] text-xs">Professional CAM Programming</p>
                </div>
              </div>
              <div className="space-y-0">
                {mastercamPrograms.map((prog, i) => (
                  <div key={i} className="flex items-start py-3 border-b border-black/[0.06] last:border-0">
                    <div className="w-1 min-h-[38px] bg-gradient-to-b from-primary to-primary/20 rounded-full mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1d1d1f] text-sm">{prog.title}</h4>
                      <p className="text-xs text-[#6e6e73] mt-0.5">{prog.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Carveco */}
          <div
            className="glass-card glass-card-hover rounded-2xl overflow-hidden group animate-slide-up"
            style={{ animationDelay: "0.12s" }}
          >
            <div className="relative overflow-hidden h-48">
              <img
                src={carvecoTrainingImage}
                alt="Carveco Training"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 bg-secondary/10 border border-secondary/15 rounded-xl flex items-center justify-center mr-3">
                  <Palette className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1d1d1f]">
                    CARVECO{" "}
                    <span className="text-[#6e6e73] font-normal text-base">(ArtCAM)</span>{" "}
                    Training
                  </h3>
                  <p className="text-[#6e6e73] text-xs">Design &amp; Machining Solutions</p>
                </div>
              </div>
              <div className="space-y-0">
                {carvecoPrograms.map((prog, i) => (
                  <div key={i} className="flex items-start py-3 border-b border-black/[0.06] last:border-0">
                    <div className="w-1 min-h-[38px] bg-gradient-to-b from-secondary to-secondary/20 rounded-full mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-[#1d1d1f] text-sm">{prog.title}</h4>
                      <p className="text-xs text-[#6e6e73] mt-0.5">{prog.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
