import type { Metadata } from "next";
import { MessageCircle, Phone, Star, Shield, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergencia Dental en Asuncion - Atencion Rapida",
  description: "Dolor de muela? Diente roto? Atencion dental de emergencia inmediata.",
  robots: { index: false, follow: false },
};

export default function LP() {
  const waMsg = encodeURIComponent("Hola! Vi su anuncio de Emergencia Dental y me gustaria mas informacion.");

  return (
    <div className="min-h-screen bg-background">
      {/* No header/footer for landing pages */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-dark text-white py-20 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Emergencia Dental? Llamanos YA</h1>
          <p className="text-xl text-white/80">Atencion inmediata para dolor agudo, traumatismos y fracturas dentales.</p>
          <div className="flex items-center justify-center gap-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
            ))}
            <span className="ml-2">5.0 en Google Reviews</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href={`${BUSINESS.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-white font-bold text-lg shadow-lg hover:bg-[#20bd5a]">
              <MessageCircle className="w-6 h-6" /> WhatsApp AHORA
            </a>
            <a href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/30 px-8 py-4 text-white font-bold text-lg">
              <Phone className="w-6 h-6" /> Llamar
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-4 rounded-xl border border-border">
              <Shield className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground text-sm">26+ Anos</p>
              <p className="text-xs text-muted-foreground">Experiencia</p>
            </div>
            <div className="p-4 rounded-xl border border-border">
              <Star className="w-8 h-8 text-brand-accent mx-auto mb-2" />
              <p className="font-semibold text-foreground text-sm">5.0 Estrellas</p>
              <p className="text-xs text-muted-foreground">Google Reviews</p>
            </div>
            <div className="p-4 rounded-xl border border-border">
              <Clock className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground text-sm">Atencion</p>
              <p className="text-xs text-muted-foreground">Personalizada</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-primary text-white text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">No esperes mas</h2>
          <a href={`${BUSINESS.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-brand-dark font-bold text-lg">
            <MessageCircle className="w-6 h-6" /> Agendar Cita
          </a>
        </div>
      </section>
    </div>
  );
}