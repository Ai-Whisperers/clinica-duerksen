"use client";

import { useState } from "react";
import { Calculator, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const treatments = [
  { name: "Consulta + Limpieza", price: 200000 },
  { name: "Restauracion (empaste)", price: 300000 },
  { name: "Endodoncia", price: 1150000 },
  { name: "Blanqueamiento", price: 1500000 },
  { name: "Carilla de Porcelana (x1)", price: 3000000 },
  { name: "Implante Dental", price: 7500000 },
  { name: "Corona de Porcelana", price: 2250000 },
  { name: "Ortodoncia Completa", price: 8500000 },
  { name: "Protesis Removible", price: 3000000 },
];

const installments = [3, 6, 12];

function formatGs(amount: number) {
  return `Gs. ${amount.toLocaleString("es-PY")}`;
}

export default function CalculatorPage() {
  const [selected, setSelected] = useState(treatments[0].name);
  const [months, setMonths] = useState(6);

  const treatment = treatments.find((t) => t.name === selected)!;
  const monthly = Math.ceil(treatment.price / months);

  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mt-4">
            <Calculator className="w-8 h-8 text-brand-primary" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Calculadora de Financiamiento</h1>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Calcula el costo mensual de tu tratamiento con nuestras opciones de financiamiento.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="p-8 rounded-2xl border border-border bg-card space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Selecciona tu tratamiento</label>
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-3 text-foreground bg-background"
              >
                {treatments.map((t) => (
                  <option key={t.name} value={t.name}>{t.name} — {formatGs(t.price)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Cuotas</label>
              <div className="flex gap-3">
                {installments.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMonths(m)}
                    className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                      months === m ? "bg-brand-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                  >
                    {m} meses
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-brand-primary/5 text-center">
              <p className="text-sm text-muted-foreground">Cuota mensual estimada</p>
              <p className="text-4xl font-bold text-brand-primary mt-2">{formatGs(monthly)}</p>
              <p className="text-sm text-muted-foreground mt-2">{months} cuotas de {formatGs(monthly)}</p>
              <p className="text-xs text-muted-foreground mt-1">Total: {formatGs(treatment.price)}</p>
            </div>

            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola! Me interesa el tratamiento de ${selected} en ${months} cuotas de ${formatGs(monthly)}. Me pueden dar mas informacion?`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar Financiamiento
            </a>

            <p className="text-xs text-muted-foreground text-center">
              * Los montos son referenciales. Sujeto a evaluacion. Consulta condiciones.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}