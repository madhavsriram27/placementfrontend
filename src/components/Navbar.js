import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo.png';

function Navbar({ onSearch, onHomeClick }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleHomeClick = () => {
        onHomeClick();
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <ul className="navbar-menu">
                <li><a href="/" onClick={(e) => { e.preventDefault(); handleHomeClick(); }}>Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
            <div className="navbar-search">
                <input
                    type="text"
                    placeholder="Search by Registration Number"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
        </nav>
    );
}

export default Navbar;
