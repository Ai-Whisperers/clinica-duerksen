"use client";

import { useState } from "react";
import { AlertTriangle, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const symptoms = [
  {
    name: "Dolor de muela",
    conditions: [
      { name: "Caries dental", urgency: "media", desc: "Deterioro del diente por bacterias. Requiere restauracion." },
      { name: "Pulpitis (inflamacion del nervio)", urgency: "alta", desc: "El nervio del diente esta inflamado. Puede necesitar endodoncia." },
      { name: "Absceso dental", urgency: "urgente", desc: "Infeccion con pus. Necesita tratamiento inmediato." },
    ],
  },
  {
    name: "Encias que sangran",
    conditions: [
      { name: "Gingivitis", urgency: "media", desc: "Inflamacion de encias. Reversible con limpieza profesional y mejor higiene." },
      { name: "Periodontitis", urgency: "alta", desc: "Enfermedad avanzada de encias. Puede causar perdida de dientes si no se trata." },
    ],
  },
  {
    name: "Sensibilidad al frio/calor",
    conditions: [
      { name: "Retraccion gingival", urgency: "baja", desc: "La encia se retrae exponiendo la raiz. Pasta desensibilizante puede ayudar." },
      { name: "Caries incipiente", urgency: "media", desc: "Deterioro temprano. Restauracion simple puede resolverlo." },
      { name: "Fractura dental", urgency: "alta", desc: "Micro-fractura que expone la dentina. Requiere evaluacion." },
    ],
  },
  {
    name: "Mal aliento persistente",
    conditions: [
      { name: "Mala higiene oral", urgency: "baja", desc: "Mejorar cepillado, hilo dental y limpieza de lengua." },
      { name: "Enfermedad periodontal", urgency: "media", desc: "Las bolsas periodontales acumulan bacterias que causan olor." },
      { name: "Caries avanzada", urgency: "media", desc: "Caries grandes pueden generar mal olor." },
    ],
  },
  {
    name: "Diente flojo o movil",
    conditions: [
      { name: "Periodontitis avanzada", urgency: "urgente", desc: "Perdida osea severa. Atencion inmediata necesaria." },
      { name: "Traumatismo", urgency: "urgente", desc: "Golpe que aflojo el diente. Consultar inmediatamente." },
    ],
  },
  {
    name: "Hinchazon en la cara/encia",
    conditions: [
      { name: "Absceso dental", urgency: "urgente", desc: "Infeccion que requiere drenaje y antibioticos. Consultar YA." },
      { name: "Pericoronaritis", urgency: "alta", desc: "Inflamacion alrededor de muela del juicio parcialmente eruptada." },
    ],
  },
];

const urgencyColors: Record<string, { bg: string; text: string; label: string }> = {
  baja: { bg: "bg-green-100", text: "text-green-700", label: "Puede esperar" },
  media: { bg: "bg-yellow-100", text: "text-yellow-700", label: "Consultar pronto" },
  alta: { bg: "bg-orange-100", text: "text-orange-700", label: "Consultar esta semana" },
  urgente: { bg: "bg-red-100", text: "text-red-700", label: "Consultar HOY" },
};

export default function SymptomsPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const symptom = symptoms.find((s) => s.name === selected);

  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Verificador de Sintomas</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Selecciona tu sintoma para ver posibles causas y nivel de urgencia. Esto NO reemplaza una consulta profesional.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-xl font-bold text-foreground mb-6">Que sintoma tienes?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {symptoms.map((s) => (
              <button
                key={s.name}
                onClick={() => setSelected(s.name)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selected === s.name ? "border-brand-primary bg-brand-primary/5 shadow-sm" : "border-border hover:border-brand-primary/30"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>

          {symptom && (
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Posibles causas de: {symptom.name}</h2>
              {symptom.conditions.map((c) => {
                const u = urgencyColors[c.urgency];
                return (
                  <div key={c.name} className="p-5 rounded-xl border border-border">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded ${u.bg} ${u.text}`}>
                        {u.label}
                      </span>
                      <h3 className="font-semibold text-foreground">{c.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                );
              })}

              <div className="mt-8 p-5 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                <div className="flex items-start gap-2 mb-3">
                  <AlertTriangle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">
                    Este verificador es solo orientativo y NO reemplaza un diagnostico profesional.
                    Siempre consulta con tu dentista para un diagnostico preciso.
                  </p>
                </div>
                <a
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola! Tengo ${symptom.name} y me gustaria agendar una consulta.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-2.5 text-white text-sm font-medium hover:bg-brand-primary/90 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar con el Dr. Duerksen
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}