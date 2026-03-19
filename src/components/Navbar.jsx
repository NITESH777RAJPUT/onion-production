import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("hero");

  const handleNav = () => setNav(!nav);

  // ✅ Smooth scroll with offset
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // navbar height
      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });

      setActive(id);
      setNav(false);
    }
  };

  // ✅ Active highlight on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "whatwedo", "about", "work", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", name: "Home" },
    { id: "whatwedo", name: "Services" },
    { id: "about", name: "About" },
    { id: "work", name: "Work" },
    { id: "contact", name: "Contact" },
  ];

  const whatsappLink =
    "https://wa.me/917823041751?text=Hi%20I%20want%20to%20work%20with%20you";

  return (
    <nav className="fixed top-0 w-full z-[9999] backdrop-blur-md bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-2xl md:text-3xl font-black tracking-tight text-white cursor-pointer"
        >
          ONION<span className="text-yellow-400"> PRODUCTION</span>.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold text-zinc-300">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`transition ${
                  active === link.id
                    ? "text-yellow-400"
                    : "hover:text-yellow-400"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop WhatsApp */}
        <div className="hidden md:block">
          <button
            onClick={() => window.open(whatsappLink, "_blank")}
            className="px-7 py-2.5 bg-yellow-400 text-black font-bold text-xs uppercase rounded-full hover:scale-105 transition"
          >
            Get Quote
          </button>
        </div>

        {/* Mobile Icon */}
        <div
          onClick={handleNav}
          className="md:hidden text-white cursor-pointer z-50"
        >
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-500 ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          onClick={handleNav}
          className="absolute top-6 right-6 text-white"
        >
          <FaTimes size={28} />
        </div>

        <ul className="flex flex-col gap-10 text-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className={`text-3xl font-black transition ${
                  active === link.id
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <div className="mt-16">
          <button
            onClick={() => {
              handleNav();
              window.open(whatsappLink, "_blank");
            }}
            className="px-12 py-4 bg-yellow-400 text-black font-bold uppercase rounded-full hover:scale-105 transition"
          >
            Get Quote
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;