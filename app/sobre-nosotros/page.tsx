import type { Metadata } from "next";
import { CheckCircle, GraduationCap, Award, Building2 } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Sobre Nosotros | Dr. Victor Duerksen | 26+ Anos de Experiencia",
  description: "Conoce al Dr. Victor Duerksen y su equipo. Mas de 26 anos de experiencia en odontologia de excelencia en Asuncion, Paraguay.",
};

const teamMembers = [
  {
    name: "Dr. Victor German Duerksen Braun",
    title: "Director / Fundador",
    emoji: "\U0001F468\u200D\u2695\uFE0F",
    bio: "Con mas de 26 anos dedicados a la odontologia, el Dr. Victor Duerksen es reconocido como uno de los profesionales mas experimentados de Asuncion. Egresado de la Universidad Nacional de La Plata (Argentina), ha dedicado su carrera a brindar atencion dental de primer nivel, combinando tecnicas modernas con un trato humano y personalizado.",
    credentials: [
      { icon: GraduationCap, text: "Universidad Nacional de La Plata, Argentina" },
      { icon: Building2, text: "Jefe de Odontologia - Centro Medico Bautista" },
      { icon: Award, text: "26+ anos de experiencia clinica" },
    ],
  },
  {
    name: "Dra. Gloria Duerksen",
    title: "Odontologa",
    emoji: "\U0001F469\u200D\u2695\uFE0F",
    bio: "La Dra. Gloria Duerksen aporta dedicacion y cuidado a cada paciente. Su enfoque en la odontologia preventiva y estetica complementa la experiencia del equipo, asegurando una atencion integral para toda la familia.",
    credentials: [
      { icon: GraduationCap, text: "Especialista en odontologia estetica" },
      { icon: Award, text: "Atencion personalizada y preventiva" },
    ],
  },
];

const values = [
  { title: "Excelencia", desc: "Compromiso con los mas altos estandares de calidad en cada tratamiento." },
  { title: "Compromiso", desc: "Dedicacion total al bienestar y satisfaccion de nuestros pacientes." },
  { title: "Confianza", desc: "Relaciones basadas en transparencia, honestidad y profesionalismo." },
  { title: "Cuidado", desc: "Atencion humana y personalizada que hace la diferencia." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Sobre Nosotros" },
      ]} />

      {/* Hero */}
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Sobre Nosotros" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Conoce a tu equipo dental
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Mas de 26 anos brindando atencion odontologica de excelencia en Asuncion, Paraguay.
          </p>
        </div>
      </section>

      {/* Team */}
      {teamMembers.map((member, i) => (
        <section key={member.name} className={`py-16 ${i % 2 === 1 ? "bg-muted/30" : "bg-background"}`}>
          <div className="container mx-auto px-4">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={`relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-primary/10 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="absolute inset-0 flex items-center justify-center text-brand-primary/30">
                  <div className="text-center">
                    <div className="text-6xl mb-2">{member.emoji}</div>
                    <p className="text-sm">Foto de {member.name}</p>
                  </div>
                </div>
              </div>
              <div className={`space-y-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-brand-accent font-semibold mb-1">{member.title}</p>
                  <h2 className="text-3xl font-bold text-foreground">{member.name}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">{member.bio}</p>
                <div className="space-y-3">
                  {member.credentials.map((cred, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-brand-accent/10 flex items-center justify-center shrink-0">
                        <cred.icon className="w-5 h-5 text-brand-accent" />
                      </div>
                      <span className="text-foreground">{cred.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Values */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Agenda tu primera consulta" subtitle="Conocenos y descubre por que miles de pacientes confian en nosotros" />
    </>
  );
}