import React from 'react';
import '../styles/career.css';

const CareerSearch = ({ searchTerm, onSearchChange, onSearchClick }) => {
    return (
        <div className="career-search-container reveal active">
            <div className="career-search-wrapper">
                <input
                    type="text"
                    placeholder="Search by sport (cricket, football, kabaddi...)"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="career-search-input"
                />
                <button className="career-search-btn" onClick={onSearchClick}>
                    Search
                </button>
            </div>
        </div>
    );
};

export default CareerSearch;
