import React from 'react';

const DietPlan = () => {
    const meals = [
        { time: "Morning", food: "Milk + Banana + Oats", icon: "🥛" },
        { time: "Lunch", food: "Rice + Dal + Eggs + Salad", icon: "🍱" },
        { time: "Evening", food: "Protein Snack + Fruits", icon: "🍎" }
    ];

    return (
        <div className="diet-plan-card">
            <h2>Daily Diet Schedule</h2>
            <div className="diet-grid">
                {meals.map((meal, index) => (
                    <div key={index} className="diet-item">
                        <i>{meal.icon}</i>
                        <div className="diet-title">{meal.time}</div>
                        <p>{meal.food}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DietPlan;
