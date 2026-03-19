import { useState, useRef, useEffect } from "react";

const MuteIcon = () => <span>🔇</span>;
const UnmuteIcon = () => <span>🔊</span>;

function OurServices() {
  const categories = ["UGC", "SMM", "Personal Branding", "Video Production", "Product Videos", "BTS"];
  const [active, setActive] = useState("UGC");
  const [unmutedVideoId, setUnmutedVideoId] = useState(null);
  const scrollRef = useRef(null);
  const videoRefs = useRef({});

  // 🔥 Fix: Improved Cloudinary Optimization URL
  const optimizeUrl = (url) => {
    if (!url) return url;
    // Cloudinary video ke liye q_auto aur f_auto best hai
    return url.replace("/video/upload/", "/video/upload/q_auto,f_auto/");
  };

  const videos = {
    UGC: [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773928725/v1_eqilzs.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773927220/v2_b70g19.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773927220/v3_uezcdu.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773927219/v4_ati5op.mp4",
    ].map(optimizeUrl),
    SMM: [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929216/v1_ywbnpe.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929333/v2_wxvn9h.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929252/v3_npr5ac.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929175/v4_aylzue.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929476/v5_ngum2t.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929305/v6_mcg92u.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929473/v7_cxycma.mp4",
    ].map(optimizeUrl),
    "Personal Branding": [
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930069/v1_z8nd43.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930029/v2_c6k3zy.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930680/v3_tdc04g.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930056/v4_epiubk.mp4",
    ].map(optimizeUrl),
    "Video Production": [
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931298/v1_pueere.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931302/v2_qyvhmx.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931327/v4_llhr20.mp4",
    ].map(optimizeUrl),
    "Product Videos": [
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931513/v1_uy6mir.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931513/v2_gbo9tz.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931513/v3_lh2pgf.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931517/v4_rquttd.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931517/v5_kyqbkf.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931517/v6_x5jomu.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931514/v7_gobo3b.mp4",
    ].map(optimizeUrl),
    BTS: [
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931965/v1_c6wul0.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931884/v2_lsjxkr.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931934/v3_d2hx4k.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931921/v4_bjkpfs.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773932429/v5_p4lpkq.mp4",
        "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931883/v6_ajlrfn.mp4",
    ].map(optimizeUrl)
  };

  const currentVideos = videos[active] || [];
  const getVideoId = (category, index) => `${category}-${index}`;

  const toggleMute = (id) => {
    setUnmutedVideoId(unmutedVideoId === id ? null : id);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const move = direction === "left" ? -350 : 350;
      scrollRef.current.scrollBy({ left: move, behavior: "smooth" });
    }
  };

  // intersection observer to handle playback
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Auto-play only when in view
            entry.target.play().catch((err) => console.log("Autoplay blocked or loading", err));
          } else {
            entry.target.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    const currentRefs = videoRefs.current;
    Object.values(currentRefs).forEach((v) => v && observer.observe(v));
    return () => Object.values(currentRefs).forEach((v) => v && observer.unobserve(v));
  }, [active]);

  return (
    <section
  id="work"
  className="py-12 md:py-24 bg-black text-white overflow-hidden font-sans"
>
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-black italic tracking-tighter text-yellow-400 text-center mb-8">
          OUR WORK
        </h2>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-2 mb-10 no-scrollbar justify-start md:justify-center pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setUnmutedVideoId(null);
              }}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                active === cat ? "bg-yellow-400 text-black shadow-lg" : "bg-zinc-900 text-zinc-400 border border-zinc-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider Container */}
        <div className="relative group">
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-8 no-scrollbar snap-x snap-mandatory px-2 md:px-10"
          >
            {currentVideos.map((videoSrc, i) => {
              const id = getVideoId(active, i);
              const isMuted = unmutedVideoId !== id;

              return (
                <div
                  key={id}
                  className="relative min-w-[85vw] sm:min-w-[45vw] md:min-w-[320px] aspect-[9/16] rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 snap-center shadow-2xl"
                >
                  {/* Important: Key change to force video reload on source change */}
                  <video
                    key={videoSrc} 
                    ref={(el) => (videoRefs.current[id] = el)}
                    loop
                    muted={isMuted}
                    playsInline
                    autoPlay
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Mute toggle button */}
                  <button
                    onClick={() => toggleMute(id)}
                    className="absolute bottom-6 right-6 bg-black/40 backdrop-blur-md border border-white/20 text-white w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-90 z-20 shadow-xl"
                  >
                    {isMuted ? <MuteIcon /> : <UnmuteIcon />}
                  </button>
                  
                  <div className="absolute bottom-6 left-6 pointer-events-none z-10">
                     <p className="text-[10px] uppercase tracking-[0.2em] text-yellow-400 font-black drop-shadow-md">
                        {active}
                     </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Desktop Navigation */}
          <button onClick={() => scroll("left")} className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-30 bg-yellow-400 text-black w-12 h-12 rounded-full items-center justify-center font-bold shadow-xl">←</button>
          <button onClick={() => scroll("right")} className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-30 bg-yellow-400 text-black w-12 h-12 rounded-full items-center justify-center font-bold shadow-xl">→</button>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}

export default OurServices;