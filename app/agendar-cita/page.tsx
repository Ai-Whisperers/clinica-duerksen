"use client";

import { useState } from "react";
import { Calendar, Clock, User, MessageCircle, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const services = [
  "Consulta General", "Limpieza Dental", "Implantes Dentales", "Ortodoncia",
  "Blanqueamiento", "Endodoncia", "Protesis Dental", "Odontopediatria",
  "Cirugia Oral", "Emergencia", "Otro",
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    service: "", date: "", time: "", name: "", phone: "", email: "", notes: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function update(field: string, value: string) {
    setData((d) => ({ ...d, [field]: value }));
  }

  async function submit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-md text-center space-y-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h1 className="text-3xl font-bold text-foreground">Solicitud Enviada!</h1>
          <p className="text-muted-foreground">Recibimos tu solicitud para {data.service} el {data.date} a las {data.time}. Nos comunicaremos contigo para confirmar.</p>
          <a href="/" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:underline">Volver al inicio</a>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Agendar Cita</h1>
          <p className="text-lg text-muted-foreground mt-4">Solicita tu cita en 3 simples pasos. Te confirmaremos por WhatsApp.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-xl">
          {/* Progress */}
          <div className="flex items-center justify-between mb-10">
            {["Servicio", "Fecha y Hora", "Tus Datos"].map((label, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-brand-primary text-white" : "bg-muted text-muted-foreground"
                }`}>{step > i + 1 ? "✓" : i + 1}</div>
                <span className={`text-sm hidden sm:inline ${step === i + 1 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{label}</span>
              </div>
            ))}
          </div>

          {/* Step 1: Service */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Que servicio necesitas?</h2>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => { update("service", s); setStep(2); }}
                    className={`p-3 rounded-xl border text-sm text-left transition-all hover:border-brand-primary/50 ${
                      data.service === s ? "border-brand-primary bg-brand-primary/5" : "border-border"
                    }`}
                  >{s}</button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Date/Time */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">Cuando te gustaria venir?</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Fecha preferida</label>
                <Input type="date" value={data.date} onChange={(e) => update("date", e.target.value)}
                  min={new Date().toISOString().split("T")[0]} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Hora preferida</label>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((t) => (
                    <button key={t} onClick={() => update("time", t)}
                      className={`py-2 rounded-lg text-sm font-medium transition-colors ${
                        data.time === t ? "bg-brand-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(1)}>Atras</Button>
                <Button onClick={() => setStep(3)} disabled={!data.date || !data.time} className="flex-1 bg-brand-primary hover:bg-brand-primary/90">Continuar</Button>
              </div>
            </div>
          )}

          {/* Step 3: Personal Info */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Tus datos</h2>
              <div>
                <label className="block text-sm font-medium mb-1">Nombre completo *</label>
                <Input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Tu nombre" required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Telefono / WhatsApp *</label>
                <Input value={data.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+595 ..." required />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="tu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Notas adicionales</label>
                <Textarea value={data.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Algo que debamos saber..." rows={3} />
              </div>
              <div className="flex gap-3">
                <Button variant="outline" onClick={() => setStep(2)}>Atras</Button>
                <Button onClick={submit} disabled={!data.name || !data.phone || status === "loading"}
                  className="flex-1 bg-brand-primary hover:bg-brand-primary/90">
                  {status === "loading" ? "Enviando..." : "Enviar Solicitud"}
                </Button>
              </div>
              {status === "error" && <p className="text-sm text-red-500 text-center">Error al enviar. Intenta de nuevo.</p>}

              {/* Summary */}
              <div className="mt-6 p-4 rounded-xl bg-muted/50 text-sm space-y-1">
                <p><strong>Servicio:</strong> {data.service}</p>
                <p><strong>Fecha:</strong> {data.date}</p>
                <p><strong>Hora:</strong> {data.time}</p>
              </div>
            </div>
          )}

          <p className="text-xs text-muted-foreground text-center mt-8">
            Esta es una solicitud de cita, no una confirmacion. Te contactaremos por WhatsApp para confirmar disponibilidad.
          </p>
        </div>
      </section>
    </>
  );
}