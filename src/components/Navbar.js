import React from 'react';
import './Navbar.css';

const Navbar = ({ onHomeClick }) => {
    const homeButtonStyle = {
        backgroundColor: '#dc3545', // Red background for testing
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        borderRadius: '4px',
        transition: 'background 0.3s',
        position: 'absolute',
        top: '50%',
        left: '10px',
        transform: 'translateY(-50%)'
    };

    return (
        <nav className="navbar">
            <button style={homeButtonStyle} onClick={onHomeClick}>Home</button>
            {/* Other navbar items */}
        </nav>
    );
};

export default Navbar;
