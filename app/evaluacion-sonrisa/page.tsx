"use client";

import { useState } from "react";
import { Smile, MessageCircle, CheckCircle, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BUSINESS } from "@/lib/constants";

const concerns = [
  { id: "crooked", label: "Dientes torcidos o desalineados", suggestion: "Ortodoncia (brackets o alineadores)" },
  { id: "discolored", label: "Dientes amarillos o manchados", suggestion: "Blanqueamiento dental profesional" },
  { id: "missing", label: "Dientes faltantes", suggestion: "Implantes dentales" },
  { id: "gaps", label: "Espacios entre dientes", suggestion: "Carillas o ortodoncia" },
  { id: "gums", label: "Problemas de encias", suggestion: "Tratamiento periodontal" },
  { id: "chipped", label: "Dientes rotos o desgastados", suggestion: "Restauraciones o coronas" },
  { id: "bite", label: "Mordida incorrecta", suggestion: "Ortodoncia" },
  { id: "sensitivity", label: "Sensibilidad dental", suggestion: "Evaluacion y tratamiento" },
];

export default function SmileAssessmentPage() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function toggle(id: string) {
    setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  }

  const recommendations = concerns.filter((c) => selected.includes(c.id));

  if (step === 3) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-lg w-full space-y-6">
          <Smile className="w-16 h-16 text-brand-accent mx-auto" />
          <h1 className="text-3xl font-bold text-foreground text-center">Tu Plan de Sonrisa</h1>
          <p className="text-center text-muted-foreground">Basado en tus preocupaciones, te recomendamos:</p>
          <div className="space-y-3">
            {recommendations.map((r) => (
              <div key={r.id} className="flex items-start gap-3 p-4 rounded-xl border border-border">
                <CheckCircle className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{r.label}</p>
                  <p className="text-sm text-brand-primary">{r.suggestion}</p>
                </div>
              </div>
            ))}
          </div>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola! Hice la evaluacion de sonrisa. Me llamo ${name}, tel ${phone}. Me interesan: ${recommendations.map(r => r.suggestion).join(", ")}`)}`}
            target="_blank" rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Consultar con el Dr. Duerksen
          </a>
        </div>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-foreground text-center">Tus datos</h2>
          <p className="text-center text-muted-foreground">Para enviarte tu plan personalizado</p>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre" required />
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Tu telefono / WhatsApp" required />
          <Button onClick={() => setStep(3)} disabled={!name || !phone} className="w-full bg-brand-primary hover:bg-brand-primary/90">
            Ver mis recomendaciones
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3">
            <Smile className="w-8 h-8 text-brand-accent" />
            <h1 className="text-4xl font-bold text-foreground">Evaluacion de Sonrisa</h1>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Selecciona lo que te gustaria mejorar de tu sonrisa y te daremos recomendaciones personalizadas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-xl font-bold text-foreground mb-6">Que te gustaria mejorar?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {concerns.map((c) => (
              <button
                key={c.id}
                onClick={() => toggle(c.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selected.includes(c.id) ? "border-brand-primary bg-brand-primary/5 shadow-sm" : "border-border hover:border-brand-primary/30"
                }`}
              >
                <span className={`text-sm ${selected.includes(c.id) ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                  {selected.includes(c.id) ? "✓ " : ""}{c.label}
                </span>
              </button>
            ))}
          </div>
          <Button onClick={() => setStep(2)} disabled={selected.length === 0} className="w-full mt-8 bg-brand-primary hover:bg-brand-primary/90">
            Continuar ({selected.length} seleccionados)
          </Button>
        </div>
      </section>
    </>
  );
}