"use client";

import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";

const templates = [
  {
    category: "Saludos",
    items: [
      { title: "Saludo inicial", text: "Hola {nombre}! 👋 Gracias por contactar a Clinica Duerksen. En que podemos ayudarte?" },
      { title: "Bienvenida nuevo paciente", text: "Bienvenido/a a Clinica Duerksen, {nombre}! 😊 Estamos encantados de recibirte. Para agendar tu primera cita, necesitamos:\n- Nombre completo\n- Motivo de consulta\n- Horario de preferencia\nTe esperamos!" },
    ],
  },
  {
    category: "Citas",
    items: [
      { title: "Confirmar cita", text: "Hola {nombre}! ✅ Tu cita esta confirmada:\n📅 {fecha}\n🕐 {hora}\n👨‍⚕️ Dr. Victor Duerksen\n\nRecuerda traer tu cedula y llegar 10 minutos antes. Nos vemos!" },
      { title: "Recordatorio 24h", text: "Hola {nombre}! 📋 Te recordamos tu cita manana {fecha} a las {hora} en Clinica Duerksen. Si necesitas cambiarla, avisanos con anticipacion. Te esperamos!" },
      { title: "Recordatorio 2h", text: "Hola {nombre}! ⏰ Tu cita es en 2 horas ({hora}). Te esperamos en Clinica Duerksen. Si surge algo, avisanos. 😊" },
      { title: "Reagendar", text: "Hola {nombre}! Lamentamos informarte que debemos reagendar tu cita. Te ofrecemos los siguientes horarios:\n1. {opcion1}\n2. {opcion2}\n3. {opcion3}\nCual te queda mejor?" },
    ],
  },
  {
    category: "Consultas de Precios",
    items: [
      { title: "Respuesta general", text: "Hola {nombre}! Los precios de tratamientos varian segun cada caso. Para darte un presupuesto preciso, necesitamos una evaluacion clinica. La consulta inicial tiene un costo de Gs. 150.000. Quieres agendar?" },
      { title: "Financiamiento", text: "En Clinica Duerksen ofrecemos financiamiento en 3, 6 o 12 cuotas para tratamientos mayores. Aceptamos efectivo, tarjetas y transferencias. Quieres mas detalles?" },
    ],
  },
  {
    category: "Post-Tratamiento",
    items: [
      { title: "Seguimiento dia 1", text: "Hola {nombre}! 😊 Como te sientes despues de tu tratamiento de ayer? Si tienes alguna molestia o duda, no dudes en escribirnos." },
      { title: "Solicitud de resena", text: "Hola {nombre}! Esperamos que tu experiencia en Clinica Duerksen haya sido positiva. ⭐ Nos ayudaria mucho si pudieras dejarnos una resena en Google: [link]. Solo toma 30 segundos. Gracias!" },
      { title: "Recordatorio 6 meses", text: "Hola {nombre}! 📅 Han pasado 6 meses desde tu ultima visita. Es hora de tu control y limpieza semestral. Quieres agendar? Te esperamos!" },
    ],
  },
  {
    category: "Fuera de Horario",
    items: [
      { title: "Auto-respuesta", text: "Hola! 🕐 Gracias por contactar a Clinica Duerksen. Nuestro horario de atencion es Lunes a Viernes de 08:00 a 12:00 y 14:30 a 18:00. Te responderemos a primera hora. Si es una emergencia, describe tu situacion y te contactaremos lo antes posible." },
    ],
  },
];

function TemplateCard({ title, text }: { title: string; text: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="p-4 rounded-xl border border-border bg-card">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-foreground text-sm">{title}</h3>
        <button onClick={copy} className="text-muted-foreground hover:text-foreground transition-colors">
          {copied ? <CheckCircle className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
      <pre className="text-sm text-muted-foreground whitespace-pre-wrap font-sans">{text}</pre>
    </div>
  );
}

export default function TemplatesPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Plantillas de WhatsApp</h1>
        <p className="text-muted-foreground mt-1">Respuestas predefinidas para usar en WhatsApp Business. Haz clic en el icono de copiar para usar.</p>
      </div>

      {templates.map((cat) => (
        <div key={cat.category}>
          <h2 className="text-lg font-bold text-foreground mb-3">{cat.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cat.items.map((item) => (
              <TemplateCard key={item.title} title={item.title} text={item.text} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}