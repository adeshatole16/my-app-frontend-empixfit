import React from 'react';

const PlanValidityCard = () => {
    const plan = {
        name: "3 Month Professional Training",
        startDate: "1 January 2026",
        endDate: "31 March 2026",
        daysRemaining: 22,
        totalDays: 90,
        isExpired: false
    };

    const progressPercentage = Math.max(0, Math.min(100, ((plan.totalDays - plan.daysRemaining) / plan.totalDays) * 100));

    return (
        <div className="validity-card">
            <div className="plan-info">
                <div className="plan-name">{plan.name}</div>
                <div className="plan-dates">
                    Valid From: {plan.startDate} <br />
                    Expires On: {plan.endDate}
                </div>

                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', fontSize: '0.8rem' }}>
                    <span>{plan.daysRemaining} days remaining</span>
                    <span>{Math.round(progressPercentage)}% completed</span>
                </div>

                {plan.isExpired && (
                    <div className="expiry-msg">
                        Your training plan has expired. Please renew.
                    </div>
                )}
            </div>
        </div>
    );
};

export default PlanValidityCard;
