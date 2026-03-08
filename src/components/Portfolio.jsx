import React from 'react';

const Portfolio = () => {
  const projects = [
    { title: "Urban Narrative", category: "Ad Film", img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7", tilt: "-rotate-2" },
    { title: "Golden Hour", category: "Music Video", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32", tilt: "rotate-3" },
    { title: "The Brief", category: "Commercial", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", tilt: "-rotate-1" },
    { title: "Street Soul", category: "Documentary", img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2", tilt: "rotate-2" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Artistic Heading */}
        <div className="mb-20">
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8]">
            OUR <span className="text-green-500 italic">WORK.</span>
          </h2>
          <p className="text-zinc-500 font-mono mt-4 uppercase tracking-[0.2em] text-sm">/ Selected Projects 2024-25</p>
        </div>

        {/* Polaroid/Taped Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {projects.map((p, i) => (
            <div key={i} className={`relative group ${p.tilt} hover:rotate-0 transition-all duration-500`}>
              
              {/* Tape Effect */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-8 bg-white/10 backdrop-blur-sm z-20 rotate-12 group-hover:bg-green-500/30 transition-colors"></div>

              {/* Image Card */}
              <div className="bg-zinc-900 p-3 pb-12 shadow-2xl border border-white/5">
                <div className="overflow-hidden aspect-[3/4]">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 px-2">
                  <h3 className="text-lg font-black uppercase tracking-tighter">{p.title}</h3>
                  <span className="text-[10px] font-mono text-green-500 uppercase">{p.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-20 flex justify-end">
          <button className="text-2xl font-black uppercase italic border-b-4 border-green-500 hover:text-green-500 transition-all">
            See All Stories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;