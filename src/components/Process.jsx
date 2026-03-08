import React from 'react';

function Process() {
  const steps = [
    {
      num: "1",
      title: "The Briefing",
      desc: "We understand your brand DNA and your goals for the project."
    },
    {
      num: "2",
      title: "The Secret Recipe",
      desc: "We cook up a strategy—one part creativity, one part research, and a pinch of 'why didn't I think of that'."
    },
    {
      num: "3",
      title: "The Execution",
      desc: "Cameras roll, edits happen, and content takes shape. The kind people actually want to watch."
    },
    {
      num: "4",
      title: "The 'Oh, This Works' Moment",
      desc: "Content goes live. Your audience engages. The numbers start moving. We fine-tune as needed."
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        
        {/* Timeline Line (Desktop Only) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-zinc-800"></div>

        <div className="space-y-24">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-10 md:gap-20 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Text Side */}
              <div className="flex-1 space-y-4 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-yellow-400 text-black rounded-full font-black text-sm mb-2">
                  {step.num}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{step.title}</h3>
                <p className="text-zinc-500 font-medium leading-relaxed max-w-sm mx-auto md:mx-0">
                  {step.desc}
                </p>
              </div>

              {/* Visual Side (Placeholder for Icons/Images) */}
              <div className="flex-1 flex justify-center">
                <div className="w-48 h-48 bg-zinc-900 rounded-3xl border border-white/5 flex items-center justify-center shadow-2xl overflow-hidden">
                   {/* Aap yahan apni icons ya small animations daal sakte hain */}
                   <div className="text-6xl opacity-50">✨</div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;