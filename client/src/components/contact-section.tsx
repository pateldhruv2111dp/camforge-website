import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

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
          <br /><br />
          4th Floor, A-10, Pelican Complex,
          <br />Near Barcelona Complex,
          <br />S.P. Ring Road, Odhav,
          <br />Ahmedabad - 382415, Gujarat, India
        </>
      ),
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 section-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
            Reach Out
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Get in Touch
          </h2>
          <div className="divider-red mx-auto mb-6" />
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
            Ready to advance your <span className="text-primary">CAD/CAM</span> capabilities?
            Contact us for consultation, training, or software solutions.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid lg:grid-cols-3 gap-5 max-w-5xl mx-auto mb-12">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-base font-bold text-[#1d1d1f] mb-1">{item.title}</h3>
              <p className="text-[#6e6e73] text-xs mb-3">{item.subtitle}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-primary hover:text-red-600 transition-colors font-semibold text-sm"
                >
                  {item.content}
                </a>
              ) : (
                <address className="text-[#1d1d1f] not-italic text-xs font-medium leading-relaxed">
                  {item.content}
                </address>
              )}
            </div>
          ))}
        </div>

        {/* Direct CTA */}
        <div className="text-center animate-slide-up">
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1d1d1f] mb-3">Prefer Direct Contact?</h3>
            <p className="text-[#6e6e73] mb-6 text-sm leading-relaxed">
              Reach us directly for immediate assistance with your{" "}
              <span className="text-primary">CAD/CAM</span> requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild className="btn-premium text-white border-0 font-semibold rounded-xl px-6">
                <a href="mailto:support@camforge.in">
                  <Mail className="w-4 h-4 mr-2" />Send Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border border-black/15 bg-white text-[#1d1d1f] hover:bg-black/[0.04] font-semibold rounded-xl px-6 transition-all"
              >
                <a href="tel:+919825060415">
                  <Phone className="w-4 h-4 mr-2" />Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
