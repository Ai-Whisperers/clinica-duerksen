"use client";

import { useState } from "react";
import { Star, MessageCircle, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS } from "@/lib/constants";

export default function ReviewPage() {
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-md text-center space-y-6">
          <ThumbsUp className="w-16 h-16 text-brand-primary mx-auto" />
          <h1 className="text-3xl font-bold text-foreground">Gracias por tu opinion!</h1>
          <p className="text-muted-foreground">Tu feedback nos ayuda a mejorar constantemente.</p>
          <a href="/" className="text-brand-primary font-medium hover:underline">Volver al inicio</a>
        </div>
      </div>
    );
  }

  // High score → Google Review
  if (score !== null && score >= 7) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-md text-center space-y-6">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-brand-accent text-brand-accent" />
            ))}
          </div>
          <h1 className="text-3xl font-bold text-foreground">Nos alegra que hayas tenido una buena experiencia!</h1>
          <p className="text-muted-foreground">Te tomaria 30 segundos dejarnos una resena en Google? Nos ayuda enormemente.</p>
          <a
            href="https://www.google.com/maps/place/Cl%C3%ADnica+Duerksen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-4 text-white font-bold text-lg hover:bg-brand-primary/90 transition-colors"
          >
            <Star className="w-5 h-5" />
            Dejar Resena en Google
          </a>
          <button onClick={() => setSubmitted(true)} className="block mx-auto text-sm text-muted-foreground hover:underline">
            No, gracias
          </button>
        </div>
      </div>
    );
  }

  // Low score → internal feedback
  if (score !== null && score < 7) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full space-y-6">
          <h1 className="text-2xl font-bold text-foreground text-center">Lamentamos que tu experiencia no haya sido perfecta</h1>
          <p className="text-muted-foreground text-center">Nos gustaria saber como podemos mejorar. Tu comentario es confidencial.</p>
          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Cuentanos que podemos mejorar..."
            rows={5}
          />
          <Button onClick={() => setSubmitted(true)} className="w-full bg-brand-primary hover:bg-brand-primary/90">
            Enviar Feedback
          </Button>
        </div>
      </div>
    );
  }

  // NPS Question
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full text-center space-y-8">
        <h1 className="text-3xl font-bold text-foreground">Como fue tu experiencia?</h1>
        <p className="text-muted-foreground">Del 1 al 10, que tan probable es que nos recomiendes a un amigo?</p>
        <div className="grid grid-cols-10 gap-1">
          {[1,2,3,4,5,6,7,8,9,10].map((n) => (
            <button
              key={n}
              onClick={() => setScore(n)}
              className={`py-3 rounded-lg font-bold text-sm transition-colors ${
                n <= 6 ? "bg-red-100 text-red-700 hover:bg-red-200" :
                n <= 8 ? "bg-yellow-100 text-yellow-700 hover:bg-yellow-200" :
                "bg-green-100 text-green-700 hover:bg-green-200"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
        <div className="flex justify-between text-xs text-muted-foreground px-1">
          <span>Nada probable</span>
          <span>Muy probable</span>
        </div>
      </div>
    </div>
  );
}