import { MultiAgent, PerformanceMetric, ResponsibleAI, DemoAccount } from '../../domain/entities/MultiAgent.entity';

// Mock 1: Agente de Reconocimiento de Personas
export const mockMultiAgent1: MultiAgent = {
  id: '1',
  title: 'Agente de Reconocimiento de Personas',
  name: 'Agente de Reconocimiento de Personas',
  description: 'Sistema de identificación biométrica ultrarrápida usando Azure Face Recognition y Cosmos DB para emergencias y control de acceso.',
  shortDescription: 'Identificación facial ultrarrápida para emergencias y control de acceso',
  fullDescription: `Este agente utiliza Azure Face Recognition y Cosmos DB para proporcionar identificación ultrarrápida en situaciones críticas.

Casos de Uso:
• Control de Acceso en Eventos: Verificación sin necesidad de boletos o QR codes
• Emergencias Médicas: Identificación rápida de pacientes sin documentos
• Seguridad: Verificación de identidad en puntos críticos

Características Clave:
• Identificación en milisegundos
• Alta precisión (99.8%)
• Escalación automática a verificación humana en casos de baja confianza
• Cumplimiento con protección de datos biométricos`,
  imageUrl: '',
  logo: '',
  capabilities: [
    'Reconocimiento facial en tiempo real',
    'Identificación de personas sin documentos',
    'Verificación biométrica de alta precisión',
    'Detección de anomalías en calidad de imagen',
    'Escalación automática a verificación humana',
    'Integración con Cosmos DB para perfiles de usuario',
    'Cumplimiento de normativas de privacidad de datos'
  ],
  domains: [
    'Salud y Emergencias',
    'Control de Acceso en Eventos',
    'Seguridad Corporativa',
    'Servicios de Emergencia',
    'Gestión de Instalaciones'
  ],
  performanceMetrics: [
    {
      label: 'Precisión',
      value: '99.8%',
      description: 'Exactitud del reconocimiento facial en condiciones óptimas'
    },
    {
      label: 'Latencia',
      value: '50ms',
      description: 'Tiempo promedio de respuesta por identificación'
    },
    {
      label: 'Escalabilidad',
      value: 'Alta',
      description: 'Capacidad de procesar múltiples solicitudes simultáneamente'
    },
    {
      label: 'Reducción de Tiempo',
      value: '70%',
      description: 'Reducción en tiempo de identificación en emergencias'
    }
  ] as PerformanceMetric[],
  responsibleAI: {
    description: 'Escalación automática a verificación humana en casos de baja confianza',
    transparency: 'Justificación basada en score de confianza para cada identificación',
    fairness: 'Evaluación sin sesgos demográficos mediante algoritmos certificados',
    privacy: 'Protección de datos biométricos mediante cifrado AES-256 y anonimización'
  } as ResponsibleAI,
  demoUrl: 'http://localhost:5174',
  documentationUrl: 'https://docs.example.com/reconocimiento',
  demoAccount: {
    username: 'demo.reconocimiento@azure.com',
    password: 'Demo2024!'
  } as DemoAccount,
  isAvailable: true,
  organizationsCount: 15,
  createdAt: new Date('2024-01-15'),
  updatedAt: new Date('2024-11-15')
};

// Mock 2: Agente de Citas Dinámicas
export const mockMultiAgent2: MultiAgent = {
  id: '2',
  title: 'Agente de Citas Dinámicas',
  name: 'Agente de Citas Dinámicas',
  description: 'Multiagente inteligente que gestiona agendas, correos, búsqueda de información y análisis de sentimientos para una experiencia de agendamiento sin fricciones.',
  shortDescription: 'Gestión inteligente de citas con análisis de sentimientos y búsqueda automatizada',
  fullDescription: `Este multiagente combina múltiples capacidades para ofrecer un servicio de agendamiento completo y personalizado.

Capacidades Integradas:
• Gestión de agenda con Outlook Calendar
• Envío automatizado de correos
• Búsqueda de información mediante Cognitive Search
• Análisis de sentimientos en tiempo real
• Escalación automática en casos críticos

Casos de Uso:
• Recursos Humanos: Consultas sobre nómina con preparación de información
• Atención al Cliente: Detección de frustración y escalación apropiada
• Finanzas: Agendamiento con contexto de historial financiero

Beneficios:
• Reducción del 80% en tiempo de agentes humanos
• Mejora del 20% en satisfacción del usuario
• Escalación inteligente basada en análisis de sentimientos`,
  imageUrl: '',
  logo: '',
  capabilities: [
    'Gestión automatizada de calendario (Outlook)',
    'Envío de correos electrónicos contextualizados',
    'Búsqueda de información relevante (Cognitive Search)',
    'Análisis de sentimientos en tiempo real',
    'Coordinación de disponibilidad entre múltiples partes',
    'Escalación automática según umbral de sentimiento',
    'Personalización basada en historial del usuario'
  ],
  domains: [
    'Recursos Humanos',
    'Atención al Cliente',
    'Finanzas',
    'Servicios Legales',
    'Soporte Técnico'
  ],
  performanceMetrics: [
    {
      label: 'Reducción de Carga',
      value: '80%',
      description: 'Liberación de tiempo para agentes humanos'
    },
    {
      label: 'Satisfacción',
      value: '+20%',
      description: 'Aumento en satisfacción del usuario'
    },
    {
      label: 'Tiempo de Respuesta',
      value: '2min',
      description: 'Tiempo promedio para agendar una cita'
    },
    {
      label: 'Precisión Sentimientos',
      value: '94%',
      description: 'Exactitud en detección de estados emocionales'
    }
  ] as PerformanceMetric[],
  responsibleAI: {
    description: 'Escalación inmediata al detectar hostilidad extrema o amenazas',
    transparency: 'Explicación clara de decisiones de agendamiento y escalación',
    fairness: 'Acceso equitativo sin priorización basada en características personales',
    privacy: 'Protección de datos de calendario y comunicaciones mediante cifrado end-to-end'
  } as ResponsibleAI,
  demoUrl: 'http://localhost:5175/',
  documentationUrl: 'https://docs.example.com/citas',
  demoAccount: {
    username: 'demo.citas@azure.com',
    password: 'Demo2024!'
  } as DemoAccount,
  isAvailable: true,
  organizationsCount: 23,
  createdAt: new Date('2024-02-01'),
  updatedAt: new Date('2024-11-20')
};

// Mock 3: Agente de Filtrado de Postulantes
export const mockMultiAgent3: MultiAgent = {
  id: '3',
  title: 'Agente de Filtrado de Postulantes',
  name: 'Agente de Filtrado de Postulantes',
  description: 'Sistema multiagente para evaluación integral de candidatos con supervisión de integridad mediante Azure AI Vision, medición de conocimiento y capacidad de aprendizaje.',
  shortDescription: 'Evaluación automatizada e integral de candidatos con IA responsable',
  fullDescription: `Este multiagente revoluciona el proceso de reclutamiento mediante la combinación de múltiples agentes especializados.

Componentes del Sistema:
1. Agente de Evaluación: Administra pruebas en línea
2. Agente de Visión: Supervisa integridad usando Azure AI Vision
3. Agente de Conocimiento: Evalúa competencias técnicas
4. Agente de Aprendizaje: Mide potencial de crecimiento
5. Agente Clasificador: Genera perfil integral del candidato

Proceso de Evaluación:
• Administración automatizada de evaluaciones
• Monitoreo de integridad en tiempo real
• Análisis multidimensional (conocimiento + aprendizaje)
• Clasificación automática con revisión humana en casos dudosos

Impacto:
• Reducción del 60% en tiempo de preselección
• Mayor tasa de conversión en funnel de reclutamiento
• Proceso más justo y transparente
• Decisión final siempre humana`,
  imageUrl: '',
  logo: '',
  capabilities: [
    'Administración automatizada de evaluaciones en línea',
    'Supervisión de integridad con Azure AI Vision',
    'Evaluación de conocimientos técnicos',
    'Medición de capacidad de aprendizaje',
    'Clasificación automática de perfiles',
    'Detección de comportamiento sospechoso',
    'Escalación a reclutador en casos dudosos',
    'Generación de reportes integrales'
  ],
  domains: [
    'Recursos Humanos',
    'Educación y Capacitación',
    'Reclutamiento Corporativo',
    'Selección de Talento',
    'Desarrollo Organizacional'
  ],
  performanceMetrics: [
    {
      label: 'Reducción Tiempo',
      value: '60%',
      description: 'Reducción en tiempo de preselección de candidatos'
    },
    {
      label: 'Precisión Evaluación',
      value: '96%',
      description: 'Exactitud en evaluación de competencias'
    },
    {
      label: 'Detección Fraude',
      value: '98%',
      description: 'Efectividad en detección de comportamiento irregular'
    },
    {
      label: 'Satisfacción Candidatos',
      value: '+20%',
      description: 'Mejora en experiencia del candidato'
    }
  ] as PerformanceMetric[],
  responsibleAI: {
    description: 'Suspensión de prueba y derivación a reclutador ante comportamiento sospechoso, no descalificación automática',
    transparency: 'Justificación completa de cada evaluación y clasificación',
    fairness: 'Proceso estandarizado para todos los candidatos sin sesgos demográficos',
    privacy: 'Protección de datos personales y resultados de evaluaciones con acceso controlado'
  } as ResponsibleAI,
  demoUrl: 'https://example.com/demo-postulantes',
  documentationUrl: 'https://docs.example.com/postulantes',
  demoAccount: {
    username: 'demo.postulantes@azure.com',
    password: 'Demo2024!'
  } as DemoAccount,
  isAvailable: true,
  organizationsCount: 18,
  createdAt: new Date('2024-03-10'),
  updatedAt: new Date('2024-11-25')
};

// Exportar array con todos los mocks
export const mockMultiAgents: MultiAgent[] = [
  mockMultiAgent1,
  mockMultiAgent2,
  mockMultiAgent3
];

// Función helper para obtener mock por ID - MEJORADA
export const getMockMultiAgentById = (id: string | number): MultiAgent | undefined => {
  // Convertir a string para comparación consistente
  const stringId = String(id);
  console.log('[getMockMultiAgentById] Buscando ID:', stringId, 'tipo original:', typeof id);
  
  const found = mockMultiAgents.find(agent => agent.id === stringId);
  console.log('[getMockMultiAgentById] Resultado:', found ? 'ENCONTRADO' : 'NO ENCONTRADO');
  
  return found;
};