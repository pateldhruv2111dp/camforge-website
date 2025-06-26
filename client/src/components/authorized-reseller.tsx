import { Card, CardContent } from "@/components/ui/card";
import { IdCard, Award } from "lucide-react";

export default function AuthorizedReseller() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold text-secondary mb-6">
            Authorized Reseller
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Official distributor for leading CAD/<span className="text-primary">CAM</span> software solutions
          </p>
        </div>

        <Card className="animate-slide-up">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IdCard className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2">
                  <strong>MASTER<span className="text-primary">CAM</span></strong>
                </h4>
                <p className="text-gray-600 mb-4">
                  Educational and Industrial Reseller
                </p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>✓ Full Software Licensing</p>
                  <p>✓ Technical Support</p>
                  <p>✓ Updates & Maintenance</p>
                </div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-xl">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-bold text-secondary mb-2">
                  <strong>CARVECO (ART<span className="text-primary">CAM</span>)</strong>
                </h4>
                <p className="text-gray-600 mb-4">
                  Educational and Industrial Reseller
                </p>
                <div className="text-sm text-gray-500 space-y-1">
                  <p>✓ Complete Solution Suite</p>
                  <p>✓ Installation Support</p>
                  <p>✓ Training Integration</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}