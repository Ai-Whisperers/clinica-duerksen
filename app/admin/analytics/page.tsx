export default function AdminAnalytics() {
  const metrics = [
    { label: "Visitas este mes", value: "—", change: "—", note: "Conectar GA4 API" },
    { label: "Formularios recibidos", value: "—", change: "—", note: "Conectar Supabase" },
    { label: "Citas solicitadas", value: "—", change: "—", note: "Conectar Supabase" },
    { label: "Tasa de conversion", value: "—", change: "—", note: "Visitas → WhatsApp" },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold text-foreground">Analytics</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.label} className="p-5 rounded-xl border border-border bg-card">
            <p className="text-sm text-muted-foreground">{m.label}</p>
            <p className="text-3xl font-bold text-foreground mt-1">{m.value}</p>
            <p className="text-xs text-muted-foreground mt-2">{m.note}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="font-semibold text-foreground mb-4">Paginas mas visitadas</h2>
          <p className="text-sm text-muted-foreground">Conectar Google Analytics 4 API para datos reales.</p>
        </div>
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="font-semibold text-foreground mb-4">Fuentes de trafico</h2>
          <p className="text-sm text-muted-foreground">Conectar Google Analytics 4 API para datos reales.</p>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-sm">
        <p className="font-semibold text-foreground">Para activar analytics:</p>
        <ol className="list-decimal pl-5 text-muted-foreground mt-2 space-y-1">
          <li>Configurar NEXT_PUBLIC_GA_ID en .env</li>
          <li>Crear credenciales de servicio de GA4</li>
          <li>Agregar GA4_SERVICE_ACCOUNT_KEY al .env</li>
          <li>Implementar GA4 Data API en /api/admin/analytics</li>
        </ol>
      </div>
    </div>
  );
}