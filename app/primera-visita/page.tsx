import type { Metadata } from "next";
import { ClipboardCheck, Clock, Smile, ShieldCheck, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tu Primera Visita",
  description: "Que esperar en tu primera visita a Clinica Duerksen. Guia paso a paso, que traer y como prepararte.",
};

const steps = [
  { icon: ClipboardCheck, title: "Registro", desc: "Completaras un breve formulario con tu informacion personal e historial medico." },
  { icon: Smile, title: "Conoce al Doctor", desc: "El Dr. Duerksen te recibira, escuchara tus preocupaciones y respondra todas tus preguntas." },
  { icon: ShieldCheck, title: "Evaluacion Completa", desc: "Examen dental completo con radiografia digital para diagnosticar tu salud bucal actual." },
  { icon: Clock, title: "Plan de Tratamiento", desc: "Recibiras un plan personalizado con opciones, costos estimados y cronograma." },
  { icon: MessageCircle, title: "Proximos Pasos", desc: "Agendamos tu siguiente cita y resolvemos cualquier duda adicional." },
];

const bringItems = [
  "Documento de identidad (cedula)",
  "Carnet de seguro medico (si aplica)",
  "Radiografias dentales previas (si tienes)",
  "Lista de medicamentos que tomas",
  "Historial de alergias",
];

export default function FirstVisitPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Tu Primera Visita" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Tu Primera Visita" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Tu Primera Visita
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Queremos que tu primera experiencia sea comoda y sin sorpresas. Aqui te explicamos paso a paso que esperar.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Que esperar</h2>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-6 items-start p-6 rounded-xl border border-border">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg">{step.title}</h3>
                  <p className="text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to bring */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Que traer</h2>
          <div className="p-6 rounded-xl bg-background border border-border">
            <ul className="space-y-3">
              {bringItems.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <ClipboardCheck className="w-5 h-5 text-brand-accent shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Nervous patients */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Tienes miedo al dentista?</h2>
          <p className="text-muted-foreground text-lg mb-6">
            No te preocupes, no eres el unico. Nuestro equipo esta capacitado para hacer que tu visita sea lo mas comoda posible. Usamos tecnicas gentiles y te explicamos todo antes de cada paso.
          </p>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hola! Tengo algo de miedo al dentista y me gustaria saber como manejan esto en la clinica")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Hablemos de tus preocupaciones
          </a>
        </div>
      </section>

      <CTABanner title="Listo para tu primera visita?" subtitle="Agenda tu cita hoy y da el primer paso hacia una sonrisa saludable" />
    </>
  );
}