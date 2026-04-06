const protocols = [
  {
    category: "Protocolos de Tratamiento",
    items: [
      { title: "Limpieza Profesional", content: "1. Evaluacion inicial\n2. Radiografia si necesario\n3. Eliminacion de tartaro con ultrasonido\n4. Pulido con pasta profilactica\n5. Aplicacion de fluor\n6. Instrucciones de higiene\n7. Programar proximo control (6 meses)" },
      { title: "Endodoncia", content: "1. Radiografia periapical\n2. Anestesia local\n3. Aislamiento con dique\n4. Apertura cameral\n5. Conductometria\n6. Instrumentacion biomecanica\n7. Obturacion con gutapercha\n8. Radiografia de control\n9. Restauracion provisional\n10. Derivar para corona si aplica" },
      { title: "Extraccion Simple", content: "1. Radiografia periapical\n2. Anestesia local (esperar 3-5 min)\n3. Sindesmotomia\n4. Luxacion con elevador\n5. Extraccion con forceps\n6. Curetaje alveolar\n7. Compresion con gasa\n8. Indicaciones postoperatorias\n9. Receta: ibuprofeno 400mg c/8h x 3 dias" },
    ],
  },
  {
    category: "Cuidados Post-Tratamiento",
    items: [
      { title: "Post-Extraccion", content: "- Morder gasa 30 minutos\n- Hielo 15 min on/15 off (primeras 24h)\n- Dieta blanda 48h\n- No enjuagar ni escupir 24h\n- No fumar 72h\n- No usar pajilla\n- Ibuprofeno 400mg cada 8h si dolor" },
      { title: "Post-Endodoncia", content: "- Evitar morder del lado tratado 24h\n- Ibuprofeno 400mg si molestia\n- Sensibilidad normal hasta 1 semana\n- Consultar si dolor intenso o hinchazon\n- Agendar cita para restauracion definitiva" },
      { title: "Post-Blanqueamiento", content: "- Dieta blanca 48h (sin cafe, te, vino, salsa)\n- Sensibilidad normal 24-48h\n- Pasta desensibilizante si necesario\n- Evitar tabaco\n- Resultado final visible a las 2 semanas" },
    ],
  },
  {
    category: "Emergencias",
    items: [
      { title: "Avulsion Dental (diente caido)", content: "TIEMPO CRITICO: Reimplantar dentro de 60 minutos\n1. Tomar diente por corona\n2. Enjuagar con solucion salina (no frotar)\n3. Reimplantar si posible\n4. Si no: guardar en leche o saliva\n5. Ferulizar con composite\n6. Antibiotico + antinflamatorio\n7. Control a 1 semana, 1 mes, 3 meses" },
      { title: "Absceso Dental", content: "1. Radiografia\n2. Evaluar extension\n3. Drenaje si fluctuante\n4. Antibiotico: Amoxicilina 500mg c/8h x 7 dias\n5. (Alergia: Clindamicina 300mg c/8h)\n6. Antinflamatorio\n7. Programar tratamiento definitivo (endodoncia o extraccion)" },
    ],
  },
];

export default function KnowledgeBasePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Base de Conocimiento Interna</h1>
        <p className="text-muted-foreground mt-1">Protocolos, procedimientos y guias para el equipo clinico.</p>
      </div>

      {protocols.map((cat) => (
        <div key={cat.category}>
          <h2 className="text-xl font-bold text-foreground mb-4">{cat.category}</h2>
          <div className="space-y-3">
            {cat.items.map((item) => (
              <details key={item.title} className="p-4 rounded-xl border border-border bg-card group">
                <summary className="font-semibold text-foreground cursor-pointer flex items-center justify-between">
                  {item.title}
                  <span className="text-brand-primary group-open:rotate-45 transition-transform">+</span>
                </summary>
                <pre className="mt-3 text-sm text-muted-foreground whitespace-pre-wrap font-sans">{item.content}</pre>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}