import type { Metadata } from "next";
import { Monitor, ScanLine, ShieldCheck, Droplets, Zap, Camera } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Tecnologia y Equipos",
  description: "Tecnologia dental de vanguardia en Clinica Duerksen. Radiografia digital, camara intraoral, laser y mas. Asuncion, Paraguay.",
};

const equipment = [
  { icon: Monitor, title: "Radiografia Digital", desc: "Imagenes de alta resolucion con 90% menos radiacion que las radiografias convencionales. Resultados instantaneos para diagnostico preciso." },
  { icon: Camera, title: "Camara Intraoral", desc: "Visualiza en tiempo real el interior de tu boca. Te mostramos exactamente lo que el doctor ve para que entiendas tu tratamiento." },
  { icon: ScanLine, title: "Localizador Apical Electronico", desc: "Precision milimetrica en tratamientos de conducto. Reduce el tiempo de procedimiento y mejora los resultados." },
  { icon: Zap, title: "Lampara de Fotocurado LED", desc: "Restauraciones que endurecen en segundos con luz LED de alta intensidad. Resultados duraderos y esteticos." },
  { icon: ShieldCheck, title: "Esterilizacion Autoclave", desc: "Todos nuestros instrumentos pasan por esterilizacion en autoclave clase B. Maxima seguridad y control de infecciones." },
  { icon: Droplets, title: "Ultrasonido para Limpieza", desc: "Limpieza profesional con ultrasonido que remueve tartaro sin danar el esmalte. Mas comodo y efectivo que los metodos tradicionales." },
];

export default function TechnologyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Tecnologia" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Tecnologia y Equipos" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Tecnologia de Vanguardia
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Invertimos en la mejor tecnologia para brindarte tratamientos mas rapidos, precisos y comodos.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq) => (
              <div key={eq.title} className="p-6 rounded-xl border border-border bg-card">
                <div className="w-12 h-12 rounded-lg bg-brand-primary/10 flex items-center justify-center mb-4">
                  <eq.icon className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{eq.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{eq.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">Por que importa la tecnologia?</h2>
          <p className="text-muted-foreground">
            La tecnologia moderna significa tratamientos mas rapidos, menos dolor, diagnosticos mas precisos
            y mejores resultados. En Clinica Duerksen, nos mantenemos actualizados para ofrecerte lo mejor.
          </p>
        </div>
      </section>

      <CTABanner title="Conoce nuestra clinica" subtitle="Agenda tu visita y comprueba la diferencia de la tecnologia moderna" />
    </>
  );
}