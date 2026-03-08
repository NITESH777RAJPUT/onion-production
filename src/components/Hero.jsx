import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-scroll";

function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effect: Scroll karne par text thoda upar move karega
  const y1 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black"
    >
      {/* 1. Cinematic Video Background with Zoom Effect */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-50 scale-105"
        >
          <source src="https://cdn.coverr.co/videos/coverr-filming-a-video-crew-1570/1080p.mp4" type="video/mp4" />
        </video>
        {/* Gradient Overlays: Top and Bottom gradients for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-40"></div>
      </div>

      {/* 2. Grainy Film Texture (Premium Touch) */}
      <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none"></div>

      {/* 3. Main Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-20 text-center px-6 mt-20"
      >
        {/* Small Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-[1px] bg-green-500"></span>
          <span className="text-green-500 font-mono tracking-[0.4em] uppercase text-[10px] md:text-xs font-bold">
            Mumbai's Finest Production House
          </span>
          <span className="w-8 h-[1px] bg-green-500"></span>
        </motion.div>
        
        {/* Giant Bold Heading */}
        <motion.h1 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[14vw] md:text-[10vw] font-black leading-[0.8] uppercase tracking-tighter text-white"
        >
          WE PEEL <br/> 
          <span className="text-transparent stroke-text italic">ORDINARY</span>
        </motion.h1>

        {/* Action Area */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 md:mt-16 flex flex-col items-center gap-8"
        >
          <Link to="contact" smooth={true} duration={800}>
            <button className="group relative px-12 py-5 bg-green-600 text-black font-black uppercase italic tracking-tighter overflow-hidden rounded-full hover:scale-110 transition-transform duration-500">
              <span className="relative z-10">Start a Project —</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
          </Link>

          <div className="flex flex-col md:flex-row items-center gap-4 text-zinc-400">
             <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Cinematography</p>
             <span className="hidden md:block w-1 h-1 bg-zinc-700 rounded-full"></span>
             <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Branding</p>
             <span className="hidden md:block w-1 h-1 bg-zinc-700 rounded-full"></span>
             <p className="text-[10px] uppercase tracking-[0.2em] font-bold">Strategy</p>
          </div>
        </motion.div>
      </motion.div>

      {/* 4. Scroll Indicator (Floating) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-green-500 to-transparent"></div>
      </motion.div>

      {/* CSS for Outlined Text - Add this to your index.css or a style tag */}
      <style jsx>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.5);
          transition: -webkit-text-stroke 0.5s ease;
        }
        .stroke-text:hover {
          -webkit-text-stroke: 1px #22c55e;
        }
      `}</style>
    </section>
  );
}

export default Hero;