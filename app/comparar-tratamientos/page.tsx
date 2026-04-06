import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Comparar Tratamientos Dentales",
  description: "Compara opciones de tratamiento dental: implantes vs puentes, brackets vs alineadores, y mas. Clinica Duerksen, Asuncion.",
};

const comparisons = [
  {
    title: "Implante vs Puente vs Protesis Removible",
    subtitle: "Para reemplazar dientes perdidos",
    options: [
      { name: "Implante Dental", duration: "3-6 meses", longevity: "Toda la vida", comfort: "Excelente", aesthetics: "Natural", cost: "Alto", pros: ["Mas duradero", "Preserva hueso", "No afecta vecinos"], cons: ["Mayor inversion inicial", "Tiempo de osteointegracion"] },
      { name: "Puente Fijo", duration: "2-3 semanas", longevity: "10-15 anos", comfort: "Muy bueno", aesthetics: "Buena", cost: "Medio", pros: ["Mas rapido", "Menor costo que implante"], cons: ["Requiere tallar dientes vecinos", "Riesgo de caries debajo"] },
      { name: "Protesis Removible", duration: "2-4 semanas", longevity: "5-8 anos", comfort: "Bueno", aesthetics: "Aceptable", cost: "Bajo", pros: ["Menor costo", "No invasivo"], cons: ["Menos comodo", "Puede moverse", "Requiere adhesivo"] },
    ],
  },
  {
    title: "Brackets Metalicos vs Ceramicos vs Alineadores",
    subtitle: "Para corregir la alineacion dental",
    options: [
      { name: "Brackets Metalicos", duration: "12-24 meses", longevity: "Permanente", comfort: "Bueno", aesthetics: "Visible", cost: "Bajo-Medio", pros: ["Mas efectivos en casos severos", "Menor costo"], cons: ["Visibles", "Restricciones alimentarias"] },
      { name: "Brackets Ceramicos", duration: "12-24 meses", longevity: "Permanente", comfort: "Bueno", aesthetics: "Discreta", cost: "Medio", pros: ["Casi invisibles", "Misma eficacia"], cons: ["Mas fragiles", "Pueden manchar"] },
      { name: "Alineadores Invisibles", duration: "12-18 meses", longevity: "Permanente", comfort: "Excelente", aesthetics: "Invisible", cost: "Alto", pros: ["Removibles", "Invisible", "Comodo"], cons: ["Requiere disciplina", "No para todos los casos"] },
    ],
  },
];

export default function ComparePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Comparar Tratamientos" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Comparar Tratamientos" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Compara Tratamientos
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            No sabes cual opcion es mejor para ti? Compara las alternativas y consultanos para una recomendacion personalizada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {comparisons.map((comp) => (
            <div key={comp.title}>
              <h2 className="text-2xl font-bold text-foreground mb-2">{comp.title}</h2>
              <p className="text-muted-foreground mb-6">{comp.subtitle}</p>
              <div className="overflow-x-auto">
                <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-brand-primary/5">
                      <th className="px-4 py-3 text-left font-semibold text-foreground">Caracteristica</th>
                      {comp.options.map((o) => (
                        <th key={o.name} className="px-4 py-3 text-left font-semibold text-brand-primary">{o.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: "Duracion", key: "duration" },
                      { label: "Longevidad", key: "longevity" },
                      { label: "Comodidad", key: "comfort" },
                      { label: "Estetica", key: "aesthetics" },
                      { label: "Costo", key: "cost" },
                    ].map((row) => (
                      <tr key={row.key} className="border-t border-border">
                        <td className="px-4 py-3 font-medium text-foreground">{row.label}</td>
                        {comp.options.map((o) => (
                          <td key={o.name} className="px-4 py-3 text-muted-foreground">{(o as any)[row.key]}</td>
                        ))}
                      </tr>
                    ))}
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-green-600">Ventajas</td>
                      {comp.options.map((o) => (
                        <td key={o.name} className="px-4 py-3">
                          <ul className="space-y-1">
                            {o.pros.map((p) => (
                              <li key={p} className="text-green-700 text-xs">+ {p}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-t border-border">
                      <td className="px-4 py-3 font-medium text-red-600">Desventajas</td>
                      {comp.options.map((o) => (
                        <td key={o.name} className="px-4 py-3">
                          <ul className="space-y-1">
                            {o.cons.map((c) => (
                              <li key={c} className="text-red-700 text-xs">- {c}</li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cual es mejor para ti?</h2>
          <p className="text-muted-foreground mb-6">Cada caso es unico. Consultanos para una evaluacion personalizada y te recomendaremos la mejor opcion.</p>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hola! Estoy comparando opciones de tratamiento y me gustaria una recomendacion personalizada")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Consultanos
          </a>
        </div>
      </section>

      <CTABanner />
    </>
  );
}