// src/componentsSearchBar.js
import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        onSearch(term); // Notify parent component about the search term
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search by registration number..."
            />
        </div>
    );
}

export default SearchBar;
