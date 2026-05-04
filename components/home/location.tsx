import { MapPin, Clock, Navigation } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

export function LocationPreview() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-brand-primary/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1803.5!2d-57.5778!3d-25.2568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE1JzI0LjUiUyA1N8KwMzQnNDAuMSJX!5e0!3m2!1ses!2spy!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Clínica Duerksen"
            />
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nuestra Ubicación
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Dirección</p>
                  <p className="text-muted-foreground">
                    {BUSINESS.address.street}<br />
                    {BUSINESS.address.neighborhood}, {BUSINESS.address.city}, {BUSINESS.address.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-brand-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Horario</p>
                  <p className="text-muted-foreground">{BUSINESS.hoursFormatted}</p>
                </div>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/dir//Cl%C3%ADnica+Duerksen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}