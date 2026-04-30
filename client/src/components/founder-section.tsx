import { GraduationCap, Award, Handshake, Clock } from "lucide-react";
import founderImage from "@assets/founder-dhruv-patel.png";

export default function FounderSection() {
  const credentials = [
    { icon: GraduationCap, label: "Manufacturing Technology Expert"      },
    { icon: Award,         label: "Authorized Training Provider"         },
    { icon: Handshake,     label: "Industry Leader"                      },
    { icon: Clock,         label: "9 Years of Mastercam India Experience" },
  ];

  return (
    <section id="founder" className="py-24 section-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Meet Our Founder
          </h2>
          <div className="divider-red mx-auto" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl overflow-hidden animate-slide-up">
            <div className="grid lg:grid-cols-2 gap-0">

              {/* Photo */}
              <div className="relative overflow-hidden min-h-[400px]">
                <img
                  src={founderImage}
                  alt="Mr. Dhruv Patel - Founder"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-[#1d1d1f] mb-1">Mr. Dhruv Patel</h3>
                <p className="text-primary font-semibold text-lg mb-5">Founder &amp; CEO</p>

                <div className="h-px bg-gradient-to-r from-primary/30 to-transparent mb-6" />

                <div className="space-y-4 text-[#6e6e73] leading-relaxed text-sm mb-8">
                  <p>
                    Founded by{" "}
                    <strong className="text-[#1d1d1f]">Mr. Dhruv Patel</strong>, Camforge
                    Technologies is a leader in precision{" "}
                    <span className="text-primary">CAD/CAM</span> solutions and training.
                    With extensive experience in manufacturing technology and a passion for
                    innovation, Mr. Patel has established the company as a trusted partner
                    for industries seeking advanced solutions.
                  </p>
                  <p>
                    Under his leadership, Camforge Technologies has become an authorized
                    reseller and training institute for industry-leading software platforms,
                    helping professionals and organizations unlock the full potential of
                    modern manufacturing technology.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {credentials.map((cred, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-black/[0.08] shadow-sm text-xs font-medium text-[#1d1d1f]"
                    >
                      <cred.icon className="w-4 h-4 text-primary flex-shrink-0" />
                      {cred.label}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
