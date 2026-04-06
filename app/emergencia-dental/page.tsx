import type { Metadata } from "next";
import { Phone, MessageCircle, AlertTriangle, Clock, ShieldCheck } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Emergencia Dental - Atencion Inmediata",
  description: "Emergencia dental en Asuncion? Contacta a Clinica Duerksen inmediatamente. Dolor agudo, traumatismos, fracturas dentales.",
};

const emergencies = [
  { title: "Diente Caido por Golpe", steps: ["Recoge el diente por la corona (NO la raiz)", "Enjuagalo suavemente con agua (NO frotes)", "Intenta recolocarlo en su lugar suavemente", "Si no puedes, guardalo en leche o saliva", "CONTACTANOS INMEDIATAMENTE — cada minuto cuenta"], urgency: "CRITICA" },
  { title: "Dolor de Muela Intenso", steps: ["Toma ibuprofeno 400mg (NO aspirina en la encia)", "Aplica hielo en la mejilla (15 min on, 15 min off)", "Enjuaga con agua tibia con sal", "Contactanos para atencion prioritaria"], urgency: "ALTA" },
  { title: "Diente Roto o Fracturado", steps: ["Guarda el fragmento si lo tienes (en leche)", "Enjuaga la boca con agua tibia", "Aplica gasa si hay sangrado", "Contactanos lo antes posible"], urgency: "ALTA" },
  { title: "Hinchazon o Absceso", steps: ["NO apliques calor en la zona", "Enjuaga con agua tibia con sal", "Toma ibuprofeno para el dolor", "Contactanos — las infecciones requieren tratamiento urgente"], urgency: "ALTA" },
  { title: "Sangrado que No Para", steps: ["Aplica presion con gasa limpia", "Muerde la gasa por 20 minutos sin soltar", "Si no para, contactanos inmediatamente", "Si es profuso, acude a urgencias del hospital"], urgency: "ALTA" },
];

export default function EmergencyPage() {
  const waMsg = encodeURIComponent("EMERGENCIA DENTAL: Necesito atencion urgente");

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Emergencia Dental" },
      ]} />

      <section className="bg-red-50 pt-28 pb-12 border-b-4 border-red-500">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Emergencia Dental" }]} />
          <div className="flex items-center gap-3 mt-4">
            <AlertTriangle className="w-10 h-10 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-bold text-red-900">
              Emergencia Dental
            </h1>
          </div>
          <p className="text-lg text-red-800/70 mt-4 max-w-2xl">
            Si tienes una emergencia dental, contactanos inmediatamente. Cada minuto puede ser critico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={`tel:${BUSINESS.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 text-white font-bold text-lg hover:bg-red-700 transition-colors shadow-lg"
            >
              <Phone className="w-6 h-6" />
              LLAMAR AHORA: {BUSINESS.phone}
            </a>
            <a
              href={`${BUSINESS.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-white font-bold text-lg hover:bg-[#20bd5a] transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp URGENTE
            </a>
          </div>

          <div className="flex items-center gap-2 mt-6 text-sm text-red-800/60">
            <Clock className="w-4 h-4" />
            <span>Horario: Lunes a Viernes 08:00 - 12:00 / 14:30 - 18:00</span>
          </div>
          <p className="text-sm text-red-800/60 mt-1">
            Fuera de horario: envia WhatsApp y te responderemos lo antes posible.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Que Hacer Mientras Tanto</h2>
          <div className="space-y-6">
            {emergencies.map((em) => (
              <div key={em.title} className="p-6 rounded-xl border border-border">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded ${em.urgency === "CRITICA" ? "bg-red-100 text-red-700" : "bg-orange-100 text-orange-700"}`}>
                    {em.urgency}
                  </span>
                  <h3 className="font-bold text-foreground text-lg">{em.title}</h3>
                </div>
                <ol className="space-y-2">
                  {em.steps.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm">
                      <span className="w-6 h-6 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary font-bold shrink-0 text-xs">{i + 1}</span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-red-50">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <ShieldCheck className="w-10 h-10 text-red-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-red-900 mb-2">Importante</h2>
          <p className="text-red-800/70 text-sm">
            Esta pagina es solo una guia de primeros auxilios. NO reemplaza la atencion profesional.
            Si la situacion es grave (sangrado profuso, dificultad para respirar, trauma facial severo),
            acude directamente a la urgencia del hospital mas cercano.
          </p>
        </div>
      </section>
    </>
  );
}