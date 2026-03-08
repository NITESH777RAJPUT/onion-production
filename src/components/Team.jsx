import React from 'react';

const Team = () => {
  const teamStats = [
    { role: "Cinematographer", count: "02 Members" },
    { role: "Video Editors", count: "02 Members" },
    { role: "Graphic Designer", count: "02 Members" },
    { role: "Web Development Team", count: "04 Members" },
    { role: "Content Writer", count: "02 Members" },
    { role: "Director", count: "02 Members" },
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Text Content */}
          <div className="space-y-10">
            <h2 className="text-7xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase">
              MEET <span className="block text-green-500">OUR</span> TEAM
            </h2>

            <ul className="space-y-4">
              {teamStats.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-xl md:text-2xl font-medium text-zinc-300">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="font-bold text-white">{item.role}</span>
                  <span className="text-zinc-500 font-mono">:- {item.count}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="relative pt-10 md:pt-0">
            <div className="w-full aspect-[4/3] bg-zinc-900 overflow-hidden shadow-2xl rounded-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
                alt="Team working" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <p className="mt-8 text-sm text-zinc-500 leading-relaxed font-medium uppercase tracking-tight max-w-md">
              Our team consists of industry veterans and creative rebels who push the boundaries of visual excellence every single day.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;