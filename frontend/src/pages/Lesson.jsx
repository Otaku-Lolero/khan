import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

export default function Lesson() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedDifficulty, setSelectedDifficulty] = useState('facil');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const getEmbedUrl = (url) => {
        if (!url) return '';
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1];
            const ampersandPosition = videoId.indexOf('&');
            if (ampersandPosition !== -1) {
                videoId = videoId.substring(0, ampersandPosition);
            }
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1];
        }
        return `https://www.youtube.com/embed/${videoId}`;
    };

    useEffect(() => {
        api.get(`/content/detail/${id}`)
            .then(res => {
                setContent(res.data);
                // Seleccionar el primer video del nivel fácil por defecto
                if (res.data.difficultyLevels && res.data.difficultyLevels.length > 0) {
                    const easyLevel = res.data.difficultyLevels.find(dl => dl.difficulty === 'facil');
                    if (easyLevel && easyLevel.videos && easyLevel.videos.length > 0) {
                        setSelectedVideo(easyLevel.videos[0]);
                    }
                }
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [id]);

    const getDifficultyColor = (difficulty) => {
        switch (difficulty) {
            case 'facil': return '#10b981';
            case 'intermedio': return '#f59e0b';
            case 'avanzado': return '#ef4444';
            default: return '#6366f1';
        }
    };

    const getDifficultyLabel = (difficulty) => {
        switch (difficulty) {
            case 'facil': return '🟢 Fácil';
            case 'intermedio': return '🟡 Intermedio';
            case 'avanzado': return '🔴 Avanzado';
            default: return difficulty;
        }
    };

    const handleDifficultyChange = (difficulty) => {
        setSelectedDifficulty(difficulty);
        const level = content.difficultyLevels.find(dl => dl.difficulty === difficulty);
        if (level && level.videos && level.videos.length > 0) {
            setSelectedVideo(level.videos[0]);
        }
    };

    if (loading) return <div className="container">Cargando lección...</div>;
    if (!content) return <div className="container"><p>Lección no encontrada</p><button onClick={() => navigate('/')}>Volver</button></div>;

    const currentLevel = content.difficultyLevels?.find(dl => dl.difficulty === selectedDifficulty);

    return (
        <div className="container" style={{ maxWidth: '1200px' }}>
            <button onClick={() => navigate('/')} style={{ marginBottom: '1rem', background: '#334155' }}>
                ← Volver al Inicio
            </button>

            <div className="card">
                <small style={{ color: 'var(--primary)', fontWeight: 'bold' }}>
                    {content.subject} &gt; {content.unit}
                </small>
                <h1 style={{ marginBottom: '10px' }}>{content.title}</h1>
                <p style={{ color: '#94a3b8', marginBottom: '30px' }}>{content.body}</p>

                {/* Selector de Nivel de Dificultad */}
                {content.difficultyLevels && content.difficultyLevels.length > 0 && (
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ marginBottom: '15px' }}>Selecciona tu nivel:</h3>
                        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                            {content.difficultyLevels.map((level) => (
                                <button
                                    key={level.difficulty}
                                    onClick={() => handleDifficultyChange(level.difficulty)}
                                    style={{
                                        padding: '12px 24px',
                                        background: selectedDifficulty === level.difficulty
                                            ? getDifficultyColor(level.difficulty)
                                            : '#334155',
                                        border: `2px solid ${getDifficultyColor(level.difficulty)}`,
                                        borderRadius: '8px',
                                        fontWeight: 'bold',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                        transform: selectedDifficulty === level.difficulty ? 'scale(1.05)' : 'scale(1)'
                                    }}
                                >
                                    {getDifficultyLabel(level.difficulty)}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Video Principal */}
                {selectedVideo && (
                    <div style={{ marginBottom: '30px' }}>
                        <h3 style={{ marginBottom: '15px', color: getDifficultyColor(selectedDifficulty) }}>
                            {selectedVideo.title}
                            {selectedVideo.duration && <span style={{ color: '#94a3b8', fontWeight: 'normal', marginLeft: '10px' }}>({selectedVideo.duration})</span>}
                        </h3>
                        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: '12px', overflow: 'hidden' }}>
                            <iframe
                                src={getEmbedUrl(selectedVideo.url)}
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title={selectedVideo.title}
                            ></iframe>
                        </div>
                    </div>
                )}

                {/* Lista de Videos del Nivel Actual */}
                {currentLevel && currentLevel.videos && currentLevel.videos.length > 0 && (
                    <div>
                        <h3 style={{ marginBottom: '15px' }}>
                            Videos disponibles - {getDifficultyLabel(selectedDifficulty)}
                        </h3>
                        <p style={{ color: '#94a3b8', marginBottom: '20px' }}>{currentLevel.description}</p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                            {currentLevel.videos.map((video, index) => (
                                <div
                                    key={index}
                                    onClick={() => setSelectedVideo(video)}
                                    style={{
                                        padding: '15px',
                                        background: selectedVideo?.url === video.url ? '#334155' : '#1e293b',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        border: `2px solid ${selectedVideo?.url === video.url ? getDifficultyColor(selectedDifficulty) : 'transparent'}`,
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        if (selectedVideo?.url !== video.url) {
                                            e.currentTarget.style.background = '#334155';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        if (selectedVideo?.url !== video.url) {
                                            e.currentTarget.style.background = '#1e293b';
                                        }
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ fontSize: '1.5em' }}>📹</span>
                                        <div style={{ flex: 1 }}>
                                            <h4 style={{ margin: '0 0 5px 0', fontSize: '1em' }}>{video.title}</h4>
                                            {video.duration && (
                                                <small style={{ color: '#94a3b8' }}>Duración: {video.duration}</small>
                                            )}
                                        </div>
                                        {selectedVideo?.url === video.url && (
                                            <span style={{ color: getDifficultyColor(selectedDifficulty), fontSize: '1.2em' }}>▶</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
