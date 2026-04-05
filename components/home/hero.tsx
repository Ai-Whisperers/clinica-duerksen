"use client";

import { MessageCircle, ChevronDown } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { motion } from "framer-motion";

export function Hero() {
  const message = encodeURIComponent(
    "Hola! Me gustaría agendar una cita en Clínica Duerksen"
  );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary via-brand-primary/95 to-brand-dark" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-brand-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Tu sonrisa en las{" "}
            <span className="text-brand-accent">mejores manos</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Más de 26 años brindando atención odontológica de excelencia en Asunción
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href={`${BUSINESS.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-brand-dark font-semibold text-lg hover:bg-brand-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Agenda tu cita
            </a>
            <a
              href="#nosotros"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-white font-medium text-lg hover:bg-white/10 transition-all"
            >
              Conócenos
            </a>
          </div>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {[
              { value: "26+", label: "Años de Experiencia" },
              { value: "5.0 ★", label: "en Google" },
              { value: "Centro Médico", label: "Bautista" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-white">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-brand-accent">
                    {item.value}
                  </div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
                {i < 2 && (
                  <div className="hidden md:block w-px h-10 bg-white/20 ml-6" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </div>
    </section>
  );
}