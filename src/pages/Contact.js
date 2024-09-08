import React, { useState } from 'react';
import './Contact.css';
import Footer from '../components/Footer';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //here you would typically send formData to a backend service or email API
        console.log('Form data submitted:', formData);

        //for now, we'll just simulate a successful submission
        setIsSubmitted(true);

        //optionally reset the form
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-img">
                <img src={require('../assets/image/modern-kitchen.jpg')} />
            </div>

            <div className="contact-form">
                <h2>Contact ModeArt</h2>
                {isSubmitted ? (
                    <p>Thank you for your message! We will get back to you shortly.</p>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <legend htmlFor="name">Name</legend>
                            <input
                            placeholder='Your Name'
                                type="text"
                                id="name"
                                name="name"
                                autoComplete='on'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <legend htmlFor="emal">Email</legend>
                            <input
                            placeholder='Your email'
                                type="email"
                                id="email"
                                name="email"
                                autoComplete='on'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <legend htmlFor="message">Message</legend>
                            <textarea
                            placeholder='Your message'
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                )}
            </div>
            <Footer/>
        </div>
    );
};

export default Contact;
