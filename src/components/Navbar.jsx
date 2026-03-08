import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const navLinks = [
    { id: "hero", name: "Home" },
    { id: "services", name: "Services" },
    { id: "about", name: "About" },
    { id: "portfolio", name: "Work" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-black tracking-tight text-white">
          ONION<span className="text-yellow-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-bold text-zinc-300">

          {navLinks.map((link) => (

            <li key={link.id} className="cursor-pointer hover:text-yellow-400 transition">

              <Link
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        {/* Desktop Button */}
        <div className="hidden md:block">

          <Link to="contact" smooth={true} duration={500} offset={-80}>
            <button className="px-7 py-2.5 bg-yellow-400 text-black font-bold text-xs uppercase rounded-full hover:scale-105 transition">
              Get Quote
            </button>
          </Link>

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
      <div className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-500 ${nav ? "translate-x-0" : "translate-x-full"}`}>

        <ul className="flex flex-col gap-10 text-center">

          {navLinks.map((link) => (

            <li key={link.id} className="text-3xl font-black text-white hover:text-yellow-400 transition">

              <Link
                onClick={handleNav}
                to={link.id}
                smooth={true}
                duration={500}
                offset={-80}
              >
                {link.name}
              </Link>

            </li>

          ))}

        </ul>

        <div className="mt-16">

          <Link
            onClick={handleNav}
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
          >
            <button className="px-12 py-4 bg-yellow-400 text-black font-bold uppercase rounded-full hover:scale-105 transition">
              Get Quote
            </button>
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;