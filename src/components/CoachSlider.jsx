import React from 'react';
import './CoachSlider.css';

const coaches = [
    {
        name: "Rahul Sharma",
        sport: "Cricket Coach",
        experience: "10+ Years Experience",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Sarah Johnson",
        sport: "Football Coach",
        experience: "8+ Years Experience",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Amit Patel",
        sport: "Kabaddi Coach",
        experience: "12+ Years Experience",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "David Smith",
        sport: "Basketball Coach",
        experience: "15+ Years Experience",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=400&q=80"
    },
    {
        name: "Priya Das",
        sport: "Badminton Coach",
        experience: "7+ Years Experience",
        image: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&q=80"
    }
];

const CoachSlider = () => {
    // Duplicate the coaches list to create infinite effect
    const duplicatedCoaches = [...coaches, ...coaches];

    return (
        <section className="coach-slider-section">
            <div className="container">
                <div className="section-header reveal">
                    <span className="hero-subtitle">Our Mentors</span>
                    <h2>Meet Our Professional Coaches</h2>
                </div>
            </div>

            <div className="coach-slider-container">
                <div className="coach-slider-track">
                    {duplicatedCoaches.map((coach, index) => (
                        <div key={index} className="coach-slider-card">
                            <div className="coach-card-image">
                                <img src={coach.image} alt={coach.name} />
                                <div className="coach-card-overlay">
                                    <span className="experience-badge">{coach.experience}</span>
                                </div>
                            </div>
                            <div className="coach-card-info">
                                <h3>{coach.name}</h3>
                                <p>{coach.sport}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoachSlider;
