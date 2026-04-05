"use client";

import Link from "next/link";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const credentials = [
  "Más de 26 años de experiencia clínica",
  "Especialista en implantes y prótesis",
  "Formación continua internacional",
  "Atención en Centro Médico Bautista",
  "Tecnología de diagnóstico digital",
];

export function AboutPreview() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-primary/10"
          >
            <div className="absolute inset-0 flex items-center justify-center text-brand-primary/30">
              <div className="text-center">
                <div className="text-6xl mb-2">👨‍⚕️</div>
                <p className="text-sm">Foto del Dr. Victor Duerksen</p>
              </div>
            </div>
            {/* Uncomment when photo is available:
            <Image
              src="/images/dr-victor-duerksen.jpg"
              alt="Dr. Victor Duerksen"
              fill
              className="object-cover"
            /> */}
            {/* Accent border */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand-accent" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-brand-accent font-semibold mb-2">Sobre Nosotros</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Dr. Victor Duerksen
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Con más de 26 años dedicados a la odontología, el Dr. Victor Duerksen
                ha transformado miles de sonrisas en Asunción. Su compromiso con la
                excelencia y la formación continua garantizan un cuidado dental de
                primer nivel para cada paciente.
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

            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
            >
              Conoce a nuestro equipo →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}