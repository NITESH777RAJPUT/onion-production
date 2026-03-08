import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);

  // Mobile menu toggle karne ke liye function
  const handleNav = () => setNav(!nav);

  const navLinks = [
    { id: "hero", name: "Home" },
    { id: "services", name: "Services" },
    { id: "about", name: "About" },
    { id: "portfolio", name: "Work" },
    { id: "contact", name: "Contact" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 py-5 fixed top-0 z-[100] bg-black/40 backdrop-blur-lg border-b border-white/10 transition-all duration-300">
      
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-white">
        ONION<span className="text-green-500">.</span>
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 font-bold text-sm uppercase tracking-widest text-gray-300">
        {navLinks.map((link) => (
          <li key={link.id} className="cursor-pointer hover:text-green-500 transition-colors">
            <Link to={link.id} smooth={true} duration={500} offset={-80}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Clickable Button - Desktop */}
      <div className="hidden md:block">
        <Link to="contact" smooth={true} duration={500} offset={-80}>
          <button className="bg-green-600 text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-green-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-900/40">
            Get Quote
          </button>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div onClick={handleNav} className="md:hidden text-white z-[110] cursor-pointer p-2">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed top-0 right-0 w-full h-screen bg-black flex flex-col items-center justify-center transition-transform duration-500 ease-in-out z-[105] ${nav ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="flex flex-col gap-10 text-center uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <li key={link.id} className="text-3xl font-black text-white hover:text-green-500 transition">
              <Link onClick={handleNav} to={link.id} smooth={true} duration={500} offset={-80}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Mobile Button */}
        <div className="mt-16">
          <Link onClick={handleNav} to="contact" smooth={true} duration={500} offset={-80}>
            <button className="bg-green-600 text-black font-black px-12 py-4 rounded-full uppercase italic tracking-tighter hover:scale-105 transition">
              Get Quote
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;