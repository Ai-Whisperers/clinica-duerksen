export default function RevenuePage() {
  const kpis = [
    { label: "Ingresos este mes", value: "—", note: "Conectar Supabase" },
    { label: "Pacientes nuevos", value: "—", note: "Este mes" },
    { label: "Promedio por tratamiento", value: "—", note: "Conectar Supabase" },
    { label: "Citas completadas", value: "—", note: "Este mes" },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Ingresos y Metricas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="p-5 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">{k.label}</p>
            <p className="text-3xl font-bold text-foreground mt-1">{k.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{k.note}</p>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-xl border border-border bg-card">
        <h2 className="font-semibold text-foreground mb-4">Ingresos por Servicio</h2>
        <p className="text-sm text-muted-foreground">Grafico de ingresos por tipo de tratamiento. Conectar Supabase + crear tabla payments para datos reales.</p>
      </div>
    </div>
  );
}