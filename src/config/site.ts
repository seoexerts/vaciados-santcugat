/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado automáticamente · 16/3/2026             ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'VaciadosPro Sant Cugat',
  businessNameLegal: 'VaciadosPro Sant Cugat',
  cif:   'B12345678',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Vaciado de pisos y locales',
  area:         'Todo Sant Cugat del Vallés, municipios cercanos y comarca.',
  mainCity:     'Sant Cugat del Vallés',
  comarca:      'el Vallès Occidental, Vallès Oriental,',
  foundingYear: '2018',

  // ── Contacto ──────────────────────────────────────────
  phone:    '+34 633 75 96 49',
  email:    'seoexpertsslu@gmail.com',
  whatsapp: '34633759649',
  // @ts-ignore — requiere node_modules para que el IDE resuelva los tipos de Astro
  web: import.meta.env.SITE || 'https://vaciados-santcugat.pages.dev',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Fr 09:00-20:00',
  horarioTexto: 'Lunes a Viernes, 9:00–20:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'20:00',

  // ── SEO ───────────────────────────────────────────────
  description: 'Especialistas en servicios profesionales de vaciado de pisos y locales en todo Sant Cugat del Vallés. Presupuesto gratuito y garantía por escrito.',
  priceRange:  '€€',
  aggregateRating: {
    ratingValue:  4.9,
    reviewCount:  30,
    bestRating:   5,
    worstRating:  1,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#f236d9',
  colorText:    '#0f172a',

  // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

  // ── Verificación de sitio ─────────────────────────────
  googleVerification: '',
  bingVerification:   '',

} as const;

export type SiteConfig = typeof siteConfig;
