import React from 'react';
import '../styles/about.css';

const VisionSection = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="vision-section">
                    <h2 className="reveal">Our Vision</h2>
                    <p className="vision-statement reveal">
                        "Our vision is to create a global sports ecosystem where every athlete
                        can access professional training, structured guidance, and opportunities to grow."
                    </p>
                    <div className="vision-image reveal">
                        <img
                            src="https://media.assettype.com/nationalherald%2F2021-08%2Fa8cd93c4-6846-44c8-b360-fb0d7b481697%2Fneeraj.jpg?rect=0%2C0%2C640%2C360&auto=format%2Ccompress&fmt=webp&w=1200"
                            alt="Inspirational Vision"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionSection;
