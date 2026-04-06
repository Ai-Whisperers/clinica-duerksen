import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export const metadata: Metadata = {
  title: "Galeria de Resultados - Antes y Despues",
  description: "Galeria de casos reales antes y despues de tratamientos dentales en Clinica Duerksen, Asuncion, Paraguay.",
};

const cases = [
  { id: 1, title: "Implantes Dentales", category: "implantes", beforePlaceholder: "Antes: dientes faltantes", afterPlaceholder: "Despues: sonrisa completa" },
  { id: 2, title: "Blanqueamiento Dental", category: "estetica", beforePlaceholder: "Antes: dientes amarillentos", afterPlaceholder: "Despues: sonrisa brillante" },
  { id: 3, title: "Ortodoncia", category: "ortodoncia", beforePlaceholder: "Antes: dientes desalineados", afterPlaceholder: "Despues: alineacion perfecta" },
  { id: 4, title: "Carillas de Porcelana", category: "estetica", beforePlaceholder: "Antes: dientes desgastados", afterPlaceholder: "Despues: sonrisa de pelicula" },
  { id: 5, title: "Protesis sobre Implantes", category: "implantes", beforePlaceholder: "Antes: edentulismo parcial", afterPlaceholder: "Despues: protesis fija" },
  { id: 6, title: "Restauracion Estetica", category: "estetica", beforePlaceholder: "Antes: restauraciones antiguas", afterPlaceholder: "Despues: restauraciones naturales" },
];

const categories = [
  { value: "all", label: "Todos" },
  { value: "implantes", label: "Implantes" },
  { value: "estetica", label: "Estetica" },
  { value: "ortodoncia", label: "Ortodoncia" },
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Galeria" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Galeria de Resultados" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Galeria Antes y Despues
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Resultados reales de nuestros pacientes. Cada sonrisa cuenta una historia de transformacion.
          </p>
        </div>
      </section>

      <GalleryGrid cases={cases} categories={categories} />

      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <p className="text-xs text-muted-foreground">
            Todas las fotos son publicadas con el consentimiento expreso del paciente.
            Los resultados pueden variar segun cada caso individual.
          </p>
        </div>
      </section>

      <CTABanner title="Quieres resultados como estos?" subtitle="Agenda tu consulta y disenaremos tu plan de tratamiento personalizado" />
    </>
  );
}