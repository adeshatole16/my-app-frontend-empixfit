import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import '../styles/dashboard.css';

const Dashboard = () => {
    const stats = [
        { title: 'Total Training Sessions', value: '24', icon: '🔥', trend: '+12% this month' },
        { title: 'Upcoming Practice', value: 'Tomorrow, 6 AM', icon: '⚽', trend: 'Cricket Ground A' },
        { title: 'Coach Messages', value: '3 New', icon: '💬', trend: 'Review practice video' },
    ];

    return (
        <DashboardLayout>
            <div className="dashboard-overview">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-header">
                                <span className="stat-icon">{stat.icon}</span>
                                <span className="stat-value">{stat.value}</span>
                            </div>
                            <h3>{stat.title}</h3>
                            <p className="stat-trend">{stat.trend}</p>
                        </div>
                    ))}
                </div>

                <div className="dashboard-sections-grid">
                    <div className="dashboard-section-card">
                        <h3>Recent Activities</h3>
                        <div className="activity-list">
                            <div className="activity-item">
                                <div className="activity-dot"></div>
                                <div className="activity-info">
                                    <p>Completed 2 hour batting session</p>
                                    <span>2 hours ago</span>
                                </div>
                            </div>
                            <div className="activity-item">
                                <div className="activity-dot"></div>
                                <div className="activity-info">
                                    <p>Watched 'Advanced Cover Drive' video</p>
                                    <span>Yesterday</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="dashboard-section-card">
                        <h3>Assigned Coach</h3>
                        <div className="coach-brief">
                            <div className="coach-avatar-large">JD</div>
                            <div className="coach-details">
                                <h4>Coach John Doe</h4>
                                <p>Senior Cricket Specialist</p>
                                <button className="btn-contact-coach">Send Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Dashboard;
