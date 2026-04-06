export default function AdminMessages() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Mensajes de Contacto</h1>
      <div className="p-8 rounded-xl border border-border bg-card text-center">
        <p className="text-muted-foreground">No hay mensajes nuevos.</p>
        <p className="text-sm text-muted-foreground mt-2">Los mensajes del formulario de contacto apareceran aqui cuando se conecte Supabase.</p>
      </div>
    </div>
  );
}