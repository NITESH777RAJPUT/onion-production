import React from 'react';

const Team = () => {
  const teamStats = [
    { role: "Cinematographers", count: "02 Members" },
    { role: "Video Editors", count: "02 Members" },
    { role: "Graphic Designers", count: "02 Members" },
    { role: "Web Developers", count: "04 Members" },
    { role: "Content Writers", count: "02 Members" },
    { role: "Directors", count: "02 Members" },
  ];

  return (
    <section className="py-20 md:py-32 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-5 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Text + Stats */}
          <div className="space-y-10 md:space-y-12">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter uppercase">
              MEET <span className="text-green-500 block">OUR</span> TEAM
            </h2>

            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
              A tight-knit squad of creators, tech ninjas, and visual storytellers.  
              We may be small, but we deliver massive impact — every frame counts.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {teamStats.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-5 rounded-xl bg-zinc-900/50 border border-white/10 hover:border-green-500/40 transition-all duration-300 hover:bg-zinc-900/70"
                >
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0" />
                  <div>
                    <div className="text-xl font-bold text-white">{item.role}</div>
                    <div className="text-sm text-zinc-400 font-mono">{item.count}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image Section (full color, no grayscale) */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <img
                // Yahan apna actual team photo daal do (public folder ya assets se)
                // Example: src="/images/our-team-group.jpg"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80" // placeholder — change this
                alt="Our Onion Media Team"
                className="w-full h-auto aspect-[4/3] md:aspect-[5/4] object-cover transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl"
              />
              {/* Optional subtle overlay for depth (remove if not needed) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating tagline / caption */}
            <div className="absolute -bottom-10 md:-bottom-12 left-6 md:left-10 right-6 md:right-10 bg-zinc-900/95 backdrop-blur-lg border border-white/10 rounded-2xl p-6 md:p-8 shadow-2xl">
              <p className="text-base md:text-lg text-zinc-200 font-medium leading-relaxed">
                "Passionate about every shot, obsessed with every edit.  
                This is the team that brings your vision to life."
              </p>
              <p className="mt-3 text-sm text-green-500 font-semibold uppercase tracking-wider">
                — The Onion Crew
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;