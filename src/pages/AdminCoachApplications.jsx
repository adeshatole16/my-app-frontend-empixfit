import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import API_BASE_URL from "../api/apiConfig";

const AdminCoachApplications = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [approvingId, setApprovingId] = useState(null);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Fetch all applications on load
    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/coach/applications`);
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            setMessage({ type: 'error', text: 'Failed to load applications.' });
        } finally {
            setLoading(false);
        }
    };

    const handleApprove = async (id) => {
        setApprovingId(id);
        try {
            const response = await fetch(`${API_BASE_URL}/coach/approve/${id}`, {
                method: 'POST',
            });
            const text = await response.text();
            setMessage({ type: 'success', text });

            // Remove approved coach from table
            setApplications(prev => prev.filter(app => app.id !== id));
        } catch (error) {
            setMessage({ type: 'error', text: 'Approval failed. Try again.' });
        } finally {
            setApprovingId(null);
        }
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />

            <div style={{ flex: 1, padding: '40px 60px' }}>
                <h1 style={{ marginBottom: '10px' }}>Coach Applications</h1>
                <p style={{ color: '#666', marginBottom: '24px' }}>
                    Review and approve pending coach applications.
                </p>

                {/* Status Message */}
                {message.text && (
                    <div style={{
                        padding: '12px 20px',
                        marginBottom: '20px',
                        borderRadius: '8px',
                        backgroundColor: message.type === 'success' ? '#d4edda' : '#f8d7da',
                        color: message.type === 'success' ? '#155724' : '#721c24',
                        border: `1px solid ${message.type === 'success' ? '#c3e6cb' : '#f5c6cb'}`
                    }}>
                        {message.text}
                    </div>
                )}

                {loading ? (
                    <p>Loading applications...</p>
                ) : applications.length === 0 ? (
                    <p style={{ color: '#888' }}>No pending applications found.</p>
                ) : (
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            overflow: 'hidden',
                            boxShadow: '0 2px 12px rgba(0,0,0,0.08)'
                        }}>
                            <thead>
                                <tr style={{ backgroundColor: '#1a1a2e', color: '#fff' }}>
                                    <th style={th}>#</th>
                                    <th style={th}>Full Name</th>
                                    <th style={th}>Email</th>
                                    <th style={th}>Phone</th>
                                    <th style={th}>Sport</th>
                                    <th style={th}>Age</th>
                                    <th style={th}>Experience</th>
                                    <th style={th}>Location</th>
                                    <th style={th}>Status</th>
                                    <th style={th}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map((app, index) => (
                                    <tr key={app.id} style={{
                                        backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
                                        transition: 'background 0.2s'
                                    }}>
                                        <td style={td}>{index + 1}</td>
                                        <td style={td}>{app.fullName}</td>
                                        <td style={td}>{app.email}</td>
                                        <td style={td}>{app.phone}</td>
                                        <td style={td}>{app.sport}</td>
                                        <td style={td}>{app.age}</td>
                                        <td style={td}>{app.experience} yrs</td>
                                        <td style={td}>{app.location}</td>
                                        <td style={td}>
                                            <span style={{
                                                padding: '4px 10px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                fontWeight: '600',
                                                backgroundColor: '#fff3cd',
                                                color: '#856404'
                                            }}>
                                                {app.status}
                                            </span>
                                        </td>
                                        <td style={td}>
                                            <button
                                                onClick={() => handleApprove(app.id)}
                                                disabled={approvingId === app.id}
                                                style={{
                                                    padding: '8px 18px',
                                                    backgroundColor: approvingId === app.id ? '#ccc' : '#28a745',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '6px',
                                                    cursor: approvingId === app.id ? 'not-allowed' : 'pointer',
                                                    fontWeight: '600',
                                                    fontSize: '13px'
                                                }}
                                            >
                                                {approvingId === app.id ? 'Approving...' : 'Approve'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

// Style helpers
const th = {
    padding: '14px 16px',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: '14px',
    letterSpacing: '0.3px'
};

const td = {
    padding: '12px 16px',
    fontSize: '14px',
    color: '#333',
    borderBottom: '1px solid #eee'
};

export default AdminCoachApplications;