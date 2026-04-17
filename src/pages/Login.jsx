import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { loginUser } from '../api/authApi';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import '../styles/login.css';


const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
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
        console.log("Login response:", response);
        login(response); // saves to AuthContext

        if (response?.role === "ADMIN") {
            navigate("/admin/applications");
        } else if (response?.role === "COACH") {
            navigate("/coach-dashboard");
        } else if (response?.role === "STUDENT") {
            navigate("/student-dashboard");
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
                <div className="login-box">
                    <div className="login-header">
                        <h2>Welcome Back</h2>
                        <p>Enter your credentials to access your dashboard</p>
                    </div>

                    {error && <div className="login-error">{error}</div>}

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                  <label>Username</label>
                   <input
                    type="text"
                 name="username"
                 placeholder="Enter your username"
                 value={credentials.username}
                 onChange={handleChange}
                 required
                         />
                       </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password" name="password" placeholder="Enter your password"
                                value={credentials.password} onChange={handleChange} required
                            />
                        </div>
                        <button type="submit" className="login-btn" disabled={isLoading}>
                            {isLoading ? 'Authenticating...' : 'Login'}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>Don't have an account? <Link to="/event">Register via Events</Link></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
