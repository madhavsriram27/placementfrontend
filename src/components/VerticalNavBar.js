import React from 'react';
import './VerticalNavBar.css';

function VerticalNavBar({ onFilterChange, onYearChange, toggleCompanyList, showCompanyList }) {
    return (
        <div className="vertical-nav">
            <button onClick={() => onFilterChange('all')}>All Students</button>
            <button onClick={() => onFilterChange('placed')}>Placed Students</button>
            <button onClick={() => onFilterChange('notPlaced')}>Not Placed Students</button>
            <select onChange={onYearChange}>
                <option value="2023">Year 2023</option>
                <option value="2024">Year 2024</option>
                <option value="2025">Year 2025</option>
                <option value="2026">Year 2026</option>
            </select>
            <button onClick={toggleCompanyList}>
                {showCompanyList ? 'Hide Companies' : 'Companies Visited'}
            </button>
        </div>
    );
}

export default VerticalNavBar;
