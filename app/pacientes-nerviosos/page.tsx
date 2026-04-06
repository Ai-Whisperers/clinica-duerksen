import type { Metadata } from "next";
import { Heart, Shield, Headphones, MessageCircle, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Para Pacientes Nerviosos - Odontologia Sin Miedo",
  description: "Tienes miedo al dentista? En Clinica Duerksen te hacemos sentir comodo y seguro. Tecnicas gentiles, sin dolor. Asuncion, Paraguay.",
};

const techniques = [
  { icon: Heart, title: "Escuchamos Primero", desc: "Antes de cualquier tratamiento, hablamos contigo. Nos cuentas tus miedos y los abordamos uno por uno." },
  { icon: Shield, title: "Anestesia Moderna", desc: "Usamos las tecnicas de anestesia mas avanzadas. Practicamente no sentiras nada durante el procedimiento." },
  { icon: Headphones, title: "Ambiente Relajante", desc: "Musica suave, consultorio comodo y un equipo entrenado en manejo de ansiedad dental." },
  { icon: CheckCircle, title: "Control Total", desc: "Tu tienes el control. Si en cualquier momento quieres parar, simplemente levanta la mano." },
];

export default function NervousPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Para Pacientes Nerviosos" },
      ]} />

      <section className="bg-gradient-to-br from-blue-50 to-green-50 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Para Pacientes Nerviosos" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Tienes Miedo al Dentista?
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            No eres el unico. El 36% de las personas tiene alguna forma de ansiedad dental.
            Estamos preparados para ayudarte.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-xl mx-auto mb-12">
            En Clinica Duerksen entendemos tu miedo. El Dr. Duerksen y su equipo estan especialmente
            entrenados para hacer que cada visita sea lo mas comoda posible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techniques.map((t) => (
              <div key={t.title} className="p-6 rounded-xl border border-border bg-card">
                <t.icon className="w-8 h-8 text-brand-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{t.title}</h3>
                <p className="text-sm text-muted-foreground">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-foreground mb-6">Lo Que Otros Pacientes Nerviosos Dicen</h2>
          <div className="p-6 rounded-xl border border-border bg-card italic text-muted-foreground">
            &ldquo;Tenia tanto miedo que no iba al dentista hace 5 anos. El Dr. Duerksen fue increiblemente
            paciente conmigo. Me explico todo paso a paso y no senti absolutamente nada. Ahora voy
            cada 6 meses sin problemas.&rdquo;
            <p className="mt-4 not-italic font-semibold text-foreground text-sm">— Paciente Verificado, Google Reviews</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">El Primer Paso es Hablar</h2>
          <p className="text-muted-foreground mb-6">
            No tienes que comprometerte a nada. Simplemente cuentanos tus preocupaciones y
            juntos encontraremos la mejor manera de avanzar.
          </p>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hola, tengo algo de miedo al dentista y me gustaria saber como manejan esto")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Hablemos sin compromiso
          </a>
        </div>
      </section>

      <CTABanner title="Tu comodidad es nuestra prioridad" subtitle="Agenda tu primera consulta y comprueba que ir al dentista no tiene que ser aterrador" />
    </>
  );
}