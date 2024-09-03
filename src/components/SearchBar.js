import React from 'react';
import './SearchBar.css';

const SearchBar = ({ searchQuery, setSearchQuery }) => (
    <div className="search-bar-container">
        <input
            type="text"
            placeholder="Search our design..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    </div>
);

export default SearchBar;
