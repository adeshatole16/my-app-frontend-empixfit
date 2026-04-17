import React from 'react';
import ExerciseLevelCard from './ExerciseLevelCard';

const ExercisePlan = () => {
    const levels = [
        { title: "Basic Training", description: "Foundational drills and cardio for beginners.", isActive: true },
        { title: "Moderate Training", description: "Technical skills and endurance building.", isActive: false },
        { title: "Advanced Training", description: "High-intensity simulations and strategy.", isActive: false }
    ];

    return (
        <div className="exercise-plan-container">
            <div className="exercise-description">
                <p>
                    Our professional training program is divided into three comprehensive levels designed to take you from a beginner to a pro athlete. Each level focuses on specific physical and technical attributes.
                </p>
                <p style={{ marginTop: '20px' }}>
                    Track your progress here and move up the ranks as you master each stage of our specialized curriculum.
                </p>
            </div>
            <div className="exercise-level-grid">
                {levels.map((item, index) => (
                    <ExerciseLevelCard
                        key={index}
                        title={item.title}
                        description={item.description}
                        isActive={item.isActive}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExercisePlan;
