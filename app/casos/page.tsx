import type { Metadata } from "next";
import { MessageCircle, Clock, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Casos de Exito - Historias Reales",
  description: "Casos reales de transformacion dental en Clinica Duerksen. Implantes, ortodoncia, estetica. Asuncion, Paraguay.",
};

const cases = [
  {
    title: "Rehabilitacion Completa con Implantes",
    problem: "Paciente de 55 anos con perdida de multiples piezas dentales superiores. Usaba protesis removible incomoda que le impedia comer con normalidad.",
    diagnosis: "Edentulismo parcial superior con perdida osea moderada. Candidato ideal para implantes con regeneracion osea.",
    treatment: "Colocacion de 4 implantes de titanio, periodo de osteointegracion de 4 meses, seguido de protesis fija sobre implantes.",
    result: "Sonrisa completa y natural. El paciente puede comer cualquier alimento sin restricciones. Calidad de vida transformada.",
    duration: "6 meses",
    service: "Implantes Dentales",
  },
  {
    title: "Transformacion Estetica con Carillas",
    problem: "Paciente de 35 anos insatisfecha con el color y forma de sus dientes anteriores. Dientes amarillentos con espacios irregulares.",
    diagnosis: "Discromia dental, diastemas multiples y desgaste del borde incisal.",
    treatment: "10 carillas de porcelana ultrafinas en sector anterior superior e inferior. Preparacion minima del esmalte.",
    result: "Sonrisa completamente transformada. Dientes blancos, alineados y proporcionados. Aumento significativo de la autoestima.",
    duration: "3 semanas",
    service: "Estetica Dental",
  },
  {
    title: "Ortodoncia en Adulto",
    problem: "Paciente de 42 anos con apinamiento dental severo y mordida cruzada. Nunca habia usado ortodoncia por miedo.",
    diagnosis: "Maloclusion Clase II con apinamiento moderado y mordida cruzada posterior.",
    treatment: "Brackets esteticos ceramicos durante 18 meses con ajustes mensuales. Retenedores permanentes al finalizar.",
    result: "Alineacion perfecta y mordida corregida. El paciente lamenta no haberlo hecho antes.",
    duration: "18 meses",
    service: "Ortodoncia",
  },
];

export default function CasesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Casos de Exito" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Casos de Exito" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Casos de Exito
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Historias reales de transformacion. Cada caso muestra el proceso completo desde el diagnostico hasta el resultado final.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          {cases.map((c, i) => (
            <div key={i} className="rounded-2xl border border-border overflow-hidden">
              <div className="bg-brand-primary/5 p-6">
                <span className="inline-block text-xs font-medium bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded mb-2">
                  {c.service}
                </span>
                <h2 className="text-2xl font-bold text-foreground">{c.title}</h2>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  Duracion: {c.duration}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-red-600 text-sm uppercase">Problema</h3>
                  <p className="text-muted-foreground mt-1">{c.problem}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-orange-600 text-sm uppercase">Diagnostico</h3>
                  <p className="text-muted-foreground mt-1">{c.diagnosis}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-600 text-sm uppercase">Tratamiento</h3>
                  <p className="text-muted-foreground mt-1">{c.treatment}</p>
                </div>
                <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                  <h3 className="font-semibold text-green-700 text-sm uppercase flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Resultado
                  </h3>
                  <p className="text-green-800 mt-1">{c.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <p className="text-xs text-muted-foreground">
            Los casos presentados son reales pero los detalles han sido modificados para proteger la privacidad del paciente.
            Los resultados individuales pueden variar.
          </p>
        </div>
      </section>

      <CTABanner title="Tu caso puede ser el proximo" subtitle="Agenda tu consulta y descubre como podemos transformar tu sonrisa" />
    </>
  );
}