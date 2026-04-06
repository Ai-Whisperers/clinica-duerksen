import type { Metadata } from "next";
import { MessageCircle, Star, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Clinica Duerksen | Dental Excellence in Asuncion, Paraguay",
  description: "Dental clinic of Dr. Victor Duerksen in Asuncion, Paraguay. Dental implants, orthodontics, cosmetic dentistry and more. 26+ years of experience.",
};

export default function EnglishHome() {
  const waMsg = encodeURIComponent("Hello! I would like to schedule an appointment at Clinica Duerksen.");

  return (
    <>
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-dark" />
        <div className="container mx-auto px-4 relative z-10 pt-20 text-center max-w-4xl">
          <div className="space-y-8 animate-fade-in-up">
            <p className="text-brand-accent font-medium">🇬🇧 English Version</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Smile in the <span className="text-brand-accent">Best Hands</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              26+ years of dental excellence in Asuncion, Paraguay. Save up to 70% compared to US prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${BUSINESS.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-brand-dark font-semibold text-lg hover:bg-brand-accent/90 transition-all shadow-lg">
                <MessageCircle className="w-5 h-5" /> Book Appointment
              </a>
              <a href="/turismo-dental"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-medium text-lg hover:bg-white/10 transition-all">
                Dental Tourism Info
              </a>
            </div>
          </div>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {[{ value: "26+", label: "Years Experience" }, { value: "5.0 ★", label: "Google Rating" }, { value: "Centro Medico", label: "Bautista" }].map((item, i) => (
              <div key={i} className="text-center text-white">
                <div className="text-2xl md:text-3xl font-bold text-brand-accent">{item.value}</div>
                <div className="text-sm text-white/70">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}