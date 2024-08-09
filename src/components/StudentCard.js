import React from 'react';
import './StudentCard.css'; // Ensure the file is named and located correctly

const StudentCard = ({ student }) => {
    return (
        <div className={`student-card ${student.placed ? 'placed' : 'not-placed'}`}>
            <strong>{student.name}</strong> <br />
            Registration No: {student.regNo} <br />
            Status: {student.placed ? 'Placed' : 'Not Placed'}
        </div>
    );
}

export default StudentCard;
