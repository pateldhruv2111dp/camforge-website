import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Handshake } from "lucide-react";

import _4ed1eda4_b81a_4a7a_867e_dfaff7c321d4 from "@assets/4ed1eda4-b81a-4a7a-867e-dfaff7c321d4.jpg";

export default function FounderSection() {
  return (
    <section id="founder" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-600">
              Leadership driving innovation in <span className="text-primary">CAD/CAM</span> technology
            </p>
          </div>

          <Card className="animate-slide-up">
            <CardContent className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <img
                    src={_4ed1eda4_b81a_4a7a_867e_dfaff7c321d4}
                    alt="Mr. Dhruv Patel - Founder"
                    className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-6 object-cover shadow-lg"
                  />

                  <div className="lg:hidden">
                    <h3 className="text-3xl font-bold text-secondary mb-2">
                      Mr. Dhruv Patel
                    </h3>
                    <p className="text-primary font-semibold text-lg mb-6">
                      Founder & CEO
                    </p>
                  </div>
                </div>

                <div>
                  <div className="hidden lg:block mb-6">
                    <h3 className="text-3xl font-bold text-secondary mb-2">
                      Mr. Dhruv Patel
                    </h3>
                    <p className="text-primary font-semibold text-lg">
                      Founder & CEO
                    </p>
                  </div>

                  <div className="prose prose-lg text-gray-600">
                    <p className="mb-6 leading-relaxed">
                      Founded by <strong>Mr. Dhruv Patel</strong>, Camforge
                      Technologies is a leader in precision <span className="text-primary">CAD/CAM</span> solutions
                      and training. With extensive experience in manufacturing
                      technology and a passion for innovation, Mr. Patel has
                      established the company as a trusted partner for
                      industries seeking advanced <span className="text-primary">CAD/CAM</span> solutions.
                    </p>

                    <p className="mb-6 leading-relaxed">
                      Under his leadership, Camforge Technologies has become an
                      authorized reseller and training institute for
                      industry-leading software platforms, helping professionals
                      and organizations unlock the full potential of modern
                      manufacturing technology.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                      <div className="flex items-center text-sm font-medium text-gray-600">
                        <GraduationCap className="w-5 h-5 text-primary mr-2" />
                        Manufacturing Technology Expert
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-600">
                        <Award className="w-5 h-5 text-primary mr-2" />
                        Authorized Training Provider
                      </div>
                      <div className="flex items-center text-sm font-medium text-gray-600">
                        <Handshake className="w-5 h-5 text-primary mr-2" />
                        Industry Leader
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
