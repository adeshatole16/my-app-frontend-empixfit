import React, { useEffect, useRef } from 'react';
import '../../styles/home.css';

const features = [
    {
        title: "Exercise Training Plans",
        description: "Personalized workout routines tailored to your specific sport and performance goals.",
        image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Professional Coaches",
        description: "Get mentored by world-class athletes and certified trainers with years of professional experience.",
        image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Diet & Nutrition Guidance",
        description: "Fuel your performance with customized meal plans and expert nutrition advice.",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Practice Videos",
        description: "Access a library of high-definition practice videos and skill tutorials to perfect your technique.",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    }
];

const FeaturesSection = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => observer.observe(card));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="features section-padding" id="event">
            <div className="container features-container">
                <div className="features-header reveal">
                    <span className="hero-subtitle">Our Features</span>
                    <h2>Everything an Athlete Needs</h2>
                    <p>
                        We provide a comprehensive ecosystem designed to support your athletic
                        journey at every stage, from beginner training to professional excellence.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card-wrapper">
                            <div className="feature-card">
                                <div className="feature-image">
                                    <img src={feature.image} alt={feature.title} />
                                </div>
                                <div className="feature-info">
                                    <h3>{feature.title}</h3>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                            {index < features.length - 1 && <div className="feature-line"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
