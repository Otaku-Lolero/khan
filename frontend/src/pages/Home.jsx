import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../services/api';

export default function Home() {
    const { user, logout } = useAuth();
    const [contents, setContents] = useState([]);

    useEffect(() => {
        if (user) {
            api.get(`/content/${user.level}`)
                .then(res => setContents(res.data))
                .catch(err => console.error(err));
        }
    }, [user]);

    // Group contents by subject
    const groupedContents = contents.reduce((acc, content) => {
        const subject = content.subject || 'Otras';
        if (!acc[subject]) acc[subject] = [];
        acc[subject].push(content);
        return acc;
    }, {});

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

    return (
        <div className="container" style={{ maxWidth: '900px' }}>
            <div className="nav-bar">
                <div>
                    <h3>Hola, {user.username}</h3>
                    <small>Nivel: {user.level}</small>
                </div>
                <button onClick={logout} style={{ backgroundColor: '#ef4444' }}>Salir</button>
            </div>

            <div className="content-list">
                {Object.keys(groupedContents).length === 0 ? (
                    <p>No hay contenidos disponibles para tu nivel.</p>
                ) : (
                    Object.entries(groupedContents).map(([subject, items]) => (
                        <div key={subject} className="subject-group" style={{ marginBottom: '50px' }}>
                            <h2 style={{
                                borderBottom: '3px solid var(--primary)',
                                paddingBottom: '12px',
                                marginBottom: '30px',
                                color: 'var(--primary)',
                                textAlign: 'left',
                                fontSize: '1.8em'
                            }}>
                                📚 {subject}
                            </h2>

                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                                gap: '20px'
                            }}>
                                {items.map(content => (
                                    <div
                                        key={content._id}
                                        className="card"
                                        style={{
                                            textAlign: 'left',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                            margin: 0,
                                            borderLeft: `4px solid var(--primary)`,
                                            position: 'relative'
                                        }}
                                        onClick={() => window.location.href = `/lesson/${content._id}`}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-4px)';
                                            e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.3)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <div style={{ marginBottom: '10px' }}>
                                            {content.unit && (
                                                <small style={{
                                                    color: '#94a3b8',
                                                    display: 'block',
                                                    marginBottom: '8px',
                                                    fontWeight: 'bold'
                                                }}>
                                                    {content.unit}
                                                </small>
                                            )}
                                            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1em' }}>
                                                {content.title}
                                            </h3>
                                        </div>
                                        <p style={{
                                            fontSize: '0.95em',
                                            color: '#cbd5e1',
                                            lineHeight: '1.5',
                                            marginBottom: '15px'
                                        }}>
                                            {content.body}
                                        </p>
                                        <div style={{
                                            paddingTop: '12px',
                                            borderTop: '1px solid rgba(255,255,255,0.1)',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center'
                                        }}>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <span style={{
                                                    padding: '4px 10px',
                                                    background: '#10b981',
                                                    borderRadius: '12px',
                                                    fontSize: '0.75em',
                                                    fontWeight: 'bold'
                                                }}>
                                                    🟢 Fácil
                                                </span>
                                                <span style={{
                                                    padding: '4px 10px',
                                                    background: '#f59e0b',
                                                    borderRadius: '12px',
                                                    fontSize: '0.75em',
                                                    fontWeight: 'bold'
                                                }}>
                                                    🟡 Intermedio
                                                </span>
                                                <span style={{
                                                    padding: '4px 10px',
                                                    background: '#ef4444',
                                                    borderRadius: '12px',
                                                    fontSize: '0.75em',
                                                    fontWeight: 'bold'
                                                }}>
                                                    🔴 Avanzado
                                                </span>
                                            </div>
                                            <span style={{ fontSize: '1.2em' }}>→</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
