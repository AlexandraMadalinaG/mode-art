import React from "react";
import './Footer.css';

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
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/our-design">Our Design</a></li>
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