"use client";

import { useState } from "react";
import { CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS } from "@/lib/constants";

export default function IntakePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = new FormData(e.currentTarget);
    const data = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/intake", {
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
          <h1 className="text-3xl font-bold text-foreground">Formulario Enviado!</h1>
          <p className="text-muted-foreground">Gracias por completar el formulario. Tu informacion sera revisada por nuestro equipo antes de tu cita.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-brand-primary/5 pt-28 pb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground">Formulario del Paciente</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">
            Completa este formulario antes de tu primera visita para agilizar tu atencion.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-bold text-foreground mb-4">Datos Personales</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Nombre *</label><Input name="firstName" required placeholder="Nombre" /></div>
                <div><label className="block text-sm font-medium mb-1">Apellido *</label><Input name="lastName" required placeholder="Apellido" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Cedula</label><Input name="cedula" placeholder="Numero de cedula" /></div>
                <div><label className="block text-sm font-medium mb-1">Fecha de Nacimiento</label><Input name="birthDate" type="date" /></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className="block text-sm font-medium mb-1">Telefono *</label><Input name="phone" type="tel" required placeholder="+595 ..." /></div>
                <div><label className="block text-sm font-medium mb-1">Email</label><Input name="email" type="email" placeholder="tu@email.com" /></div>
              </div>
            </fieldset>

            {/* Medical */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-bold text-foreground mb-4">Historial Medico</legend>
              <div><label className="block text-sm font-medium mb-1">Alergias conocidas</label><Input name="allergies" placeholder="Ej: penicilina, latex, anestesia..." /></div>
              <div><label className="block text-sm font-medium mb-1">Medicamentos actuales</label><Input name="medications" placeholder="Ej: aspirina, metformina..." /></div>
              <div><label className="block text-sm font-medium mb-1">Condiciones medicas</label><Textarea name="conditions" placeholder="Ej: diabetes, hipertension, problemas cardiacos..." rows={3} /></div>
              <div><label className="block text-sm font-medium mb-1">Embarazo / Lactancia</label><select name="pregnancy" className="w-full rounded-lg border border-border px-4 py-2.5"><option value="no">No</option><option value="yes">Si</option><option value="na">No aplica</option></select></div>
            </fieldset>

            {/* Dental */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-bold text-foreground mb-4">Historial Dental</legend>
              <div><label className="block text-sm font-medium mb-1">Ultima visita al dentista</label><Input name="lastVisit" placeholder="Ej: hace 6 meses, hace 2 anos..." /></div>
              <div><label className="block text-sm font-medium mb-1">Motivo de consulta</label><Textarea name="reason" placeholder="Describe el motivo de tu visita..." rows={3} /></div>
              <div><label className="block text-sm font-medium mb-1">Tiene miedo al dentista?</label><select name="anxiety" className="w-full rounded-lg border border-border px-4 py-2.5"><option value="none">No</option><option value="mild">Un poco</option><option value="moderate">Moderado</option><option value="severe">Mucho</option></select></div>
            </fieldset>

            {/* Insurance */}
            <fieldset className="space-y-4">
              <legend className="text-xl font-bold text-foreground mb-4">Seguro Medico</legend>
              <div><label className="block text-sm font-medium mb-1">Tiene seguro?</label><select name="insurance" className="w-full rounded-lg border border-border px-4 py-2.5"><option value="none">No tengo seguro</option><option value="ips">IPS</option><option value="private">Seguro privado</option></select></div>
              <div><label className="block text-sm font-medium mb-1">Nombre del seguro (si aplica)</label><Input name="insuranceName" placeholder="Nombre de la aseguradora" /></div>
            </fieldset>

            <div className="p-4 rounded-xl bg-muted/50 text-xs text-muted-foreground">
              Al enviar este formulario, autorizas a Clinica Duerksen a almacenar tu informacion medica de forma segura
              para brindarte una mejor atencion. Tu informacion es confidencial y protegida segun la Ley 6534/2020.
            </div>

            <Button type="submit" disabled={status === "loading"} className="w-full bg-brand-primary hover:bg-brand-primary/90 py-3">
              {status === "loading" ? "Enviando..." : "Enviar Formulario"}
            </Button>

            {status === "error" && <p className="text-sm text-red-500 text-center">Error al enviar. Intenta de nuevo.</p>}
          </form>
        </div>
      </section>
    </>
  );
}