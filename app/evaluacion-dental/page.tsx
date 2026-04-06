"use client";

import { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const questions = [
  { q: "Con que frecuencia visitas al dentista?", options: [
    { text: "Cada 6 meses", score: 0 },
    { text: "Una vez al ano", score: 1 },
    { text: "Solo cuando tengo dolor", score: 2 },
    { text: "Hace mas de 2 anos que no voy", score: 3 },
  ]},
  { q: "Tus encias sangran al cepillarte?", options: [
    { text: "Nunca", score: 0 },
    { text: "Raramente", score: 1 },
    { text: "A veces", score: 2 },
    { text: "Frecuentemente", score: 3 },
  ]},
  { q: "Cuantas veces al dia te cepillas?", options: [
    { text: "3 veces (despues de cada comida)", score: 0 },
    { text: "2 veces (manana y noche)", score: 0 },
    { text: "1 vez", score: 2 },
    { text: "No todos los dias", score: 3 },
  ]},
  { q: "Usas hilo dental?", options: [
    { text: "Diariamente", score: 0 },
    { text: "Varias veces por semana", score: 1 },
    { text: "Raramente", score: 2 },
    { text: "Nunca", score: 3 },
  ]},
  { q: "Consumes bebidas azucaradas o dulces?", options: [
    { text: "Raramente", score: 0 },
    { text: "Algunas veces por semana", score: 1 },
    { text: "Diariamente", score: 2 },
    { text: "Varias veces al dia", score: 3 },
  ]},
  { q: "Fumas o usas tabaco?", options: [
    { text: "No, nunca", score: 0 },
    { text: "Deje de fumar", score: 1 },
    { text: "Ocasionalmente", score: 2 },
    { text: "Si, diariamente", score: 3 },
  ]},
  { q: "Tienes sensibilidad al frio o calor?", options: [
    { text: "No", score: 0 },
    { text: "Leve", score: 1 },
    { text: "Moderada", score: 2 },
    { text: "Severa", score: 3 },
  ]},
];

function getRisk(score: number) {
  if (score <= 5) return { level: "Bajo", color: "green", icon: CheckCircle, msg: "Tu salud dental parece estar bien! Sigue con tus buenos habitos y no olvides tu control cada 6 meses." };
  if (score <= 11) return { level: "Medio", color: "yellow", icon: AlertTriangle, msg: "Hay algunas areas que podrias mejorar. Te recomendamos agendar una consulta para una evaluacion completa." };
  return { level: "Alto", color: "red", icon: AlertTriangle, msg: "Tu salud dental necesita atencion. Te recomendamos agendar una consulta lo antes posible para prevenir problemas mayores." };
}

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<number[]>([]);
  const [current, setCurrent] = useState(0);
  const [done, setDone] = useState(false);

  function answer(score: number) {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      setDone(true);
    }
  }

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const risk = getRisk(totalScore);

  if (done) {
    const RiskIcon = risk.icon;
    const colors: Record<string, string> = {
      green: "bg-green-50 border-green-200 text-green-800",
      yellow: "bg-yellow-50 border-yellow-200 text-yellow-800",
      red: "bg-red-50 border-red-200 text-red-800",
    };

    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-lg w-full text-center space-y-6">
          <RiskIcon className={`w-16 h-16 mx-auto ${risk.color === "green" ? "text-green-500" : risk.color === "yellow" ? "text-yellow-500" : "text-red-500"}`} />
          <h1 className="text-3xl font-bold text-foreground">Tu Nivel de Riesgo: {risk.level}</h1>
          <div className={`p-6 rounded-xl border ${colors[risk.color]}`}>
            <p>{risk.msg}</p>
          </div>
          <a
            href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(`Hola! Hice la evaluacion de riesgo dental y mi resultado fue: ${risk.level}. Me gustaria agendar una consulta.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-8 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            Agendar Consulta
          </a>
          <button onClick={() => { setAnswers([]); setCurrent(0); setDone(false); }} className="block mx-auto text-sm text-muted-foreground hover:underline">
            Repetir evaluacion
          </button>
        </div>
      </div>
    );
  }

  const progress = ((current) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-lg w-full space-y-8">
        <div>
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
            <span>Pregunta {current + 1} de {questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-brand-primary transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-foreground">{questions[current].q}</h2>

        <div className="space-y-3">
          {questions[current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => answer(opt.score)}
              className="w-full text-left p-4 rounded-xl border border-border bg-card hover:border-brand-primary/50 hover:shadow-sm transition-all"
            >
              {opt.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}