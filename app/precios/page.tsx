import type { Metadata } from "next";
import { MessageCircle, CreditCard, Building2, Banknote, Smartphone } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Precios y Formas de Pago",
  description: "Precios de tratamientos dentales y formas de pago en Clinica Duerksen. Efectivo, tarjetas, transferencias, financiamiento. Asuncion, Paraguay.",
};

const treatments = [
  { name: "Consulta General + Limpieza", range: "Gs. 150.000 - 250.000" },
  { name: "Restauracion Simple (empaste)", range: "Gs. 200.000 - 400.000" },
  { name: "Endodoncia (tratamiento de conducto)", range: "Gs. 800.000 - 1.500.000" },
  { name: "Extraccion Simple", range: "Gs. 200.000 - 350.000" },
  { name: "Extraccion de Muela del Juicio", range: "Gs. 500.000 - 1.000.000" },
  { name: "Blanqueamiento Dental Profesional", range: "Gs. 1.000.000 - 2.000.000" },
  { name: "Carilla de Porcelana (por pieza)", range: "Gs. 2.000.000 - 4.000.000" },
  { name: "Implante Dental (pieza + corona)", range: "Gs. 5.000.000 - 10.000.000" },
  { name: "Ortodoncia (tratamiento completo)", range: "Gs. 5.000.000 - 12.000.000" },
  { name: "Protesis Removible Completa", range: "Gs. 2.000.000 - 4.000.000" },
  { name: "Corona de Porcelana", range: "Gs. 1.500.000 - 3.000.000" },
];

const paymentMethods = [
  { icon: Banknote, name: "Efectivo", desc: "Guaranies y dolares" },
  { icon: CreditCard, name: "Tarjetas", desc: "Visa, Mastercard, debito" },
  { icon: Building2, name: "Transferencia", desc: "Bancaria directa" },
  { icon: Smartphone, name: "QR / Billetera", desc: "Pago movil" },
];

export default function PricingPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Precios" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Precios y Formas de Pago" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Precios y Formas de Pago
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Precios referenciales de nuestros tratamientos. Cada caso es unico — contactanos para un presupuesto personalizado.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="rounded-xl border border-border overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-brand-primary/5">
                  <th className="text-left px-6 py-4 font-semibold text-foreground">Tratamiento</th>
                  <th className="text-right px-6 py-4 font-semibold text-foreground">Precio Referencial</th>
                </tr>
              </thead>
              <tbody>
                {treatments.map((t, i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                    <td className="px-6 py-4 text-foreground">{t.name}</td>
                    <td className="px-6 py-4 text-right text-brand-primary font-medium whitespace-nowrap">{t.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-4 text-center">
            * Los precios son referenciales y pueden variar segun la complejidad de cada caso. Consulta por tu presupuesto personalizado.
          </p>
          <div className="text-center mt-6">
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hola! Me gustaria consultar precios para un tratamiento")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Consulta tu presupuesto
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">Formas de Pago</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {paymentMethods.map((m) => (
              <div key={m.name} className="p-4 rounded-xl border border-border bg-card text-center">
                <m.icon className="w-8 h-8 text-brand-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground text-sm">{m.name}</h3>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-xl bg-brand-accent/5 border border-brand-accent/20">
            <h3 className="font-semibold text-foreground mb-2">Financiamiento Disponible</h3>
            <p className="text-muted-foreground text-sm">
              Para tratamientos de mayor envergadura ofrecemos planes de pago en cuotas. Consultanos sobre opciones de financiamiento y cobertura de seguros (IPS y seguros privados).
            </p>
          </div>
        </div>
      </section>

      <CTABanner title="Solicita tu presupuesto personalizado" subtitle="Cada sonrisa es unica. Contactanos para un plan a tu medida." />
    </>
  );
}