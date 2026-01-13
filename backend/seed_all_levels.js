const mongoose = require('mongoose');
const Content = require('./src/models/Content');
const dotenv = require('dotenv');

dotenv.config();

// Helper para crear niveles de dificultad con videos específicos por materia
const createDifficultyLevels = (subject, topic) => {
    // Videos educativos reales de YouTube por materia (Puntaje Nacional, Mineduc, Profe Alex, etc.)
    const videosBySubject = {
        'Matemática': {
            facil: [
                { title: 'Introducción al concepto', url: 'https://www.youtube.com/watch?v=0rnz7VH6KYQ', duration: '10:00' }, // Puntaje Nacional
                { title: 'Conceptos básicos', url: 'https://www.youtube.com/watch?v=kQZmZRE0cQY', duration: '12:30' },
                { title: 'Ejemplos iniciales', url: 'https://www.youtube.com/watch?v=Ilg3gGewQ5U', duration: '8:45' }
            ],
            intermedio: [
                { title: 'Desarrollo y ejercicios', url: 'https://www.youtube.com/watch?v=rCvALqVH_Oc', duration: '15:20' },
                { title: 'Aplicación práctica', url: 'https://www.youtube.com/watch?v=WUvTyaaNkzM', duration: '18:00' },
                { title: 'Ejercicios resueltos', url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs', duration: '20:15' }
            ],
            avanzado: [
                { title: 'Problemas complejos', url: 'https://www.youtube.com/watch?v=aircAruvnKk', duration: '22:00' },
                { title: 'Desafíos matemáticos', url: 'https://www.youtube.com/watch?v=WUvTyaaNkzM', duration: '25:30' },
                { title: 'Aplicaciones avanzadas', url: 'https://www.youtube.com/watch?v=fNk_zzaMoSs', duration: '28:45' }
            ]
        },
        'Lengua y Literatura': {
            facil: [
                { title: 'Introducción al tema', url: 'https://www.youtube.com/watch?v=LE3LfnZBGdg', duration: '9:45' }, // Puntaje Nacional
                { title: 'Conceptos fundamentales', url: 'https://www.youtube.com/watch?v=vJG698U2Mvo', duration: '11:20' },
                { title: 'Ejemplos literarios', url: 'https://www.youtube.com/watch?v=Ahg6qcgoay4', duration: '7:50' }
            ],
            intermedio: [
                { title: 'Análisis y desarrollo', url: 'https://www.youtube.com/watch?v=msVS_O4MmLY', duration: '14:30' },
                { title: 'Lectura crítica', url: 'https://www.youtube.com/watch?v=YLct-9bfG0g', duration: '17:45' },
                { title: 'Ejercicios de escritura', url: 'https://www.youtube.com/watch?v=vJG698U2Mvo', duration: '19:10' }
            ],
            avanzado: [
                { title: 'Análisis profundo', url: 'https://www.youtube.com/watch?v=msVS_O4MmLY', duration: '21:50' },
                { title: 'Interpretación avanzada', url: 'https://www.youtube.com/watch?v=YLct-9bfG0g', duration: '24:20' },
                { title: 'Ensayo y crítica', url: 'https://www.youtube.com/watch?v=Ahg6qcgoay4', duration: '27:30' }
            ]
        },
        'Historia': {
            facil: [
                { title: 'Contexto histórico', url: 'https://www.youtube.com/watch?v=xuCn8ux2gbs', duration: '10:15' }, // Puntaje Nacional
                { title: 'Introducción a la época', url: 'https://www.youtube.com/watch?v=Yocja_N5s1I', duration: '12:40' },
                { title: 'Hechos principales', url: 'https://www.youtube.com/watch?v=BrNs0M77Pd4', duration: '8:55' }
            ],
            intermedio: [
                { title: 'Análisis de procesos', url: 'https://www.youtube.com/watch?v=aDaOgu2CQtI', duration: '16:20' },
                { title: 'Causas y consecuencias', url: 'https://www.youtube.com/watch?v=Yocja_N5s1I', duration: '18:15' },
                { title: 'Fuentes históricas', url: 'https://www.youtube.com/watch?v=BrNs0M77Pd4', duration: '20:30' }
            ],
            avanzado: [
                { title: 'Debate historiográfico', url: 'https://www.youtube.com/watch?v=aDaOgu2CQtI', duration: '23:10' },
                { title: 'Interpretación crítica', url: 'https://www.youtube.com/watch?v=xuCn8ux2gbs', duration: '26:25' },
                { title: 'Conexiones globales', url: 'https://www.youtube.com/watch?v=Yocja_N5s1I', duration: '29:50' }
            ]
        },
        'Inglés': {
            facil: [
                { title: 'Basic Concepts', url: 'https://www.youtube.com/watch?v=3AaJUvHCwqE', duration: '9:30' }, // Inglés PIAP / General
                { title: 'Simple Vocabulary', url: 'https://www.youtube.com/watch?v=p9jFaHJRww8', duration: '11:15' },
                { title: 'Easy Examples', url: 'https://www.youtube.com/watch?v=WPrwC5dN-Qc', duration: '8:20' }
            ],
            intermedio: [
                { title: 'Grammar in Use', url: 'https://www.youtube.com/watch?v=I_6-hnxX_hY', duration: '15:40' },
                { title: 'Conversation Practice', url: 'https://www.youtube.com/watch?v=p9jFaHJRww8', duration: '17:55' },
                { title: 'Listening Exercises', url: 'https://www.youtube.com/watch?v=WPrwC5dN-Qc', duration: '19:25' }
            ],
            avanzado: [
                { title: 'Advanced Structures', url: 'https://www.youtube.com/watch?v=I_6-hnxX_hY', duration: '22:45' },
                { title: 'Complex Texts', url: 'https://www.youtube.com/watch?v=3AaJUvHCwqE', duration: '25:30' },
                { title: 'Fluency & Debate', url: 'https://www.youtube.com/watch?v=p9jFaHJRww8', duration: '28:15' }
            ]
        },
        'Ciencias para la Ciudadanía': {
            facil: [
                { title: 'Introducción científica', url: 'https://www.youtube.com/watch?v=wvJAgrUBF4w', duration: '10:05' }, // Puntaje Nacional Ciencias
                { title: 'Conceptos clave', url: 'https://www.youtube.com/watch?v=QnQe0xW_JY4', duration: '12:25' },
                { title: 'Ciencia cotidiana', url: 'https://www.youtube.com/watch?v=dGiQaabX3_o', duration: '8:40' }
            ],
            intermedio: [
                { title: 'Metodología', url: 'https://www.youtube.com/watch?v=N6IAzlugWw0', duration: '15:50' },
                { title: 'Aplicación de modelos', url: 'https://www.youtube.com/watch?v=QnQe0xW_JY4', duration: '18:10' },
                { title: 'Análisis de datos', url: 'https://www.youtube.com/watch?v=dGiQaabX3_o', duration: '20:35' }
            ],
            avanzado: [
                { title: 'Investigación', url: 'https://www.youtube.com/watch?v=N6IAzlugWw0', duration: '23:20' },
                { title: 'Debates científicos', url: 'https://www.youtube.com/watch?v=wvJAgrUBF4w', duration: '26:40' },
                { title: 'Impacto social', url: 'https://www.youtube.com/watch?v=QnQe0xW_JY4', duration: '29:25' }
            ]
        },
        'Educación Ciudadana': {
            facil: [
                { title: 'Conceptos cívicos', url: 'https://www.youtube.com/watch?v=UTP4uvIFu5A', duration: '9:50' }, // Puntaje Historia/Cívica
                { title: 'Derechos fundamentales', url: 'https://www.youtube.com/watch?v=5tu32CCA_Ig', duration: '11:40' },
                { title: 'Participación', url: 'https://www.youtube.com/watch?v=lrk4oY7UxmQ', duration: '8:15' }
            ],
            intermedio: [
                { title: 'Instituciones del Estado', url: 'https://www.youtube.com/watch?v=UoP_mSIHqTY', duration: '16:10' },
                { title: 'Procesos democráticos', url: 'https://www.youtube.com/watch?v=5tu32CCA_Ig', duration: '18:30' },
                { title: 'Responsabilidad civil', url: 'https://www.youtube.com/watch?v=lrk4oY7UxmQ', duration: '20:20' }
            ],
            avanzado: [
                { title: 'Análisis político', url: 'https://www.youtube.com/watch?v=UoP_mSIHqTY', duration: '23:35' },
                { title: 'Desafíos ciudadanos', url: 'https://www.youtube.com/watch?v=UTP4uvIFu5A', duration: '26:50' },
                { title: 'Ética pública', url: 'https://www.youtube.com/watch?v=5tu32CCA_Ig', duration: '29:10' }
            ]
        }
    };

    // Obtener videos según la materia, o usar videos de Matemática como fallback genérico
    const subjectVideos = videosBySubject[subject] || videosBySubject['Matemática'];

    return [
        {
            difficulty: 'facil',
            description: 'Nivel básico - Introducción y conceptos',
            videos: subjectVideos.facil
        },
        {
            difficulty: 'intermedio',
            description: 'Nivel intermedio - Desarrollo y práctica',
            videos: subjectVideos.intermedio
        },
        {
            difficulty: 'avanzado',
            description: 'Nivel avanzado - Aplicación y complejidad',
            videos: subjectVideos.avanzado
        }
    ];
};

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/education-app')
    .then(async () => {
        console.log('MongoDB Conectado');
        await Content.deleteMany({});

        // Importar las lecciones del archivo de datos consolidado
        const { contents1Medio, contents2Medio, contents3Medio, contents4Medio } = require('./seed_all_levels_data');

        // Función para agregar difficultyLevels a cada lección
        const addDifficultyLevels = (lessons) => {
            return lessons.map(lesson => ({
                ...lesson,
                difficultyLevels: createDifficultyLevels(lesson.subject, lesson.title)
            }));
        };

        const allContents = [
            ...addDifficultyLevels(contents1Medio),
            ...addDifficultyLevels(contents2Medio),
            ...addDifficultyLevels(contents3Medio),
            ...addDifficultyLevels(contents4Medio)
        ];

        await Content.insertMany(allContents);
        console.log('✅ Base de datos actualizada con niveles y videos públicos.');
        console.log(`📚 Total de lecciones insertadas: ${allContents.length}`);
        console.log('   📹 Videos configurados por materia y nivel de dificultad.');
        process.exit(0);
    })
    .catch(err => {
        console.error('Error al poblar la base de datos:', err);
        process.exit(1);
    });
