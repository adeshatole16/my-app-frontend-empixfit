import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/dashboard.css';

const DashboardLayout = ({ children }) => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const menuItems = [
        { title: 'Dashboard', icon: '🏠', path: '/dashboard' },
        { title: 'My Profile', icon: '👤', path: '#' },
        { title: 'Training Plan', icon: '📋', path: '#' },
        { title: 'Attendance', icon: '📅', path: '#' },
        { title: 'Practice Videos', icon: '📹', path: '#' },
    ];

    return (
        <div className="dashboard-container">
            <aside className="sidebar">
                <div className="sidebar-header">
                    <Link to="/" className="sidebar-logo">SPORTS<span>ACADEMY</span></Link>
                </div>
                <div className="sidebar-user">
                    <div className="user-avatar">{user?.name[0].toUpperCase()}</div>
                    <div className="user-info">
                        <h4>{user?.name}</h4>
                        <span>{user?.role}</span>
                    </div>
                </div>
                <nav className="sidebar-nav">
                    <ul>
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path}>
                                    <span className="icon">{item.icon}</span>
                                    <span className="title">{item.title}</span>
                                </Link>
                            </li>
                        ))}
                        <li onClick={handleLogout} className="logout-item">
                            <span>🚪</span>
                            <span className="title">Logout</span>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className="dashboard-main">
                <header className="dashboard-header">
                    <h1>Welcome, {user?.name}!</h1>
                    <div className="header-actions">
                        <button className="btn-notification">🔔</button>
                        <div className="header-user-icon">{user?.name[0].toUpperCase()}</div>
                    </div>
                </header>
                <div className="dashboard-content">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default DashboardLayout;
