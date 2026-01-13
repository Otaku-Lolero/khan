const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String, // En prod: hash
        required: true
    },
    level: {
        type: String,
        enum: ['basico', '1-medio', '2-medio', '3-medio', '4-medio'],
        default: '1-medio'
    },
    subjectsSeen: [{
        subject: String,
        progress: { type: Number, default: 0 }, // 0-100%
        lastAccess: Date
    }],
    progress: [{
        contentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Content' },
        status: { type: String, enum: ['started', 'completed'], default: 'started' },
        score: { type: Number, default: 0 },
        attempts: { type: Number, default: 1 },
        completedAt: Date
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
