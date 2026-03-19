import { useState, useRef } from "react";

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
    const scrollAmount = 320;

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // 🔥 SAME COUNT + CLOUDINARY PLACEHOLDER
  const videos = {
    UGC: [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773928725/v1_eqilzs.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773927220/v2_b70g19.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773927220/v3_uezcdu.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773927219/v4_ati5op.mp4",
    ],

    SMM: [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929216/v1_ywbnpe.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929333/v2_wxvn9h.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929252/v3_npr5ac.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929175/v4_aylzue.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929476/v5_ngum2t.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929305/v6_mcg92u.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773929473/v7_cxycma.mp4",
    ],

    "Personal Branding": [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930069/v1_z8nd43.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930029/v2_c6k3zy.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930680/v3_tdc04g.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773930056/v4_epiubk.mp4",
    ],

    "Video Production": [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931298/v1_pueere.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931302/v2_qyvhmx.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931327/v4_llhr20.mp4",
    ],

    "Product Videos": [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931513/v1_uy6mir.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931513/v2_gbo9tz.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931513/v3_lh2pgf.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931517/v4_rquttd.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931517/v5_kyqbkf.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931517/v6_x5jomu.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931514/v7_gobo3b.mp4",
    ],

    BTS: [
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931965/v1_c6wul0.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931884/v2_lsjxkr.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931934/v3_d2hx4k.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931921/v4_bjkpfs.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773932429/v5_p4lpkq.mp4",
      "https://res.cloudinary.com/dem2kbbpm/video/upload/v1773931883/v6_ajlrfn.mp4",
    ],
  };

  const currentVideos = videos[active] || [];

  const getVideoId = (category, index) => `${category}-${index}`;

  const toggleMute = (category, index) => {
    const id = getVideoId(category, index);
    setUnmutedVideoId(unmutedVideoId === id ? null : id);
  };

  const isMuted = (category, index) => {
    return unmutedVideoId !== getVideoId(category, index);
  };

  const showArrows = currentVideos.length > 4;

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-6xl font-black text-yellow-400 text-center mb-12">
          OUR WORK
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto md:justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setUnmutedVideoId(null);
              }}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition ${
                active === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-200 text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SLIDER */}
        <div className="relative">

          {/* LEFT ARROW */}
          {showArrows && (
            <button
              onClick={() => scroll("left")}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white text-black w-9 h-9 rounded-full shadow"
            >
              ‹
            </button>
          )}

          {/* RIGHT ARROW */}
          {showArrows && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white text-black w-9 h-9 rounded-full shadow"
            >
              ›
            </button>
          )}

          {/* VIDEOS */}
          <div
            ref={scrollRef}
            className={`flex gap-4 md:gap-6 overflow-x-auto px-4 md:px-10 scrollbar-hide snap-x ${
              currentVideos.length <= 4 ? "justify-center" : ""
            }`}
          >
            {currentVideos.map((video, i) => {
              const muted = isMuted(active, i);

              return (
                <div
                  key={i}
                  className="min-w-[48%] md:min-w-[280px] snap-start relative rounded-2xl overflow-hidden border border-white/10"
                >
                  <video
                    src={video}
                    autoPlay
                    muted={muted}
                    loop
                    playsInline
                    className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105 transition duration-300"
                  />

                  {/* Mute Button */}
                  <button
                    onClick={() => toggleMute(active, i)}
                    className="absolute top-3 right-3 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center"
                  >
                    {muted ? "🔇" : "🔊"}
                  </button>
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