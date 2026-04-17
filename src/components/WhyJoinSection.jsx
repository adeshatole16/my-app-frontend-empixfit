import React from 'react';
import '../styles/career.css';

const WhyJoinSection = () => {
    const features = [
        {
            title: "Professional Coaching Network",
            description: "Connect with athletes and grow your coaching career.",
            icon: "🤝"
        },
        {
            title: "Earn Through Coaching",
            description: "Opportunity to earn by training athletes in your region.",
            icon: "💰"
        },
        {
            title: "Structured Training System",
            description: "Access professional training plans and athlete tracking tools.",
            icon: "📈"
        },
        {
            title: "Community Support",
            description: "Become part of a nationwide sports coaching community.",
            icon: "🌍"
        }
    ];

    return (
        <section className="why-join section-padding">
            <div className="container">
                <div className="section-header reveal">
                    <h2>Why Join Our Platform</h2>
                    <p>We provide the tools and network you need to succeed as a professional coach.</p>
                </div>
                <div className="why-join-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-block reveal">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyJoinSection;
