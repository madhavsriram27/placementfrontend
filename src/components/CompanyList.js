import React from 'react';

const companies = [
    'Company A',
    'Company B',
    'Company C',
    'Company D',
    'Company E'
];

function CompanyList() {
    return (
        <div>
            <h2>Companies Visited</h2>
            <ul>
                {companies.map((company, index) => (
                    <li key={index}>{company}</li>
                ))}
            </ul>
        </div>
    );
}

export default CompanyList;
