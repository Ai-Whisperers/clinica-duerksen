import type { Metadata } from "next";
import { Heart, Users, GraduationCap, HandHeart } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Compromiso con la Comunidad",
  description: "Clinica Duerksen y su compromiso con la comunidad de Asuncion. Programas de salud dental, educacion y responsabilidad social.",
};

const initiatives = [
  { icon: GraduationCap, title: "Educacion Dental en Escuelas", desc: "Visitamos escuelas para ensenar a los ninos sobre higiene dental, cepillado correcto y habitos saludables." },
  { icon: Heart, title: "Jornadas de Atencion Gratuita", desc: "Organizamos jornadas de revision dental gratuita para comunidades con acceso limitado a servicios de salud." },
  { icon: Users, title: "Formacion de Profesionales", desc: "Como Jefe de Odontologia del Centro Medico Bautista, el Dr. Duerksen forma a nuevas generaciones de odontologos." },
  { icon: HandHeart, title: "Concientizacion en Salud Oral", desc: "Compartimos contenido educativo gratuito a traves de nuestro blog y redes sociales." },
];

export default function CommunityPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Comunidad" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Compromiso con la Comunidad" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Compromiso con la Comunidad
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Creemos que la salud dental es un derecho. Por eso contribuimos activamente a nuestra comunidad.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((init) => (
              <div key={init.title} className="flex gap-4 p-6 rounded-xl border border-border bg-card">
                <div className="w-12 h-12 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <init.icon className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{init.title}</h3>
                  <p className="text-muted-foreground mt-2">{init.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Quieres colaborar?" subtitle="Si representas una escuela u organizacion comunitaria, contactanos para coordinar actividades" />
    </>
  );
}