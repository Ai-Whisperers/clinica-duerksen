import type { Metadata } from "next";
import Link from "next/link";
import { Smile, Shield, Sparkles, Heart, Stethoscope, Zap, Baby, ScanLine, Siren, ShieldCheck, MessageCircle, CreditCard } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Servicios Odontologicos en Asuncion",
  description: "Implantes dentales, ortodoncia, estetica dental, endodoncia y mas. Servicios odontologicos completos en Clinica Duerksen, Asuncion, Paraguay.",
};

const services = [
  { icon: Stethoscope, title: "Odontologia General y Preventiva", slug: "odontologia-general", desc: "Limpiezas profesionales, restauraciones, sellantes y cuidado preventivo para mantener tu salud bucal optima. La prevencion es la mejor medicina.", benefits: ["Limpiezas profesionales", "Restauraciones esteticas", "Sellantes dentales", "Control periodico"] },
  { icon: Smile, title: "Implantes Dentales", slug: "implantes-dentales", desc: "Restauracion permanente de piezas perdidas con implantes de titanio de ultima generacion. Resultados naturales y duraderos que devuelven tu sonrisa completa.", benefits: ["Titanio biocompatible", "Resultados permanentes", "Aspecto natural", "Funcion completa"] },
  { icon: Shield, title: "Ortodoncia", slug: "ortodoncia", desc: "Correccion de la mordida y alineacion dental con brackets metalicos, esteticos o alineadores invisibles. Tratamientos personalizados para todas las edades.", benefits: ["Brackets metalicos y esteticos", "Alineadores invisibles", "Todas las edades", "Seguimiento personalizado"] },
  { icon: Sparkles, title: "Estetica Dental", slug: "estetica-dental", desc: "Blanqueamiento dental profesional, carillas de porcelana y diseno de sonrisa digital. Transforma tu sonrisa con resultados espectaculares.", benefits: ["Blanqueamiento laser", "Carillas de porcelana", "Diseno digital de sonrisa", "Resultados inmediatos"] },
  { icon: Heart, title: "Endodoncia", slug: "endodoncia", desc: "Tratamientos de conducto modernos e indoloros. Salvamos dientes danados con tecnicas avanzadas y anestesia de ultima generacion.", benefits: ["Procedimiento indoloro", "Tecnologia avanzada", "Salva el diente natural", "Recuperacion rapida"] },
  { icon: Zap, title: "Protesis Dental", slug: "protesis-dental", desc: "Protesis fijas y removibles de alta calidad que devuelven funcionalidad y estetica. Coronas, puentes y dentaduras con materiales premium.", benefits: ["Coronas y puentes", "Protesis removibles", "Materiales premium", "Ajuste perfecto"] },
  { icon: ScanLine, title: "Periodoncia", slug: "periodoncia", desc: "Tratamiento especializado de encias. Prevencion y tratamiento de gingivitis y periodontitis para mantener una base sana para tus dientes.", benefits: ["Limpieza profunda", "Tratamiento de gingivitis", "Cirugia periodontal", "Mantenimiento preventivo"] },
  { icon: Baby, title: "Odontopediatria", slug: "odontopediatria", desc: "Cuidado dental especializado para ninos en un ambiente amigable y sin miedo. Creamos habitos saludables desde temprana edad.", benefits: ["Ambiente amigable", "Tecnicas sin dolor", "Prevencion temprana", "Educacion dental"] },
  { icon: Siren, title: "Cirugia Oral", slug: "cirugia-oral", desc: "Extracciones complejas, cirugia de terceros molares y procedimientos quirurgicos con tecnologia y precision.", benefits: ["Extracciones complejas", "Terceros molares", "Cirugia menor", "Recuperacion guiada"] },
  { icon: ShieldCheck, title: "Emergencias Dentales", slug: "emergencias-dentales", desc: "Atencion rapida para dolor agudo, traumatismos, fracturas y otras urgencias dentales. Contactanos inmediatamente.", benefits: ["Atencion prioritaria", "Dolor agudo", "Traumatismos dentales", "Fracturas"] },
];

export default function ServicesPage() {
  const waMsg = encodeURIComponent("Hola! Me gustaria consultar sobre un tratamiento en Clinica Duerksen");

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Servicios" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Servicios" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Servicios Odontologicos
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Atencion dental integral con tecnologia de vanguardia para toda la familia.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          {services.map((s, i) => (
            <div key={s.slug} id={s.slug} className={`grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 rounded-2xl ${i % 2 === 0 ? "bg-muted/30" : "bg-background"}`}>
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 justify-center">
                <a
                  href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola! Me gustaria consultar sobre ${s.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Don't know what you need */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">No sabes que tratamiento necesitas?</h2>
          <p className="text-muted-foreground mb-6">No te preocupes, estamos para ayudarte. Contactanos y te asesoraremos sobre la mejor opcion para tu caso.</p>
          <a
            href={`${BUSINESS.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Contactanos
          </a>
        </div>
      </section>

      {/* Payment */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <CreditCard className="w-10 h-10 text-brand-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Formas de Pago</h2>
          <p className="text-muted-foreground mb-2">Aceptamos efectivo, tarjetas de credito/debito y transferencias bancarias.</p>
          <p className="text-muted-foreground">Consulta por opciones de financiamiento y cobertura de seguros (IPS y otros).</p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}