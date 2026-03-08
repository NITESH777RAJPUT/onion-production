import { FaWhatsapp } from "react-icons/fa";

function Whatsapp() {
  return (
    <a
      href="https://wa.me/916299041751"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}

export default Whatsapp;