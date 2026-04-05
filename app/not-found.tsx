import Link from "next/link";
import { Home, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center py-20 px-4">
      <div className="text-center space-y-6 max-w-lg">
        <div className="text-8xl font-bold text-brand-primary/20">404</div>
        <h1 className="text-3xl font-bold text-foreground">
          Pagina no encontrada
        </h1>
        <p className="text-muted-foreground text-lg">
          Lo sentimos, la pagina que buscas no existe o fue movida.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            <Home className="w-4 h-4" />
            Ir al inicio
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-primary px-6 py-3 text-brand-primary font-medium hover:bg-brand-primary/5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contactanos
          </Link>
        </div>
        <div className="pt-6 text-sm text-muted-foreground">
          <p>Paginas populares:</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 mt-2">
            <Link href="/servicios" className="text-brand-primary hover:underline">Servicios</Link>
            <Link href="/sobre-nosotros" className="text-brand-primary hover:underline">Sobre Nosotros</Link>
            <Link href="/contacto" className="text-brand-primary hover:underline">Contacto</Link>
          </div>
        </div>
      </div>
    </main>
  );
}