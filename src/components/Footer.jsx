import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-10 border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black mb-20 tracking-tight">
          CONT<span className="text-yellow-400 italic">ACT US</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-14 mb-20">

          {/* Contact Numbers */}
          <div className="space-y-6">
            <h4 className="text-sm uppercase tracking-widest font-bold text-yellow-400">
              Contact Numbers
            </h4>

            <ul className="space-y-3 text-zinc-300">

              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaPhoneAlt /> 7823041751
              </li>

              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaPhoneAlt /> 85738 62604
              </li>

              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaPhoneAlt /> 86260 44329
              </li>

              <li className="flex items-center gap-3 hover:text-yellow-400 transition">
                <FaPhoneAlt /> 74880 39742
              </li>

            </ul>
          </div>


          {/* Email + Address */}
          <div className="space-y-8">

            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold text-yellow-400 mb-3">
                Email
              </h4>

              <a
                href="mailto:hello@onionproduction.in"
                className="flex items-center gap-3 text-zinc-300 hover:text-yellow-400 transition"
              >
                <FaEnvelope />
                Onionstudio1999@gmail.com
              </a>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-widest font-bold text-yellow-400 mb-3">
                Office Address
              </h4>

             
            </div>

          </div>


          {/* Social */}
          <div className="space-y-6">

            <h4 className="text-sm uppercase tracking-widest font-bold text-yellow-400">
              Follow Us
            </h4>

            <div className="flex gap-5 text-xl">

              <a
                href="https://instagram.com/onion__production"
                target="_blank"
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://youtube.com/@dirtyminds0510"
                target="_blank"
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition"
              >
                <FaYoutube />
              </a>

              <a
                href="#"
                className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-green-600 transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>


        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

          <h2 className="text-xl font-black tracking-tight">
            ONION<span className="text-yellow-400">.</span>PRODUCTION
          </h2>

          <p className="text-zinc-500 text-xs uppercase tracking-[0.2em]">
            © 2026 Onion Production — All Rights Reserved
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;