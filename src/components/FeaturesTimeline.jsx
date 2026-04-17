import React, { useEffect, useRef } from 'react';
import './FeaturesTimeline.css';

const features = [
    {
        title: "Training Programs",
        description: "Structured exercise plans designed for different sports and skill levels.",
        icon: "🏋️"
    },
    {
        title: "Professional Coaches",
        description: "Learn from the best with our network of certified and experienced sports coaches.",
        icon: "👨‍🏫"
    },
    {
        title: "Diet & Nutrition Plans",
        description: "Fuel your performance with customized meal plans tailored to your athletic needs.",
        icon: "🍎"
    },
    {
        title: "Performance Tracking",
        description: "Monitor your progress with advanced analytics and regular performance assessments.",
        icon: "📊"
    },
    {
        title: "Practice Videos",
        description: "Access a library of high-quality practice drills and technique analysis videos.",
        icon: "📹"
    }
];

const FeaturesTimeline = () => {
    const timelineRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current || !progressRef.current) return;

            const rect = timelineRef.current.getBoundingClientRect();
            const viewHeight = window.innerHeight;

            // Calculate how much of the timeline is in view
            if (rect.top < viewHeight && rect.bottom > 0) {
                const totalHeight = rect.height;
                const visibleHeight = Math.max(0, viewHeight - rect.top);
                const progress = Math.min(100, (visibleHeight / totalHeight) * 100);
                progressRef.current.style.height = `${progress}%`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial call
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="features-timeline-section" id="features">
            <div className="container">
                <div className="section-header reveal">
                    <span className="hero-subtitle">Why Choose Us</span>
                    <h2>Our Platform Features</h2>
                    <p>Everything you need to excel in your sports journey, all in one place.</p>
                </div>

                <div className="timeline-container" ref={timelineRef}>
                    <div className="timeline-line">
                        <div className="timeline-progress" ref={progressRef}></div>
                    </div>

                    <div className="timeline-items">
                        {features.map((feature, index) => (
                            <div key={index} className="timeline-item reveal">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="feature-icon-wrapper">
                                        <span className="feature-icon">{feature.icon}</span>
                                    </div>
                                    <div className="feature-text">
                                        <h3>{feature.title}</h3>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesTimeline;
