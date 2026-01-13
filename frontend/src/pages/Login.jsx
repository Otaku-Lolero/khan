import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: '', password: '', level: '1-medio' });
    const [error, setError] = useState('');
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isLogin) {
                await login(formData.username, formData.password);
                navigate('/');
            } else {
                await register(formData.username, formData.password, formData.level);
                // Auto login after register or ask to login? Let's auto login for simplicity or just switch mode
                await login(formData.username, formData.password);
                navigate('/');
            }
        } catch (err) {
            console.error('Registration/Login Error:', err);
            const status = err.response?.status;
            const message = err.response?.data?.error || err.message || 'Error desconocido';
            setError(`Error (${status || 'N/A'}): ${message}`);
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
                {error && <div className="error">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={formData.username}
                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                        required
                    />
                    {!isLogin && (
                        <select
                            value={formData.level}
                            onChange={e => setFormData({ ...formData, level: e.target.value })}
                        >
                            <option value="1-medio">1° Medio</option>
                            <option value="2-medio">2° Medio</option>
                            <option value="3-medio">3° Medio</option>
                            <option value="4-medio">4° Medio</option>
                        </select>
                    )}
                    <button type="submit">{isLogin ? 'Entrar' : 'Crear Cuenta'}</button>
                </form>
                <div style={{ marginTop: '1rem' }}>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ background: 'transparent', color: 'var(--primary)', border: 'none', textDecoration: 'underline' }}
                    >
                        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia Sesión'}
                    </button>
                </div>
            </div>
        </div>
    );
}
