import { Smile, Shield, Sparkles, Heart, Stethoscope, Zap, Baby, ScanLine, Siren, ShieldCheck } from "lucide-react";

export interface ServiceData {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  icon: string;
  heroText: string;
  description: string;
  benefits: string[];
  steps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: "odontologia-general",
    title: "Odontologia General y Preventiva",
    metaTitle: "Odontologia General en Asuncion",
    metaDescription: "Limpiezas profesionales, restauraciones y cuidado preventivo en Clinica Duerksen, Asuncion, Paraguay.",
    icon: "Stethoscope",
    heroText: "Cuidado preventivo para mantener tu salud bucal en optimas condiciones",
    description: "La odontologia general es la base de una buena salud dental. En Clinica Duerksen realizamos limpiezas profesionales, restauraciones esteticas, sellantes y controles periodicos para prevenir problemas antes de que aparezcan. Nuestro enfoque preventivo te ahorra tiempo, dinero y molestias a largo plazo.",
    benefits: ["Limpiezas profesionales profundas", "Restauraciones esteticas del color del diente", "Sellantes protectores para ninos y adultos", "Diagnostico con radiografia digital", "Plan preventivo personalizado", "Control periodico cada 6 meses"],
    steps: [
      { title: "Evaluacion Inicial", desc: "Examen completo de tu salud bucal con radiografias digitales." },
      { title: "Plan de Tratamiento", desc: "Te explicamos lo que encontramos y las opciones disponibles." },
      { title: "Tratamiento", desc: "Realizamos los procedimientos necesarios con tecnologia moderna." },
      { title: "Seguimiento", desc: "Programamos tu proximo control para mantener tu salud dental." },
    ],
    faqs: [
      { question: "Cada cuanto debo ir al dentista?", answer: "Recomendamos una visita de control y limpieza cada 6 meses para mantener tu salud bucal en optimas condiciones." },
      { question: "Las limpiezas dentales duelen?", answer: "No, las limpiezas profesionales son procedimientos indoloros. Puedes sentir una ligera sensibilidad que desaparece rapidamente." },
      { question: "Que incluye una consulta general?", answer: "Incluye examen visual completo, radiografia digital si es necesario, limpieza profesional y plan de tratamiento personalizado." },
    ],
  },
  {
    slug: "implantes-dentales",
    title: "Implantes Dentales",
    metaTitle: "Implantes Dentales en Asuncion",
    metaDescription: "Implantes dentales de titanio con tecnologia de ultima generacion. Dr. Victor Duerksen, 26+ anos de experiencia. Clinica Duerksen, Asuncion.",
    icon: "Smile",
    heroText: "Recupera tu sonrisa completa con implantes de ultima generacion",
    description: "Los implantes dentales son la solucion mas avanzada y duradera para reemplazar dientes perdidos. Utilizamos implantes de titanio biocompatible que se integran naturalmente con tu hueso, proporcionando una base solida para coronas que lucen y funcionan como dientes naturales. Con mas de 26 anos de experiencia, el Dr. Duerksen garantiza resultados excepcionales.",
    benefits: ["Titanio biocompatible de grado medico", "Apariencia natural indistinguible", "Duracion de por vida con cuidado adecuado", "Funcion masticatoria completa", "Preserva el hueso maxilar", "No afecta dientes vecinos"],
    steps: [
      { title: "Evaluacion y Planificacion", desc: "Radiografia panoramica y tomografia para evaluar tu caso y planificar la posicion exacta del implante." },
      { title: "Colocacion del Implante", desc: "Cirugia minimamente invasiva bajo anestesia local. Procedimiento de 30-60 minutos por implante." },
      { title: "Osteointegracion", desc: "Periodo de 3-6 meses donde el implante se fusiona con el hueso para maxima estabilidad." },
      { title: "Corona Final", desc: "Colocacion de la corona definitiva personalizada, disenada para un ajuste perfecto." },
    ],
    faqs: [
      { question: "Cuanto duran los implantes dentales?", answer: "Con cuidado adecuado, los implantes pueden durar toda la vida. La corona sobre el implante puede necesitar reemplazo despues de 15-20 anos." },
      { question: "El procedimiento es doloroso?", answer: "No. Se realiza bajo anestesia local y la mayoria de pacientes reportan menos molestias que una extraccion dental simple." },
      { question: "Soy candidato para implantes?", answer: "La mayoria de adultos con buena salud general son candidatos. Evaluamos cada caso individualmente para determinar la mejor opcion." },
    ],
  },
  {
    slug: "ortodoncia",
    title: "Ortodoncia",
    metaTitle: "Ortodoncia en Asuncion - Brackets y Alineadores",
    metaDescription: "Ortodoncia con brackets metalicos, esteticos y alineadores invisibles en Clinica Duerksen, Asuncion, Paraguay.",
    icon: "Shield",
    heroText: "Alinea tu sonrisa con tratamientos ortodonticos personalizados",
    description: "La ortodoncia corrige la posicion de los dientes y la mordida para mejorar tanto la estetica como la funcion. Ofrecemos brackets metalicos tradicionales, brackets esteticos de ceramica y alineadores invisibles para adaptarnos a tu estilo de vida y preferencias.",
    benefits: ["Brackets metalicos de alta eficiencia", "Brackets esteticos casi invisibles", "Alineadores transparentes removibles", "Tratamientos para todas las edades", "Tecnologia de planificacion digital", "Seguimiento mensual personalizado"],
    steps: [
      { title: "Diagnostico", desc: "Estudio cefalometrico, modelos y fotografias para planificar tu tratamiento ideal." },
      { title: "Plan Personalizado", desc: "Te mostramos los resultados esperados y la duracion estimada del tratamiento." },
      { title: "Tratamiento Activo", desc: "Ajustes mensuales para guiar tus dientes a la posicion correcta." },
      { title: "Retencion", desc: "Retenedores para mantener los resultados de forma permanente." },
    ],
    faqs: [
      { question: "Cuanto dura el tratamiento de ortodoncia?", answer: "Depende de cada caso, generalmente entre 12 y 24 meses. Los casos mas simples pueden resolverse en menos tiempo." },
      { question: "Los adultos pueden usar ortodoncia?", answer: "Absolutamente. No hay limite de edad para la ortodoncia. Cada vez mas adultos buscan mejorar su sonrisa y mordida." },
      { question: "Que diferencia hay entre brackets y alineadores?", answer: "Los brackets son fijos y trabajan 24/7. Los alineadores son removibles, casi invisibles, pero requieren disciplina para usarlos 22 horas al dia." },
    ],
  },
  {
    slug: "estetica-dental",
    title: "Estetica Dental",
    metaTitle: "Estetica Dental en Asuncion - Blanqueamiento y Carillas",
    metaDescription: "Blanqueamiento dental profesional, carillas de porcelana y diseno de sonrisa digital en Clinica Duerksen, Asuncion.",
    icon: "Sparkles",
    heroText: "Transforma tu sonrisa con tratamientos esteticos de vanguardia",
    description: "La estetica dental va mas alla de la apariencia: es sobre confianza y bienestar. Ofrecemos blanqueamiento dental profesional con resultados inmediatos, carillas de porcelana ultrafinas y diseno de sonrisa digital para que veas el resultado antes de comenzar.",
    benefits: ["Blanqueamiento laser en 1 sesion", "Carillas de porcelana ultrafinas", "Diseno digital de sonrisa (DSD)", "Resultados naturales y duraderos", "Consulta de evaluacion gratuita", "Mejora de autoestima garantizada"],
    steps: [
      { title: "Evaluacion Estetica", desc: "Analisis de tu sonrisa actual y tus expectativas." },
      { title: "Diseno Digital", desc: "Simulacion digital de los resultados para tu aprobacion." },
      { title: "Preparacion", desc: "Preparacion minima de los dientes si es necesario." },
      { title: "Resultado Final", desc: "Colocacion de carillas o realizacion del blanqueamiento." },
    ],
    faqs: [
      { question: "Cuanto dura el blanqueamiento dental?", answer: "El procedimiento toma 1-2 horas en consultorio. Los resultados duran 1-3 anos dependiendo de habitos alimenticios y cuidado." },
      { question: "Las carillas danan los dientes?", answer: "Las carillas modernas requieren minima o ninguna preparacion del diente. Son una opcion conservadora y reversible en muchos casos." },
      { question: "Cuanto cuestan las carillas dentales?", answer: "El costo varia segun el material y numero de piezas. Contactanos para una evaluacion personalizada y presupuesto." },
    ],
  },
  {
    slug: "endodoncia",
    title: "Endodoncia",
    metaTitle: "Endodoncia en Asuncion - Tratamiento de Conducto",
    metaDescription: "Tratamiento de conducto indoloro con tecnologia avanzada en Clinica Duerksen, Asuncion. Salvamos tu diente natural.",
    icon: "Heart",
    heroText: "Salvamos tu diente natural con tratamientos de conducto modernos",
    description: "La endodoncia (tratamiento de conducto) salva dientes que de otra manera tendrian que ser extraidos. Con tecnicas modernas y anestesia avanzada, el procedimiento es practicamente indoloro. Eliminamos la infeccion, limpiamos el conducto y sellamos el diente para preservarlo.",
    benefits: ["Procedimiento indoloro garantizado", "Tecnologia de localizacion electronica", "Salva el diente natural", "Recuperacion en 1-2 dias", "Evita la extraccion", "Resultados predecibles"],
    steps: [
      { title: "Diagnostico", desc: "Radiografia y pruebas de vitalidad para confirmar el diagnostico." },
      { title: "Anestesia", desc: "Anestesia local profunda para un procedimiento 100% sin dolor." },
      { title: "Tratamiento", desc: "Limpieza y desinfeccion del conducto radicular." },
      { title: "Restauracion", desc: "Sellado del conducto y restauracion del diente con corona si es necesario." },
    ],
    faqs: [
      { question: "El tratamiento de conducto duele?", answer: "No. Con anestesia moderna, el procedimiento es completamente indoloro. La mayoria de pacientes se sorprenden de lo comodo que es." },
      { question: "Cuantas sesiones necesito?", answer: "La mayoria de los casos se resuelven en 1-2 sesiones de aproximadamente 1 hora cada una." },
      { question: "Que pasa si no me hago el tratamiento?", answer: "La infeccion puede empeorar, causar dolor severo, absceso y eventualmente la perdida del diente." },
    ],
  },
  {
    slug: "protesis-dental",
    title: "Protesis Dental",
    metaTitle: "Protesis Dental en Asuncion - Coronas y Puentes",
    metaDescription: "Protesis dentales fijas y removibles de alta calidad en Clinica Duerksen, Asuncion. Coronas, puentes y dentaduras.",
    icon: "Zap",
    heroText: "Devuelve funcionalidad y estetica con protesis de calidad premium",
    description: "Las protesis dentales restauran la funcion masticatoria y la estetica cuando faltan uno o mas dientes. Trabajamos con materiales premium como porcelana y zirconio para resultados naturales y duraderos.",
    benefits: ["Coronas de porcelana y zirconio", "Puentes fijos de alta resistencia", "Protesis removibles comodas", "Materiales biocompatibles", "Ajuste preciso y comodo", "Garantia de satisfaccion"],
    steps: [
      { title: "Evaluacion", desc: "Examen completo para determinar la mejor opcion protesica." },
      { title: "Preparacion", desc: "Preparacion de los dientes y toma de impresiones digitales." },
      { title: "Fabricacion", desc: "Confeccion en laboratorio con materiales de primera calidad." },
      { title: "Colocacion", desc: "Instalacion y ajuste final para un encaje perfecto." },
    ],
    faqs: [
      { question: "Cuanto duran las coronas dentales?", answer: "Las coronas de calidad duran entre 10 y 20 anos con cuidado adecuado." },
      { question: "Las protesis removibles son comodas?", answer: "Las protesis modernas son mucho mas comodas que las antiguas. Se adaptan perfectamente y permiten comer con normalidad." },
      { question: "Cual es la diferencia entre corona y puente?", answer: "La corona cubre un solo diente. El puente reemplaza uno o mas dientes faltantes apoyandose en los dientes vecinos." },
    ],
  },
  {
    slug: "periodoncia",
    title: "Periodoncia",
    metaTitle: "Periodoncia en Asuncion - Tratamiento de Encias",
    metaDescription: "Tratamiento especializado de encias en Clinica Duerksen. Prevencion y tratamiento de gingivitis y periodontitis en Asuncion.",
    icon: "ScanLine",
    heroText: "Encias sanas, sonrisa fuerte: tratamiento periodontal especializado",
    description: "Las encias son la base de tu sonrisa. La enfermedad periodontal es la principal causa de perdida de dientes en adultos. En Clinica Duerksen diagnosticamos y tratamos problemas de encias en todas sus etapas.",
    benefits: ["Limpieza profunda subgingival", "Tratamiento de gingivitis", "Cirugia periodontal avanzada", "Regeneracion osea", "Mantenimiento preventivo", "Educacion en higiene personalizada"],
    steps: [
      { title: "Evaluacion Periodontal", desc: "Sondaje completo y radiografias para evaluar el estado de tus encias." },
      { title: "Fase Inicial", desc: "Limpieza profunda (raspado y alisado radicular) por cuadrantes." },
      { title: "Reevaluacion", desc: "Control a las 6-8 semanas para evaluar la respuesta al tratamiento." },
      { title: "Mantenimiento", desc: "Programa de mantenimiento periodontal cada 3-4 meses." },
    ],
    faqs: [
      { question: "Como se si tengo enfermedad de encias?", answer: "Senales incluyen: encias que sangran al cepillar, encias rojas o inflamadas, mal aliento persistente, y movilidad dental." },
      { question: "La enfermedad periodontal tiene cura?", answer: "La gingivitis (etapa temprana) es reversible. La periodontitis (avanzada) se puede controlar y estabilizar con tratamiento adecuado." },
      { question: "Cada cuanto debo hacer mantenimiento?", answer: "Generalmente cada 3-4 meses, dependiendo de la severidad de tu caso." },
    ],
  },
  {
    slug: "odontopediatria",
    title: "Odontopediatria",
    metaTitle: "Odontopediatria en Asuncion - Dentista para Ninos",
    metaDescription: "Cuidado dental especializado para ninos en un ambiente amigable. Clinica Duerksen, Asuncion, Paraguay.",
    icon: "Baby",
    heroText: "Cuidamos la sonrisa de los mas pequenos con amor y profesionalismo",
    description: "En Clinica Duerksen creamos experiencias positivas para que los ninos desarrollen una relacion saludable con el cuidado dental desde temprana edad. Nuestro enfoque es gentil, paciente y divertido.",
    benefits: ["Ambiente amigable para ninos", "Tecnicas sin dolor", "Sellantes protectores", "Aplicacion de fluor", "Educacion en higiene dental", "Prevencion de caries temprana"],
    steps: [
      { title: "Primera Visita", desc: "Conocemos al nino, creamos confianza y realizamos un examen suave." },
      { title: "Prevencion", desc: "Aplicacion de fluor y sellantes para proteger los dientes." },
      { title: "Tratamiento", desc: "Si es necesario, tratamos caries u otros problemas con tecnicas especiales para ninos." },
      { title: "Educacion", desc: "Ensenamos al nino y a los padres sobre habitos de higiene dental." },
    ],
    faqs: [
      { question: "A que edad debo llevar a mi hijo al dentista?", answer: "Recomendamos la primera visita al cumplir 1 ano o cuando aparezca el primer diente." },
      { question: "Que hago si mi hijo tiene miedo al dentista?", answer: "Tenemos tecnicas especiales para manejar la ansiedad dental infantil. Creamos un ambiente divertido y seguro." },
      { question: "Los dientes de leche necesitan tratamiento?", answer: "Si. Los dientes de leche mantienen el espacio para los permanentes y son importantes para la masticacion y el habla." },
    ],
  },
  {
    slug: "cirugia-oral",
    title: "Cirugia Oral",
    metaTitle: "Cirugia Oral en Asuncion",
    metaDescription: "Cirugia oral y extracciones complejas con precision y tecnologia avanzada en Clinica Duerksen, Asuncion.",
    icon: "Siren",
    heroText: "Cirugia oral segura con tecnologia y experiencia de primer nivel",
    description: "Realizamos procedimientos quirurgicos orales con la mayor precision y seguridad. Desde extracciones complejas hasta cirugia de terceros molares (muelas del juicio), nuestro equipo tiene la experiencia necesaria.",
    benefits: ["Extracciones complejas", "Cirugia de terceros molares", "Cirugia menor ambulatoria", "Anestesia avanzada", "Recuperacion guiada", "Control post-operatorio"],
    steps: [
      { title: "Evaluacion", desc: "Radiografia panoramica y evaluacion del caso quirurgico." },
      { title: "Planificacion", desc: "Plan quirurgico detallado con indicaciones pre-operatorias." },
      { title: "Cirugia", desc: "Procedimiento bajo anestesia local con tecnica minimamente invasiva." },
      { title: "Recuperacion", desc: "Instrucciones post-operatorias y control de seguimiento." },
    ],
    faqs: [
      { question: "Es necesario extraer las muelas del juicio?", answer: "No siempre. Se recomienda cuando causan dolor, infecciones repetidas, o estan impactadas y pueden danar otros dientes." },
      { question: "Cuanto tiempo toma la recuperacion?", answer: "Generalmente 3-5 dias para extracciones simples y 7-10 dias para cirugia de muelas del juicio." },
      { question: "Que cuidados debo tener despues?", answer: "Dieta blanda, hielo en la zona, medicacion segun indicacion, y evitar esfuerzos fisicos por 48-72 horas." },
    ],
  },
  {
    slug: "emergencias-dentales",
    title: "Emergencias Dentales",
    metaTitle: "Emergencia Dental en Asuncion - Atencion Rapida",
    metaDescription: "Atencion de emergencias dentales en Clinica Duerksen. Dolor agudo, traumatismos, fracturas. Contactanos inmediatamente.",
    icon: "ShieldCheck",
    heroText: "Atencion inmediata para urgencias dentales — no esperes",
    description: "Una emergencia dental requiere atencion rapida. Si tienes dolor agudo, un diente roto o un traumatismo dental, contactanos inmediatamente. El Dr. Duerksen tiene amplia experiencia en el manejo de urgencias dentales.",
    benefits: ["Atencion prioritaria", "Manejo del dolor inmediato", "Traumatismos dentales", "Fracturas de dientes", "Infecciones agudas", "Reimplante de dientes avulsionados"],
    steps: [
      { title: "Contacto Inmediato", desc: "Llamanos o envianos un WhatsApp describiendo tu emergencia." },
      { title: "Evaluacion Urgente", desc: "Te atendemos lo antes posible para evaluar la situacion." },
      { title: "Tratamiento de Emergencia", desc: "Resolvemos el problema inmediato: dolor, infeccion o trauma." },
      { title: "Plan de Seguimiento", desc: "Programamos el tratamiento definitivo si es necesario." },
    ],
    faqs: [
      { question: "Que debo hacer si se me cae un diente?", answer: "Recoge el diente por la corona (no la raiz), enjuagalo suavemente con agua, intenta recolocarlo en su lugar o guardalo en leche. Contactanos INMEDIATAMENTE." },
      { question: "Tengo dolor intenso, que hago?", answer: "Toma un analgesico (ibuprofeno 400mg) y contactanos inmediatamente. No apliques aspirina directamente en la encia." },
      { question: "Atienden fuera de horario?", answer: "Nuestro horario es Lunes a Viernes 08:00-12:00 y 14:30-18:00. Para emergencias fuera de horario, envianos un WhatsApp y te responderemos lo antes posible." },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug);
}