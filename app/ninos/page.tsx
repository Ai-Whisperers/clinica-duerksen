import type { Metadata } from "next";
import { Baby, Heart, Shield, Smile, Star, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Odontologia para Ninos",
  description: "Cuidado dental especializado para ninos en Clinica Duerksen. Ambiente amigable, tecnicas sin dolor. Asuncion, Paraguay.",
};

const tips = [
  { icon: Star, title: "Primera Visita al Ano", desc: "Lleva a tu hijo al dentista cuando cumpla 1 ano o aparezca su primer diente." },
  { icon: Shield, title: "Cepillado 2 Veces al Dia", desc: "Ayuda a tu hijo a cepillarse por la manana y antes de dormir con pasta dental con fluor." },
  { icon: Heart, title: "Menos Azucar", desc: "Limita dulces, jugos y refrescos. El agua es el mejor amigo de los dientes." },
  { icon: Smile, title: "Hazlo Divertido", desc: "Usa canciones, cronometros y cepillos de colores para hacer del cepillado un juego." },
];

export default function KidsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Odontologia para Ninos" },
      ]} />

      <section className="bg-gradient-to-br from-blue-50 to-pink-50 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Odontologia para Ninos" }]} />
          <div className="flex items-center gap-3 mt-4">
            <span className="text-5xl">🦷</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Dentista para Ninos
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            En Clinica Duerksen hacemos que la visita al dentista sea divertida y sin miedo para los mas pequenos.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-4">Nuestro Enfoque</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
            Creamos experiencias positivas para que tus hijos desarrollen habitos saludables desde temprana edad.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl border border-border">
              <span className="text-4xl">😊</span>
              <h3 className="font-semibold text-foreground mt-3">Ambiente Amigable</h3>
              <p className="text-sm text-muted-foreground mt-2">Consultorio disenado para que los ninos se sientan comodos y seguros.</p>
            </div>
            <div className="p-6 rounded-xl border border-border">
              <span className="text-4xl">🎮</span>
              <h3 className="font-semibold text-foreground mt-3">Sin Dolor</h3>
              <p className="text-sm text-muted-foreground mt-2">Tecnicas gentiles y anestesia especial para que no sientan nada.</p>
            </div>
            <div className="p-6 rounded-xl border border-border">
              <span className="text-4xl">🏆</span>
              <h3 className="font-semibold text-foreground mt-3">Premios</h3>
              <p className="text-sm text-muted-foreground mt-2">Los ninos reciben un premio por ser valientes despues de cada visita.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Consejos para Padres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tips.map((tip) => (
              <div key={tip.title} className="flex gap-4 p-5 rounded-xl border border-border bg-card">
                <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0">
                  <tip.icon className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <span className="text-5xl">🧚</span>
          <h2 className="text-2xl font-bold text-foreground mt-4 mb-4">Sabias que...</h2>
          <p className="text-muted-foreground">
            El Ratoncito Perez trabaja con nosotros! Cuando se te cae un diente de leche,
            ponelo debajo de la almohada y el Ratoncito te dejara una sorpresa. Pero recuerda:
            el Ratoncito solo visita a los ninos que se cepillan bien los dientes 🪥
          </p>
        </div>
      </section>

      <CTABanner title="Agenda la cita de tu hijo" subtitle="Creamos sonrisas saludables desde pequenos" />
    </>
  );
}