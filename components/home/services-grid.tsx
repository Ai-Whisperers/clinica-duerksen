"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Smile,
  Shield,
  Sparkles,
  Heart,
  Stethoscope,
  Zap,
  Baby,
  ScanLine,
} from "lucide-react";

const services = [
  {
    icon: Smile,
    title: "Implantes Dentales",
    description: "Restauración permanente con tecnología de última generación para una sonrisa completa.",
    href: "/servicios/implantes-dentales",
  },
  {
    icon: Shield,
    title: "Ortodoncia",
    description: "Brackets metálicos, estéticos y alineadores invisibles para una mordida perfecta.",
    href: "/servicios/ortodoncia",
  },
  {
    icon: Sparkles,
    title: "Estética Dental",
    description: "Blanqueamiento, carillas y diseño de sonrisa para transformar tu apariencia.",
    href: "/servicios/estetica-dental",
  },
  {
    icon: Heart,
    title: "Endodoncia",
    description: "Tratamientos de conducto indoloros con tecnología avanzada.",
    href: "/servicios/endodoncia",
  },
  {
    icon: Stethoscope,
    title: "Odontología General",
    description: "Limpiezas, restauraciones y cuidado preventivo para toda la familia.",
    href: "/servicios/odontologia-general",
  },
  {
    icon: Zap,
    title: "Prótesis Dental",
    description: "Prótesis fijas y removibles que devuelven funcionalidad y estética.",
    href: "/servicios/protesis-dental",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    description: "Cuidado dental especializado para los más pequeños de la casa.",
    href: "/servicios/odontopediatria",
  },
  {
    icon: ScanLine,
    title: "Periodoncia",
    description: "Tratamiento de encías para mantener una base sana para tus dientes.",
    href: "/servicios/periodoncia",
  },
];

export function ServicesGrid() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg">
            Ofrecemos una amplia gama de tratamientos odontológicos con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <Link
                href={service.href}
                className="group block p-6 rounded-xl border border-border bg-card hover:shadow-lg hover:border-brand-primary/30 transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4 group-hover:bg-brand-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 group-hover:text-brand-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-block mt-3 text-sm font-medium text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver más →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-brand-primary font-medium hover:underline"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </div>
    </section>
  );
}