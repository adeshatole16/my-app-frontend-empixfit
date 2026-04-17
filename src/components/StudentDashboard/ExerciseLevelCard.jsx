import React from 'react';

const ExerciseLevelCard = ({ level, title, description, isActive }) => {
    return (
        <div className={`exercise-card ${isActive ? 'active' : ''}`}>
            <div className="exercise-info">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
            <button className="btn-start">Start</button>
        </div>
    );
};

export default ExerciseLevelCard;
