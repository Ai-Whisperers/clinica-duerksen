"use client";

import { useState } from "react";
import { Globe, TrendingDown, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const treatments = [
  { name: "Implante Dental", py: 1050, ar: 2000, br: 2200, us: 4000, eu: 3500 },
  { name: "Carilla de Porcelana", py: 420, ar: 650, br: 700, us: 1750, eu: 1200 },
  { name: "Blanqueamiento", py: 210, ar: 300, br: 350, us: 750, eu: 600 },
  { name: "Endodoncia", py: 160, ar: 400, br: 450, us: 1100, eu: 800 },
  { name: "Corona de Porcelana", py: 315, ar: 500, br: 550, us: 1500, eu: 1000 },
  { name: "Ortodoncia (completa)", py: 1190, ar: 2750, br: 3000, us: 6500, eu: 5000 },
  { name: "Extraccion Muela Juicio", py: 105, ar: 200, br: 250, us: 600, eu: 400 },
];

const countries = [
  { code: "py", name: "Paraguay", flag: "🇵🇾" },
  { code: "ar", name: "Argentina", flag: "🇦🇷" },
  { code: "br", name: "Brasil", flag: "🇧🇷" },
  { code: "us", name: "Estados Unidos", flag: "🇺🇸" },
  { code: "eu", name: "Europa", flag: "🇪🇺" },
];

export default function CompareCountriesPage() {
  const [compareWith, setCompareWith] = useState("us");

  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-brand-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Compara Precios por Pais</h1>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Descubre cuanto puedes ahorrar eligiendo Paraguay para tus tratamientos dentales.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            <span className="text-sm text-muted-foreground self-center mr-2">Comparar con:</span>
            {countries.filter((c) => c.code !== "py").map((c) => (
              <button
                key={c.code}
                onClick={() => setCompareWith(c.code)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  compareWith === c.code ? "bg-brand-primary text-white" : "bg-muted text-muted-foreground"
                }`}
              >
                {c.flag} {c.name}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            {treatments.map((t) => {
              const pyPrice = t.py;
              const otherPrice = (t as any)[compareWith] as number;
              const saving = Math.round(((otherPrice - pyPrice) / otherPrice) * 100);
              const savedAmount = otherPrice - pyPrice;

              return (
                <div key={t.name} className="p-4 rounded-xl border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-foreground">{t.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm">
                      <span className="text-muted-foreground line-through">USD ${otherPrice.toLocaleString()}</span>
                      <span className="font-bold text-brand-primary">USD ${pyPrice.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-bold">{saving}% menos</span>
                    <span className="text-xs text-muted-foreground">(ahorras ${savedAmount})</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hola! Vi los precios comparados y me interesa un tratamiento dental en Paraguay.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Solicitar Presupuesto
            </a>
          </div>
        </div>
      </section>
    </>
  );
}