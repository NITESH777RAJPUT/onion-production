// Process.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Process() {
  const steps = [
    {
      num: "1",
      title: "The Brand Therapy Session",
      desc: "You talk, we listen. We ask a few smart questions (and maybe one weird one) to understand your brand's vibe, goals, and what's been holding you back.",
      illustration: "/illustrations/therapy.png", // replace with your actual image path
      icon: "📱",
    },
    {
      num: "2",
      title: "The Secret Recipe",
      desc: "We cook up a strategy—one part creativity, one part research, and a pinch of 'why didn't I think of that'.",
      illustration: "/illustrations/recipe-magnifier.png",
      icon: "🔍",
    },
    {
      num: "3",
      title: "The Execution",
      desc: "Cameras roll, edits happen, and content takes shape. The kind of content people actually want to watch (not just scroll past).",
      illustration: "/illustrations/execution-megaphone.png",
      icon: "🎥",
    },
    {
      num: "4",
      title: "The 'Oh, This Works' Moment",
      desc: "The content goes live. Your audience engages. The numbers start moving. We track what's working and fine-tune as needed.",
      illustration: "/illustrations/results-checklist.png",
      icon: "✅",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section className="relative py-16 md:py-32 bg-black text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-10 relative">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-20" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight">
            Our <span className="text-yellow-400">Process</span>
          </h2>
        </div>

        {/* Timeline Line - centered on desktop, left on mobile */}
        <div className="absolute left-8 md:left-1/2 top-28 md:top-44 bottom-0 w-1 bg-yellow-400/30 md:-translate-x-1/2 z-0 hidden md:block" />

        <div className="space-y-20 md:space-y-32 relative z-10">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative
                ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              {/* Illustration - on desktop alternates side, on mobile always top */}
              <div
                className={`w-24 h-24 md:w-32 md:h-32 flex-shrink-0 order-1 md:order-${
                  i % 2 === 0 ? "1" : "2"
                }`}
              >
                <div className="relative w-full h-full bg-zinc-900/50 rounded-2xl border border-yellow-400/30 flex items-center justify-center overflow-hidden">
                  {/* Use real image here */}
                  {/* <img
                    src={step.illustration}
                    alt={step.title}
                    className="w-4/5 h-4/5 object-contain"
                  /> */}
                  <span className="text-5xl md:text-6xl">{step.icon}</span>
                </div>
              </div>

              {/* Number Circle - centered on line for desktop, left for mobile */}
              <div
                className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full bg-zinc-900 border-4 border-yellow-400 flex items-center justify-center text-2xl md:text-3xl font-black shadow-xl z-10 order-2 md:order-${
                  i % 2 === 0 ? "2" : "1"
                } md:absolute md:left-1/2 md:-translate-x-1/2`}
              >
                {step.num}
              </div>

              {/* Content Block */}
              <div
                className={`flex-1 bg-zinc-900/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl order-3
                  md:max-w-lg ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"}`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-400">
                  {step.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;