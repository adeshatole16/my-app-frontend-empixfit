import React, { useEffect, useState } from "react";
import { getExercisePlans } from "../../api/exerciseApi";
import "./exercise.css";

const ExercisePlanCard = () => {
    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const coach = JSON.parse(localStorage.getItem("user"));
        if (coach?.level) {
            getExercisePlans(coach.level)
                .then(data => {
                    setPlans(data);
                    setLoading(false);
                })
                .catch(error => {
                    console.error("Error fetching exercise plans:", error);
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    }, []);

    return (
        <div className="exercise-container">
            <h2 className="section-title">🏋️ Exercise Plans</h2>

            {loading ? (
                <p className="loading-text">Loading exercise plans...</p>
            ) : plans.length === 0 ? (
                <div className="no-plans">
                    <span>📭</span>
                    No exercise plans found for your level.
                </div>
            ) : (
                <div className="exercise-grid">
                    {plans.map(plan => (
                        <div key={plan.id} className="exercise-card-ui">
                            <div className="card-header">
                                <h3>{plan.title}</h3>
                                <span className="level-badge">{plan.level}</span>
                            </div>
                            <p className="description">{plan.description}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExercisePlanCard;