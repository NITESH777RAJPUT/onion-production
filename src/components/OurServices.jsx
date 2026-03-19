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

  const videos = {
    UGC: [
      "/videos/ugc/v1.mp4",
      "/videos/ugc/v2.mp4",
      "/videos/ugc/v3.mp4",
      "/videos/ugc/v4.mp4",
    ],

    SMM: [
      "/videos/smm/v1.mp4",
      "/videos/smm/v2.mp4",
      "/videos/smm/v3.mp4",
      "/videos/smm/v4.mp4",
      "/videos/smm/v5.mp4",
      "/videos/smm/v6.mp4",
      "/videos/smm/v7.mp4",
    ],

    "Personal Branding": [
      "/videos/branding/v1.mp4",
      "/videos/branding/v2.mp4",
      "/videos/branding/v3.mp4",
      "/videos/branding/v4.mp4",
    ],

    "Video Production": [
      "/videos/production/v1.mp4",
      "/videos/production/v2.mp4",
      "/videos/production/v3.mp4",
    ],

    "Product Videos": [
      "/videos/product/v1.mp4",
      "/videos/product/v2.mp4",
      "/videos/product/v3.mp4",
      "/videos/product/v4.mp4",
      "/videos/product/v5.mp4",
      "/videos/product/v6.mp4",
      "/videos/product/v7.mp4",
    ],

    BTS: [
      "/videos/bts/v1.mp4",
      "/videos/bts/v2.mp4",
      "/videos/bts/v3.mp4",
      "/videos/bts/v4.mp4",
      "/videos/bts/v5.mp4",
      "/videos/bts/v6.mp4",
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