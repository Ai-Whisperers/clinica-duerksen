export default function AdminAppointments() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Solicitudes de Citas</h1>
      <div className="p-8 rounded-xl border border-border bg-card text-center">
        <p className="text-muted-foreground">No hay solicitudes pendientes.</p>
        <p className="text-sm text-muted-foreground mt-2">Las solicitudes del formulario de citas apareceran aqui cuando se conecte Supabase.</p>
      </div>
    </div>
  );
}