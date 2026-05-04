# PLAN DE IMPLEMENTACION COMPLETO - Clinica Duerksen
## Version: Mayo 2026
## Basado en: auditoria del sitio (40+ paginas), ROAST.md, analisis competitivo (100 sitios dentales)

---

## ESTADO ACTUAL

### Bueno (no tocar)
- 40+ paginas en Next.js 15 / TypeScript / Tailwind / Docker
- Precios con tabla de Gs. reales
- Pagina de turismo dental en ingles con tabla comparativa USD
- Evaluacion dental interactiva (7 preguntas)
- Booking de 3 pasos (servicio -> fecha -> datos)
- Formulario de contacto funcional
- Blog con 5 posts AI-generated
- Galeria con filtros por categoria
- Cookie consent
- Breadcrumbs
- Componentes shadcn/ui instalados (Button, Input, Card, Select, Sheet, etc.)
- Supabase client creado
- API endpoint de appointment existente

### Malo (arreglar urgente)
- TODO el contenido es AI-generated placeholder — sin fotos reales, sin resenas reales, sin datos reales
- Sin fotos del Dr. Victor, Dra. Gloria, clinica, o casos
- Testimonios falsos (Maria Gonzalez, Carlos Benitez, Ana Villalba)
- JSON-LD existe pero no se importa en ningun layout
- Redes sociales vacias (facebook: "", instagram: "")
- framer-motion agregando ~45KB JS para animaciones que CSS puede hacer
- Sin error.tsx (solo existe), sin not-found.tsx, sin loading.tsx en paginas clave
- Sin tests, sin CI
- Sin conexion a Supabase — datos hardcodeados
- contact form usa fetch directo sin server actions

---

## PLAN POR FASES

### FASE 0: OBTENER DATOS DEL CLIENTE (Semana 1)

Nada puede avanzar sin datos reales del Dr. Duerksen.

| # | Tarea | Depende de | Tiempo |
|---|-------|-----------|--------|
| 0.1 | Enviar cuestionario (docs/cliente-cuestionario.md) por WhatsApp | Nada | 30 min |
| 0.2 | Crear carpeta Google Drive para fotos | Dr. Victor acepta | 15 min |
| 0.3 | Reclamar Google Business Profile (si no esta) | Dr. Victor aprueba | 1 hora |
| 0.4 | Crear Facebook + Instagram Business | Dr. Victor aprueba | 1 hora |
| 0.5 | Comprar dominio clinicaduerksen.com.py | Dr. Victor aprueba | 1 hora |
| 0.6 | Configurar DNS + Traefik para dominio nuevo | Dominio comprado | 30 min |
| 0.7 | Subir fotos reales a Supabase Storage /public/images/ | Fotos recibidas | 2 horas |
| 0.8 | Crear tabla en Supabase: services, team, testimonials, gallery, blog_posts | Schema existe | 30 min |
| 0.9 | Migrar datos de /lib/services-data.ts a Supabase | Supabase lista | 1 hora |

**Gate:** Dr. Victor envia fotos + responde cuestionario.

---

### FASE 1: LLENAR EL ESQUELETO (Semanas 2-3)

Arregla los problemas mas visibles del sitio.

#### 1A. Contenido real

| # | Archivo / Componente | Cambio | Tiempo |
|---|---------------------|--------|--------|
| 1.1 | /app/page.tsx (Hero) | Reemplazar placeholder con foto real del Dr. Victor | 30 min |
| 1.2 | /app/sobre-nosotros/page.tsx | Fotos reales de Dr. Victor + Dra. Gloria + equipo | 1 hora |
| 1.3 | /app/galeria/page.tsx | Reemplazar textos placeholder con fotos reales + slider before/after | 3 horas |
| 1.4 | /app/testimonios/page.tsx | Reemplazar testimonios falsos con Google Reviews reales | 2 horas |
| 1.5 | /app/blog/ + /app/blog/[slug]/ | Reemplazar posts AI-generated con contenido de Dr. Victor | 2 horas |
| 1.6 | /app/precios/page.tsx | Verificar precios con Dr. Victor, agregar IPS/seguros | 1 hora |
| 1.7 | /lib/constants.ts | Agregar URLs de redes sociales reales | 15 min |
| 1.8 | /components/home/reviews.tsx | Google Reviews widget en vivo (API) | 2 horas |
| 1.9 | /components/home/instagram-feed.tsx | Conectar feed de Instagram real | 1 hora |

#### 1B. SEO Foundation

| # | Cambio | Archivo | Tiempo |
|---|--------|---------|--------|
| 1.10 | Importar JsonLd en root layout | /app/layout.tsx | 15 min |
| 1.11 | Agregar LocalBusiness + Dentist + MedicalOrganization schema | /components/seo/json-ld.tsx | 30 min |
| 1.12 | Agregar OpeningHoursSpecification + GeoCoordinates | json-ld.tsx | 15 min |
| 1.13 | Agregar AggregateRating (5.0 stars) | json-ld.tsx | 15 min |
| 1.14 | Verificar FAQ schema en /servicios/[slug] | ya existe FAQJsonLd - confirmar render | 15 min |
| 1.15 | Verificar BreadcrumbList schema | ya existe en varias paginas | 15 min |
| 1.16 | Verificar sitemap.xml y robots.txt | next.config.ts | 15 min |
| 1.17 | Enviar sitemap a Google Search Console | Terminal | 15 min |
| 1.18 | Agregar meta tags de Open Graph + Twitter a todas las paginas | layout.tsx + pages | 1 hora |

#### 1C. UX Error Handling

| # | Cambio | Archivo | Tiempo |
|---|--------|---------|--------|
| 1.19 | Crear not-found.tsx | /app/not-found.tsx | 30 min |
| 1.20 | Crear loading.tsx para blog, servicios/[slug], galeria | /app/blog/loading.tsx, etc. | 1 hora |
| 1.21 | Remover framer-motion | package.json + limpiar imports | 1 hora |
| 1.22 | Implementar animaciones CSS (fade-in, slide-up) | /app/globals.css | 2 horas |
| 1.23 | Agregar prefers-reduced-motion | globals.css | 15 min |
| 1.24 | Arreglar skip-to-content link (ref=e1) | /components/layout/header.tsx | 30 min |
| 1.25 | Arreglar render de redes sociales en footer | /components/layout/footer.tsx | 15 min |
| 1.26 | Agregar focus trap en menu movil | /components/layout/header.tsx | 1 hora |
| 1.27 | Verificar contraste de colores (accesibilidad) | tailwind.config.ts | 30 min |

Total Fase 1: ~20 horas

---

### FASE 2: CONVERSION Y LEAD GENERATION (Semanas 4-5)

#### 2A. WhatsApp Aut omation

| # | Cambio | Tiempo |
|---|--------|--------|
| 2.1 | Conectar /agendar-cita 3-step form a Supabase + notificar clinica por WhatsApp | 3 horas |
| 2.2 | Agregar mensaje pre-llenado con nombre del servicio en cada /servicios/[slug] | 1 hora |
| 2.3 | Agregar "Solicitar presupuesto" por tratamiento en /precios | 1 hora |
| 2.4 | Agregar boton WhatsApp con pre-llenado de caso en cada galeria | 1 hora |
| 2.5 | Rastrear clicks de WhatsApp con Google Analytics event | 1 hora |
| 2.6 | Construir flujo de auto-respuesta: seleccion de servicio -> nombre -> telefono | 3 horas |

#### 2B. Form Infrastructure

| # | Cambio | Tiempo |
|---|--------|--------|
| 2.7 | Instalar react-hook-form + agregar validacion Zod al formulario de contacto | 1 hora |
| 2.8 | Instalar react-hook-form + Zod al booking de 3 pasos | 1 hora |
| 2.9 | Agregar rate limiting a /api/contact y /api/appointment | 1 hora |
| 2.10 | Agregar honeypot + CAPTCHA al formulario de contacto | 1 hora |
| 2.11 | Convertir fetch de contacto a server action | 1 hora |
| 2.12 | Agregar pagina de confirmacion despues de enviar formulario | 30 min |

#### 2C. Dental Tourism Funnel

| # | Cambio | Tiempo |
|---|--------|--------|
| 2.13 | Agregar formulario "Get Free Quote" en /turismo-dental que guarde en Supabase | 2 horas |
| 2.14 | Agregar calculadora de ahorro (seleccionar tratamiento, ver ahorro en USD) | 2 horas |
| 2.15 | Agregar seccion de hoteles / transporte recomendados | 1 hora |
| 2.16 | Agregar CTA WhatsApp con mensaje pre-llenado en ingles | 30 min |
| 2.17 | Agregar seccion "por que Paraguay" con datos comparativos | 1 hora |

#### 2D. Pricing Page

| # | Cambio | Tiempo |
|---|--------|--------|
| 2.18 | Agregar calculadora de cuotas mensuales (total / 6, / 12, / 24) | 2 horas |
| 2.19 | Agregar "Solicitar Presupuesto" por fila de tratamiento | 1 hora |
| 2.20 | Agregar seccion de seguros aceptados con logos | 1 hora |
| 2.21 | Agregar tabla de cobertura IPS (que % cubre cada plan) | 2 horas |

Total Fase 2: ~25 horas

---

### FASE 3: CALIDAD TECNICA (Semana 6)

#### 3A. CI/CD y Tests

| # | Cambio | Archivos | Tiempo |
|---|--------|----------|--------|
| 3.1 | Crear GitHub Actions: build + typecheck + lint | .github/workflows/ci.yml | 1 hora |
| 3.2 | Agregar smoke test: homepage renderiza, servicios renderiza | tests/smoke.test.ts | 1 hora |
| 3.3 | Habilitar ESLint durante build (remover --no-lint de build script) | package.json | 15 min |
| 3.4 | Agregar Lighthouse CI check | .github/workflows/lighthouse.yml | 1 hora |
| 3.5 | Agregar playwright test: navegacion basica, formularios | tests/e2e/ | 2 horas |

#### 3B. Performance

| # | Cambio | Tiempo |
|---|--------|--------|
| 3.6 | Lighthouse audit completo + fix <90 | 2 horas |
| 3.7 | next/image optimization para todas las fotos reales (WebP, lazy, sizes) | 2 horas |
| 3.8 | Bundle analysis + remover codigo muerto (framer-motion, next-intl si no se usa) | 1 hora |
| 3.9 | priority loading en hero image, lazy en todo lo demas | 1 hora |
| 3.10 | Font optimization (Inter via next/font en vez de CDN) | 30 min |

#### 3C. TypeScript Hardening

| # | Cambio | Tiempo |
|---|--------|--------|
| 3.11 | Auditar any types y ! non-null assertions | 1 hora |
| 3.12 | Agregar tipos de error a API routes | 30 min |
| 3.13 | Agregar validacion Zod en request bodies de API | 1 hora |
| 3.14 | Strict mode en tsconfig (verify noImplicitReturns, noUnusedLocals) | 30 min |

#### 3D. Docker / Deploy

| # | Cambio | Tiempo |
|---|--------|--------|
| 3.15 | Verificar docker-compose network (traefik-public vs agent-net) | 30 min |
| 3.16 | Agregar healthcheck endpoint | 30 min |
| 3.17 | Agregar validacion de env vars al startup | 1 hora |
| 3.18 | Configurar clinicaduerksen.com.py DNS + Traefik routing | 1 hora |
| 3.19 | Agregar Dockerfile optimizacion (multi-stage, cache) | 1 hora |

Total Fase 3: ~17 horas

---

### FASE 4: CRECIMIENTO Y RETENCION (Semanas 7-8)

#### 4A. Generacion de Resenas

| # | Cambio | Tiempo |
|---|--------|--------|
| 4.1 | Mensaje WhatsApp post-tratamiento: link directo a Google Review | 2 horas |
| 4.2 | Widget de reviews vivo en homepage (rating + ultimas 3) | 2 horas |
| 4.3 | Pagina /resena con formulario + CTA a Google Maps | 1 hora |
| 4.4 | QR code en clinica que lleve a Google Review (imprimible) | 30 min |

#### 4B. Recordatorios Automaticos

| # | Cambio | Tiempo |
|---|--------|--------|
| 4.5 | Recordatorio 24h antes via WhatsApp | 3 horas |
| 4.6 | Check-in post-tratamiento 48h despues via WhatsApp | 2 horas |
| 4.7 | Recordatorio 6 meses: "Tiempo de tu control" | 3 horas |
| 4.8 | Mensaje de cumpleanos con descuento | 1 hora |

#### 4C. Blog Pipeline

| # | Cambio | Tiempo |
|---|--------|--------|
| 4.9 | Conectar blog a Supabase CMS (tabla existe) | 1 hora |
| 4.10 | Escribir 3-5 posts reales con input del Dr. Victor | 5 horas |
| 4.11 | Agregar Article schema JSON-LD a blog posts | 30 min |
| 4.12 | Agregar boton "Compartir en WhatsApp" en cada post | 30 min |
| 4.13 | Agregar categorias + tags + busqueda en blog | 2 horas |

#### 4D. Newsletter / Comunidad

| # | Cambio | Tiempo |
|---|--------|--------|
| 4.14 | Conectar /comunidad signup a Supabase + email list | 1 hora |
| 4.15 | Template de email mensual: tip dental + oferta + blog | 2 horas |

Total Fase 4: ~23 horas

---

### FASE 5: AVANZADO (Semana 9+)

| # | Funcionalidad | Tiempo | Prioridad |
|---|--------------|--------|-----------|
| 5.1 | Portal del paciente (historial, citas, documentos) | 8 horas | Media |
| 5.2 | Microsoft Clarity (heatmaps + grabaciones - gratis) | 1 hora | Alta |
| 5.3 | A/B testing hero: WhatsApp vs Phone vs Agendar | 3 horas | Baja |
| 5.4 | Recordatorios SMS (Twilio - backup WhatsApp) | 3 horas | Baja |
| 5.5 | Dashboard de ingresos por servicio/mes | 5 horas | Futuro |
| 5.6 | Inventario de insumos dentales | 5 horas | Futuro |
| 5.7 | Chatbot IA para consultas frecuentes | 6 horas | Futuro |

---

## DEPENDENCIAS GLOBALES

```
FASE 0: OBTENER DATOS CLIENTE ------> FASE 1: LLENAR ESQUELETO
                                           |
                                           v
                                    FASE 2: CONVERSION
                                           |
                                    (puede correr en paralelo)
                                           |
                              +------------+------------+
                              |                         |
                         FASE 3: TECNICA         FASE 4: CRECIMIENTO
                              |                         |
                              +------------+------------+
                                           |
                                     FASE 5: AVANZADO
```

**Bloqueante unico:** Fase 0 — sin fotos y datos del Dr. Duerksen, no se puede hacer Fase 1.

**Paralelizable:** Fase 3 (tecnica) puede correr en paralelo a Fase 2 y 4 porque no depende de contenido del cliente.

---

## TIEMPOS ESTIMADOS

| Fase | Horas | Semanas | Dependencias |
|------|-------|---------|--------------|
| Fase 0: Datos cliente | ~4 | 1 | Nada |
| Fase 1: Llenar esqueleto | ~20 | 2 | Fase 0 |
| Fase 2: Conversion | ~25 | 2 | Fase 1 |
| Fase 3: Calidad tecnica | ~17 | 1-2 | Ninguna (paralelo) |
| Fase 4: Crecimiento | ~23 | 2 | Fase 1 (formularios funcionando) |
| Fase 5: Avanzado | ~31 | 2-3 | Fase 2 + 3 + 4 |
| **Total** | **~120** | **8-12** | |

---

## CHECKLIST DE LANZAMIENTO (cuando todo este listo)

Antes de anunciar al Dr. Duerksen que el sitio esta terminado:

- [ ] Todas las fotos reales subidas y optimizadas
- [ ] Testimonios reales (no AI-generated)
- [ ] Precios verificados por Dr. Victor
- [ ] Pagina de contacto envia a email real
- [ ] Booking conectado a WhatsApp de la clinica
- [ ] Google Business Profile reclamado + foto + horarios
- [ ] Redes sociales creadas + linkeadas
- [ ] JSON-LD importado y funcionando (probar en Google Rich Results Test)
- [ ] Sitemap enviado a Google Search Console
- [ ] Lighthouse 90+ todas las categorias
- [ ] Dominio clinicaduerksen.com.py apuntando
- [ ] SSL funcionando
- [ ] Sin placeholders, sin contenido AI-generated
- [ ] Sin framer-motion en bundle
- [ ] Mobile responsive test (375px, 768px, 1024px)
- [ ] Sin 404s (probar todos los links del nav y footer)
- [ ] WhatsApp CTA funcionando en todas las paginas

---

## NOTAS TECNICAS

### Supabase Tables Needed
```sql
services (id, slug, title, meta_title, meta_description, icon, hero_text,
  description, benefits[], steps, faqs[], is_active, sort_order, created_at)

team_members (id, name, title, bio, photo_url, credentials[],
  sort_order, is_active)

testimonials (id, patient_name, rating, text, treatment_type, source,
  is_featured, is_active, created_at)

gallery_cases (id, title, description, before_image_url, after_image_url,
  treatment_type, is_active, created_at)

blog_posts (id, slug, title, excerpt, content, cover_image_url, author,
  category, tags[], is_published, published_at, created_at)

contact_submissions (id, name, phone, email, reason, message, is_read, created_at)

appointments (id, service, date, time, name, phone, email, notes, status, created_at)

settings (key text pk, value jsonb, updated_at)
```

### WhatsApp Business API Setup
Usar wa.me links por ahora (gratis). Para automation:
- Opcion A: WhatsApp Business API (Meta) ~ $50-100/mes
- Opcion B: WATI / Twilio WhatsApp ~ $0.005/msg
- Opcion C: wa.me links manuales (gratis, sin automation)

Recomendacion: empezar con wa.me links, migrar a API cuando el volumen justifique.

### Hosting & Costos
| Item | Costo/mes |
|------|-----------|
| VPS actual (Hostinger) | Ya pagado |
| Dominio clinicaduerksen.com.py | ~$15-30/ano |
| Supabase Free tier | $0 |
| Google Business Profile | $0 |
| Resend (email) Free tier (100 msg/dia) | $0 |
| SSL (Let's Encrypt via Traefik) | $0 |
| **Total mensual** | **~$1.25-2.50** (dominio prorrateado) |
