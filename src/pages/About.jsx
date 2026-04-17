import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import AboutIntro from '../components/AboutIntro';
import AboutFeatures from '../components/AboutFeatures';
import VisionSection from '../components/VisionSection';
import '../styles/about.css';

const About = () => {
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
        <div className="about-page">
            <Navbar />
            <div className="container">
                <AboutIntro />
                <AboutFeatures />
                <VisionSection />
            </div>
            <Footer />
        </div>
    );
};

export default About;
