"use client";

import { useState } from "react";

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name") as string,
      phone: form.get("phone") as string,
      email: form.get("email") as string,
      reason: form.get("reason") as string,
      message: form.get("message") as string,
      honeypot: form.get("website") as string, // honeypot
    };

    // Honeypot check
    if (data.honeypot) {
      setStatus("success");
      return;
    }

    // Basic validation
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
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <div className="hidden" aria-hidden="true">
        <input type="text" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">Nombre *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground bg-background focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors"
          placeholder="Tu nombre completo"
        />
        {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">Telefono *</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground bg-background focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors"
          placeholder="+595 ..."
        />
        {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground bg-background focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors"
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label htmlFor="reason" className="block text-sm font-medium text-foreground mb-1">Motivo</label>
        <select
          id="reason"
          name="reason"
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground bg-background focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors"
        >
          {reasons.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">Mensaje</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-border px-4 py-2.5 text-foreground bg-background focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary outline-none transition-colors resize-none"
          placeholder="Cuentanos como podemos ayudarte..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Enviando..." : "Enviar Mensaje"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500 text-center">Error al enviar. Por favor intenta de nuevo.</p>
      )}
    </form>
  );
}