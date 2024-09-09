import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
    const [Mobile, setMobile] = useState(false);

    return (
        <>
            <div className="navbar">
                <div className="nav-container flex1">
                    <nav className="flex1">
                        <div className="logo">
                            <Link to="/">ModeArt</Link>
                        </div>

                        <ul
                            className={Mobile ? 'nav-menu active' : 'nav-menu'}
                            onClick={() => setMobile(false)}
                        >
                            <li className="nav-item">
                                <Link className="nav-links" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-links" to="/our-design">
                                    Our Design
                                </Link>
                            </li>
                        </ul>
                        <button className="menu-icon" onClick={() => setMobile(!Mobile)}>
                            {Mobile ? (
                                <i className="fa fa-times"></i>
                            ) : (
                                <i className="fa fa-bars"></i>
                            )}
                        </button>
                    </nav>
                </div>
            </div>
        </>
    );
}














/*const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">ModeArt</Link>
                </div>

                {/*icon*/
                /*<div className="menu-icon" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <ul className={isMobileMenuOpen ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" >
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-links">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact" className="nav-links">
                            Contact
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/our-design" className="nav-links">
                            Our Design
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;*/
