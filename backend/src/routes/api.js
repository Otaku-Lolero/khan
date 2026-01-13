const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Content = require('../models/Content');

// --- AUTH ---

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const JWT_SECRET = process.env.JWT_SECRET || 'secret_key_provisional';

// --- AUTH ---

// Registro
router.post('/register', async (req, res) => {
    try {
        const { username, password, level } = req.body;

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({ username, password: hashedPassword, level });
        await user.save();

        // Crear Token
        const token = jwt.sign({ _id: user._id, level: user.level }, JWT_SECRET, { expiresIn: '1d' });

        res.status(201).json({ message: 'Usuario creado', token, user: { _id: user._id, username, level } });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) return res.status(401).json({ error: 'Credenciales inválidas' });

        const validPass = await bcrypt.compare(password, user.password);
        if (!validPass) return res.status(401).json({ error: 'Credenciales inválidas' });

        const token = jwt.sign({ _id: user._id, level: user.level }, JWT_SECRET, { expiresIn: '1d' });
        res.json({ message: 'Login exitoso', token, user: { _id: user._id, username: user.username, level: user.level } });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// --- CONTENIDO ---

// Obtener contenido por nivel
router.get('/content/:level', async (req, res) => {
    try {
        const contents = await Content.find({ level: req.params.level }).sort('order');
        res.json(contents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener contenido por ID
router.get('/content/detail/:id', auth, async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (!content) return res.status(404).json({ error: 'Contenido no encontrado' });
        res.json(content);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Crear contenido (Seed/Admin) - Protegido
router.post('/content', auth, async (req, res) => {
    try {
        const content = new Content(req.body);
        await content.save();
        res.status(201).json(content);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// --- REPORTES ---
const Report = require('../models/Report');

router.post('/reports', auth, async (req, res) => {
    try {
        const { contentId, reason, description } = req.body;
        const report = new Report({
            userId: req.user._id,
            contentId,
            reason,
            description
        });
        await report.save();
        res.status(201).json({ message: 'Reporte enviado' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
