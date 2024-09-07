import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurDesign from './pages/OurDesign';
import './App.css';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    //toggle theme mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    //persist theme mode in local storage
    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setIsDarkMode(storedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    return (
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
            <div className="set-mode">
                <button onClick={toggleDarkMode} className="dark-mode-toggle">
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
            </div>

            <Router>
                <div className="container">
                    <Navbar />
                    <Routes>
                        <Route exact path="/mode-art" element={<Home />} />
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/our-design" element={<OurDesign />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
