import React, { useState } from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import StudentList from './components/StudentList';
import CompanyList from './components/CompanyList';
import Login from './components/Login';
import Register from './components/Register';
import VerticalNavBar from './components/VerticalNavBar';
import Stats from './components/Stats';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [filter, setFilter] = useState('all');
    const [year, setYear] = useState('2023');
    const [showCompanies, setShowCompanies] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const [showStudentList, setShowStudentList] = useState(false); // Manage student list visibility
    const [searchTerm, setSearchTerm] = useState(''); // Define searchTerm state

    const handleRegister = (user) => {
        localStorage.setItem('registeredUser', JSON.stringify(user));
        setIsRegistering(false);
    };

    const toggleCompanyList = () => {
        setShowCompanies(!showCompanies);
        setShowStats(false); // Hide stats when showing companies
        setShowStudentList(false); // Hide student list when showing companies
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
        setShowStudentList(true); // Show student list based on filter
        setShowStats(false); // Hide stats when filtering students
        setShowCompanies(false); // Hide companies list when filtering students
    };

    const handleHomeClick = () => {
        setShowStats(true); // Show stats on Home button click
        setShowCompanies(false); // Hide companies list
        setShowStudentList(false); // Hide student list
    };

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    if (!isLoggedIn) {
        if (isRegistering) {
            return <Register onRegister={handleRegister} />;
        }
        return <Login onLogin={setIsLoggedIn} onSwitchToRegister={() => setIsRegistering(true)} />;
    }

    return (
        <div className="App">
            <Navbar onSearch={handleSearch} onHomeClick={handleHomeClick} />
            <VerticalNavBar
                onFilterChange={handleFilterChange}
                onYearChange={handleYearChange}
                toggleCompanyList={toggleCompanyList}
                showCompanyList={showCompanies}
            />
            <div className="results-container">
                {showStats && <Stats />}
                {showCompanies && <CompanyList />}
                {showStudentList && <StudentList filter={filter} year={year} searchTerm={searchTerm} />}
            </div>
        </div>
    );
}

export default App;
