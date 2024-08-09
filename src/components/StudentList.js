import React from 'react';
import StudentCard from './StudentCard'; // Import the StudentCard component
import './StudentList.css'; // Import additional styling for the list

function StudentList({ filter, year }) {
    const students = [
        { id: 1, name: 'John Doe', regNo: '21BCE7414', placed: true, year: 2023 },
        { id: 2, name: 'Alice Johnson', regNo: '21BCE7415', placed: false, year: 2023 },
        { id: 3, name: 'Michael Brown', regNo: '21BCE7416', placed: true, year: 2023 },
        { id: 4, name: 'Emily Davis', regNo: '21BCE7417', placed: true, year: 2023 },
        { id: 5, name: 'Sarah Wilson', regNo: '21BCE7418', placed: false, year: 2023 },
        { id: 6, name: 'James Smith', regNo: '21BCE7421', placed: false, year: 2024 },
        { id: 7, name: 'Olivia Garcia', regNo: '21BCE7422', placed: false, year: 2024 },
        { id: 8, name: 'Liam Johnson', regNo: '21BCE7423', placed: false, year: 2024 },
        { id: 9, name: 'Emma Martinez', regNo: '21BCE7424', placed: true, year: 2024 },
        { id: 10, name: 'Daniel Rodriguez', regNo: '21BCE7425', placed: true, year: 2024 },
        { id: 11, name: 'Sophia Lee', regNo: '21BCE7431', placed: true, year: 2025 },
        { id: 12, name: 'Benjamin Miller', regNo: '21BCE7432', placed: false, year: 2025 },
        { id: 13, name: 'Mia Wilson', regNo: '21BCE7433', placed: true, year: 2025 },
        { id: 14, name: 'Noah Anderson', regNo: '21BCE7434', placed: false, year: 2025 },
        { id: 15, name: 'Isabella Thompson', regNo: '21BCE7435', placed: true, year: 2025 },
        { id: 16, name: 'Ethan Taylor', regNo: '21BCE7441', placed: false, year: 2026 },
        { id: 17, name: 'Charlotte Martinez', regNo: '21BCE7442', placed: true, year: 2026 },
        { id: 18, name: 'Aiden Hernandez', regNo: '21BCE7443', placed: false, year: 2026 },
        { id: 19, name: 'Amelia Robinson', regNo: '21BCE7444', placed: true, year: 2026 },
        { id: 20, name: 'Lucas Lewis', regNo: '21BCE7445', placed: true, year: 2026 }
    ];

    const filteredStudents = students.filter(student => {
        if (year && student.year !== parseInt(year)) return false;
        if (filter === 'placed') return student.placed;
        if (filter === 'notPlaced') return !student.placed;
        return true; // for 'all'
    });

    return (
        <div className="student-list">
            <h2>Students</h2>
            <div className="student-cards-container">
                {filteredStudents.length > 0 ? (
                    filteredStudents.map(student => (
                        <StudentCard key={student.id} student={student} />
                    ))
                ) : (
                    <p>No students found</p>
                )}
            </div>
        </div>
    );
}

export default StudentList;
