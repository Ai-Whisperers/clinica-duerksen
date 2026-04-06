import { BUSINESS } from "@/lib/constants";

export default function AdminSettings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Configuracion</h1>

      <div className="p-6 rounded-xl border border-border bg-card space-y-4">
        <h2 className="font-semibold text-foreground">Informacion del Negocio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div><span className="text-muted-foreground">Nombre:</span> <span className="text-foreground font-medium">{BUSINESS.name}</span></div>
          <div><span className="text-muted-foreground">Doctor:</span> <span className="text-foreground font-medium">{BUSINESS.doctor}</span></div>
          <div><span className="text-muted-foreground">Telefono:</span> <span className="text-foreground font-medium">{BUSINESS.phone}</span></div>
          <div><span className="text-muted-foreground">Email:</span> <span className="text-foreground font-medium">{BUSINESS.email}</span></div>
          <div><span className="text-muted-foreground">Horario:</span> <span className="text-foreground font-medium">{BUSINESS.hoursFormatted}</span></div>
          <div><span className="text-muted-foreground">Ciudad:</span> <span className="text-foreground font-medium">{BUSINESS.address.city}, {BUSINESS.address.country}</span></div>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Para cambiar estos datos, editar lib/constants.ts (o Supabase settings cuando este conectado).</p>
      </div>
    </div>
  );
}