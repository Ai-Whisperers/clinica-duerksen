import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-7xl font-bold text-brand-primary/20">404</div>
        <h1 className="text-3xl font-bold text-foreground">Página no encontrada</h1>
        <p className="text-muted-foreground">
          La página que buscas no existe o ha sido movida. Si crees que es un error, contáctanos.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-foreground font-medium hover:bg-muted transition-colors"
          >
            Contactarnos
          </Link>
        </div>
      </div>
    </main>
  );
}
