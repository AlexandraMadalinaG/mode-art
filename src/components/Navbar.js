import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <a href="/">ModeArt</a>
                </div>

                {/*icon*/}
                <div className="menu-icon" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <a href="/" className="nav-links">
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-links">
                            About
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-links">
                            Contact
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/our-design" className="nav-links">
                            Our Design
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
