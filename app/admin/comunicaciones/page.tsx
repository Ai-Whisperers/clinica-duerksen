export default function CommunicationsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Registro de Comunicaciones</h1>
      <div className="flex gap-2">
        <input placeholder="Buscar por paciente..." className="flex-1 rounded-lg border border-border px-3 py-2 text-sm" />
        <select className="rounded-lg border border-border px-3 py-2 text-sm">
          <option>Todos los canales</option>
          <option>WhatsApp</option>
          <option>Telefono</option>
          <option>Email</option>
          <option>En persona</option>
        </select>
      </div>
      <div className="p-8 rounded-xl border border-border bg-card text-center">
        <p className="text-muted-foreground">No hay registros de comunicacion</p>
        <p className="text-sm text-muted-foreground mt-2">Las comunicaciones se registraran automaticamente cuando se conecte el sistema de mensajeria.</p>
      </div>
    </div>
  );
}