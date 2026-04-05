import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";

export const metadata: Metadata = {
  title: "Terminos de Servicio",
  description: "Terminos y condiciones de uso del sitio web de Clinica Duerksen.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Terminos de Servicio" }]} />
          <h1 className="text-4xl font-bold text-foreground mt-4">Terminos de Servicio</h1>
          <p className="text-muted-foreground mt-2">Ultima actualizacion: Abril 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <h2 className="text-2xl font-bold text-foreground">1. Uso del Sitio Web</h2>
          <p className="text-muted-foreground mb-6">Este sitio web es propiedad de Clinica Duerksen. Al acceder y usar este sitio, aceptas estos terminos y condiciones.</p>

          <h2 className="text-2xl font-bold text-foreground">2. Solicitudes de Citas</h2>
          <p className="text-muted-foreground mb-6">Las solicitudes de citas realizadas a traves de este sitio web o WhatsApp no constituyen una cita confirmada. La clinica se comunicara contigo para confirmar fecha y hora.</p>

          <h2 className="text-2xl font-bold text-foreground">3. Informacion Medica</h2>
          <p className="text-muted-foreground mb-6">El contenido de este sitio es solo informativo y no reemplaza una consulta profesional. Siempre consulta con un profesional de salud dental para diagnostico y tratamiento.</p>

          <h2 className="text-2xl font-bold text-foreground">4. Propiedad Intelectual</h2>
          <p className="text-muted-foreground mb-6">Todo el contenido de este sitio (textos, imagenes, diseno) es propiedad de Clinica Duerksen y esta protegido por leyes de propiedad intelectual.</p>

          <h2 className="text-2xl font-bold text-foreground">5. Limitacion de Responsabilidad</h2>
          <p className="text-muted-foreground mb-6">Clinica Duerksen no sera responsable por danos derivados del uso de este sitio web o de la informacion contenida en el.</p>

          <h2 className="text-2xl font-bold text-foreground">6. Contacto</h2>
          <p className="text-muted-foreground mb-6">Para consultas: info@clinicaduerksen.com.py</p>
        </div>
      </section>
    </>
  );
}