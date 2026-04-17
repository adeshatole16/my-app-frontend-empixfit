import React from 'react';
import '../styles/about.css';

const AboutFeatures = () => {
    const features = [
        {
            title: "Structured Exercise Programs",
            description: "Training plans designed for different sports and skill levels.",
            icon: "🏋️"
        },
        {
            title: "Professional Coaches",
            description: "Athletes can learn from experienced coaches.",
            icon: "👨‍🏫"
        },
        {
            title: "Diet and Nutrition Plans",
            description: "Proper diet guidance to improve performance.",
            icon: "🥗"
        },
        {
            title: "Practice Videos",
            description: "High-quality training videos for skill development.",
            icon: "📹"
        },
        {
            title: "Performance Tracking",
            description: "Athletes and coaches can monitor progress.",
            icon: "📊"
        }
    ];

    return (
        <section className="about-section" style={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
            <div className="container grid-2 grid-reverse">
                <div className="about-image reveal">
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
                        alt="Training Session"
                    />
                </div>
                <div className="about-content reveal">
                    <h2>Features We Provide</h2>
                    <div className="features-list">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">{feature.icon}</div>
                                <div className="feature-text">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutFeatures;
