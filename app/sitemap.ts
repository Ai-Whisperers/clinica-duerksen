import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clinicaduerksen.com.py";

  const staticPages = [
    "", "/servicios", "/sobre-nosotros", "/contacto", "/precios",
    "/galeria", "/testimonios", "/blog", "/preguntas-frecuentes",
    "/primera-visita", "/emergencia-dental", "/tecnologia",
    "/turismo-dental", "/promociones", "/referidos", "/comunidad",
    "/educacion", "/videos", "/ninos", "/pacientes-nerviosos",
    "/evaluacion-dental", "/comparar-tratamientos", "/agendar-cita",
    "/formulario-paciente", "/privacidad", "/terminos",
    "/trabaja-con-nosotros", "/en",
  ];

  const services = [
    "odontologia-general", "implantes-dentales", "ortodoncia",
    "estetica-dental", "endodoncia", "protesis-dental",
    "periodoncia", "odontopediatria", "cirugia-oral",
    "emergencias-dentales",
  ];

  const mainPages = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: page === "" ? "weekly" as const : page.startsWith("/blog") ? "weekly" as const : "monthly" as const,
    priority: page === "" ? 1 : 0.8,
  }));

  const servicePages = services.map((slug) => ({
    url: `${baseUrl}/servicios/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...mainPages, ...servicePages];
}
