import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/contact-form";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      subtitle: "Send us a message",
      content: "support@camforge.in",
      href: "mailto:support@camforge.in",
    },
    {
      icon: Phone,
      title: "Phone",
      subtitle: "Call us directly",
      content: "+91 9825060415",
      href: "tel:+919825060415",
    },
    {
      icon: MapPin,
      title: "Address",
      subtitle: "Visit our office",
      content: (
        <>
          Camforge Technologies India Pvt. Ltd.
          <br />
          <br />
          4th Floor, A-10, Pelican Complex,
          <br />
          Near Barcelona Complex,
          <br />
          S.P. Ring Road, Odhav,
          <br />
          Ahmedabad - 382415, Gujarat, India
        </>
      ),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-12 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to advance your <span className="text-primary">CAD/CAM</span> capabilities? Contact us for
            consultation, training, or software solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-3">{item.subtitle}</p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-primary hover:text-red-300 transition-colors duration-200 text-[20px] font-semibold"
                  >
                    {item.content}
                  </a>
                ) : (
                  <address className="text-primary hover:text-red-300 transition-colors duration-200 not-italic text-[17px] font-semibold">
                    {item.content}
                  </address>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="mb-12 animate-slide-up">
          <ContactForm />
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                Prefer Direct Contact?
              </h3>
              <p className="text-gray-300 mb-4">
                You can also reach us directly through phone or email for
                immediate assistance with your <span className="text-primary">CAD/CAM</span> requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-red-700 transition-colors duration-200 font-semibold"
                >
                  <a href="mailto:support@camforge.in">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white bg-white text-secondary hover:bg-gray-100 hover:text-secondary transition-all duration-200 font-semibold"
                >
                  <a href="tel:+919825060415" className="text-secondary">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
