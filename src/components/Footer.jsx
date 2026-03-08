import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Main Heading from Image */}
        <h2 className="text-6xl md:text-8xl font-black mb-20 tracking-tighter opacity-90">
          CONT<span className="text-green-600 italic">ACT US</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          
          {/* Contact Numbers Section */}
          <div className="space-y-6">
            <h4 className="bg-zinc-900 text-white py-2 px-4 inline-block font-bold tracking-widest uppercase text-sm border-l-4 border-green-600">
              Contact No.
            </h4>
            <ul className="space-y-3 text-xl font-medium text-gray-300">
              <li className="flex items-center gap-4 hover:text-green-500 transition">
                <FaPhoneAlt className="text-green-600 text-base" /> 62990 41751
              </li>
              <li className="flex items-center gap-4 hover:text-green-500 transition">
                <FaPhoneAlt className="text-green-600 text-base" /> 85738 62604
              </li>
              <li className="flex items-center gap-4 hover:text-green-500 transition">
                <FaPhoneAlt className="text-green-600 text-base" /> 86260 44329
              </li>
              <li className="flex items-center gap-4 hover:text-green-500 transition">
                <FaPhoneAlt className="text-green-600 text-base" /> 86260 17403
              </li>
            </ul>
          </div>

          {/* Email Section */}
          <div className="space-y-6">
            <h4 className="bg-zinc-900 text-white py-2 px-4 inline-block font-bold tracking-widest uppercase text-sm border-l-4 border-green-600">
              Email ID
            </h4>
            <div className="text-xl font-medium text-gray-300 hover:text-green-500 transition break-all">
              <a href="mailto:hello@onionproduction.in" className="flex items-center gap-4">
                <FaEnvelope className="text-green-600" /> hello@onionproduction.in
              </a>
            </div>
            
            <div className="pt-8">
               <h4 className="bg-zinc-900 text-white py-2 px-4 inline-block font-bold tracking-widest uppercase text-sm border-l-4 border-green-600 mb-6">
                Office Address
              </h4>
              <p className="text-gray-400 leading-relaxed flex gap-4">
                <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
                <span>Flat No 05, Building No 01, Sukhawani Society, <br/> Adinath Nagar, Gavane Wasti, Bhosari - 411039</span>
              </p>
            </div>
          </div>

          {/* Social Media & QRs */}
          <div className="space-y-6">
            <h4 className="bg-zinc-900 text-white py-2 px-4 inline-block font-bold tracking-widest uppercase text-sm border-l-4 border-green-600">
              Social Media Handles
            </h4>
            
            <div className="flex gap-6 items-center">
              {/* QR Placeholder 1 */}
              <div className="group flex flex-col items-center gap-2">
                <div className="w-24 h-24 bg-white p-1 rounded-lg overflow-hidden transition-transform group-hover:scale-110">
                   <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/onion__production" 
                    alt="Instagram QR" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <span className="text-[10px] font-mono text-cyan-400">@ONION__PRODUCTION</span>
              </div>

              {/* QR Placeholder 2 */}
              <div className="group flex flex-col items-center gap-2">
                <div className="w-24 h-24 bg-white p-1 rounded-lg overflow-hidden transition-transform group-hover:scale-110">
                   <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.instagram.com/advertising_studio20" 
                    alt="Studio QR" 
                    className="w-full h-full object-cover"
                   />
                </div>
                <span className="text-[10px] font-mono text-orange-400">@ADVERTISING_STUDIO20</span>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
               <a href="https://youtube.com/@dirtyminds0510" target="_blank" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-all text-xl">
                <FaYoutube />
               </a>
               <a href="#" className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition-all text-xl">
                <FaWhatsapp />
               </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <h2 className="text-2xl font-black tracking-tighter">
            ONION<span className="text-green-600">.</span>PRODUCTION
          </h2>
          <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase">
            © 2026 ONION PRODUCTION | ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <span className="hover:text-white cursor-pointer transition">Privacy</span>
            <span className="hover:text-white cursor-pointer transition">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;