import { useState } from "react";

function WhatWeDo() {
  const [active, setActive] = useState(null);

  const data = {
    "Video Production": [
      "UGC (User Generated Content)",
      "TVC (Television Commercial)",
      "DVC (Digital Video Commercial)",
      "Testimonial Videos",
      "Corporate Videos",
      "Brand Story Videos",
      "Instagram Reels / Short-form content",
      "YouTube Long-form Videos",
      "Podcast Videos",
      "Real Estate Walkthrough Videos",
      "Cinematic Shoot Videos",
      "Documentary Style Videos",
      "Explainer Videos",
      "Interview Videos",
      "Behind the Scenes (BTS)",
    ],
    "Social Media Management": [
      "Reels Content Strategy",
      "Carousel Posts",
      "Static Creative Posts",
      "Meme Marketing",
      "Trend-based Content",
      "Educational Content",
      "Story Content",
      "Personal Branding Content",
      "Influencer-based Content",
      "Community Management",
      "Viral Hook Content",
    ],
    "Digital Marketing": [
      "Lead Generation Ads",
      "Conversion Ads",
      "Awareness Campaigns",
      "Retargeting Ads",
      "WhatsApp Marketing",
      "Email Marketing",
      "Funnel Marketing",
      "Performance Marketing",
      "Influencer Marketing",
      "Affiliate Marketing",
      "Local Marketing (GMB Ads)",
    ],
    "Website / Application": [
      "Landing Pages",
      "Business Websites",
      "Portfolio Websites",
      "E-commerce Websites",
      "Booking Websites",
      "Membership Websites",
      "Funnel Pages",
      "One-page Websites",
      "Custom Web Applications",
      "Mobile Applications",
    ],
    "Product Shoot / Videography": [
      "E-commerce Product Photos",
      "Amazon / Flipkart Listing Shoot",
      "Lifestyle Product Shoot",
      "Studio Shoot",
      "Outdoor Product Shoot",
      "Product Demo Videos",
      "Unboxing Videos",
      "Product Ad Videos",
      "Stop Motion Videos",
      "Macro Product Shots",
      "360° Product Videos",
    ],
  };

  return (
    <section className="py-16 md:py-24 lg:py-28 bg-black text-white relative overflow-hidden">
      {/* Optional subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-20 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-center mb-12 md:mb-16 lg:mb-20 tracking-tight">
          <span className="text-yellow-400">WHAT WE DO</span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {Object.keys(data).map((category) => (
            <div
              key={category}
              onClick={() => setActive(category)}
              className={`
                group relative overflow-hidden
                bg-zinc-900 border border-zinc-800 rounded-2xl p-5 sm:p-6 md:p-7
                cursor-pointer transition-all duration-400
                hover:scale-[1.03] sm:hover:scale-105 hover:shadow-lg hover:shadow-yellow-900/20
                hover:border-yellow-500/40
              `}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center group-hover:text-yellow-400 transition-colors">
                {category}
              </h3>

              <p className="text-center text-zinc-400 mt-2 text-sm sm:text-base group-hover:text-zinc-300 transition-colors">
                Tap to explore →
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MODAL ──────────────────────────────────────── */}
      {active && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center px-4 animate-fadeIn"
          onClick={() => setActive(null)}
        >
          <div
            className={`
              bg-zinc-900 rounded-2xl sm:rounded-3xl 
              max-w-4xl w-full max-h-[90vh] overflow-hidden
              shadow-2xl shadow-black/70 relative
              animate-popIn
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-5 sm:p-6 md:p-7 border-b border-zinc-800">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400">
                {active}
              </h3>
              <button
                onClick={() => setActive(null)}
                className="text-3xl text-zinc-400 hover:text-yellow-400 transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {/* Grid of box items */}
            <div className="p-5 sm:p-6 md:p-8 max-h-[calc(90vh-80px)] overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                {data[active].map((item, i) => (
                  <div
                    key={i}
                    className={`
                      bg-black border border-zinc-800 rounded-xl p-4 text-center
                      hover:border-yellow-500/60 hover:scale-[1.03] hover:shadow-md
                      transition-all duration-300 opacity-0 animate-slideUp
                    `}
                    style={{
                      animationDelay: `${i * 60}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add these animations to your global CSS or tailwind config */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popIn {
          0%   { opacity: 0; transform: scale(0.92); }
          60%  { opacity: 1; transform: scale(1.02); }
          100% { transform: scale(1); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
        .animate-popIn {
          animation: popIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.6s ease-out forwards;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </section>
  );
}

export default WhatWeDo;