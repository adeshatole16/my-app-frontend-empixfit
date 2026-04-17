import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { submitCoachApplication } from '../api/coachApi';
import '../styles/register.css'; // Reusing general form layout

const CoachApply = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialSport = queryParams.get('sport') || '';

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        sport: initialSport,
        age: '',
        experience: '',
        location: '',
        bio: '',
        certification: null
    });

    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (initialSport) {
            setFormData(prev => ({ ...prev, sport: initialSport }));
        }
    }, [initialSport]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({ ...prev, certification: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });
       console.log("Form data being submitted:", formData);
        try {
            const response = await submitCoachApplication(formData);
            setStatus({ type: 'success', message: response.message });
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                sport: '',
                age: '',
                experience: '',
                location: '',
                bio: '',
                certification: null
            });
        } catch (error) {
            setStatus({ type: 'error', message: 'Application failed. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="register-page">
            <Navbar />
            <div className="register-hero">
                <div className="container">
                    <div className="register-card-container">
                        <div className="register-info">
                            <h1>Join Our Elite Coaching Staff</h1>
                            <p>Forge the athletes of tomorrow. Apply today to become a certified coach on our global sports platform.</p>
                            <ul className="register-benefits">
                                <li>✓ Nationwide Professional Network</li>
                                <li>✓ Competitive Earning Potential</li>
                                <li>✓ Structured Curriculum Support</li>
                                <li>✓ Advanced Performance Tools</li>
                            </ul>
                        </div>

                        <div className="register-form-wrapper">
                            {status.type === 'success' ? (
                                <div className="success-view">
                                    <div className="success-icon">✓</div>
                                    <h2>Application Sent!</h2>
                                    <p>{status.message}</p>
                                    <button onClick={() => navigate('/')} className="back-btn">Back to Home</button>
                                </div>
                            ) : (
                                <form className="register-form" onSubmit={handleSubmit}>
                                    <h2>Coach Application Form</h2>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input
                                                type="text" name="fullName" placeholder="Enter your full name"
                                                value={formData.fullName} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input
                                                type="email" name="email" placeholder="Enter your email"
                                                value={formData.email} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input
                                                type="tel" name="phone" placeholder="Enter your phone number"
                                                value={formData.phone} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>age</label>
                                            <input
                                                type="text" name="age" placeholder="Enter your age"
                                                value={formData.age} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Sport</label>
                                            <input
                                                type="text" name="sport" placeholder="e.g. Cricket, Football"
                                                value={formData.sport} onChange={handleChange} required
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label>Years of Experience</label>
                                            <input
                                                type="number" name="experience" placeholder="Years of coaching"
                                                value={formData.experience} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Location</label>
                                            <input
                                                type="text" name="location" placeholder="City, State"
                                                value={formData.location} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                            <label>Short Bio</label>
                                            <textarea
                                                name="bio" rows="4" placeholder="Briefly describe your coaching philosophy..."
                                                value={formData.bio} onChange={handleChange} required
                                            ></textarea>
                                        </div>
                                        <div className="form-group" style={{ gridColumn: 'span 2' }}>
                                            <label>Certification / Resume (PDF/JPG)</label>
                                            <input type="file" onChange={handleFileChange} required />
                                        </div>
                                    </div>
                                    <button type="submit" className="submit-registration-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CoachApply;
