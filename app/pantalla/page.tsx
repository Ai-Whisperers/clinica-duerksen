"use client";

import { useState, useEffect } from "react";
import { Star, Clock, Wifi, MessageCircle } from "lucide-react";

const slides = [
  { type: "tip", content: "Sabias que debes cambiar tu cepillo de dientes cada 3 meses?", emoji: "🪥" },
  { type: "tip", content: "El hilo dental previene el 40% de las caries que el cepillo no alcanza.", emoji: "🦷" },
  { type: "review", content: "Excelente atencion. El Dr. Duerksen es muy profesional y cuidadoso. 100% recomendado.", author: "Paciente Google Reviews", rating: 5 },
  { type: "promo", content: "Control + Limpieza Profesional: Consulta nuestras promociones vigentes!", emoji: "✨" },
  { type: "tip", content: "Visitar al dentista cada 6 meses previene problemas costosos a futuro.", emoji: "📅" },
  { type: "team", content: "Dr. Victor Duerksen: 26+ anos de experiencia en odontologia de excelencia.", emoji: "👨‍⚕️" },
  { type: "review", content: "La mejor clinica dental de Asuncion. Ambiente limpio y moderno. Super recomendado.", author: "Paciente Google Reviews", rating: 5 },
  { type: "tip", content: "El blanqueamiento profesional es seguro y no dana el esmalte dental.", emoji: "😁" },
];

export default function DisplayPage() {
  const [current, setCurrent] = useState(0);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const slideTimer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 8000);
    const clockTimer = setInterval(() => setTime(new Date()), 1000);
    return () => { clearInterval(slideTimer); clearInterval(clockTimer); };
  }, []);

  const slide = slides[current];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-dark flex flex-col text-white overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-4 bg-black/20">
        <h1 className="text-2xl font-bold">Clinica Duerksen</h1>
        <div className="flex items-center gap-4 text-lg">
          <Clock className="w-5 h-5" />
          <span className="font-mono">{time.toLocaleTimeString("es-PY", { hour: "2-digit", minute: "2-digit" })}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-12">
        <div className="text-center max-w-3xl animate-fade-in-up" key={current}>
          {slide.type === "review" ? (
            <>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl leading-relaxed italic">&ldquo;{slide.content}&rdquo;</p>
              <p className="mt-6 text-white/60">— {"author" in slide ? slide.author : ""}</p>
            </>
          ) : (
            <>
              <span className="text-7xl mb-6 block">{"emoji" in slide ? slide.emoji : "💡"}</span>
              <p className="text-2xl md:text-4xl leading-relaxed font-medium">{slide.content}</p>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-8 py-4 bg-black/20">
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4" />
          <span className="text-sm">WiFi: ClinicaDuerksen</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">Dejanos tu resena en Google ★★★★★</span>
        </div>
        <div className="flex gap-1">
          {slides.map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-brand-accent" : "bg-white/20"}`} />
          ))}
        </div>
      </div>
    </div>
  );
}