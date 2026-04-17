import React from 'react';
import '../styles/contact.css';

const ContactInfo = () => {
    return (
        <div className="contact-info-side reveal">
            <h2>Why Contact Us?</h2>
            <p className="info-text">
                You can contact us if you:
                <br />• Want to become a coach on our platform
                <br />• Have questions about sports training programs
                <br />• Need support with registration or membership plans
                <br />• Want information about training locations and facilities
            </p>

            <div className="info-list">
                <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div className="info-details">
                        <h4>Email</h4>
                        <p>support@sportsplatform.com</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-icon">📞</div>
                    <div className="info-details">
                        <h4>Phone</h4>
                        <p>+91 9876543210</p>
                    </div>
                </div>
                <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div className="info-details">
                        <h4>Office Location</h4>
                        <p>Pune, India</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
