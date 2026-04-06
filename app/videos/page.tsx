import type { Metadata } from "next";
import { Play, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Videos - Educacion y Tratamientos",
  description: "Videos educativos sobre salud dental, tratamientos y la clinica del Dr. Victor Duerksen. Asuncion, Paraguay.",
};

const videos = [
  { title: "Conoce al Dr. Victor Duerksen", category: "Clinica", desc: "Presentacion del Dr. Duerksen y su equipo." },
  { title: "Recorrido por la Clinica", category: "Clinica", desc: "Conoce nuestras instalaciones y tecnologia." },
  { title: "Que Esperar en tu Primera Visita", category: "Pacientes", desc: "Guia paso a paso de tu primera consulta." },
  { title: "Todo sobre Implantes Dentales", category: "Tratamientos", desc: "Como funcionan, cuanto duran y como se colocan." },
  { title: "Brackets vs Alineadores", category: "Tratamientos", desc: "Compara opciones de ortodoncia." },
  { title: "Blanqueamiento: Lo que Debes Saber", category: "Tratamientos", desc: "Mitos, realidades y resultados." },
  { title: "Cuidado Dental para Ninos", category: "Consejos", desc: "Tips para padres sobre higiene dental infantil." },
  { title: "Emergencia Dental: Que Hacer", category: "Consejos", desc: "Primeros auxilios para urgencias dentales." },
];

export default function VideosPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Videos" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Videos" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">Videos</h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Videos educativos y de la clinica. Proximamente disponibles en nuestro canal de YouTube.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.title} className="rounded-xl border border-border overflow-hidden bg-card">
                <div className="aspect-video bg-brand-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center">
                    <Play className="w-8 h-8 text-brand-primary ml-1" />
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium bg-brand-primary/10 text-brand-primary px-2 py-0.5 rounded">
                    {v.category}
                  </span>
                  <h3 className="font-semibold text-foreground mt-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            Los videos estan en produccion. Suscribete a nuestro canal de YouTube para ser notificado cuando esten disponibles.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}