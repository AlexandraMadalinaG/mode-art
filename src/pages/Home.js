import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';
import DesignList from '../components/DesignList';
import designs from '../data/designs';
import DarkModeToggle from '../components/DarkModeToggle';

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDesigns, setFilteredDesigns] = useState([]);

    useEffect(() => {
        //filter designs based on the search query
        const result = designs.filter((design) =>
            design.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredDesigns(result);
    }, [searchQuery]);

    return (
        <div>
           
            <Hero />
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            {searchQuery && <DesignList designs={filteredDesigns} />}
        </div>
    );
};


export default Home;
