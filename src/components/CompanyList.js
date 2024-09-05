import React, { useState } from 'react';
import './CompanyList.css'; // Import the CSS file for styling

// Static data for demonstration
const data = {
    2024: [
        { id: 1, name: 'Google', placedCount: 12 },
        { id: 2, name: 'Amazon', placedCount: 8 },
        { id: 3, name: 'Microsoft', placedCount: 15 },
    ],
    2023: [
        { id: 4, name: 'Facebook', placedCount: 6 },
        { id: 5, name: 'Apple', placedCount: 10 },
        { id: 6, name: 'Netflix', placedCount: 9 },
    ],
    // Add more years and companies as needed
};

function CompanyList() {
    const [year, setYear] = useState(2024);
    const companies = data[year] || [];

    const handleYearChange = (event) => {
        setYear(parseInt(event.target.value, 10));
    };

    return (
        <div className="company-list">
            <h2>Companies Visited</h2>
            <select value={year} onChange={handleYearChange} className="year-selector">
                {Object.keys(data).map((yearOption) => (
                    <option key={yearOption} value={yearOption}>
                        {yearOption}
                    </option>
                ))}
            </select>
            <div className="company-list-items">
                {companies.map((company) => (
                    <div key={company.id} className="company-card">
                        <h3>{company.name}</h3>
                        <p>Total Students Placed: {company.placedCount}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CompanyList;
