import React from 'react';
import CareerSearch from './CareerSearch';
import '../styles/career.css';

const CareerHero = ({ searchTerm, onSearchChange, onSearchClick }) => {
    return (
        <section className="career-hero">
            <div className="career-hero-overlay"></div>
            <div className="container career-hero-content">
                <h1 className="reveal active">Join Our Coaching Team</h1>
                <p className="reveal active">
                    We are building the future of sports training by connecting talented
                    coaches with passionate athletes.
                </p>
                <CareerSearch
                    searchTerm={searchTerm}
                    onSearchChange={onSearchChange}
                    onSearchClick={onSearchClick}
                />
            </div>
        </section>
    );
};

export default CareerHero;
