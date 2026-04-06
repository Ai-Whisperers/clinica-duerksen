"use client";

import { useState } from "react";
import { Plus, Trash2, Calculator, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BUSINESS } from "@/lib/constants";

const serviceOptions = [
  { name: "Consulta + Limpieza", price: 200000 },
  { name: "Restauracion", price: 300000 },
  { name: "Endodoncia", price: 1150000 },
  { name: "Extraccion Simple", price: 275000 },
  { name: "Extraccion Muela Juicio", price: 750000 },
  { name: "Blanqueamiento", price: 1500000 },
  { name: "Carilla Porcelana", price: 3000000 },
  { name: "Implante Dental", price: 7500000 },
  { name: "Corona Porcelana", price: 2250000 },
  { name: "Ortodoncia", price: 8500000 },
  { name: "Protesis Removible", price: 3000000 },
];

interface PlanItem { service: string; price: number; notes: string; }

function formatGs(n: number) { return `Gs. ${n.toLocaleString("es-PY")}`; }

export default function TreatmentPlanPage() {
  const [patientName, setPatientName] = useState("");
  const [items, setItems] = useState<PlanItem[]>([]);
  const [selected, setSelected] = useState(serviceOptions[0].name);

  function addItem() {
    const svc = serviceOptions.find((s) => s.name === selected);
    if (svc) setItems([...items, { service: svc.name, price: svc.price, notes: "" }]);
  }

  function removeItem(i: number) { setItems(items.filter((_, idx) => idx !== i)); }

  function updateNotes(i: number, notes: string) {
    const updated = [...items];
    updated[i].notes = notes;
    setItems(updated);
  }

  const total = items.reduce((sum, item) => sum + item.price, 0);

  function shareWhatsApp() {
    const plan = items.map((item, i) => `${i + 1}. ${item.service}: ${formatGs(item.price)}${item.notes ? ` (${item.notes})` : ""}`).join("\n");
    const msg = `Plan de Tratamiento - Clinica Duerksen\n\nPaciente: ${patientName}\n\n${plan}\n\nTotal: ${formatGs(total)}\n\nCuotas: 3x ${formatGs(Math.ceil(total / 3))} | 6x ${formatGs(Math.ceil(total / 6))} | 12x ${formatGs(Math.ceil(total / 12))}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Constructor de Plan de Tratamiento</h1>

      <div>
        <label className="block text-sm font-medium mb-1">Paciente</label>
        <Input value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Nombre del paciente" />
      </div>

      <div className="flex gap-2">
        <select value={selected} onChange={(e) => setSelected(e.target.value)}
          className="flex-1 rounded-lg border border-border px-3 py-2 text-sm">
          {serviceOptions.map((s) => (
            <option key={s.name} value={s.name}>{s.name} — {formatGs(s.price)}</option>
          ))}
        </select>
        <Button onClick={addItem} className="bg-brand-primary hover:bg-brand-primary/90">
          <Plus className="w-4 h-4 mr-1" /> Agregar
        </Button>
      </div>

      {items.length > 0 && (
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="p-4 rounded-xl border border-border flex items-start gap-3">
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-foreground">{item.service}</span>
                  <span className="font-bold text-brand-primary">{formatGs(item.price)}</span>
                </div>
                <Input placeholder="Notas (opcional)" value={item.notes} onChange={(e) => updateNotes(i, e.target.value)} className="mt-2 text-sm" />
              </div>
              <button onClick={() => removeItem(i)} className="text-red-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
            </div>
          ))}

          <div className="p-4 rounded-xl bg-brand-primary/5 border border-brand-primary/20">
            <div className="flex justify-between items-center">
              <span className="font-bold text-foreground text-lg">Total</span>
              <span className="font-bold text-brand-primary text-2xl">{formatGs(total)}</span>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-sm">
              <div className="p-2 rounded-lg bg-background"><p className="text-muted-foreground">3 cuotas</p><p className="font-bold text-foreground">{formatGs(Math.ceil(total / 3))}</p></div>
              <div className="p-2 rounded-lg bg-background"><p className="text-muted-foreground">6 cuotas</p><p className="font-bold text-foreground">{formatGs(Math.ceil(total / 6))}</p></div>
              <div className="p-2 rounded-lg bg-background"><p className="text-muted-foreground">12 cuotas</p><p className="font-bold text-foreground">{formatGs(Math.ceil(total / 12))}</p></div>
            </div>
          </div>

          <Button onClick={shareWhatsApp} disabled={!patientName} className="w-full bg-[#25D366] hover:bg-[#20bd5a]">
            <Share2 className="w-4 h-4 mr-2" /> Compartir por WhatsApp
          </Button>
        </div>
      )}
    </div>
  );
}