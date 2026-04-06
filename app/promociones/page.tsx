import type { Metadata } from "next";
import { Clock, MessageCircle, Gift, Percent } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Promociones y Ofertas Especiales",
  description: "Promociones vigentes en Clinica Duerksen. Descuentos en blanqueamiento, limpieza y mas. Asuncion, Paraguay.",
};

const promos = [
  {
    title: "Primera Consulta + Limpieza",
    desc: "Tu primera visita incluye evaluacion completa con radiografia digital y limpieza profesional.",
    price: "Gs. 150.000",
    original: "Gs. 250.000",
    badge: "Nuevos Pacientes",
    active: true,
  },
  {
    title: "Blanqueamiento Dental",
    desc: "Blanqueamiento laser profesional en una sola sesion. Resultados inmediatos hasta 8 tonos mas blanco.",
    price: "Gs. 1.200.000",
    original: "Gs. 1.800.000",
    badge: "33% OFF",
    active: true,
  },
  {
    title: "Pack Familiar",
    desc: "Trae a toda la familia: 4 limpiezas profesionales al precio de 3. Valido para familia directa.",
    price: "Gs. 450.000",
    original: "Gs. 600.000",
    badge: "4x3",
    active: true,
  },
];

export default function PromotionsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Promociones" },
      ]} />

      <section className="bg-brand-accent/10 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Promociones" }]} />
          <div className="flex items-center gap-3 mt-4">
            <Gift className="w-8 h-8 text-brand-accent" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Promociones</h1>
          </div>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Ofertas especiales para que cuides tu sonrisa sin preocuparte por el presupuesto.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl space-y-6">
          {promos.filter((p) => p.active).map((promo) => (
            <div key={promo.title} className="p-6 rounded-2xl border-2 border-brand-accent/30 bg-card relative overflow-hidden">
              <span className="absolute top-4 right-4 text-xs font-bold bg-brand-accent text-brand-dark px-3 py-1 rounded-full">
                {promo.badge}
              </span>
              <h2 className="text-2xl font-bold text-foreground pr-20">{promo.title}</h2>
              <p className="text-muted-foreground mt-2">{promo.desc}</p>
              <div className="flex items-center gap-3 mt-4">
                <span className="text-3xl font-bold text-brand-primary">{promo.price}</span>
                <span className="text-lg text-muted-foreground line-through">{promo.original}</span>
              </div>
              <a
                href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola! Me interesa la promocion de ${promo.title}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-white font-medium mt-4 hover:bg-[#20bd5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Aprovechar Oferta
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl text-sm text-muted-foreground">
          <p>Las promociones tienen disponibilidad limitada y pueden cambiar sin previo aviso.</p>
          <p className="mt-1">Consultanos para verificar vigencia.</p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}