import React, { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import MapSection from '../components/MapSection';
import '../styles/contact.css';

const Contact = () => {
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
        <div className="contact-page">
            <Navbar />
            <ContactHero />

            <section className="contact-container">
                <div className="container">
                    <div className="contact-grid">
                        <ContactForm />
                        <ContactInfo />
                    </div>
                </div>
            </section>

            <MapSection />
            <Footer />
        </div>
    );
};

export default Contact;
