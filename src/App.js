import React, { useState } from 'react';
import StudentList from './components/StudentList';
import CompanyList from './components/CompanyList';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import VerticalNavBar from './components/VerticalNavBar';
import StudentCard from './components/StudentCard';
import './styles/App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [filter, setFilter] = useState('all');
    const [year, setYear] = useState('2023');
    const [showCompanies, setShowCompanies] = useState(false);
    const [showImages, setShowImages] = useState(false);

    const handleRegister = (user) => {
        localStorage.setItem('registeredUser', JSON.stringify(user));
        setIsRegistering(false);
    };

    const toggleCompanyList = () => {
        setShowCompanies(!showCompanies);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    const toggleHomeImages = () => {
        setShowImages(!showImages);
    };

    const handleHomeClick = () => {
        setShowImages(!showImages);
    };

    if (!isLoggedIn) {
        if (isRegistering) {
            return <Register onRegister={handleRegister} />;
        }
        return <Login onLogin={setIsLoggedIn} onSwitchToRegister={() => setIsRegistering(true)} />;
    }

    return (
        <div className="App">
            <Navbar onHomeClick={handleHomeClick} />
            <VerticalNavBar
                onFilterChange={handleFilterChange}
                onYearChange={handleYearChange}
                toggleCompanyList={toggleCompanyList}
            />
            <div className="results-container">
                {showCompanies && <CompanyList />}
                <StudentList filter={filter} year={year} />
            </div>
            {showImages && (
                <div className="image-container">
                    <img src="/images/image1.jpg" alt="Image 1" />
                    <img src="/images/image2.jpg" alt="Image 2" />
                </div>
            )}
        </div>
    );
}

export default App;
