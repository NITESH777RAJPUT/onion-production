import { useState } from "react";

function OurServices() {
  const categories = [
    "UGC Video",
    "TVC/DVC",
    "SMM",
    "Video Production",
    "Personal Branding",
    "Influencer Marketing",
  ];

  const [active, setActive] = useState("UGC Video");
  const [sliderIndex, setSliderIndex] = useState(0); // mobile slider ke liye
  const [unmutedVideoId, setUnmutedVideoId] = useState(null); // null = sab muted

  const videos = {
    "UGC Video": ["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v3.mp4", "/videos/v4.mp4"],
    "TVC/DVC": ["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v3.mp4", "/videos/v4.mp4"],
    "SMM": ["/videos/v1.mp4", "/videos/v2.mp4", "/videos/v3.mp4", "/videos/v4.mp4"],
    // baaki categories ke videos daal dena
  };

  const currentVideos = videos[active] || videos["UGC Video"];

  // Unique ID banane ke liye — har video ka alag identity
  const getVideoId = (category, index) => `${category}-${index}`;

  const nextVideo = () => {
    setSliderIndex((prev) => (prev + 1) % currentVideos.length);
  };

  const prevVideo = () => {
    setSliderIndex((prev) =>
      prev === 0 ? currentVideos.length - 1 : prev - 1
    );
  };

  const toggleMute = (category, videoIndex) => {
    const thisVideoId = getVideoId(category, videoIndex);
    // Agar yeh pehle se unmuted hai → mute kar do (sab mute)
    if (unmutedVideoId === thisVideoId) {
      setUnmutedVideoId(null);
    } else {
      // Naya video unmute karo (pehle wala apne aap mute ho jayega)
      setUnmutedVideoId(thisVideoId);
    }
  };

  const isMuted = (category, videoIndex) => {
    const thisVideoId = getVideoId(category, videoIndex);
    return unmutedVideoId !== thisVideoId;
  };

  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black text-yellow-400 text-center mb-12">
          OUR SERVICES
        </h2>

        {/* Tabs */}
        <div className="flex overflow-x-auto md:justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActive(cat);
                setSliderIndex(0);
                setUnmutedVideoId(null); // category change → sab mute
              }}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-semibold ${
                active === cat
                  ? "bg-yellow-400 text-black"
                  : "bg-zinc-200 text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ---------------- MOBILE SLIDER ---------------- */}
        <div className="md:hidden relative flex justify-center">
          <button
            onClick={prevVideo}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full z-10"
          >
            ‹
          </button>

          <div className="relative">
            <video
              key={currentVideos[sliderIndex]} // remount on change
              src={currentVideos[sliderIndex]}
              autoPlay
              muted={isMuted(active, sliderIndex)}
              loop
              playsInline
              className="w-[260px] h-[460px] object-cover rounded-2xl"
            />

            <button
              onClick={() => toggleMute(active, sliderIndex)}
              className="absolute top-3 right-3 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center"
            >
              {isMuted(active, sliderIndex) ? "🔇" : "🔊"}
            </button>
          </div>

          <button
            onClick={nextVideo}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white text-black w-10 h-10 rounded-full z-10"
          >
            ›
          </button>
        </div>

        {/* ---------------- DESKTOP GRID ---------------- */}
        <div className="hidden md:grid md:grid-cols-4 gap-8">
          {currentVideos.map((video, i) => {
            const isThisMuted = isMuted(active, i);

            return (
              <div
                key={i}
                className="relative rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.05] transition"
              >
                <video
                  src={video}
                  autoPlay
                  muted={isThisMuted}
                  loop
                  playsInline
                  className="w-full h-[480px] object-cover"
                />

                <button
                  onClick={() => toggleMute(active, i)}
                  className="absolute top-3 right-3 bg-black/60 text-white w-9 h-9 rounded-full flex items-center justify-center"
                >
                  {isThisMuted ? "🔇" : "🔊"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default OurServices;