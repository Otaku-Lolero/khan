
// ==========================================
// 1° MEDIO
// ==========================================
const contents1Medio = [
    // --- MATEMÁTICA 1° ---
    // Unidad 1: Números
    { title: 'Números: Racionales e Irracionales', level: '1-medio', subject: 'Matemática', unit: 'Números', body: 'Concepto y diferenciación.', order: 1, type: 'lesson' },
    { title: 'Números: Potencias y Raíces', level: '1-medio', subject: 'Matemática', unit: 'Números', body: 'Propiedades y cálculo.', order: 2, type: 'lesson' },
    { title: 'Números: Orden y Comparación', level: '1-medio', subject: 'Matemática', unit: 'Números', body: 'Orden en la recta real.', order: 3, type: 'lesson' },

    // Unidad 2: Álgebra
    { title: 'Álgebra: Expresiones Algebraicas', level: '1-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Reducción y valorización.', order: 4, type: 'lesson' },
    { title: 'Álgebra: Ecuaciones de Primer Grado', level: '1-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Resolución paso a paso.', order: 5, type: 'lesson' },
    { title: 'Álgebra: Problemas con Ecuaciones', level: '1-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Planteamiento y solución.', order: 6, type: 'lesson' },
    { title: 'Álgebra: Patrones y Regularidades', level: '1-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Secuencias numéricas.', order: 7, type: 'lesson' },

    // Unidad 3: Funciones
    { title: 'Funciones: Función Lineal', level: '1-medio', subject: 'Matemática', unit: 'Funciones', body: 'Concepto f(x) = mx.', order: 8, type: 'lesson' },
    { title: 'Funciones: Plano Cartesiano', level: '1-medio', subject: 'Matemática', unit: 'Funciones', body: 'Representación gráfica.', order: 9, type: 'lesson' },
    { title: 'Funciones: Interpretación de Gráficos', level: '1-medio', subject: 'Matemática', unit: 'Funciones', body: 'Análisis de comportamiento.', order: 10, type: 'lesson' },

    // Unidad 4: Geometría
    { title: 'Geometría: Ángulos y Rectas', level: '1-medio', subject: 'Matemática', unit: 'Geometría', body: 'Paralelas, transversales.', order: 11, type: 'lesson' },
    { title: 'Geometría: Triángulos', level: '1-medio', subject: 'Matemática', unit: 'Geometría', body: 'Clasificación y propiedades.', order: 12, type: 'lesson' },
    { title: 'Geometría: Teorema de Pitágoras', level: '1-medio', subject: 'Matemática', unit: 'Geometría', body: 'Cálculo de hipotenusa y catetos.', order: 13, type: 'lesson' },
    { title: 'Geometría: Perímetros y Áreas', level: '1-medio', subject: 'Matemática', unit: 'Geometría', body: 'Figuras planas.', order: 14, type: 'lesson' },

    // Unidad 5: Datos y Probabilidades
    { title: 'Datos: Tablas y Gráficos', level: '1-medio', subject: 'Matemática', unit: 'Datos y Probabilidades', body: 'Frecuencia y representación.', order: 15, type: 'lesson' },
    { title: 'Datos: Medidas de Tendencia Central', level: '1-medio', subject: 'Matemática', unit: 'Datos y Probabilidades', body: 'Media, Mediana, Moda.', order: 16, type: 'lesson' },
    { title: 'Datos: Probabilidad Simple', level: '1-medio', subject: 'Matemática', unit: 'Datos y Probabilidades', body: 'Regla de Laplace.', order: 17, type: 'lesson' },

    // --- LENGUA Y LITERATURA 1° ---
    // Unidad 1: Lectura
    { title: 'Lectura: Comprensión', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Narración, información y argumentación.', order: 1, type: 'lesson' },
    { title: 'Lectura: Análisis Literario', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Cuentos, novelas y mitos.', order: 2, type: 'lesson' },
    { title: 'Lectura: Propósito del Texto', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Tema e idea principal.', order: 3, type: 'lesson' },
    { title: 'Lectura: Opinión y Reflexión', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Pensamiento crítico.', order: 4, type: 'lesson' },

    // Unidad 2: Escritura
    { title: 'Escritura: Textos Narrativos', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Redacción de cuentos.', order: 5, type: 'lesson' },
    { title: 'Escritura: Textos Descriptivos/Informativos', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Estructura y claridad.', order: 6, type: 'lesson' },
    { title: 'Escritura: Proceso de Escritura', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Planificación, redacción, revisión.', order: 7, type: 'lesson' },

    // Unidad 3: Comunicación Oral
    { title: 'Oralidad: Exposiciones y Debates', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Comunicación Oral', body: 'Expresión clara de ideas.', order: 8, type: 'lesson' },

    // Unidad 4: Lengua y Gramática
    { title: 'Gramática: Clases de Palabras', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Lengua y Gramática', body: 'Sustantivo, verbo, adjetivo, adverbio.', order: 9, type: 'lesson' },
    { title: 'Gramática: Ortografía y Sintaxis', level: '1-medio', subject: 'Lengua y Literatura', unit: 'Lengua y Gramática', body: 'Acentuación y concordancia.', order: 10, type: 'lesson' },

    // --- HISTORIA 1° ---
    // Unidad 1: Historia
    { title: 'Historia: Antigüedad Clásica', level: '1-medio', subject: 'Historia', unit: 'Historia', body: 'Grecia, Roma y Democracia.', order: 1, type: 'lesson' },
    { title: 'Historia: Edad Media', level: '1-medio', subject: 'Historia', unit: 'Historia', body: 'Feudalismo, Iglesia e Islam.', order: 2, type: 'lesson' },

    // Unidad 2: Geografía
    { title: 'Geografía: Ubicación Espacial', level: '1-medio', subject: 'Historia', unit: 'Geografía', body: 'Mapas y coordenadas.', order: 3, type: 'lesson' },
    { title: 'Geografía: Relieve y Entorno', level: '1-medio', subject: 'Historia', unit: 'Geografía', body: 'Sociedad y medio ambiente.', order: 4, type: 'lesson' },

    // Unidad 3: Formación Ciudadana
    { title: 'Ciudadanía: Normas y Convivencia', level: '1-medio', subject: 'Historia', unit: 'Formación Ciudadana', body: 'Derechos y deberes.', order: 5, type: 'lesson' },

    // --- INGLÉS 1° ---
    // Unidad 1: Comunicación
    { title: 'Inglés: Comprensión Auditiva y Lectora', level: '1-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Listening y Reading básicos.', order: 1, type: 'lesson' },
    { title: 'Inglés: Producción Oral', level: '1-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Presentaciones y diálogos.', order: 2, type: 'lesson' },
    { title: 'Inglés: Escritura Simple', level: '1-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Textos breves.', order: 3, type: 'lesson' },

    // Unidad 2: Gramática
    { title: 'Gramática: Tiempos Presentes', level: '1-medio', subject: 'Inglés', unit: 'Gramática', body: 'Simple y Continuo.', order: 4, type: 'lesson' },
    { title: 'Gramática: Pasado y Modales', level: '1-medio', subject: 'Inglés', unit: 'Gramática', body: 'Past Simple, Can, Must.', order: 5, type: 'lesson' },

    // Unidad 3: Vocabulario
    { title: 'Vocabulario: Vida Diaria', level: '1-medio', subject: 'Inglés', unit: 'Vocabulario', body: 'Rutinas, Familia, Escuela.', order: 6, type: 'lesson' },
];

// ==========================================
// 2° MEDIO
// ==========================================
const contents2Medio = [
    // --- MATEMÁTICA 2° ---
    // Unidad 1: Números
    { title: 'Números: Potencias Exponente Entero', level: '2-medio', subject: 'Matemática', unit: 'Números', body: 'Propiedades.', order: 1, type: 'lesson' },
    { title: 'Números: Raíces Cuadradas', level: '2-medio', subject: 'Matemática', unit: 'Números', body: 'Cálculo y estimación.', order: 2, type: 'lesson' },
    { title: 'Números: Operaciones Reales', level: '2-medio', subject: 'Matemática', unit: 'Números', body: 'Racionales e irracionales.', order: 3, type: 'lesson' },

    // Unidad 2: Álgebra
    { title: 'Álgebra: Ecuaciones 1er Grado', level: '2-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Repaso y profundización.', order: 4, type: 'lesson' },
    { title: 'Álgebra: Sistemas de Ecuaciones', level: '2-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Métodos de resolución.', order: 5, type: 'lesson' },
    { title: 'Álgebra: Productos Notables', level: '2-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Cuadrado de binomio, suma por diferencia.', order: 6, type: 'lesson' },
    { title: 'Álgebra: Factorización', level: '2-medio', subject: 'Matemática', unit: 'Álgebra', body: 'Factor común y trinomios.', order: 7, type: 'lesson' },

    // Unidad 3: Funciones
    { title: 'Funciones: Función Cuadrática', level: '2-medio', subject: 'Matemática', unit: 'Funciones', body: 'Análisis de la parábola.', order: 8, type: 'lesson' },
    { title: 'Funciones: Gráficos Cuadráticos', level: '2-medio', subject: 'Matemática', unit: 'Funciones', body: 'Vértice, eje de simetría.', order: 9, type: 'lesson' },
    { title: 'Funciones: Situaciones Reales', level: '2-medio', subject: 'Matemática', unit: 'Funciones', body: 'Modelamiento.', order: 10, type: 'lesson' },

    // Unidad 4: Geometría
    { title: 'Geometría: Semejanza', level: '2-medio', subject: 'Matemática', unit: 'Geometría', body: 'Criterios de semejanza.', order: 11, type: 'lesson' },
    { title: 'Geometría: Teorema de Tales', level: '2-medio', subject: 'Matemática', unit: 'Geometría', body: 'Proporcionalidad.', order: 12, type: 'lesson' },
    { title: 'Geometría: Circunferencia y Círculo', level: '2-medio', subject: 'Matemática', unit: 'Geometría', body: 'Elementos y propiedades.', order: 13, type: 'lesson' },
    { title: 'Geometría: Áreas y Volúmenes', level: '2-medio', subject: 'Matemática', unit: 'Geometría', body: 'Cuerpos geométricos.', order: 14, type: 'lesson' },

    // Unidad 5: Estadística y Probabilidad
    { title: 'Estadística: Análisis de Datos', level: '2-medio', subject: 'Matemática', unit: 'Estadística', body: 'Interpretación de información.', order: 15, type: 'lesson' },
    { title: 'Estadística: Gráficos Estadísticos', level: '2-medio', subject: 'Matemática', unit: 'Estadística', body: 'Histogramas y polígonos.', order: 16, type: 'lesson' },
    { title: 'Estadística: Probabilidad', level: '2-medio', subject: 'Matemática', unit: 'Estadística', body: 'Compuesta y experimental.', order: 17, type: 'lesson' },

    // --- LENGUA Y LITERATURA 2° ---
    // Unidad 1: Lectura
    { title: 'Lectura: Análisis de Textos', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Literarios y no literarios.', order: 1, type: 'lesson' },
    { title: 'Lectura: Narrativa Latinoamericana', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Identidad y juventud.', order: 2, type: 'lesson' },
    { title: 'Lectura: Textos Argumentativos', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Estructura y tesis.', order: 3, type: 'lesson' },
    { title: 'Lectura: Interpretación Crítica', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Reflexión personal.', order: 4, type: 'lesson' },

    // Unidad 2: Escritura
    { title: 'Escritura: Argumentativa', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Cartas, columnas, ensayos.', order: 5, type: 'lesson' },
    { title: 'Escritura: Narrativa Compleja', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Creación de mundos.', order: 6, type: 'lesson' },
    { title: 'Escritura: Cohesión Textual', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Uso de conectores.', order: 7, type: 'lesson' },

    // Unidad 3: Comunicación Oral
    { title: 'Oralidad: Debates Formales', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Comunicación Oral', body: 'Argumentación en público.', order: 8, type: 'lesson' },
    { title: 'Oralidad: Presentaciones', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Comunicación Oral', body: 'Exposición estructurada.', order: 9, type: 'lesson' },
    { title: 'Oralidad: Análisis Oral', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Comunicación Oral', body: 'Comentario de textos.', order: 10, type: 'lesson' },

    // Unidad 4: Lengua y Gramática
    { title: 'Lengua: Funciones del Lenguaje', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Lengua', body: 'Intención comunicativa.', order: 11, type: 'lesson' },
    { title: 'Lengua: Recursos Literarios', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Lengua', body: 'Metáfora, comparación, hipérbole.', order: 12, type: 'lesson' },
    { title: 'Lengua: Puntuación Avanzada', level: '2-medio', subject: 'Lengua y Literatura', unit: 'Lengua', body: 'Uso correcto de signos.', order: 13, type: 'lesson' },

    // --- HISTORIA 2° ---
    // Unidad 1: Historia
    { title: 'Historia: Edad Moderna', level: '2-medio', subject: 'Historia', unit: 'Historia Universal', body: 'Renacimiento y Reforma.', order: 1, type: 'lesson' },
    { title: 'Historia: Descubrimientos', level: '2-medio', subject: 'Historia', unit: 'Historia Universal', body: 'Expansión europea.', order: 2, type: 'lesson' },
    { title: 'Historia: Edad Contemporánea', level: '2-medio', subject: 'Historia', unit: 'Historia Universal', body: 'Ilustración y Revoluciones.', order: 3, type: 'lesson' },
    { title: 'Historia: Liberalismo', level: '2-medio', subject: 'Historia', unit: 'Historia Universal', body: 'Transformaciones sociales.', order: 4, type: 'lesson' },

    // Unidad 2: Geografía
    { title: 'Geografía: Globalización', level: '2-medio', subject: 'Historia', unit: 'Geografía', body: 'Interconexión mundial.', order: 5, type: 'lesson' },
    { title: 'Geografía: Recursos Naturales', level: '2-medio', subject: 'Historia', unit: 'Geografía', body: 'Disponibilidad y uso.', order: 6, type: 'lesson' },
    { title: 'Geografía: Sustentabilidad', level: '2-medio', subject: 'Historia', unit: 'Geografía', body: 'Problemas ambientales y desarrollo.', order: 7, type: 'lesson' },

    // Unidad 3: Formación Ciudadana
    { title: 'Ciudadanía: Estado y Nación', level: '2-medio', subject: 'Historia', unit: 'Ciudadanía', body: 'Conceptos políticos.', order: 8, type: 'lesson' },
    { title: 'Ciudadanía: Democracia', level: '2-medio', subject: 'Historia', unit: 'Ciudadanía', body: 'Participación activa.', order: 9, type: 'lesson' },
    { title: 'Ciudadanía: Derechos Humanos', level: '2-medio', subject: 'Historia', unit: 'Ciudadanía', body: 'Respeto y garantía.', order: 10, type: 'lesson' },

    // --- INGLÉS 2° ---
    // Unidad 1: Comunicación
    { title: 'Inglés: Lectura Extensa', level: '2-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Comprensión de textos complejos.', order: 1, type: 'lesson' },
    { title: 'Inglés: Debate', level: '2-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Discusiones simples.', order: 2, type: 'lesson' },
    { title: 'Inglés: Presentación Oral', level: '2-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Temas desarrollados.', order: 3, type: 'lesson' },
    { title: 'Inglés: Escritura', level: '2-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Textos narrativos y de opinión.', order: 4, type: 'lesson' },

    // Unidad 2: Gramática
    { title: 'Gramática: Pasado Continuo', level: '2-medio', subject: 'Inglés', unit: 'Gramática', body: 'Acciones en progreso en el pasado.', order: 5, type: 'lesson' },
    { title: 'Gramática: Formas Futuras', level: '2-medio', subject: 'Inglés', unit: 'Gramática', body: 'Will vs Going to.', order: 6, type: 'lesson' },
    { title: 'Gramática: Comparativos/Superlativos', level: '2-medio', subject: 'Inglés', unit: 'Gramática', body: 'Comparando cosas.', order: 7, type: 'lesson' },
    { title: 'Gramática: Modales', level: '2-medio', subject: 'Inglés', unit: 'Gramática', body: 'Should, may, have to.', order: 8, type: 'lesson' },
    { title: 'Gramática: Presente Perfecto', level: '2-medio', subject: 'Inglés', unit: 'Gramática', body: 'Introducción.', order: 9, type: 'lesson' },

    // Unidad 3: Vocabulario
    { title: 'Vocabulario: Experiencias Personales', level: '2-medio', subject: 'Inglés', unit: 'Vocabulario', body: 'Eventos de vida.', order: 10, type: 'lesson' },
    { title: 'Vocabulario: Tecno y Medios', level: '2-medio', subject: 'Inglés', unit: 'Vocabulario', body: 'Comunicación moderna.', order: 11, type: 'lesson' },
    { title: 'Vocabulario: Viajes y Cultura', level: '2-medio', subject: 'Inglés', unit: 'Vocabulario', body: 'Exploración del mundo.', order: 12, type: 'lesson' },
    { title: 'Vocabulario: Medio Ambiente', level: '2-medio', subject: 'Inglés', unit: 'Vocabulario', body: 'Sustentabilidad.', order: 13, type: 'lesson' },
];

// ==========================================
// 3° MEDIO - PLAN COMÚN
// ==========================================
const contents3Medio = [
    // --- LENGUA Y LITERATURA 3° ---
    // Unidad 1: Lectura
    { title: 'Lectura: Comprensión Crítica', level: '3-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Análisis profundo de textos.', order: 1, type: 'lesson' },
    { title: 'Lectura: Textos Argumentativos', level: '3-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Ensayo y columna de opinión.', order: 2, type: 'lesson' },
    { title: 'Lectura: Literatura Contemporánea', level: '3-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Identidad latinoamericana.', order: 3, type: 'lesson' },

    // Unidad 2: Comunicación Oral
    { title: 'Oralidad: Debates y Exposiciones', level: '3-medio', subject: 'Lengua y Literatura', unit: 'Comunicación Oral', body: 'Argumentación y recursos retóricos.', order: 4, type: 'lesson' },

    // --- MATEMÁTICA 3° ---
    // Unidad 1: Educación Ciudadana Matemática
    { title: 'Matemática: Porcentajes y Tasas', level: '3-medio', subject: 'Matemática', unit: 'Educación Ciudadana Matemática', body: 'Aplicación en la vida diaria.', order: 1, type: 'lesson' },
    { title: 'Matemática: Resolución de Problemas', level: '3-medio', subject: 'Matemática', unit: 'Educación Ciudadana Matemática', body: 'Problemas de la vida cotidiana.', order: 2, type: 'lesson' },

    // Unidad 2: Probabilidad y Estadística
    { title: 'Estadística: Descriptiva', level: '3-medio', subject: 'Matemática', unit: 'Probabilidad y Estadística', body: 'Análisis de datos.', order: 3, type: 'lesson' },
    { title: 'Estadística: Gráficos', level: '3-medio', subject: 'Matemática', unit: 'Probabilidad y Estadística', body: 'Interpretación de información visual.', order: 4, type: 'lesson' },
    { title: 'Probabilidad: Conceptos', level: '3-medio', subject: 'Matemática', unit: 'Probabilidad y Estadística', body: 'Cálculo de probabilidades.', order: 5, type: 'lesson' },

    // --- HISTORIA, GEOGRAFÍA Y ED. CIUDADANA 3° ---
    // Unidad 1: Ciudadanía
    { title: 'Ciudadanía: Democracia', level: '3-medio', subject: 'Historia', unit: 'Educación Ciudadana', body: 'Participación y Estado de Derecho.', order: 1, type: 'lesson' },
    { title: 'Ciudadanía: Derechos Humanos', level: '3-medio', subject: 'Historia', unit: 'Educación Ciudadana', body: 'Fundamentos y garantías.', order: 2, type: 'lesson' },
    { title: 'Ciudadanía: Estado y Constitución', level: '3-medio', subject: 'Historia', unit: 'Educación Ciudadana', body: 'Organización política.', order: 3, type: 'lesson' },

    // Unidad 2: Historia Reciente
    { title: 'Historia: Chile Siglo XX-XXI', level: '3-medio', subject: 'Historia', unit: 'Historia Reciente', body: 'Procesos sociales y políticos.', order: 4, type: 'lesson' },
    { title: 'Historia: Globalización', level: '3-medio', subject: 'Historia', unit: 'Mundo Global', body: 'Desafíos actuales.', order: 5, type: 'lesson' },

    // --- INGLÉS 3° ---
    // Unidad 1: Comunicación
    { title: 'Inglés: Textos Auténticos', level: '3-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Comprensión de lectura avanzada.', order: 1, type: 'lesson' },
    { title: 'Inglés: Conversación y Opinión', level: '3-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Expresión oral fluida.', order: 2, type: 'lesson' },
    { title: 'Inglés: Escritura Argumentativa', level: '3-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Ensayos breves.', order: 3, type: 'lesson' },

    // Unidad 2: Gramática
    { title: 'Gramática: Condicionales', level: '3-medio', subject: 'Inglés', unit: 'Gramática', body: 'Tipos 0, 1, 2 y 3.', order: 4, type: 'lesson' },
    { title: 'Gramática: Voz Pasiva', level: '3-medio', subject: 'Inglés', unit: 'Gramática', body: 'Estructura y uso.', order: 5, type: 'lesson' },
    { title: 'Gramática: Tiempos Perfectos', level: '3-medio', subject: 'Inglés', unit: 'Gramática', body: 'Present Perfect y Past Perfect.', order: 6, type: 'lesson' },

    // --- CIENCIAS PARA LA CIUDADANÍA 3° ---
    // Unidad 1: Bienestar y Salud
    { title: 'Ciencias: Salud y Autocuidado', level: '3-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Bienestar y Salud', body: 'Promoción de vida saludable.', order: 1, type: 'lesson' },

    // Unidad 2: Seguridad, Prevención y Autocuidado
    { title: 'Ciencias: Pensamiento Científico', level: '3-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Seguridad', body: 'Análisis de evidencia.', order: 2, type: 'lesson' },

    // Unidad 3: Ambiente y Sostenibilidad
    { title: 'Ciencias: Medio Ambiente', level: '3-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Sostenibilidad', body: 'Cambio climático y recursos.', order: 3, type: 'lesson' },

    // Unidad 4: Tecnología y Sociedad
    { title: 'Ciencias: Tecnología y Sociedad', level: '3-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Tecnología', body: 'Impacto tecnológico.', order: 4, type: 'lesson' },
];

// ==========================================
// 4° MEDIO - PLAN COMÚN
// ==========================================
const contents4Medio = [
    // --- LENGUA Y LITERATURA 4° ---
    // Unidad 1: Lectura y Análisis
    { title: 'Lectura: Análisis Crítico', level: '4-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Textos complejos y profundos.', order: 1, type: 'lesson' },
    { title: 'Lectura: Literatura Chilena', level: '4-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Autores nacionales.', order: 2, type: 'lesson' },
    { title: 'Lectura: Literatura Universal', level: '4-medio', subject: 'Lengua y Literatura', unit: 'Lectura', body: 'Clásicos y contemporáneos.', order: 3, type: 'lesson' },

    // Unidad 2: Escritura
    { title: 'Escritura: Ensayo Argumentativo', level: '4-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Tesis, argumentos y conclusión.', order: 4, type: 'lesson' },
    { title: 'Escritura: Recursos Retóricos', level: '4-medio', subject: 'Lengua y Literatura', unit: 'Escritura', body: 'Persuasión y estilo.', order: 5, type: 'lesson' },

    // Unidad 3: Comunicación Oral
    { title: 'Oralidad: Discursos Formales', level: '4-medio', subject: 'Lengua y Literatura', unit: 'Comunicación Oral', body: 'Presentaciones académicas.', order: 6, type: 'lesson' },

    // --- EDUCACIÓN CIUDADANA 4° ---
    // Unidad 1: Democracia y Estado
    { title: 'Ciudadanía: Democracia', level: '4-medio', subject: 'Educación Ciudadana', unit: 'Democracia', body: 'Participación y representación.', order: 1, type: 'lesson' },
    { title: 'Ciudadanía: Estado de Derecho', level: '4-medio', subject: 'Educación Ciudadana', unit: 'Democracia', body: 'Principios fundamentales.', order: 2, type: 'lesson' },
    { title: 'Ciudadanía: Constitución y Leyes', level: '4-medio', subject: 'Educación Ciudadana', unit: 'Democracia', body: 'Marco legal del país.', order: 3, type: 'lesson' },

    // Unidad 2: Derechos y Participación
    { title: 'Ciudadanía: Derechos Humanos', level: '4-medio', subject: 'Educación Ciudadana', unit: 'Derechos', body: 'Universalidad y garantías.', order: 4, type: 'lesson' },
    { title: 'Ciudadanía: Rol del Ciudadano', level: '4-medio', subject: 'Educación Ciudadana', unit: 'Participación', body: 'Responsabilidad social.', order: 5, type: 'lesson' },

    // --- INGLÉS 4° ---
    // Unidad 1: Comunicación Avanzada
    { title: 'Inglés: Comprensión Avanzada', level: '4-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Lectura de textos académicos.', order: 1, type: 'lesson' },
    { title: 'Inglés: Debate', level: '4-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Argumentación oral.', order: 2, type: 'lesson' },
    { title: 'Inglés: Escritura Argumentativa', level: '4-medio', subject: 'Inglés', unit: 'Comunicación', body: 'Essays y opinión.', order: 3, type: 'lesson' },

    // Unidad 2: Gramática Avanzada
    { title: 'Gramática: Condicionales', level: '4-medio', subject: 'Inglés', unit: 'Gramática', body: 'Tipos 0, 1, 2, 3.', order: 4, type: 'lesson' },
    { title: 'Gramática: Voz Pasiva', level: '4-medio', subject: 'Inglés', unit: 'Gramática', body: 'Estructura y uso avanzado.', order: 5, type: 'lesson' },
    { title: 'Gramática: Reported Speech', level: '4-medio', subject: 'Inglés', unit: 'Gramática', body: 'Estilo indirecto.', order: 6, type: 'lesson' },
    { title: 'Gramática: Tiempos Perfectos', level: '4-medio', subject: 'Inglés', unit: 'Gramática', body: 'Present/Past Perfect.', order: 7, type: 'lesson' },

    // --- CIENCIAS PARA LA CIUDADANÍA 4° ---
    // Unidad 1: Ciencia y Sociedad
    { title: 'Ciencias: Ciencia y Sociedad', level: '4-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Ciencia y Sociedad', body: 'Impacto del conocimiento científico.', order: 1, type: 'lesson' },
    { title: 'Ciencias: Salud Pública', level: '4-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Salud', body: 'Políticas y prevención.', order: 2, type: 'lesson' },

    // Unidad 2: Ambiente y Tecnología
    { title: 'Ciencias: Medio Ambiente', level: '4-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Ambiente', body: 'Sustentabilidad y crisis climática.', order: 3, type: 'lesson' },
    { title: 'Ciencias: Tecnología e Innovación', level: '4-medio', subject: 'Ciencias para la Ciudadanía', unit: 'Tecnología', body: 'Avances y ética.', order: 4, type: 'lesson' },
];

module.exports = {
    contents1Medio,
    contents2Medio,
    contents3Medio,
    contents4Medio
};
