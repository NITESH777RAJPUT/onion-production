import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaYoutube } from "react-icons/fa";

function Footer() {
  const whatsappLink =
    "https://wa.me/917823041751?text=Hi%20I%20want%20to%20work%20with%20you";

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16">
          
          {/* 1. Contact Info */}
          <div className="space-y-4 order-2 md:order-1">
            <h4 className="text-yellow-400 text-[10px] uppercase tracking-[0.3em] font-bold">
              Contact Numbers
            </h4>
            <ul className="space-y-3 text-zinc-300 text-sm md:text-base font-medium">
              <li className="flex items-center gap-3 hover:text-yellow-400 transition cursor-pointer">
                <FaPhoneAlt size={12} className="text-yellow-400/50" /> 78230 41751
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-400 transition cursor-pointer">
                <FaPhoneAlt size={12} className="text-yellow-400/50" /> 85738 62604
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-400 transition cursor-pointer">
                <FaPhoneAlt size={12} className="text-yellow-400/50" /> 86260 44329
              </li>
              <li className="flex items-center gap-3 hover:text-yellow-400 transition cursor-pointer">
                <FaPhoneAlt size={12} className="text-yellow-400/50" /> 74880 39742
              </li>
            </ul>
          </div>

          {/* 2. Center: Email (Outside) + QR Box */}
          <div className="flex flex-col items-center text-center order-1 md:order-2">
            {/* Email - Outside the box */}
            <div className="mb-8">
              <h4 className="text-yellow-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-2">
                Drop an Email
              </h4>
              <a
                href="mailto:onionstudio1999@gmail.com"
                className="text-sm md:text-lg font-bold text-zinc-100 hover:text-yellow-400 transition flex items-center gap-2 justify-center"
              >
                <FaEnvelope size={16} className="text-yellow-400" /> 
                onionstudio1999@gmail.com
              </a>
            </div>

            {/* QR Box - Compact & Clean */}
            <div className="bg-white p-3 rounded-2xl shadow-xl shadow-yellow-400/5 inline-block">
              <img
                src="/qr.png" 
                alt="QR Code"
                className="w-32 h-32 md:w-40 md:h-40 object-contain"
              />
            </div>
            <p className="mt-3 text-zinc-500 text-[10px] uppercase tracking-[0.4em] font-bold">
              Scan Portfolio
            </p>
          </div>

          {/* 3. Social Media */}
          <div className="flex flex-col md:items-end space-y-5 order-3">
            <h4 className="text-yellow-400 text-[10px] uppercase tracking-[0.3em] font-bold">
              Follow Our Work
            </h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/_onionproduction?igsh=YTAyaWcxc2U5dGZt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-xl hover:bg-yellow-400 hover:text-black hover:border-transparent transition-all duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com/@dirtyminds0510"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-xl hover:bg-red-600 hover:border-transparent transition-all duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 border border-white/10 rounded-full flex items-center justify-center text-xl hover:bg-green-600 hover:border-transparent transition-all duration-300"
              >
                <FaWhatsapp />
              </a>
            </div>
            <p className="text-zinc-500 text-[10px] uppercase tracking-widest md:text-right font-medium">
              Pune, Maharashtra
            </p>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-black tracking-tighter text-white">
            ONION<span className="text-yellow-400">.</span>PRODUCTION
          </h2>
          <p className="text-zinc-600 text-[10px] uppercase tracking-[0.3em] font-bold">
            © 2026 All Rights Reserved
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;