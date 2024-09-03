import React from 'react';
import './About.css';
import Footer from "../components/Footer";

const About = () => {
    return (
        <div className="about">
            <div className="about-intro">
                <h2>Our Story</h2>
                <p>
                    At ModeArt, we belive that interior design is not just aboutdecorating spaces;
                    it's about creating environments that inspire, comfort, and reflect the unique
                    personalities of those who inhabit them. Our journey began with a passion for
                    transforming ordinary spaces intr extraortinaryexperiences. Today, we are proud
                    to have touchedcountless lives through our innovative designs.
                </p>
                <img src={require('../assets/color-living-room.jpg')} />
            </div>

            <div className="about-team">
                <h2>Meet our Team</h2>
                <p>
                    Our team at ModeArt is a diverse group of talented designers, architects an
                    project managers, each bringing their own unique expertise to the table. We are
                    united by our commitment to excellence and our passion for creating spaces that
                    tell a story.
                </p>
                <div className="team-images">
                    <img src={require('../assets/team1.jpg')} />
                    <img src={require('../assets/team2.jpg')} />
                    <img src={require('../assets/team3.jpg')} />
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default About;
