import React from 'react';
import '../styles/about.css';

const AboutIntro = () => {
    return (
        <section className="about-section">
            <div className="container grid-2">
                <div className="about-content reveal active">
                    <h2>About Our Sports Platform</h2>
                    <p>
                        This platform connects athletes with professional coaches and structured training programs.
                        We aim to help athletes improve their performance through guided exercises, diet plans,
                        practice videos, and professional mentorship.
                        <br /><br />
                        Our goal is to democratize elite-level sports training, making it accessible to anyone with
                        the passion and drive to succeed, regardless of their location or background.
                    </p>
                </div>
                <div className="about-image reveal active">
                    <img
                        src="https://padukoneschoolofbadminton.com/cdn/shop/files/IMG_20240930_185956.jpg?v=1727703839&width=1500"
                        alt="Athletes Training"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutIntro;
