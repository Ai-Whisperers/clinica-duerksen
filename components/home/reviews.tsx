"use client";

import { Star } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const reviews = [
  { name: "Paciente Verificado", rating: 5, text: "Excelente atencion del Dr. Duerksen. Muy profesional y cuidadoso. Me hice implantes y el resultado es increible. 100% recomendado.", date: "Google Reviews" },
  { name: "Paciente Verificado", rating: 5, text: "La mejor clinica dental de Asuncion. Ambiente muy limpio y moderno. El doctor explica todo con paciencia. Mis hijos ya no tienen miedo al dentista.", date: "Google Reviews" },
  { name: "Paciente Verificado", rating: 5, text: "Me realice un blanqueamiento y quede encantada con el resultado. El equipo es muy amable y el consultorio muy comodo. Super recomendado.", date: "Google Reviews" },
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`p-6 rounded-xl border border-border bg-card transition-all duration-500 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex gap-1 mb-3">
        {[...Array(review.rating)].map((_, j) => (
          <Star key={j} className="w-4 h-4 fill-brand-accent text-brand-accent" />
        ))}
      </div>
      <p className="text-foreground leading-relaxed mb-4">
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-foreground">{review.name}</span>
        <span className="text-muted-foreground">{review.date}</span>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-4xl font-bold text-brand-accent">5.0</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-brand-accent text-brand-accent" />
              ))}
            </div>
          </div>
          <p className="text-muted-foreground">en Google Reviews</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps/place/Cl%C3%ADnica+Duerksen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary font-medium hover:underline"
          >
            Ver todas las resenas en Google →
          </a>
        </div>
      </div>
    </section>
  );
}