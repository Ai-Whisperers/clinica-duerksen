import type { Metadata } from "next";
import { Heart, GraduationCap, Users, Clock } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Trabaja Con Nosotros",
  description: "Unete al equipo de Clinica Duerksen. Oportunidades laborales en odontologia. Asuncion, Paraguay.",
};

const benefits = [
  { icon: Heart, title: "Ambiente Profesional", desc: "Trabaja en un equipo comprometido con la excelencia y el cuidado del paciente." },
  { icon: GraduationCap, title: "Formacion Continua", desc: "Apoyamos tu desarrollo profesional con capacitaciones y cursos." },
  { icon: Users, title: "Equipo Colaborativo", desc: "Un equipo pequeno donde tu aporte marca la diferencia." },
  { icon: Clock, title: "Horario Equilibrado", desc: "Respetamos tu tiempo personal. Horario de lunes a viernes." },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Trabaja Con Nosotros" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Trabaja Con Nosotros" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Trabaja Con Nosotros
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Se parte de un equipo dedicado a transformar sonrisas en Asuncion.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Por que trabajar con nosotros</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="p-6 rounded-xl border border-border bg-card text-center">
                <b.icon className="w-8 h-8 text-brand-primary mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Posiciones Abiertas</h2>
          <div className="p-8 rounded-xl border border-border bg-card">
            <p className="text-muted-foreground">
              No tenemos posiciones abiertas en este momento, pero siempre estamos abiertos a conocer profesionales talentosos.
            </p>
            <p className="text-muted-foreground mt-4">
              Envia tu CV a <a href={`mailto:${BUSINESS.email}`} className="text-brand-primary hover:underline">{BUSINESS.email}</a> y te contactaremos cuando surja una oportunidad.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}