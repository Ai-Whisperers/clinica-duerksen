export default function Loading() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-20">
      <div className="space-y-4 text-center">
        <div className="w-12 h-12 border-4 border-brand-primary/20 border-t-brand-primary rounded-full animate-spin mx-auto" />
        <p className="text-muted-foreground">Cargando...</p>
      </div>
    </main>
  );
}