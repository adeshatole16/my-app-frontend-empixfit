import React from 'react';
import '../../styles/home.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
const HeroSection = () => {
    return (
        <section className="hero" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <span className="hero-subtitle">Elevate Your Game</span>
                    <h1>Unleash Your Inner Athlete</h1>
                    <p>
                        Experience world-class sports training with professional coaches and
                        premium facilities. Join our community and transform your performance
                        with data-driven training plans and expert guidance.
                    </p>
                    <div className="hero-btns">
                        <Link to="/event">
    <button className="btn btn-primary">Join as Player</button>
  </Link>

  <Link to="/career">
    <button className="btn btn-secondary">Join as Coach</button>
  </Link>
                    </div>
                </div>
                <div className="hero-image">
                    {/* Using a high-quality sports placeholder image */}
                    <img src="/home_page image.jpg" alt="Athlete training" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
