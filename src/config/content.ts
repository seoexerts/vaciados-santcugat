/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Servicio profesional en {{city}} y comarca',
    h1main:      'Vaciado de pisos y locales',
    h1accent:    'en {{city}}',
    description: 'Retiramos muebles, trastos y residuos de cualquier inmueble. Presupuesto gratuito en 24 h, equipo propio y gestión de residuos certificada.',
    badge1:      'Presupuesto en menos de 24 h',
    badge2:      'Pisos, locales y naves',
    badge3:      'Gestión de residuos certificada',
    badge4:      'Equipo propio, sin subcontratas',
    cardStat:    '+600',
    cardLabel:   'servicios realizados',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'shield',
      title:       'Desokupa Profesional en {{city}}',
      description: 'Liberamos tu propiedad de forma legal y segura, evitando problemas y costes adicionales. Experiencia garantizada.',
    },
    {
      icon: 'clock',
      title:       'Servicio Rápido y Eficaz',
      description: 'Vaciado urgente o programado, nos adaptamos a tus necesidades. Minimizamos el tiempo que la vivienda está vacía.',
    },
    {
      icon: 'check',
      title:       'Gestión Integral del Vaciado',
      description: 'Nos encargamos de todo: desde la retirada de muebles hasta la limpieza final y gestión de residuos en {{city}}.',
    },
    {
      icon: 'box',
      title:       'Transporte Profesional y Seguro',
      description: 'Muebles y objetos embalados y transportados con cuidado para evitar daños. Cobertura de seguro incluida.',
    },
    {
      icon: 'heart',
      title:       'Respeto por el Entorno y la Comunidad',
      description: 'Trabajamos de forma discreta y responsable, minimizando molestias a vecinos en {{city}} y gestionando los residuos correctamente.',
    },
    {
      icon: 'users',
      title:       'Atención Personalizada y Cercana',
      description: 'Asesoramiento profesional para cada situación. Te acompañamos en todo el proceso de vaciado en Sant Cugat del Vallès.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'vaciado-pisos',
      nombre:      'Vaciado de pisos',
      description: 'Retiramos muebles, electrodomésticos, ropa y enseres. El piso queda vacío y limpio en un solo día. Ideal para herencias, reformas o cambio de inquilino.',
      features:    ['Muebles, electrodomésticos y ropa', 'Vaciado completo en un día', 'Limpieza básica o a fondo opcional'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-locales',
      nombre:      'Vaciado de locales comerciales',
      description: 'Oficinas, tiendas, almacenes y naves. Desmontamos estanterías y mobiliario fijo. Gestión de residuos con certificado incluido.',
      features:    ['Desmontaje de estanterías', 'Certificado de residuos', 'Horario flexible'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'recogida-muebles',
      nombre:      'Recogida de muebles (servicio mínimo una furgoneta)',
      description: 'Sofá, armario, cama, electrodomésticos… Subimos a buscarlos y te quitamos el problema. Sin necesidad de vaciar el piso entero.',
      features:    ['Subimos hasta tu piso', 'Precio por volumen', 'Mismo día en muchos casos'],
      featured:    false,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-diogenes',
      nombre:      'Limpieza síndrome de Diógenes',
      description: 'Actuación discreta en viviendas con acumulación severa. Desinfección, retirada de residuos orgánicos y recuperación completa del inmueble.',
      features:    ['Total confidencialidad', 'Desinfección profunda', 'Equipo especializado'],
      featured:    true,
      ctaPage:     false,
    },
    {
      slug:        'limpieza-post-vaciado',
      nombre:      'Limpieza post vaciado',
      description: 'Tras el vaciado, limpieza profunda de suelos, paredes, cocina y baños. El inmueble queda listo para visita, venta o alquiler.',
      features:    ['Limpieza de suelos y paredes', 'Cocina y baños a fondo', 'Combinable con vaciado'],
      featured:    false,
      ctaPage:     false,
    },
    {
      slug:        'pintura-express',
      nombre:      'Pintura express',
      description: 'Pintamos pisos y locales recién vaciados en 24–48 h con acabado profesional. Ideal para rentabilizar el inmueble lo antes posible.',
      features:    ['Acabado en 24–48 h', 'Combinable con vaciado', 'Precio cerrado'],
      featured:    false,
      ctaPage:     false,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'Miquel Cano',
      location: '{{city}}',
      service:  'Vaciado de piso',
      quote:    'Vaciaron el piso de mi madre en un solo día. Puntuales, limpios y muy amables. Se llevaron todo sin dejar rastro y donaron los muebles en buen estado. 100% recomendables.',
    },
    {
      initials: 'JR',
      name:     'Jordana Rull',
      location: '{{city}}',
      service:  'Vaciado de local',
      quote:    'Necesitaba vaciar un local antes de entregar las llaves. Me dieron presupuesto el mismo día y lo tuvieron listo en 48 horas. Precio justo y sin sorpresas.',
    },
    {
      initials: 'AL',
      name:     'Anna L.',
      location: '{{city}}',
      service:  'Recogida de muebles',
      quote:    'Recogieron un sofá, dos armarios y varios electrodomésticos. Subieron hasta el tercero sin ascensor sin ningún problema. Rápido, económico y muy profesional.',
    },
    {
      initials: 'PG',
      name:     'Pere G.',
      location: '{{city}}',
      service:  'Vaciado de piso',
      quote:    'Tras el fallecimiento de mi padre tuve que gestionar el vaciado de su piso. El equipo fue muy respetuoso y eficiente. Me quitaron un gran peso en un momento difícil.',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Habitación o estudio',
      precio:    '150 €',
      highlight: false,
      badge:     'PRECIO APROX.',
      features:  ['Hasta 20 m²', 'Muebles y enseres básicos', '1–2 operarios, ½ día', 'Gestión de residuos'],
    },
    {
      tipo:      'Piso 3 habitaciones',
      precio:    '300 €',
      highlight: true,
      badge:     'PRECIO APROX.',
      features:  ['70–90 m² amueblado', 'Todo incluido: muebles, electrodom., ropa', 'Equipo de 3, jornada completa', 'Gestión de residuos + limpieza básica'],
    },
    {
      tipo:      'Local o nave',
      precio:    '400 €',
      highlight: false,
      badge:     'PRECIO APROX.',
      features:  ['Hasta 100 m²', 'Estanterías, mobiliario de ofic.', 'Equipo de 3–4, jornada completa', 'Certificado de gestión incluido'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta vaciar un piso en {{city}}?',
      respuesta: 'El precio depende del tamaño y el volumen de enseres. Un piso de 70–90 m² suele estar entre 250 € y 500 €. Te enviamos presupuesto gratuito en menos de 24 horas, sin visita previa en muchos casos (basta con fotos).',
    },
    {
      pregunta:  '¿Cuánto tiempo tarda el vaciado?',
      respuesta: 'La mayoría de pisos se vacían en un solo día. Un piso de 3 habitaciones con mobiliario completo lleva entre 4 y 8 horas con nuestro equipo. Los locales comerciales dependen del volumen.',
    },
    {
      pregunta:  '¿Qué hacéis con los muebles y objetos retirados?',
      respuesta: 'Separamos los objetos en buen estado para donarlos a entidades sociales o canales de segunda mano. El resto se lleva a puntos de reciclaje autorizados. Trabajamos de forma responsable.',
    },
    {
      pregunta:  '¿Podéis vaciar un piso de herencia con trámites pendientes?',
      respuesta: 'Sí. Trabajamos habitualmente con gestorías, notarías y familiares en proceso de herencia. Podemos coordinar el vaciado con los tiempos legales y documentar lo retirado si es necesario.',
    },
    {
      pregunta:  '¿Trabajáis en fines de semana?',
      respuesta: 'Sí, disponemos de servicio en fines de semana con cita previa. Consulta disponibilidad al solicitar el presupuesto.',
    },
    {
      pregunta:  '¿El presupuesto es realmente gratuito?',
      respuesta: 'Sí, 100% gratuito y sin compromiso. En muchos casos te lo damos por teléfono o WhatsApp con fotos. Si el trabajo lo requiere, hacemos visita previa también sin coste.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      'Contacto y presupuesto gratuito',
      descripcion: 'Llámanos, escríbenos por WhatsApp o rellena el formulario. Envíanos fotos del inmueble y en menos de 24 horas recibes un presupuesto cerrado y sin letra pequeña.',
    },
    {
      titulo:      'Confirmación y fecha',
      descripcion: 'Aceptas el presupuesto y fijamos el día. Nos adaptamos a tu disponibilidad, incluidos fines de semana si es necesario. No pedimos señal.',
    },
    {
      titulo:      'Trabajo completo',
      descripcion: 'Nuestro equipo acude puntual, protege escaleras y zonas comunes, y realiza el trabajo de forma ordenada y eficiente. En la mayoría de casos terminamos en el mismo día.',
    },
    {
      titulo:      'Entrega y gestión de residuos',
      descripcion: 'Dejamos el inmueble listo. Los residuos se llevan a gestores autorizados. Si lo necesitas, emitimos certificado de gestión.',
    }
  ],

} as const;

export type Content = typeof content;
