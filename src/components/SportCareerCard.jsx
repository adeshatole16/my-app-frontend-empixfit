import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/career.css';

const SportCareerCard = ({ sportName, sportImage, sportDescription }) => {
    const navigate = useNavigate();

    const handleApplyClick = () => {
        navigate(`/coach-apply?sport=${sportName.toLowerCase().replace(' coach', '')}`);
    };

    return (
        <div className="career-card reveal">
            <div className="career-card-image">
                <img src={sportImage} alt={sportName} />
                <div className="career-card-overlay">
                    <h3>{sportName}</h3>
                    <p>{sportDescription}</p>
                    <button className="apply-btn" onClick={handleApplyClick}>
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SportCareerCard;
