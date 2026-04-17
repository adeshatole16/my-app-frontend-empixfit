import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/event.css';

const SportCard = ({ sportName, sportImage, sportDescription }) => {
    const navigate = useNavigate();

    const handleJoinClick = () => {
        navigate(`/register?sport=${sportName.toLowerCase()}`);
    };

    return (
        <div className="sport-card">
            <div className="sport-card-image">
                <img src={sportImage} alt={sportName} />
            </div>
            <div className="sport-card-content">
                <h3>{sportName}</h3>
                <p>{sportDescription}</p>
                <button className="join-btn" onClick={handleJoinClick}>
                    Join With Us
                </button>
            </div>
        </div>
    );
};

export default SportCard;
