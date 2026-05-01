import { useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import mastercamLogo from "@assets/mastercam-logo-white.png";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Force-play on mobile where autoplay may be blocked
    video.muted = true;
    video.play().catch(() => {
      // If still blocked (e.g. low-power mode), silently ignore
    });
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
      style={{ zIndex: 1 }}
    >
      {/* ── Background video — fixed so it stays while page scrolls ── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        disableRemotePlayback
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, pointerEvents: "none" }}
      >
        <source src={`${import.meta.env.BASE_URL}hero-video.mp4`} type="video/mp4" />
      </video>

      {/* Light top overlay so video is clear; stronger scrim at the bottom for text legibility */}
      <div className="absolute inset-0 bg-black/30" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80" style={{ zIndex: 1 }} />


      {/* All content pinned to the bottom of the hero */}
      <div
        className="absolute bottom-0 left-0 right-0 flex justify-center"
        style={{ zIndex: 2 }}
      >
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-2 pb-8 md:pb-16">

          {/* Mastercam Channel Partner India logo */}
          <img
            src={mastercamLogo}
            alt="Mastercam Channel Partner India"
            className="h-14 md:h-24 w-auto object-contain"
          />

          {/* Heading */}
          <h1 className="text-xl md:text-4xl font-bold text-white leading-tight tracking-tight">
            Precision <span className="text-gradient-red">CAD/CAM</span> Solutions &amp; Industrial Training
          </h1>

          {/* Subtext */}
          <p className="text-sm md:text-lg text-white/75 leading-relaxed max-w-2xl">
            Empowering industries with cutting-edge{" "}
            <span className="text-primary font-semibold">CAD/CAM</span> programming,
            authorized training &amp; solutions for modern manufacturing.
          </p>

          {/* Scroll chevron */}
          <button
            onClick={() => scrollToSection("about")}
            className="text-white/30 hover:text-white/60 transition-colors animate-bounce mt-1"
          >
            <ChevronDown className="w-5 h-5" />
          </button>

        </div>
      </div>
    </section>
  );
}
