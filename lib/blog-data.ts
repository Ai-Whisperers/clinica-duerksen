export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readingTime: string;
  date: string;
  author: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "10-senales-visitar-dentista",
    title: "10 Senales de que Necesitas Visitar al Dentista",
    excerpt: "No esperes a que el dolor sea insoportable. Conoce las senales de alerta que indican que es hora de visitar al dentista.",
    content: "El dolor de muelas no es la unica senal de que algo anda mal. Encias que sangran al cepillar, sensibilidad al frio o calor, mal aliento persistente, y manchas en los dientes son indicadores importantes. La prevencion es siempre mejor que la cura, y una visita a tiempo puede ahorrarte tratamientos costosos y dolorosos.",
    category: "Prevencion",
    readingTime: "5 min",
    date: "2026-03-15",
    author: "Dr. Victor Duerksen",
  },
  {
    slug: "todo-sobre-implantes-dentales",
    title: "Todo lo que Necesitas Saber sobre Implantes Dentales",
    excerpt: "Implantes dentales: que son, como funcionan, cuanto duran y cuanto cuestan. Guia completa del Dr. Duerksen.",
    content: "Los implantes dentales son la solucion mas avanzada para reemplazar dientes perdidos. Consisten en un tornillo de titanio que se coloca en el hueso maxilar y actua como raiz artificial. Sobre este se coloca una corona que luce y funciona como un diente natural. Con cuidado adecuado, pueden durar toda la vida.",
    category: "Tratamientos",
    readingTime: "8 min",
    date: "2026-03-01",
    author: "Dr. Victor Duerksen",
  },
  {
    slug: "como-elegir-dentista-asuncion",
    title: "Como Elegir al Mejor Dentista en Asuncion",
    excerpt: "Guia practica para encontrar un dentista de confianza en Asuncion. Que buscar, que preguntar y como decidir.",
    content: "Elegir un buen dentista es una decision importante. Busca experiencia comprobada, formacion continua, tecnologia moderna, y lo mas importante: que te haga sentir comodo. Lee resenas de otros pacientes, visita el consultorio antes de comprometerte, y no tengas miedo de hacer preguntas.",
    category: "Consejos",
    readingTime: "6 min",
    date: "2026-02-15",
    author: "Dr. Victor Duerksen",
  },
  {
    slug: "blanqueamiento-mitos-verdades",
    title: "Blanqueamiento Dental: Mitos y Verdades",
    excerpt: "Separamos los mitos de las verdades sobre el blanqueamiento dental. Lo que realmente funciona y lo que debes evitar.",
    content: "MITO: El blanqueamiento dana el esmalte. VERDAD: El blanqueamiento profesional es seguro y no dana el esmalte cuando es realizado por un profesional. MITO: Los productos de venta libre dan los mismos resultados. VERDAD: Los productos profesionales son mas concentrados y los resultados son significativamente superiores.",
    category: "Estetica",
    readingTime: "4 min",
    date: "2026-02-01",
    author: "Dr. Victor Duerksen",
  },
  {
    slug: "importancia-control-cada-6-meses",
    title: "Por Que Debes Visitar al Dentista Cada 6 Meses",
    excerpt: "El control dental semestral es tu mejor inversion en salud bucal. Descubre por que es tan importante.",
    content: "Las visitas regulares permiten detectar problemas en etapa temprana cuando son faciles y economicos de tratar. Una limpieza profesional cada 6 meses remueve placa y tartaro que el cepillado no puede eliminar. Ademas, permite monitorear la salud de tus encias y detectar signos de enfermedades mas serias.",
    category: "Prevencion",
    readingTime: "5 min",
    date: "2026-01-15",
    author: "Dr. Victor Duerksen",
  },
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}