import type { Metadata } from "next";
import { Gift, Share2, Users, MessageCircle, CheckCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Programa de Referidos - Invita y Gana",
  description: "Refiere amigos y familiares a Clinica Duerksen y ambos reciben beneficios. Asuncion, Paraguay.",
};

const steps = [
  { icon: Share2, title: "Comparte", desc: "Envia el link de esta pagina a un amigo o familiar por WhatsApp." },
  { icon: Users, title: "Tu referido nos visita", desc: "Tu referido agenda su cita y menciona que viene de tu parte." },
  { icon: Gift, title: "Ambos ganan", desc: "Tu y tu referido reciben un descuento en su proximo tratamiento." },
];

export default function ReferralPage() {
  const shareMsg = encodeURIComponent(`Te recomiendo Clinica Duerksen para cualquier tema dental. El Dr. Duerksen es excelente! Agenda tu cita: ${BUSINESS.website}/contacto`);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Programa de Referidos" },
      ]} />

      <section className="bg-brand-accent/10 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Programa de Referidos" }]} />
          <div className="flex items-center gap-3 mt-4">
            <Gift className="w-8 h-8 text-brand-accent" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Invita y Gana</h1>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Refiere a un amigo o familiar y ambos reciben un descuento especial en su proximo tratamiento.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Como Funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon className="w-8 h-8 text-brand-accent" />
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-primary text-white flex items-center justify-center mx-auto mb-3 font-bold">{i+1}</div>
                <h3 className="font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-bold text-foreground mb-6">Comparte Ahora</h2>
          <a
            href={`https://wa.me/?text=${shareMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-white font-bold text-lg hover:bg-[#20bd5a] transition-colors shadow-lg"
          >
            <MessageCircle className="w-6 h-6" />
            Compartir por WhatsApp
          </a>
          <p className="text-xs text-muted-foreground mt-4">Tu referido debe mencionar tu nombre al agendar su cita.</p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}