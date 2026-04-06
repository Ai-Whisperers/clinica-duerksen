"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const reasons = [
  "Consulta General",
  "Agendar Cita",
  "Implantes Dentales",
  "Ortodoncia",
  "Estetica Dental",
  "Emergencia",
  "Otro",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [reason, setReason] = useState("Consulta General");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name") as string,
      phone: form.get("phone") as string,
      email: form.get("email") as string,
      reason,
      message: form.get("message") as string,
      honeypot: form.get("website") as string,
    };

    if (data.honeypot) {
      setStatus("success");
      return;
    }

    const newErrors: Record<string, string> = {};
    if (!data.name.trim()) newErrors.name = "Nombre es requerido";
    if (!data.phone.trim()) newErrors.phone = "Telefono es requerido";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="p-8 rounded-xl border border-green-200 bg-green-50 text-center">
        <div className="text-4xl mb-4">\u2705</div>
        <h3 className="text-lg font-semibold text-green-800">Mensaje enviado!</h3>
        <p className="text-green-700 mt-2">Nos pondremos en contacto contigo pronto.</p>
        <Button variant="link" onClick={() => setStatus("idle")} className="mt-4 text-green-600">
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nombre *</label>
        <Input id="name" name="name" type="text" required placeholder="Tu nombre completo" />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefono *</label>
        <Input id="phone" name="phone" type="tel" required placeholder="+595 ..." />
        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Motivo</label>
        <Select value={reason} onValueChange={setReason}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {reasons.map((r) => (
              <SelectItem key={r} value={r}>{r}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
        <Textarea id="message" name="message" rows={4} placeholder="Cuentanos como podemos ayudarte..." />
      </div>

      <Button type="submit" disabled={status === "loading"} className="w-full bg-brand-primary hover:bg-brand-primary/90">
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </Button>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">Error al enviar. Por favor intenta de nuevo.</p>
      )}
    </form>
  );
}