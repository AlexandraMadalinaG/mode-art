import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-description">
                    <h3>ModeArt</h3>
                    <p>ModeArt is a leading interior design company, offering modern and 
                        innovative design solution to transform spaces into functional and
                        aesthetrically pleasing ensironments.
                    </p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/our-design">Our Design</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 ModeArt. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;