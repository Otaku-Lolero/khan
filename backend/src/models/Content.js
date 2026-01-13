const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['lesson', 'video', 'exercise', 'quiz'],
        required: true
    },
    level: {
        type: String,
        enum: ['basico', '1-medio', '2-medio', '3-medio', '4-medio'],
        required: true
    },
    subject: {
        type: String, // Matemáticas, Ciencias, Historia...
        required: true
    },
    unit: {
        type: String, // "Álgebra Básica", "La Célula"...
        required: true
    },
    videoUrl: {
        type: String, // URL para streaming (legacy, mantener por compatibilidad)
        required: false
    },
    body: {
        type: String, // Texto markdown o URL del video
        required: true
    },
    // Nuevo: Niveles de dificultad con múltiples videos
    difficultyLevels: [{
        difficulty: {
            type: String,
            enum: ['facil', 'intermedio', 'avanzado'],
            required: true
        },
        description: {
            type: String,
            required: true
        },
        videos: [{
            title: String,
            url: String,
            duration: String // opcional: "10:30"
        }]
    }],
    questions: [{ // Solo para 'exercise' o 'quiz'
        question: String,
        options: [String],
        correctAnswer: Number // Índice de la respuesta correcta
    }],
    order: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Content', ContentSchema);
