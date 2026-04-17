import React from 'react';
import '../../styles/home.css';

const coaches = [
    {
        name: "Kamal",
        sport: "Boxing",
        image: "https://images.unsplash.com/photo-1549476464-37392f717551?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Nandini",
        sport: "Dance",
        image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Naveen K",
        sport: "Dance",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Naveen",
        sport: "Yoga",
        image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=500&q=80"
    },
    {
        name: "Niran",
        sport: "Strength",
        image: "https://images.unsplash.com/photo-1583454110551-21f2fa200c01?auto=format&fit=crop&w=500&q=80"
    }
];

const CoachesSection = () => {
    return (
        <section className="coaches section-padding" id="coaches">
            <div className="container">
                <div className="coaches-header reveal">
                    <div className="coaches-title-bg">TRAINERS</div>
                    <span className="hero-subtitle">Best in class</span>
                    <h2>Our Expert Coaches</h2>
                </div>

                <div className="coaches-grid">
                    {coaches.map((coach, index) => (
                        <div key={index} className="coach-card reveal">
                            <div className="coach-image">
                                <img src={coach.image} alt={coach.name} />
                            </div>
                            <div className="coach-info">
                                <h3>{coach.name}</h3>
                                <p className="coach-sport">{coach.sport}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoachesSection;
