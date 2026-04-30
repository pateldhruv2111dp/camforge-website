import { FaWhatsapp } from "react-icons/fa";

const WHATSAPP_NUMBER = "919825060415";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg hover:bg-[#1ebe5d] hover:scale-110 active:scale-95 transition-all duration-200"
    >
      <FaWhatsapp className="w-7 h-7 text-white" />
    </a>
  );
}
