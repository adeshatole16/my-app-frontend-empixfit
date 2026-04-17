import React from 'react';
import '../styles/career.css';

const CommunitySection = () => {
    const communityImage = "https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1600&q=80";

    return (
        <section className="community section-padding">
            <div className="container">
                <div className="section-header reveal active">
                    <h2>Our Coaching Community</h2>
                    <p>Join a vibrant community of coaches dedicated to excellence and athletic growth.</p>
                </div>
                <div className="community-single-image reveal active">
                    <img src={communityImage} alt="Coaching Community Collage" />
                    <div className="community-overlay-text">
                        <span>Elite Coaches</span>
                        <span>Structured Training</span>
                        <span>Nationwide Support</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
