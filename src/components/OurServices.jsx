import { useState, useRef, useEffect } from "react";

function OurServices() {
  const categories = [
    "UGC",
    "SMM",
    "Personal Branding",
    "Video Production",
    "Product Videos",
    "BTS",
  ];

  const [active, setActive] = useState("UGC");
  const [unmutedVideoId, setUnmutedVideoId] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 320;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // 🔥 Cloudinary optimized URLs (q_auto + f_auto = huge improvement)
  const optimizeUrl = (url) => {
    if (!url) return url;
    // Insert before the version/upload part
    return url.replace(
      "/upload/",
      "/upload/q_auto,f_auto/"
    );
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
    ].map(optimizeUrl),
  };

  const currentVideos = videos[active] || [];

  const getVideoId = (category, index) => `${category}-${index}`;

  const toggleMute = (category, index) => {
    const id = getVideoId(category, index);
    setUnmutedVideoId(unmutedVideoId === id ? null : id);
  };

  const isMuted = (category, index) =>
    unmutedVideoId !== getVideoId(category, index);

  const showArrows = currentVideos.length > 4;

  // ─── Lazy play when in view ────────────────────────────────
  const videoRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // silent fail if already playing
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px 100px 0px" } // start early
    );

    Object.values(videoRefs.current).forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, [active]); // re-observe when category changes

  return (
    <section className="py-20 md:py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-yellow-400 text-center mb-10 md:mb-12">
          OUR WORK
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto justify-center gap-3 mb-10 md:mb-12 pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setUnmutedVideoId(null);
              }}
              className={`px-5 py-2.5 rounded-full whitespace-nowrap text-sm md:text-base font-semibold transition flex-shrink-0 ${
                active === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-700 text-white hover:bg-zinc-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="relative">
          {showArrows && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-lg transition"
            >
              ‹
            </button>
          )}

          {showArrows && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-lg transition"
            >
              ›
            </button>
          )}

          <div
            ref={scrollRef}
            className={`flex gap-4 md:gap-6 overflow-x-auto pb-4 px-2 md:px-12 scrollbar-hide snap-x snap-mandatory ${
              currentVideos.length <= 4 ? "justify-center" : ""
            }`}
          >
            {currentVideos.map((videoSrc, i) => {
              const id = getVideoId(active, i);
              const muted = isMuted(active, i);

              return (
                <div
                  key={id}
                  className="min-w-[85%] sm:min-w-[48%] md:min-w-[280px] lg:min-w-[320px] snap-start relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900"
                >
                  <video
                    ref={(el) => (videoRefs.current[id] = el)}
                    src={videoSrc}
                    autoPlay
                    muted={muted}
                    loop
                    playsInline
                    loading="lazy"
                    className="w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover transition duration-300 hover:scale-105"
                  />

                  {/* Mute toggle */}
                  <button
                    onClick={() => toggleMute(active, i)}
                    className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white w-9 h-9 rounded-full flex items-center justify-center text-lg shadow transition z-10"
                    title={muted ? "Unmute" : "Mute"}
                  >
                    {muted ? "🔇" : "🔊"}
                  </button>

                  {/* Optional loading indicator / poster can be added later */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;