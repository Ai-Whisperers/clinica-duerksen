import { Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export function CTABanner({
  title = "Tu primera consulta está a un mensaje de distancia",
  subtitle = "Agenda tu cita hoy y da el primer paso hacia una sonrisa saludable",
}: CTABannerProps) {
  const message = encodeURIComponent(
    "Hola! Me gustaría agendar una cita en Clínica Duerksen"
  );

  return (
    <section className="relative bg-brand-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, white 1px, transparent 1px), radial-gradient(circle at 75% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />
      </div>

      <div className="container mx-auto px-4 py-16 md:py-20 relative">
        <div className="text-center max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            {title}
          </h2>
          <p className="text-white/80 text-lg">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <a
              href={`${BUSINESS.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-white font-medium hover:bg-[#20bd5a] transition-colors shadow-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-8 py-3.5 text-white font-medium hover:bg-white/20 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Llamar: {BUSINESS.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}