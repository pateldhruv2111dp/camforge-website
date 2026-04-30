import mastercamLogo from "@assets/mastercam-logo-dark.png";
import carvecoLogo from "@assets/carevco-logo-light-hz-large_1750945421410.png";

export default function AuthorizedReseller() {
  const partners = [
    {
      logo: mastercamLogo,
      name: (<>MASTERCAM</>),
      role: "Educational & Industrial Reseller",
      perks: ["Full Software Licensing", "Technical Support", "Updates & Maintenance"],
    },
    {
      logo: carvecoLogo,
      name: <>CARVECO (ArtCAM)</>,
      role: "Industrial Reseller",
      perks: ["Complete Solution Suite", "Installation Support", "Training Integration"],
    },
  ];

  return (
    <section className="py-24 section-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-semibold tracking-widest text-xs uppercase mb-3">
            Official Partnerships
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1d1d1f] mb-4 tracking-tight">
            Authorized Partner
          </h2>
          <div className="divider-red mx-auto mb-6" />
          <p className="text-lg text-[#6e6e73] max-w-2xl mx-auto">
            Official reseller for leading{" "}
            <span className="text-primary font-semibold">CAD/CAM</span> software solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover rounded-2xl p-8 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="flex items-center justify-center mb-6 h-16">
                <img
                  src={partner.logo}
                  alt={`${index === 0 ? "Mastercam" : "Carveco"} Authorized Reseller`}
                  className={`w-auto object-contain ${index === 0 ? "h-16" : "h-12"}`}
                />
              </div>
              <h4 className="text-xl font-bold text-[#1d1d1f] mb-1">{partner.name}</h4>
              <p className="text-[#6e6e73] text-sm mb-5">{partner.role}</p>

              <div className="h-px bg-black/[0.06] mb-5" />

              <ul className="space-y-3">
                {partner.perks.map((perk, i) => (
                  <li key={i} className="flex items-center justify-center gap-2 text-sm text-[#1d1d1f]">
                    <span className="w-5 h-5 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center text-primary text-[10px] font-bold flex-shrink-0">
                      ✓
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
