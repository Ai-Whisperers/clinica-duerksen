import type { Metadata } from "next";
import { Star, MessageCircle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Testimonios de Pacientes",
  description: "Lee lo que nuestros pacientes dicen sobre Clinica Duerksen. 5.0 estrellas en Google Reviews. Asuncion, Paraguay.",
};

const testimonials = [
  { name: "Paciente Verificado", rating: 5, text: "Excelente atencion del Dr. Duerksen. Muy profesional y cuidadoso. Me hice implantes y el resultado es increible. 100% recomendado.", treatment: "Implantes Dentales", source: "Google Reviews", featured: true },
  { name: "Paciente Verificado", rating: 5, text: "La mejor clinica dental de Asuncion. Ambiente muy limpio y moderno. El doctor explica todo con paciencia. Mis hijos ya no tienen miedo al dentista.", treatment: "Odontopediatria", source: "Google Reviews", featured: true },
  { name: "Paciente Verificado", rating: 5, text: "Me realice un blanqueamiento y quede encantada con el resultado. El equipo es muy amable y el consultorio muy comodo. Super recomendado.", treatment: "Estetica Dental", source: "Google Reviews", featured: true },
  { name: "Paciente Verificado", rating: 5, text: "Tenia mucho miedo al dentista pero el Dr. Duerksen me hizo sentir muy comoda. El tratamiento de conducto fue completamente indoloro. Gracias!", treatment: "Endodoncia", source: "Google Reviews", featured: false },
  { name: "Paciente Verificado", rating: 5, text: "Llevo 15 anos atendiendome con el Dr. Duerksen. Confianza total. Siempre actualizado con las ultimas tecnicas y tecnologias.", treatment: "Odontologia General", source: "Google Reviews", featured: false },
  { name: "Paciente Verificado", rating: 5, text: "Mi hija necesitaba ortodoncia y el Dr. Duerksen fue increiblemente paciente. Los resultados superaron nuestras expectativas.", treatment: "Ortodoncia", source: "Google Reviews", featured: false },
  { name: "Paciente Verificado", rating: 5, text: "Profesional de primera. Las carillas que me puso lucen completamente naturales. Mi sonrisa cambio por completo.", treatment: "Carillas Dentales", source: "Google Reviews", featured: false },
  { name: "Paciente Verificado", rating: 5, text: "Atencion rapida en emergencia dental. Me rompi un diente un viernes y me atendio ese mismo dia. Eternamente agradecido.", treatment: "Emergencia Dental", source: "Google Reviews", featured: false },
];

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Testimonios" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Testimonios" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Testimonios de Pacientes
          </h1>
          <div className="flex items-center gap-3 mt-6">
            <span className="text-5xl font-bold text-brand-accent">5.0</span>
            <div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-1">en Google Reviews</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`p-6 rounded-xl border bg-card ${t.featured ? "border-brand-accent/30 bg-brand-accent/5" : "border-border"}`}
              >
                {t.featured && (
                  <span className="inline-block text-xs font-medium bg-brand-accent/10 text-brand-accent px-2 py-0.5 rounded mb-3">Destacado</span>
                )}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-accent text-brand-accent" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-semibold text-foreground">{t.name}</span>
                    <span className="text-muted-foreground"> — {t.treatment}</span>
                  </div>
                  <span className="text-muted-foreground text-xs">{t.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-2xl font-bold text-foreground mb-4">Tu opinion nos importa</h2>
          <p className="text-muted-foreground mb-6">Si eres paciente, nos encantaria escuchar tu experiencia.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.google.com/maps/place/Cl%C3%ADnica+Duerksen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
            >
              Dejar resena en Google
            </a>
            <a
              href={`${BUSINESS.whatsapp}?text=${encodeURIComponent("Hola! Quiero dejar un comentario sobre mi experiencia")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}