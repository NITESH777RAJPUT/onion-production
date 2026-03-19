import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text */}
          <div className="space-y-8">
            <h2 className="text-7xl md:text-9xl font-black tracking-tighter leading-none uppercase">
              LET'S <br /> <span className="text-green-500 italic">TALK.</span>
            </h2>
            <p className="text-xl text-zinc-400 font-medium max-w-sm leading-relaxed">
              Have a vision? We have the lens. <br/>Let’s create something legendary together.
            </p>
            
            <div className="pt-4">
              <span className="text-xs font-black tracking-[0.3em] text-green-500 uppercase block mb-2">Based in</span>
              <p className="text-lg font-bold text-white">Pune, Maharashtra</p>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-zinc-950 p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl">
            <form className="grid gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="bg-transparent border-b border-zinc-800 py-3 focus:border-green-500 outline-none transition-all font-bold text-white placeholder:text-zinc-700"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Email</label>
                  <input
                    type="email"
                    placeholder="hello@work.com"
                    className="bg-transparent border-b border-zinc-800 py-3 focus:border-green-500 outline-none transition-all font-bold text-white placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Project Type</label>
                <select className="bg-transparent border-b border-zinc-800 py-3 focus:border-green-500 outline-none transition-all font-bold text-white appearance-none cursor-pointer">
                  <option className="bg-black">Video Production</option>
                  <option className="bg-black">Photography</option>
                  <option className="bg-black">Digital Marketing</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase font-black tracking-widest text-zinc-500">Message</label>
                <textarea
                  placeholder="Tell us about your vision..."
                  rows="3"
                  className="bg-transparent border-b border-zinc-800 py-3 focus:border-green-500 outline-none transition-all font-bold text-white placeholder:text-zinc-700 resize-none"
                ></textarea>
              </div>

              <button className="mt-6 bg-green-600 text-black hover:bg-white py-5 rounded-full font-black uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-95 shadow-xl shadow-green-900/20">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;