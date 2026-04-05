"use client";

import { MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function WhatsAppButton() {
  const message = encodeURIComponent(
    "Hola! Me gustaría agendar una cita en Clínica Duerksen"
  );

  return (
    <a
      href={`${BUSINESS.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chatea con nosotros por WhatsApp"
    >
      <div className="relative">
        {/* Pulse ring */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        {/* Button */}
        <div className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chatea con nosotros
          <div className="absolute top-full right-4 w-2 h-2 bg-gray-900 rotate-45 -translate-y-1" />
        </div>
      </div>
    </a>
  );
}