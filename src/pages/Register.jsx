import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { registerUser } from '../api/api';
import '../styles/register.css';
import { createOrder, completeRegistration } from "../api/paymentApi";

const Register = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const initialSport = queryParams.get('sport') || '';

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        age: '',
        location: '',
        sport: initialSport,
        experience: 'Beginner',
        profilePhoto: null
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
        setFormData(prev => ({ ...prev, profilePhoto: e.target.files[0] }));
    };

   const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {

        // STEP 1 → Create Razorpay Order
        const order = await createOrder(300);

        // const options = {
        //     key: "rzp_test_Xc78CPXfBWKHWph6uKAxQTr5",
        //     amount: order.amount,
        //     currency: "INR",
        //     order_id: order.orderId,

        //     name: "Sports Training Platform",
        //     description: "Training Plan Payment",

        //     prefill: {
        //         name: formData.fullName,
        //         email: formData.email,
        //         contact: formData.phone
        //     },

        //     handler: async function (response) {

        //         await completeRegistration({
        //             ...formData,
        //             paymentId: response.razorpay_payment_id,
        //             orderId: response.razorpay_order_id,
        //             signature: response.razorpay_signature
        //         });

        //         setStatus({
        //             type: "success",
        //             message: "Payment successful and registration completed!"
        //         });
        //     },

        //     theme: {
        //         color: "#0f172a"
        //     }
        // };


        const options = {
    key: "rzp_test_Xc78CPXfBWKHWph6uKAxQTr5", // full Razorpay test key
    amount: order.amount,
    currency: "INR",
    order_id: order.orderId,

    name: "Sports Training Platform",
    description: "Training Plan Payment",

    prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone
    },

    handler: async function (response) {

        await completeRegistration({
            ...formData,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature
        });

        setStatus({
            type: "success",
            message: "Payment successful and registration completed!"
        });

    },

    modal: {
        ondismiss: function () {
            console.log("Payment popup closed");
        }
    },

    theme: {
        color: "#0f172a"
    }
};

        const razorpay = new window.Razorpay(options);
        razorpay.open();

    } catch (error) {
        console.error(error);

        setStatus({
            type: 'error',
            message: 'Payment failed. Please try again.'
        });
    } finally {
        setIsSubmitting(false);
    }
};  return (
        <div className="register-page">
            <Navbar />
            <div className="register-hero">
                <div className="container">
                    <div className="register-card-container">
                        <div className="register-info">
                            <h1>Join the Academy</h1>
                            <p>Take the first step towards your professional sports career. Register now and let our experts guide your journey.</p>
                            <ul className="register-benefits">
                                <li>✓ Professional Coaching</li>
                                <li>✓ Structured Training Plans</li>
                                <li>✓ Performance Tracking</li>
                                <li>✓ Elite Facilities</li>
                            </ul>
                        </div>

                        <div className="register-form-wrapper">
                            {status.type === 'success' ? (
                                <div className="success-view">
                                    <div className="success-icon">✓</div>
                                    <h2>Application Submitted!</h2>
                                    <p>{status.message}</p>
                                    <button onClick={() => navigate('/')} className="back-btn">Back to Home</button>
                                </div>
                            ) : (
                                <form className="register-form" onSubmit={handleSubmit}>
                                    <h2>Registration Form</h2>
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
                                            <label>Age</label>
                                            <input
                                                type="number" name="age" placeholder="Your age"
                                                value={formData.age} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Location</label>
                                            <input
                                                type="text" name="location" placeholder="Your city"
                                                value={formData.location} onChange={handleChange} required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Selected Sport</label>
                                            <select name="sport" value={formData.sport} onChange={handleChange} required>
                                                <option value="">Select Sport</option>
                                                <option value="cricket">Cricket</option>
                                                <option value="football">Football</option>
                                                <option value="kabaddi">Kabaddi</option>
                                                <option value="athletics">Athletics</option>
                                                <option value="badminton">Badminton</option>
                                                <option value="tennis">Tennis</option>
                                                <option value="hockey">Hockey</option>
                                                <option value="basketball">Basketball</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Experience Level</label>
                                            <select name="experience" value={formData.experience} onChange={handleChange}>
                                                <option value="Beginner">Beginner</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Professional">Professional</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label>Profile Photo (Optional)</label>
                                            <input type="file" onChange={handleFileChange} accept="image/*" />
                                        </div>
                                    </div>
                                    <button type="submit" className="submit-registration-btn" disabled={isSubmitting}>
                                        {isSubmitting ? 'Processing...' : 'Submit Registration'}
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

export default Register;
