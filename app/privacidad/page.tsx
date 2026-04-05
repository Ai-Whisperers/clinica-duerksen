import type { Metadata } from "next";
import { Breadcrumb } from "@/components/layout/breadcrumb";

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description: "Politica de privacidad de Clinica Duerksen. Como recopilamos, usamos y protegemos tu informacion personal.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Politica de Privacidad" }]} />
          <h1 className="text-4xl font-bold text-foreground mt-4">Politica de Privacidad</h1>
          <p className="text-muted-foreground mt-2">Ultima actualizacion: Abril 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl prose prose-lg">
          <h2 className="text-2xl font-bold text-foreground">1. Informacion que Recopilamos</h2>
          <p className="text-muted-foreground mb-6">Recopilamos informacion que nos proporcionas directamente: nombre, telefono, email y motivo de consulta a traves de nuestro formulario de contacto. Tambien recopilamos datos de uso del sitio web a traves de cookies analiticas.</p>

          <h2 className="text-2xl font-bold text-foreground">2. Uso de la Informacion</h2>
          <p className="text-muted-foreground mb-6">Usamos tu informacion para: responder a tus consultas, agendar citas, enviar recordatorios de citas y mejorar nuestros servicios. No vendemos ni compartimos tu informacion con terceros.</p>

          <h2 className="text-2xl font-bold text-foreground">3. WhatsApp</h2>
          <p className="text-muted-foreground mb-6">Al contactarnos por WhatsApp, tu numero de telefono y mensajes son procesados por WhatsApp (Meta Platforms). Te recomendamos revisar la politica de privacidad de WhatsApp.</p>

          <h2 className="text-2xl font-bold text-foreground">4. Cookies</h2>
          <p className="text-muted-foreground mb-6">Utilizamos cookies esenciales para el funcionamiento del sitio y cookies analiticas (Google Analytics) para entender como se usa nuestro sitio. Puedes desactivar las cookies en la configuracion de tu navegador.</p>

          <h2 className="text-2xl font-bold text-foreground">5. Seguridad</h2>
          <p className="text-muted-foreground mb-6">Implementamos medidas de seguridad para proteger tu informacion personal. Nuestro sitio utiliza HTTPS para encriptar la comunicacion.</p>

          <h2 className="text-2xl font-bold text-foreground">6. Tus Derechos</h2>
          <p className="text-muted-foreground mb-6">De acuerdo con la Ley 6534/2020 de Proteccion de Datos Personales de Paraguay, tienes derecho a acceder, rectificar, cancelar u oponerte al tratamiento de tus datos personales. Contactanos a {"{"}BUSINESS.email{"}"} para ejercer estos derechos.</p>

          <h2 className="text-2xl font-bold text-foreground">7. Contacto</h2>
          <p className="text-muted-foreground mb-6">Para consultas sobre esta politica: info@clinicaduerksen.com.py</p>
        </div>
      </section>
    </>
  );
}