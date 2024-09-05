import React from 'react';
import StudentCard from './StudentCard'; // Import the StudentCard component
import './StudentList.css'; // Import additional styling for the list

function StudentList({ filter, year, searchTerm }) {
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
        { id: 20, name: 'Lucas Lewis', regNo: '21BCE7445', placed: true, year: 2026 },
        { id: 21, name: 'Harper Young', regNo: '21BCE7446', placed: false, year: 2023 },
        { id: 22, name: 'Elijah Harris', regNo: '21BCE7447', placed: true, year: 2023 },
        { id: 23, name: 'Amelia Robinson', regNo: '21BCE7448', placed: true, year: 2023 },
        { id: 24, name: 'Mason Clark', regNo: '21BCE7449', placed: false, year: 2023 },
        { id: 25, name: 'Lily Hill', regNo: '21BCE7450', placed: true, year: 2023 },
        { id: 26, name: 'Sophie Adams', regNo: '21BCE7451', placed: false, year: 2024 },
        { id: 27, name: 'Henry Campbell', regNo: '21BCE7452', placed: false, year: 2024 },
        { id: 28, name: 'Ella Lewis', regNo: '21BCE7453', placed: true, year: 2024 },
        { id: 29, name: 'Alexander Allen', regNo: '21BCE7454', placed: true, year: 2024 },
        { id: 30, name: 'Abigail Mitchell', regNo: '21BCE7455', placed: false, year: 2024 },
        { id: 31, name: 'Ava Hernandez', regNo: '21BCE7456', placed: true, year: 2025 },
        { id: 32, name: 'Mason Perez', regNo: '21BCE7457', placed: true, year: 2025 },
        { id: 33, name: 'Scarlett Carter', regNo: '21BCE7458', placed: false, year: 2025 },
        { id: 34, name: 'Landon Collins', regNo: '21BCE7459', placed: false, year: 2025 },
        { id: 35, name: 'Hannah Stewart', regNo: '21BCE7460', placed: true, year: 2025 },
        { id: 36, name: 'David Sanchez', regNo: '21BCE7461', placed: true, year: 2026 },
        { id: 37, name: 'Chloe Turner', regNo: '21BCE7462', placed: true, year: 2026 },
        { id: 38, name: 'Owen Parker', regNo: '21BCE7463', placed: false, year: 2026 },
        { id: 39, name: 'Avery Phillips', regNo: '21BCE7464', placed: false, year: 2026 },
        { id: 40, name: 'Ella Cooper', regNo: '21BCE7465', placed: true, year: 2026 },
        { id: 41, name: 'Evelyn Morris', regNo: '21BCE7466', placed: true, year: 2023 },
        { id: 42, name: 'Jack Howard', regNo: '21BCE7467', placed: true, year: 2023 },
        { id: 43, name: 'Madison Ward', regNo: '21BCE7468', placed: false, year: 2023 },
        { id: 44, name: 'Wyatt Torres', regNo: '21BCE7469', placed: false, year: 2023 },
        { id: 45, name: 'Sofia Flores', regNo: '21BCE7470', placed: true, year: 2023 },
        { id: 46, name: 'Julian Edwards', regNo: '21BCE7471', placed: false, year: 2024 },
        { id: 47, name: 'Elizabeth Hill', regNo: '21BCE7472', placed: false, year: 2024 },
        { id: 48, name: 'Sebastian Scott', regNo: '21BCE7473', placed: true, year: 2024 },
        { id: 49, name: 'Victoria Adams', regNo: '21BCE7474', placed: true, year: 2024 },
        { id: 50, name: 'Caleb Baker', regNo: '21BCE7475', placed: false, year: 2024 },
        { id: 51, name: 'Addison Roberts', regNo: '21BCE7476', placed: true, year: 2025 },
        { id: 52, name: 'Jayden Nelson', regNo: '21BCE7477', placed: true, year: 2025 },
        { id: 53, name: 'Madeline Perez', regNo: '21BCE7478', placed: false, year: 2025 },
        { id: 54, name: 'Dylan King', regNo: '21BCE7479', placed: false, year: 2025 },
        { id: 55, name: 'Layla Morris', regNo: '21BCE7480', placed: true, year: 2025 },
        { id: 56, name: 'Emily Murphy', regNo: '21BCE7481', placed: true, year: 2026 },
        { id: 57, name: 'Levi Martinez', regNo: '21BCE7482', placed: true, year: 2026 },
        { id: 58, name: 'Aria Rivera', regNo: '21BCE7483', placed: false, year: 2026 },
        { id: 59, name: 'Isaac Peterson', regNo: '21BCE7484', placed: false, year: 2026 },
        { id: 60, name: 'Penelope Rogers', regNo: '21BCE7485', placed: true, year: 2026 },
        { id: 61, name: 'Zoe Evans', regNo: '21BCE7486', placed: true, year: 2023 },
        { id: 62, name: 'Matthew Hall', regNo: '21BCE7487', placed: true, year: 2023 },
        { id: 63, name: 'Eleanor Collins', regNo: '21BCE7488', placed: false, year: 2023 },
        { id: 64, name: 'Isaiah Cook', regNo: '21BCE7489', placed: false, year: 2023 },
        { id: 65, name: 'Aubrey Perez', regNo: '21BCE7490', placed: true, year: 2023 },
        { id: 66, name: 'Grace Bennett', regNo: '21BCE7491', placed: false, year: 2024 },
        { id: 67, name: 'Samuel Ramirez', regNo: '21BCE7492', placed: true, year: 2024 },
        { id: 68, name: 'Lily Bryant', regNo: '21BCE7493', placed: true, year: 2024 },
        { id: 69, name: 'Gabriel Alexander', regNo: '21BCE7494', placed: false, year: 2024 },
        { id: 70, name: 'Hannah Brooks', regNo: '21BCE7495', placed: true, year: 2024 },
        { id: 71, name: 'Lucas Ward', regNo: '21BCE7496', placed: true, year: 2025 },
        { id: 72, name: 'Mila Torres', regNo: '21BCE7497', placed: true, year: 2025 },
        { id: 73, name: 'Jackson Long', regNo: '21BCE7498', placed: false, year: 2025 },
        { id: 74, name: 'Nora Rivera', regNo: '21BCE7499', placed: false, year: 2025 },
        { id: 75, name: 'Scarlett Watson', regNo: '21BCE7500', placed: true, year: 2025 },
        { id: 76, name: 'Elena Green', regNo: '21BCE7501', placed: false, year: 2026 },
        { id: 77, name: 'Julian Thompson', regNo: '21BCE7502', placed: true, year: 2026 },
        { id: 78, name: 'Lillian Scott', regNo: '21BCE7503', placed: true, year: 2026 },
        { id: 79, name: 'Henry Garcia', regNo: '21BCE7504', placed: false, year: 2026 },
        { id: 80, name: 'Aurora Turner', regNo: '21BCE7505', placed: true, year: 2026 },
        { id: 81, name: 'Wyatt Moore', regNo: '21BCE7506', placed: true, year: 2023 },
        { id: 82, name: 'Zara Walker', regNo: '21BCE7507', placed: true, year: 2023 },
        { id: 83, name: 'Leo White', regNo: '21BCE7508', placed: false, year: 2023 },
        { id: 84, name: 'Ellie Harris', regNo: '21BCE7509', placed: false, year: 2023 },
        { id: 85, name: 'Luna Rodriguez', regNo: '21BCE7510', placed: true, year: 2023 },
        { id: 86, name: 'Isaac King', regNo: '21BCE7511', placed: false, year: 2024 },
        { id: 87, name: 'Avery Wright', regNo: '21BCE7512', placed: true, year: 2024 },
        { id: 88, name: 'Emily Lewis', regNo: '21BCE7513', placed: true, year: 2024 },
        { id: 89, name: 'Caleb Young', regNo: '21BCE7514', placed: false, year: 2024 },
        { id: 90, name: 'Hazel Scott', regNo: '21BCE7515', placed: true, year: 2024 },
        { id: 91, name: 'Mason Adams', regNo: '21BCE7516', placed: true, year: 2025 },
        { id: 92, name: 'Eleanor Allen', regNo: '21BCE7517', placed: true, year: 2025 },
        { id: 93, name: 'Oliver Bailey', regNo: '21BCE7518', placed: false, year: 2025 },
        { id: 94, name: 'Ava Collins', regNo: '21BCE7519', placed: false, year: 2025 },
        { id: 95, name: 'James Carter', regNo: '21BCE7520', placed: true, year: 2025 },
        { id: 96, name: 'Ella Morris', regNo: '21BCE7521', placed: false, year: 2026 },
        { id: 97, name: 'Harper Sanchez', regNo: '21BCE7522', placed: true, year: 2026 },
        { id: 98, name: 'Liam Rivera', regNo: '21BCE7523', placed: true, year: 2026 },
        { id: 99, name: 'Amelia Martinez', regNo: '21BCE7524', placed: false, year: 2026 },
        { id: 100, name: 'Benjamin Green', regNo: '21BCE7525', placed: true, year: 2026 },
    ];

    const filteredStudents = students.filter(student => {
        if (year && student.year !== parseInt(year)) return false;
        if (filter === 'placed') return student.placed;
        if (filter === 'notPlaced') return !student.placed;
        if (searchTerm && !student.regNo.includes(searchTerm)) return false;
        return true; // for 'all'
    });

    return (
        <div className="student-list">
            <h2 style={{marginLeft:"-550px", fontSize:"30px"}} >Students</h2>
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
