export default function PatientsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Pacientes</h1>
        <span className="text-sm text-muted-foreground">Base de datos</span>
      </div>
      <div className="p-4 rounded-lg border border-border bg-card">
        <div className="flex gap-2 mb-4">
          <input placeholder="Buscar paciente..." className="flex-1 rounded-lg border border-border px-3 py-2 text-sm" />
          <select className="rounded-lg border border-border px-3 py-2 text-sm">
            <option>Todos</option>
            <option>Nuevos</option>
            <option>Regulares</option>
            <option>Inactivos</option>
          </select>
        </div>
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border text-left"><th className="pb-2 text-muted-foreground">Nombre</th><th className="pb-2 text-muted-foreground">Telefono</th><th className="pb-2 text-muted-foreground">Ultima Visita</th><th className="pb-2 text-muted-foreground">Estado</th></tr></thead>
          <tbody>
            <tr><td colSpan={4} className="py-8 text-center text-muted-foreground">Conectar Supabase para cargar pacientes</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}