import React from 'react';
import '../styles/contact.css';

const ContactForm = () => {
    return (
        <div className="contact-form-card reveal">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" required />
                </div>
                <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="form-group">
                    <label>Subject</label>
                    <input type="text" placeholder="Enter the subject" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea rows="5" placeholder="Write your message" required></textarea>
                </div>
                <button type="submit" className="submit-btn">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;
