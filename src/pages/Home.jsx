import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturesTimeline from '../components/FeaturesTimeline';
import CoachSlider from '../components/CoachSlider';
import GroundsSection from '../components/GroundsSection/GroundsSection';
import LocationSection from '../components/LocationSection/LocationSection';
import Footer from '../components/Footer/Footer';
import '../styles/home.css';

const Home = () => {
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const reveals = document.querySelectorAll('.reveal');
        reveals.forEach(reveal => observer.observe(reveal));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="home-page">
            <Navbar />
            <main>
                <HeroSection />
                <FeaturesTimeline />
                <CoachSlider />
                <GroundsSection />
                <LocationSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
