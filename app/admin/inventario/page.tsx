export default function InventoryPage() {
  const categories = ["Materiales de restauracion", "Anestesia", "Instrumental", "Higiene", "Protesis", "Radiografia"];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-foreground">Inventario</h1>
        <button className="px-4 py-2 bg-brand-primary text-white rounded-lg text-sm">+ Agregar Item</button>
      </div>
      <div className="flex gap-2 flex-wrap">
        {categories.map((c) => (
          <button key={c} className="px-3 py-1.5 rounded-full text-xs border border-border hover:bg-muted transition-colors">{c}</button>
        ))}
      </div>
      <div className="p-8 rounded-xl border border-border bg-card text-center">
        <p className="text-muted-foreground">Inventario vacio</p>
        <p className="text-sm text-muted-foreground mt-2">Crear tabla inventory_items en Supabase y agregar los insumos de la clinica.</p>
      </div>
    </div>
  );
}