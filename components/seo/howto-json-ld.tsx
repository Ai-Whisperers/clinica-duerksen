export function HowToJsonLd({ name, steps }: { name: string; steps: { name: string; text: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function MedicalProcedureJsonLd({ name, description, bodyLocation }: { name: string; description: string; bodyLocation?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name,
    description,
    ...(bodyLocation ? { bodyLocation } : {}),
    howPerformed: "By a licensed dentist",
    procedureType: "http://schema.org/NoninvasiveProcedure",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}