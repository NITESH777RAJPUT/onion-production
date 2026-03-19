import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  const whatsappNumber = "917823041751";
  const message = "Hi, I want to work with you";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat on WhatsApp
      </span>

      {/* Button */}
      <div className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition duration-300 animate-bounce">
        <FaWhatsapp size={26} />
      </div>
    </a>
  );
}

export default Whatsapp;