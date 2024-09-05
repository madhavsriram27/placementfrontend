import React from 'react';
import CompanyList from './CompanyList';  // Import the CompanyList component

function Dashboard() {
    const companies = [
        { id: 1, name: 'Google', placedCount: 12 },
        { id: 2, name: 'Amazon', placedCount: 8 },
        { id: 3, name: 'Microsoft', placedCount: 15 },
        { id: 4, name: 'Facebook', placedCount: 6 },
        { id: 5, name: 'Apple', placedCount: 10 },
    ];

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            {/* Render CompanyList component and pass the companies array as props */}
            <CompanyList companies={companies} />
        </div>
    );
}

export default Dashboard;
