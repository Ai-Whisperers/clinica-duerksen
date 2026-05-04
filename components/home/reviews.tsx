"use client";

import { Star, Quote } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";

const reviews = [
  {
    name: "María González",
    initial: "M",
    rating: 5,
    text: "Excelente atención del Dr. Duerksen. Muy profesional y cuidadoso. Me hice implantes y el resultado es increíble. 100% recomendado.",
    service: "Implantes Dentales",
    date: "Hace 2 meses",
    color: "bg-brand-primary",
  },
  {
    name: "Carlos Benítez",
    initial: "C",
    rating: 5,
    text: "La mejor clínica dental de Asunción. Ambiente muy limpio y moderno. El doctor explica todo con paciencia. Mis hijos ya no tienen miedo al dentista.",
    service: "Odontopediatría",
    date: "Hace 1 mes",
    color: "bg-brand-secondary",
  },
  {
    name: "Ana Villalba",
    initial: "A",
    rating: 5,
    text: "Me realicé un blanqueamiento y quedé encantada con el resultado. El equipo es muy amable y el consultorio muy cómodo. Súper recomendado.",
    service: "Estética Dental",
    date: "Hace 3 semanas",
    color: "bg-brand-accent",
  },
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={`relative p-6 md:p-8 rounded-2xl border border-border bg-card transition-all duration-500 hover:shadow-lg hover:border-brand-primary/20 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-brand-primary/10" />
      
      <div className="flex gap-1 mb-4">
        {[...Array(review.rating)].map((_, j) => (
          <Star key={j} className="w-5 h-5 fill-brand-accent text-brand-accent" />
        ))}
      </div>
      
      <p className="text-foreground leading-relaxed mb-6 text-[15px]">
        &ldquo;{review.text}&rdquo;
      </p>
      
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-semibold text-sm`}>
          {review.initial}
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm">{review.name}</div>
          <div className="text-xs text-muted-foreground">{review.service} · {review.date}</div>
        </div>
      </div>
    </div>
  );
}

export function Reviews() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-brand-accent font-semibold mb-2 tracking-wide uppercase text-sm">Testimonios</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lo que dicen nuestros pacientes
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-5xl font-bold text-foreground">5.0</span>
            <div className="flex flex-col items-start">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">en Google Reviews</span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a
            href="https://www.google.com/maps/place/Cl%C3%ADnica+Duerksen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border-2 border-brand-primary/20 px-6 py-3 text-brand-primary font-medium hover:bg-brand-primary/5 transition-colors"
          >
            Ver todas las reseñas en Google →
          </a>
        </div>
      </div>
    </section>
  );
}
