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
                            <Link to="/" className='logo-link'>ModeArt</Link>
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
                        <div className="menu-icon" onClick={() => setMobile(!Mobile)}>
                            {Mobile ? (
                                <i className="fa fa-times"></i>
                            ) : (
                                <i className="fa fa-bars"></i>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
};