import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd, FAQJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/constants";
import { SERVICES, getServiceBySlug } from "@/lib/services-data";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const waMsg = encodeURIComponent(`Hola! Me gustaria consultar sobre ${service.title} en Clinica Duerksen`);
  const related = SERVICES.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Servicios", url: "https://clinicaduerksen.com.py/servicios" },
        { name: service.title },
      ]} />
      <FAQJsonLd items={service.faqs} />

      {/* Hero */}
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[
            { label: "Servicios", href: "/servicios" },
            { label: service.title },
          ]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            {service.title}
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl">
            {service.heroText}
          </p>
          <div className="mt-6">
            <a
              href={`${BUSINESS.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-white font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
            <div>
              <div className="p-6 rounded-xl bg-brand-primary/5 border border-brand-primary/10">
                <h3 className="font-semibold text-foreground mb-4">Beneficios</h3>
                <ul className="space-y-2">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-accent mt-2 shrink-0" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Como funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.steps.map((step, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-background border border-border">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Preguntas Frecuentes</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group p-6 rounded-xl border border-border">
                <summary className="font-semibold text-foreground cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <span className="text-brand-primary group-open:rotate-45 transition-transform text-xl">+</span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Otros Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/servicios/${r.slug}`}
                className="group p-6 rounded-xl border border-border bg-background hover:shadow-md transition-all"
              >
                <h3 className="font-semibold text-foreground group-hover:text-brand-primary transition-colors">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{r.heroText}</p>
                <span className="inline-flex items-center gap-1 mt-3 text-sm text-brand-primary font-medium">
                  Ver mas <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title={`Consulta sobre ${service.title}`} subtitle="Agenda tu cita y recibe atencion personalizada del Dr. Duerksen" />
    </>
  );
}