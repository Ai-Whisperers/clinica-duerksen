"use client";

import { useState } from "react";
import { Star, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS } from "@/lib/constants";

const questions = [
  "Como calificarias la atencion recibida?",
  "Como calificarias la limpieza de la clinica?",
  "Como calificarias la puntualidad?",
  "Como calificarias la explicacion del tratamiento?",
  "Recomendarias Clinica Duerksen a un amigo?",
];

export default function SurveyPage() {
  const [ratings, setRatings] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [comment, setComment] = useState("");
  const [done, setDone] = useState(false);

  function rate(score: number) {
    const newRatings = [...ratings, score];
    setRatings(newRatings);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setCurrent(questions.length); // show comment step
    }
  }

  function submit() {
    // TODO: save to Supabase
    console.log("Survey:", { ratings, comment, avg: ratings.reduce((a, b) => a + b, 0) / ratings.length });
    setDone(true);
  }

  if (done) {
    const avg = ratings.reduce((a, b) => a + b, 0) / ratings.length;
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-md text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold text-foreground">Gracias!</h1>
          <p className="text-muted-foreground">Tu opinion nos ayuda a mejorar. Calificacion promedio: {avg.toFixed(1)}/5</p>
          {avg >= 4 && (
            <a href="/resena" className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-medium">
              <Star className="w-4 h-4" /> Dejar resena en Google
            </a>
          )}
        </div>
      </div>
    );
  }

  // Comment step
  if (current >= questions.length) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-md w-full space-y-6">
          <h2 className="text-2xl font-bold text-foreground text-center">Algun comentario adicional?</h2>
          <Textarea value={comment} onChange={(e) => setComment(e.target.value)} placeholder="Tu comentario es opcional pero muy valioso..." rows={4} />
          <div className="flex gap-3">
            <Button variant="outline" onClick={submit} className="flex-1">Saltar</Button>
            <Button onClick={submit} className="flex-1 bg-brand-primary hover:bg-brand-primary/90">Enviar</Button>
          </div>
        </div>
      </div>
    );
  }

  const progress = (current / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{current + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-brand-primary transition-all rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>
        <h2 className="text-xl font-bold text-foreground text-center">{questions[current]}</h2>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((n) => (
            <button key={n} onClick={() => rate(n)} className="group flex flex-col items-center gap-1">
              <Star className={`w-10 h-10 transition-colors ${n <= (ratings[current] || 0) ? "fill-brand-accent text-brand-accent" : "text-muted-foreground/30 group-hover:text-brand-accent/50"}`} />
              <span className="text-xs text-muted-foreground">{n}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}