import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const CoachRegister = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const sport = searchParams.get('sport');

    return (
        <div className="coach-register-page" style={{ backgroundColor: '#0d0d0d', minHeight: '100vh', color: 'white' }}>
            <Navbar />
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Apply as {sport ? sport.charAt(0).toUpperCase() + sport.slice(1) : ''} Coach</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto 40px' }}>
                    We are excited to have you join our elite coaching network. Please provide your professional details.
                </p>
                <div style={{ background: '#1a1a1a', padding: '40px', borderRadius: '20px', maxWidth: '500px', margin: '0 auto' }}>
                    <p style={{ color: '#ff5722', fontWeight: 'bold' }}>Coach Application Form Placeholder</p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CoachRegister;
