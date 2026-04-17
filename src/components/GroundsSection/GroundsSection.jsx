import React from 'react';
import '../../styles/home.css';

const grounds = [
    {
        name: "Elite Performance Center",
        description: "Multi-sport facility with Olympic-grade surfaces and climate control.",
        image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80"
    },
    {
        name: "Neon Arena",
        description: "Modern indoor arena for basketball, badminton, and volleyball.",
        image: "https://t4.ftcdn.net/jpg/14/01/55/19/360_F_1401551911_lCNjWFsQ0AnK0uQuWBNWbss5Z1DHKbPn.jpg"
    },
    {
        name: "Sunset Turf",
        description: "Premium FIFA-standard artificial turf for football and rugby.",
        image: "https://d3mt0x61rkkfy3.cloudfront.net/page_element/3018/original/bg-image/1677736483-2sw6dvtfgt.jpeg?v=2cba1ee16811e888b7ff54c4bd94265b"
    }
];

const GroundsSection = () => {
    return (
        <section className="grounds section-padding" id="grounds">
            <div className="container">
                <div className="grounds-header reveal">
                    <span className="hero-subtitle">Premium Facilities</span>
                    <h2>Best Training Grounds We Provide</h2>
                    <p>
                        Train on world-class surfaces designed to enhance your performance
                        and minimize injury risk. Our grounds are equipped with modern amenities.
                    </p>
                </div>

                <div className="grounds-grid">
                    {grounds.map((ground, index) => (
                        <div key={index} className="ground-card reveal">
                            <div className="ground-image">
                                <img src={ground.image} alt={ground.name} />
    
                             </div>
                            <div className="ground-info">
                                <h3>{ground.name}</h3>
                                <p>{ground.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroundsSection;
