import React from 'react';
import './Stats.css'; // Ensure you have corresponding CSS styles

const Stats = () => {
    // Example data for demonstration purposes
    const data = [
        { year: '2022', total: 100, placed: 70, notPlaced: 30 },
        { year: '2023', total: 120, placed: 80, notPlaced: 40 }
    ];

    return (
        <div className="stats-container">
            {data.map((item, index) => (
                <div key={index} className="stats-card">
                    <h3>{item.year}</h3>
                    <p>Total Students: {item.total}</p>
                    <p>Placed: {item.placed}</p>
                    <p>Not Placed: {item.notPlaced}</p>
                </div>
            ))}
        </div>
    );
};

export default Stats;
