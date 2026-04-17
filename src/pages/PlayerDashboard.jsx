import React from 'react';
import DashboardLayout from '../components/DashboardLayout';
import '../styles/dashboard.css';

const PlayerDashboard = () => {
    const stats = [
        { title: 'Training Sessions', value: '12', icon: '🏃', trend: 'Completed this month' },
        { title: 'Upcoming Practice', value: 'Today, 5 PM', icon: '🏏', trend: 'Batting Practice' },
        { title: 'Attendance Rate', value: '94%', icon: '📈', trend: 'Excellent consistency' },
    ];

    const trainingPlan = [
        { day: 'Monday', focus: 'Cardio & Basics', status: 'Completed' },
        { day: 'Tuesday', focus: 'Technical Drills', status: 'Completed' },
        { day: 'Wednesday', focus: 'Match Prep', status: 'Pending' },
    ];

    return (
        <DashboardLayout>
            <div className="dashboard-overview player-dashboard">
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
                        <h3>My Training Plan</h3>
                        <div className="plan-list">
                            {trainingPlan.map((item, idx) => (
                                <div key={idx} className="plan-item">
                                    <div className="plan-info">
                                        <h4>{item.day}</h4>
                                        <p>{item.focus}</p>
                                    </div>
                                    <span className={`status-badge ${item.status.toLowerCase()}`}>{item.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="dashboard-section-card">
                        <h3>Diet Plan Overview</h3>
                        <div className="diet-brief">
                            <div className="diet-item">
                                <span>Breakfast</span>
                                <p>Oats with fruits & nuts</p>
                            </div>
                            <div className="diet-item">
                                <span>Lunch</span>
                                <p>Grilled chicken with quinoa</p>
                            </div>
                            <button className="view-full-plan-btn">View Full Diet Chart</button>
                        </div>
                    </div>
                </div>

                <div className="dashboard-section-card" style={{ marginTop: '30px' }}>
                    <h3>Latest Practice Videos</h3>
                    <div className="video-grid">
                        <div className="video-placeholder">Cover Drive Analysis - Coach John</div>
                        <div className="video-placeholder">Footwork Drills - Session 4</div>
                    </div>
                </div>
            </div>
        </DashboardLayout>
    );
};

export default PlayerDashboard;
