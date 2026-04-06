import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Baby, User, Users, Heart, Shield, Sparkles, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { CTABanner } from "@/components/layout/cta-banner";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "Educacion en Salud Dental",
  description: "Guias, consejos y recursos educativos sobre salud dental para toda la familia. Clinica Duerksen, Asuncion.",
};

const guides = [
  { icon: Shield, title: "Cepillado Correcto", desc: "Tecnica de Bass, 2 minutos, 2 veces al dia. Movimientos circulares suaves en angulo de 45 grados hacia la encia." },
  { icon: Heart, title: "Hilo Dental", desc: "Usa 45cm de hilo, enrolla en los dedos medios. Desliza suavemente entre cada diente formando una C. Una vez al dia." },
  { icon: Sparkles, title: "Enjuague Bucal", desc: "Complemento, no reemplazo del cepillado. Usa despues del cepillado, no comas ni bebas por 30 minutos." },
  { icon: AlertTriangle, title: "Alimentos a Evitar", desc: "Limita: azucares, refrescos, jugos acidos, caramelos pegajosos, hielo (no morder). Prefiere agua, frutas y verduras crunchy." },
];

const ageGroups = [
  { icon: Baby, title: "Bebes (0-2 anos)", href: "/ninos", tips: ["Limpiar encias con gasa humeda", "Primera visita al ano", "No dormir con biberon"] },
  { icon: Baby, title: "Ninos (3-12 anos)", href: "/ninos", tips: ["Cepillado supervisado", "Sellantes a los 6 anos", "Limitar dulces"] },
  { icon: User, title: "Adolescentes (13-17)", href: "/servicios/ortodoncia", tips: ["Ortodoncia si necesario", "Protector bucal deportivo", "Evitar piercings orales"] },
  { icon: Users, title: "Adultos (18-64)", href: "/servicios", tips: ["Control cada 6 meses", "Atencion a encias", "Blanqueamiento seguro"] },
  { icon: Users, title: "Adultos Mayores (65+)", href: "/servicios/protesis-dental", tips: ["Cuidado de protesis", "Xerostomia (boca seca)", "Revision de medicamentos"] },
];

const myths = [
  { myth: "El blanqueamiento dana el esmalte", fact: "FALSO. El blanqueamiento profesional es seguro y no dana el esmalte dental." },
  { myth: "Los dientes de leche no importan", fact: "FALSO. Mantienen espacio para los permanentes y son esenciales para masticar y hablar." },
  { myth: "Si no duele, no hay problema", fact: "FALSO. Muchas enfermedades dentales son silenciosas. Por eso son importantes los controles periodicos." },
  { myth: "Cepillar mas fuerte limpia mejor", fact: "FALSO. Cepillar con fuerza excesiva dana el esmalte y las encias. Movimientos suaves son mas efectivos." },
];

export default function EducationPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Inicio", url: "https://clinicaduerksen.com.py" },
        { name: "Educacion Dental" },
      ]} />

      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <Breadcrumb items={[{ label: "Educacion en Salud Dental" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Educacion Dental
          </h1>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Conocimiento es poder. Aprende a cuidar tu salud bucal con nuestras guias y recursos.
          </p>
        </div>
      </section>

      {/* Hygiene guides */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Higiene Dental Basica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {guides.map((g) => (
              <div key={g.title} className="flex gap-4 p-6 rounded-xl border border-border bg-card">
                <g.icon className="w-8 h-8 text-brand-primary shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground">{g.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age-specific */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Cuidado por Edad</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {ageGroups.map((ag) => (
              <Link key={ag.title} href={ag.href} className="p-5 rounded-xl border border-border bg-card hover:shadow-md transition-all">
                <ag.icon className="w-8 h-8 text-brand-accent mb-3" />
                <h3 className="font-semibold text-foreground text-sm mb-2">{ag.title}</h3>
                <ul className="space-y-1">
                  {ag.tips.map((t) => (
                    <li key={t} className="text-xs text-muted-foreground flex items-start gap-1">
                      <span className="text-brand-accent">•</span> {t}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Myths */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Mitos vs Realidad</h2>
          <div className="space-y-4">
            {myths.map((m, i) => (
              <div key={i} className="p-5 rounded-xl border border-border">
                <div className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-sm shrink-0 mt-0.5">MITO:</span>
                  <p className="text-foreground">&ldquo;{m.myth}&rdquo;</p>
                </div>
                <div className="flex items-start gap-3 mt-2">
                  <span className="text-green-600 font-bold text-sm shrink-0 mt-0.5">HECHO:</span>
                  <p className="text-muted-foreground">{m.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Tienes preguntas?" subtitle="Consultanos sobre cualquier duda de salud dental" />
    </>
  );
}