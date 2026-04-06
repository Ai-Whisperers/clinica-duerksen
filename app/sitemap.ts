import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clinicaduerksen.com.py";
  const now = new Date().toISOString();

  const services = [
    "odontologia-general", "implantes-dentales", "ortodoncia", "estetica-dental",
    "endodoncia", "protesis-dental", "periodoncia", "odontopediatria",
    "cirugia-oral", "emergencias-dentales",
  ];

  const staticPages = [
    { path: "", priority: 1.0, freq: "weekly" },
    { path: "/servicios", priority: 0.9, freq: "monthly" },
    { path: "/sobre-nosotros", priority: 0.8, freq: "monthly" },
    { path: "/contacto", priority: 0.8, freq: "monthly" },
    { path: "/galeria", priority: 0.7, freq: "weekly" },
    { path: "/testimonios", priority: 0.7, freq: "weekly" },
    { path: "/precios", priority: 0.7, freq: "monthly" },
    { path: "/preguntas-frecuentes", priority: 0.7, freq: "monthly" },
    { path: "/primera-visita", priority: 0.6, freq: "monthly" },
    { path: "/blog", priority: 0.7, freq: "weekly" },
    { path: "/emergencia-dental", priority: 0.6, freq: "monthly" },
    { path: "/ninos", priority: 0.6, freq: "monthly" },
    { path: "/pacientes-nerviosos", priority: 0.5, freq: "monthly" },
    { path: "/tecnologia", priority: 0.5, freq: "monthly" },
    { path: "/dr-victor-duerksen", priority: 0.5, freq: "monthly" },
    { path: "/trabaja-con-nosotros", priority: 0.4, freq: "monthly" },
    { path: "/privacidad", priority: 0.3, freq: "yearly" },
    { path: "/terminos", priority: 0.3, freq: "yearly" },
  ];

  return [
    ...staticPages.map((p) => ({
      url: `${baseUrl}${p.path}`,
      lastModified: now,
      changeFrequency: p.freq as "weekly" | "monthly" | "yearly",
      priority: p.priority,
    })),
    ...services.map((slug) => ({
      url: `${baseUrl}/servicios/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...BLOG_POSTS.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}