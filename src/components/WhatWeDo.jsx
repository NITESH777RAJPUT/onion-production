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
      "Story Content (Daily engagement)",
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
      "Landing Pages (High converting)",
      "Business Websites",
      "Portfolio Websites",
      "E-commerce Websites",
      "Booking Websites",
      "Membership Websites",
      "Funnel Pages",
      "One-page Websites",
      "Custom Web Applications",
      "Mobile Applications (Basic / Hybrid)",
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
    <section className="py-20 md:py-28 bg-gradient-to-b from-black via-zinc-950 to-black text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-20 top-40 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 bottom-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-center mb-16 md:mb-20 tracking-tight">
          <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-300 bg-clip-text text-transparent">
            WHAT WE DO
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6">
          {Object.keys(data).map((category) => (
            <div
              key={category}
              onClick={() => setActive(category)}
              className={`
                group relative overflow-hidden
                bg-gradient-to-br from-zinc-900 to-zinc-950
                border border-zinc-800/60 hover:border-yellow-500/40
                rounded-2xl p-6 md:p-8
                cursor-pointer transition-all duration-500
                hover:scale-[1.04] hover:shadow-2xl hover:shadow-yellow-900/20
                backdrop-blur-sm
              `}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

              <h3 className="text-xl md:text-2xl font-bold text-center group-hover:text-yellow-400 transition-colors duration-400">
                {category}
              </h3>

              <div className="mt-4 text-sm text-zinc-400 text-center group-hover:text-zinc-300 transition-colors">
                Tap to explore →
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── MODAL / OVERLAY ──────────────────────────────────────── */}
      {active && (
        <div
          className="fixed inset-0 bg-black/85 backdrop-blur-xl z-50 flex items-center justify-center px-4 animate-fadeIn"
          onClick={() => setActive(null)}
        >
          <div
            className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-2xl md:rounded-3xl max-w-2xl lg:max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl shadow-black/70 relative animate-popIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gradient top bar */}
            <div className="h-1.5 bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-600"></div>

            <div className="p-7 md:p-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-7">
                <h3 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  {active}
                </h3>

                <button
                  onClick={() => setActive(null)}
                  className="text-zinc-400 hover:text-yellow-400 text-3xl transition-colors duration-300"
                  aria-label="Close"
                >
                  ×
                </button>
              </div>

              {/* Scrollable list */}
              <ul className="space-y-4 md:space-y-5 max-h-[60vh] overflow-y-auto pr-3 custom-scrollbar">
                {data[active].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-lg md:text-xl opacity-0 animate-slideUp"
                    style={{
                      animationDelay: `${i * 60}ms`,
                      animationFillMode: "forwards",
                    }}
                  >
                    <span className="text-yellow-500 font-bold mt-1.5 text-xl">›</span>
                    <span className="text-zinc-200 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default WhatWeDo;