import { MessageSquare, Calendar, Star, Eye, Phone, MessageCircle } from "lucide-react";

const stats = [
  { label: "Mensajes Sin Leer", value: "0", icon: MessageSquare, color: "text-blue-500" },
  { label: "Citas Pendientes", value: "0", icon: Calendar, color: "text-green-500" },
  { label: "Resenas Google", value: "5.0 ★", icon: Star, color: "text-yellow-500" },
  { label: "Visitas Web (hoy)", value: "—", icon: Eye, color: "text-purple-500" },
];

const recentActivity = [
  { type: "info", text: "Panel de administracion configurado", time: "Ahora" },
  { type: "info", text: "Conectar Supabase para datos en tiempo real", time: "Pendiente" },
  { type: "info", text: "Configurar Google Analytics para metricas", time: "Pendiente" },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Bienvenido al panel de administracion de Clinica Duerksen</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="p-5 rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between">
              <s.icon className={`w-8 h-8 ${s.color}`} />
              <span className="text-2xl font-bold text-foreground">{s.value}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="font-semibold text-foreground mb-4">Actividad Reciente</h2>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                <span className="text-sm text-foreground">{a.text}</span>
                <span className="text-xs text-muted-foreground">{a.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-xl border border-border bg-card">
          <h2 className="font-semibold text-foreground mb-4">Accesos Rapidos</h2>
          <div className="grid grid-cols-2 gap-3">
            <a href="/admin/mensajes" className="p-4 rounded-lg border border-border text-center hover:bg-muted/50 transition-colors">
              <MessageSquare className="w-6 h-6 text-blue-500 mx-auto mb-1" />
              <span className="text-sm text-foreground">Mensajes</span>
            </a>
            <a href="/admin/citas" className="p-4 rounded-lg border border-border text-center hover:bg-muted/50 transition-colors">
              <Calendar className="w-6 h-6 text-green-500 mx-auto mb-1" />
              <span className="text-sm text-foreground">Citas</span>
            </a>
            <a href="/admin/testimonios" className="p-4 rounded-lg border border-border text-center hover:bg-muted/50 transition-colors">
              <Star className="w-6 h-6 text-yellow-500 mx-auto mb-1" />
              <span className="text-sm text-foreground">Testimonios</span>
            </a>
            <a href="/admin/blog" className="p-4 rounded-lg border border-border text-center hover:bg-muted/50 transition-colors">
              <MessageCircle className="w-6 h-6 text-purple-500 mx-auto mb-1" />
              <span className="text-sm text-foreground">Blog</span>
            </a>
          </div>
        </div>
      </div>

      <div className="p-4 rounded-xl bg-brand-accent/10 border border-brand-accent/20 text-sm">
        <p className="font-semibold text-foreground">Nota:</p>
        <p className="text-muted-foreground">Este panel se conectara a Supabase para mostrar datos reales. Por ahora muestra datos de ejemplo.</p>
      </div>
    </div>
  );
}