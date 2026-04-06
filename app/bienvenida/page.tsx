import type { Metadata } from "next";
import { CheckCircle, Download, MessageCircle, Calendar, FileText } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Bienvenida - Nuevo Paciente",
  description: "Bienvenido a Clinica Duerksen! Todo lo que necesitas saber como nuevo paciente. Checklist, formularios y mas.",
};

const checklist = [
  { text: "Agendar tu primera cita", href: "/agendar-cita", done: false },
  { text: "Completar formulario del paciente", href: "/formulario-paciente", done: false },
  { text: "Revisar que traer a tu primera visita", href: "/primera-visita", done: false },
  { text: "Conocer nuestros servicios", href: "/servicios", done: false },
  { text: "Ver precios referenciales", href: "/precios", done: false },
  { text: "Leer nuestras preguntas frecuentes", href: "/preguntas-frecuentes", done: false },
];

export default function WelcomePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Bienvenida" },
      ]} />

      <section className="bg-gradient-to-br from-brand-primary/5 to-brand-accent/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Bienvenida" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Bienvenido a Clinica Duerksen! 🎉
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Nos alegra que hayas elegido confiar en nosotros. Aqui tienes todo lo que necesitas para tu primera visita.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Tu Checklist de Nuevo Paciente</h2>
          <div className="space-y-3">
            {checklist.map((item) => (
              <a key={item.text} href={item.href} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-brand-primary/30 hover:shadow-sm transition-all">
                <div className="w-6 h-6 rounded-full border-2 border-brand-primary/30 flex items-center justify-center shrink-0">
                  {item.done && <CheckCircle className="w-5 h-5 text-green-500" />}
                </div>
                <span className="text-foreground font-medium">{item.text}</span>
                <span className="ml-auto text-brand-primary text-sm">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Accesos Rapidos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="/agendar-cita" className="p-5 rounded-xl border border-border bg-card text-center hover:shadow-md transition-all">
              <Calendar className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Agendar Cita</p>
            </a>
            <a href="/formulario-paciente" className="p-5 rounded-xl border border-border bg-card text-center hover:shadow-md transition-all">
              <FileText className="w-8 h-8 text-brand-primary mx-auto mb-2" />
              <p className="font-semibold text-foreground">Formulario</p>
            </a>
            <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hola! Soy paciente nuevo y tengo una pregunta.")}`} target="_blank" rel="noopener noreferrer" className="p-5 rounded-xl border border-border bg-card text-center hover:shadow-md transition-all">
              <MessageCircle className="w-8 h-8 text-[#25D366] mx-auto mb-2" />
              <p className="font-semibold text-foreground">WhatsApp</p>
            </a>
          </div>
        </div>
      </section>

      <CTABanner title="Estamos listos para recibirte" subtitle="Agenda tu primera cita y comienza tu camino hacia una sonrisa saludable" />
    </>
  );
}