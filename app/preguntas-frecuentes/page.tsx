import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description: "Respuestas a las preguntas mas frecuentes sobre nuestros servicios dentales, citas, pagos y mas. Clinica Duerksen, Asuncion.",
};

const faqCategories = [
  {
    name: "General",
    items: [
      { question: "Donde esta ubicada la clinica?", answer: "Estamos ubicados en Asuncion, Paraguay, en el area de Santisima Trinidad. Contactanos para direccion exacta y como llegar." },
      { question: "Cual es el horario de atencion?", answer: "Lunes a Viernes de 08:00 a 12:00 y de 14:30 a 18:00. Sabados y domingos cerrado." },
      { question: "Necesito sacar cita previa?", answer: "Si, recomendamos agendar tu cita por WhatsApp o telefono para garantizar disponibilidad y evitar tiempos de espera." },
      { question: "Atienden emergencias?", answer: "Si, durante horario de atencion. Para emergencias fuera de horario, envianos un WhatsApp y te responderemos lo antes posible." },
    ],
  },
  {
    name: "Tratamientos",
    items: [
      { question: "Que servicios ofrecen?", answer: "Ofrecemos: odontologia general, implantes dentales, ortodoncia, estetica dental, endodoncia, protesis, periodoncia, odontopediatria, cirugia oral y emergencias dentales." },
      { question: "Los tratamientos son dolorosos?", answer: "No. Utilizamos anestesia moderna y tecnicas minimamente invasivas. La mayoria de nuestros pacientes se sorprenden de lo comodo que es el tratamiento." },
      { question: "Cuanto dura un implante dental?", answer: "Con cuidado adecuado, los implantes pueden durar toda la vida. La corona sobre el implante puede necesitar reemplazo despues de 15-20 anos." },
      { question: "Que edad minima para ortodoncia?", answer: "Recomendamos una primera evaluacion ortodontica a los 7 anos. El tratamiento activo puede comenzar a cualquier edad." },
    ],
  },
  {
    name: "Citas",
    items: [
      { question: "Como agendo una cita?", answer: "Puedes agendar por WhatsApp (mas rapido), por telefono al +595 21 298 755, o completando nuestro formulario de contacto." },
      { question: "Puedo cancelar o cambiar mi cita?", answer: "Si, te pedimos avisar con al menos 24 horas de anticipacion para poder reasignar el horario." },
      { question: "Cuanto dura una consulta?", answer: "Una consulta general dura aproximadamente 30-45 minutos. Los tratamientos especializados varian segun el procedimiento." },
    ],
  },
  {
    name: "Pagos",
    items: [
      { question: "Que formas de pago aceptan?", answer: "Aceptamos efectivo, tarjetas de credito y debito, y transferencias bancarias." },
      { question: "Aceptan seguro medico?", answer: "Aceptamos IPS y consultanos sobre tu seguro privado especifico para verificar cobertura." },
      { question: "Ofrecen financiamiento?", answer: "Si, ofrecemos opciones de pago en cuotas para tratamientos de mayor envergadura. Consultanos para mas detalles." },
    ],
  },
  {
    name: "Emergencias",
    items: [
      { question: "Que hago si se me rompe un diente?", answer: "Guarda el fragmento en leche o saliva, aplica hielo en la zona y contactanos inmediatamente." },
      { question: "Tengo dolor de muela fuerte, que hago?", answer: "Toma ibuprofeno 400mg y contactanos por WhatsApp inmediatamente para atencion prioritaria." },
      { question: "Se me salio un diente por un golpe, que hago?", answer: "NO toques la raiz. Enjuagalo suavemente, intenta recolocarlo o guardalo en leche. Contactanos INMEDIATAMENTE — cada minuto cuenta." },
    ],
  },
];

const allFaqs = faqCategories.flatMap((c) => c.items);

export default function FAQPage() {
  const waMsg = encodeURIComponent("Hola! Tengo una pregunta sobre los servicios de Clinica Duerksen");

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Preguntas Frecuentes" },
      ]} />
      <FAQJsonLd items={allFaqs} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Preguntas Frecuentes" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Respuestas a las consultas mas comunes sobre nuestros servicios.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {faqCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.name}</h2>
              <div className="space-y-3">
                {category.items.map((faq, i) => (
                  <details key={i} className="group p-5 rounded-xl border border-border bg-card">
                    <summary className="font-medium text-foreground cursor-pointer list-none flex items-center justify-between gap-4">
                      {faq.question}
                      <span className="text-brand-primary group-open:rotate-45 transition-transform text-xl shrink-0">+</span>
                    </summary>
                    <p className="mt-3 text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">No encontraste tu respuesta?</h2>
          <p className="text-muted-foreground mb-6">Envianos tu pregunta por WhatsApp y te responderemos a la brevedad.</p>
          <a
            href={`${BUSINESS.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-8 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Preguntanos por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}