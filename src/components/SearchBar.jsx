import React from 'react';
import '../styles/event.css';

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-container reveal active">
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search sports (cricket, football, kabaddi...)"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="search-input"
                />
                <button className="search-btn">
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
