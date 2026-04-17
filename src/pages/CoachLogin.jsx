import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/authApi';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/login.css';

const CoachLogin = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await loginUser(credentials);
            login(response.user);

            if (response.user.role === 'coach') {
                navigate('/coach-dashboard');
            } else {
                navigate('/player-dashboard');
            }
        } catch (err) {
            setError(err.message || 'Login failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-page">
            <Navbar />
            <div className="login-container">
                <div className="login-box coach-login-box">
                    <div className="login-header">
                        <span className="badge">Staff Portal</span>
                        <h2>Coach Login</h2>
                        <p>Access your training schedules and manage athletes</p>
                    </div>

                    {error && <div className="login-error">{error}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Professional Email</label>
                            <input
                                type="email" name="email" placeholder="coach@sportsplatform.com"
                                value={credentials.email} onChange={handleChange} required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password" name="password" placeholder="••••••••"
                                value={credentials.password} onChange={handleChange} required
                            />
                        </div>
                        <button type="submit" className="login-btn" disabled={isLoading}>
                            {isLoading ? 'Verifying Credentials...' : 'Access Dashboard'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Applied recently? <Link to="/contact">Check status</Link></p>
                        <p style={{ marginTop: '10px' }}><Link to="/login">Switch to Athlete Login</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CoachLogin;
