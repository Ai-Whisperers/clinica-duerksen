import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clinicaduerksen.com.py";
  const now = new Date().toISOString();

  const services = [
    "odontologia-general", "implantes-dentales", "ortodoncia", "estetica-dental",
    "endodoncia", "protesis-dental", "periodoncia", "odontopediatria",
    "cirugia-oral", "emergencias-dentales",
  ];

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/servicios`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/sobre-nosotros`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contacto`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacidad`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terminos`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...services.map((slug) => ({
      url: `${baseUrl}/servicios/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}