const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: '*' })); // Permitir conexiones desde cualquier origen (necesario para móviles)
app.use(express.json());

// Conexión a MongoDB
// Nota: En un entorno real, la URI vendría de process.env.MONGO_URI
// Usaremos una base de datos local para desarrollo
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/education-app';

mongoose.connect(MONGO_URI)
    .then(() => console.log('MongoDB conectado exitosamente'))
    .catch(err => console.error('Error conectando a MongoDB:', err));

// Rutas Básicas
app.get('/', (req, res) => {
    res.send('API de App Educativa funcionando');
});

// Importar rutas (se crearán a continuación)
const apiRoutes = require('./src/routes/api');
app.use('/api', apiRoutes);

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${PORT} y escuchando en todas las interfaces (0.0.0.0)`);
});
