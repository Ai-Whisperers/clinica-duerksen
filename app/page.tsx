export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-4xl font-bold text-brand-primary md:text-6xl">
          Clínica Duerksen
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Odontología de excelencia en Asunción, Paraguay.
          <br />
          Dr. Victor Duerksen
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://wa.me/59521298755"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-brand-primary px-8 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
          >
            Agendar Cita
          </a>
          <a
            href="tel:+59521298755"
            className="inline-flex items-center justify-center rounded-md border border-brand-primary px-8 py-3 text-brand-primary font-medium hover:bg-brand-primary/5 transition-colors"
          >
            Llamar: +595 21 298 755
          </a>
        </div>
        <p className="text-sm text-muted-foreground pt-8">
          Sitio en construcción — Próximamente más información
        </p>
      </div>
    </main>
  );
}
