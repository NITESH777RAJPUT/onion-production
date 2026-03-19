function Hero() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      const yOffset = -80;
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >

      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://cdn.coverr.co/videos/coverr-filming-a-video-crew-1570/1080p.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">

        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-yellow-400"></span>
          <span className="text-yellow-400 text-xs uppercase tracking-[0.4em] font-bold">
            Pune's Finest Production House
          </span>
          <span className="w-8 h-[1px] bg-yellow-400"></span>
        </div>

        <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.85] uppercase tracking-tight">
          WE PEEL <br />
          <span className="italic text-transparent stroke-text">
            ORDINARY
          </span>
        </h1>

        <div className="mt-12 flex flex-col items-center gap-8">

          <button
            onClick={scrollToContact}
            className="px-12 py-5 bg-yellow-400 text-black font-black uppercase rounded-full hover:scale-105 transition"
          >
            Start a Project →
          </button>

          <div className="flex flex-wrap justify-center gap-6 text-zinc-400 text-xs uppercase tracking-[0.2em]">
            <span>Cinematography</span>
            <span>Branding</span>
            <span>Strategy</span>
          </div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-40">
        <div className="w-[1px] h-12 bg-gradient-to-b from-yellow-400 to-transparent"></div>
      </div>

      {/* ✅ FIXED STYLE */}
      <style>
        {`
          .stroke-text {
            -webkit-text-stroke: 1px rgba(255,255,255,0.4);
          }
        `}
      </style>

    </section>
  );
}

export default Hero;