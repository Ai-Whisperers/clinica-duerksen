import type { Metadata } from "next";
import { GraduationCap, Award, Building2, BookOpen, Globe, Calendar } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Dr. Victor German Duerksen Braun - Curriculum",
  description: "Curriculum profesional del Dr. Victor Duerksen. 26+ anos de experiencia, egresado de la Universidad Nacional de La Plata, Jefe de Odontologia del Centro Medico Bautista.",
};

const timeline = [
  { year: "1998", title: "Egreso - Universidad Nacional de La Plata", desc: "Titulo de Odontologo, Facultad de Odontologia, UNLP, Argentina.", icon: GraduationCap },
  { year: "1999", title: "Inicio de Practica Clinica", desc: "Apertura de consultorio en Asuncion, Paraguay.", icon: Calendar },
  { year: "2005", title: "Jefe de Odontologia", desc: "Designado Jefe del Departamento de Odontologia del Centro Medico Bautista.", icon: Building2 },
  { year: "2010", title: "Especializacion en Implantes", desc: "Formacion avanzada en implantologia oral.", icon: Award },
  { year: "2015", title: "Formacion en Estetica Digital", desc: "Capacitacion en diseno digital de sonrisa (DSD).", icon: BookOpen },
  { year: "2024", title: "25 Anos de Excelencia", desc: "Mas de un cuarto de siglo dedicado a la odontologia de excelencia.", icon: Award },
];

const memberships = [
  "Circulo de Odontologos del Paraguay",
  "Asociacion Odontologica Paraguaya",
  "Alumni - Universidad Nacional de La Plata",
];

export default function DoctorPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Sobre Nosotros", url: "https://clinicaduerksen.com.py/sobre-nosotros" },
        { name: "Dr. Victor Duerksen" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "Sobre Nosotros", href: "/sobre-nosotros" },
            { label: "Dr. Victor Duerksen" },
          ]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Dr. Victor German Duerksen Braun
          </h1>
          <p className="text-lg text-muted-foreground mt-4">Director y Fundador — Clinica Duerksen</p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Con mas de 26 anos dedicados a la odontologia, el Dr. Victor German Duerksen Braun es uno de los
            profesionales mas experimentados y respetados de Asuncion, Paraguay. Egresado de la prestigiosa
            Universidad Nacional de La Plata (Argentina), ha dedicado su carrera a combinar las tecnicas mas
            modernas con un trato humano y personalizado que distingue a su practica.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            Como Jefe del Departamento de Odontologia del Centro Medico Bautista, el Dr. Duerksen ha liderado
            la implementacion de protocolos de atencion de primer nivel, formando a nuevas generaciones de
            profesionales y estableciendo estandares de excelencia clinica.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Trayectoria Profesional</h2>
          <div className="space-y-6">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div className="w-px flex-1 bg-border mt-2" />
                </div>
                <div className="pb-6">
                  <span className="text-sm font-bold text-brand-accent">{item.year}</span>
                  <h3 className="font-semibold text-foreground mt-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memberships */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Membresias Profesionales</h2>
          <div className="space-y-3">
            {memberships.map((m) => (
              <div key={m} className="flex items-center gap-3 p-4 rounded-xl border border-border">
                <Globe className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="text-foreground">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Agenda tu consulta con el Dr. Duerksen" subtitle="26+ anos de experiencia a tu servicio" />
    </>
  );
}