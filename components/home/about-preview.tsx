"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const credentials = [
  "Más de 26 años de experiencia clínica",
  "Especialista en implantes y prótesis",
  "Egresado de la Universidad Nacional de La Plata",
  "Jefe de Odontología — Centro Médico Bautista",
  "Formación continua internacional",
  "Tecnología de diagnóstico digital",
];

export function AboutPreview() {
  const { ref: photoRef, isInView: photoVisible } = useInView();
  const { ref: textRef, isInView: textVisible } = useInView();

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            ref={photoRef}
            className={`relative transition-all duration-700 ${photoVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/doctor-portrait.jpg"
                alt="Dr. Victor Duerksen — Odontólogo en Asunción"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 md:p-5 border border-border">
              <div className="text-3xl md:text-4xl font-bold text-brand-primary">26+</div>
              <div className="text-sm text-muted-foreground font-medium">Años de<br />Experiencia</div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-accent/20 rounded-full blur-2xl" />
          </div>

          <div
            ref={textRef}
            className={`space-y-6 transition-all duration-700 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div>
              <p className="text-brand-accent font-semibold mb-2 tracking-wide uppercase text-sm">Sobre Nosotros</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dr. Víctor Germán<br />Duerksen Braun
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Con más de 26 años dedicados a la odontología, el Dr. Víctor Duerksen
                ha transformado miles de sonrisas en Asunción. Egresado de la Universidad 
                Nacional de La Plata (Argentina) y Jefe de Odontología del Centro Médico Bautista, 
                su compromiso con la excelencia garantiza un cuidado dental de primer nivel.
              </p>
            </div>
            <ul className="space-y-3">
              {credentials.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="/sobre-nosotros"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
              >
                Conoce a nuestro equipo →
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-brand-primary/20 px-6 py-3 text-brand-primary font-medium hover:bg-brand-primary/5 transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
