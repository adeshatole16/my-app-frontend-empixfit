import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { registerUser } from '../api/api';
import '../styles/register.css';
import { createOrder, completeRegistration } from "../api/paymentApi";

const PLANS = [
    { key: '1month', label: '1 Month', months: 1, amount: 300, badge: 'Starter', per: 'per month' },
    { key: '3month', label: '3 Months', months: 3, amount: 800, badge: 'Save 11%', per: '₹267/mo' },
    { key: '6month', label: '6 Months', months: 6, amount: 1400, badge: 'Popular', per: '₹233/mo' },
    { key: '12month', label: '1 Year', months: 12, amount: 2400, badge: 'Best Value', per: '₹200/mo' },
];

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

    const [paymentSuccess, setPaymentSuccess] = useState(false);   // ← separate flag
    const [registeredEmail, setRegisteredEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPlanModal, setShowPlanModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectedPlan(null);
        setErrorMsg('');
        setShowPlanModal(true);
    };

    // ── STEP 2: Plan confirmed → create Razorpay order → open checkout
    const handlePlanConfirm = async () => {
        if (!selectedPlan) return;
        setShowPlanModal(false);
        setIsSubmitting(true);
        setErrorMsg('');

        try {
            const order = await createOrder(selectedPlan.amount);

            const options = {
                key: "rzp_test_SQCE0tYhnHriPU",
                amount: order.amount,       // paise from backend
                currency: "INR",
                order_id: order.id,         // ← must be order.id

                name: "EmpixFit",
                description: selectedPlan.label + " Training Plan",

                prefill: {
                    name: formData.fullName,
                    email: formData.email,
                    contact: formData.phone
                },

                // ── STEP 3: Payment done → save to DB + send email ──
                handler: async function (response) {
                    try {
                        await completeRegistration({
                            fullName: formData.fullName,
                            email: formData.email,
                            phone: formData.phone,
                            age: formData.age,
                            location: formData.location,
                            sport: formData.sport,
                            planType: selectedPlan.key,               // "1month","3month","6month","12month"
                            paymentId: response.razorpay_payment_id,
                            orderId: response.razorpay_order_id,
                            signature: response.razorpay_signature,
                        });


                        setRegisteredEmail(formData.email);
                        setIsSubmitting(false);
                        setPaymentSuccess(true);

                    } catch (err) {
                        console.error(err);
                        setIsSubmitting(false);
                        setErrorMsg('Registration failed after payment. Please contact support.');
                    }


                },

                modal: {
                    ondismiss: () => {
                        setIsSubmitting(false);
                    }
                },

                theme: { color: "#f97316" }
            };

            new window.Razorpay(options).open();

        } catch (error) {
            console.error(error);
            setErrorMsg('Payment failed. Please try again.');
            setIsSubmitting(false);
        }
    };
    // Success state will be rendered as a popup overlay below
    return (
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
                            {/* {status.type === 'success' ? (
                                <div className="success-view">
                                    <div className="success-icon">✓</div>
                                    <h2>Welcome to EmpixFit! 🎉</h2>
                                    <p>Your registration is complete.</p>
                                    <p style={{ fontSize: '14px', color: '#64748b', margin: '8px 0 4px' }}>
                                        Your <strong>username</strong> and <strong>password</strong> have been sent to:
                                    </p>
                                    <p style={{
                                        fontSize: '15px', fontWeight: '600',
                                        color: '#0f172a', margin: '0 0 1rem'
                                    }}>
                                        {formData.email}
                                    </p>
                                    <p style={{
                                        fontSize: '13px', color: '#64748b',
                                        background: '#f1f5f9', borderRadius: '8px',
                                        padding: '10px', marginBottom: '1.5rem'
                                    }}>
                                        Please check your inbox and use those credentials to login and access your dashboard.
                                    </p>
                                    <button onClick={() => navigate('/login')} className="back-btn">
                                        Login to Dashboard →
                                    </button>
                                </div>
                            ) : ( */}
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

                        </div>
                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════
                PLAN SELECTION MODAL
            ══════════════════════════════════════ */}
            {showPlanModal && (
                <div style={{
                    position: 'fixed', inset: 0,
                    background: 'rgba(0,0,0,0.65)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 9999, padding: '1rem'
                }}>
                    <div style={{
                        background: '#fff', borderRadius: '16px',
                        padding: '2rem', maxWidth: '580px', width: '100%',
                        boxShadow: '0 24px 64px rgba(0,0,0,0.25)'
                    }}>
                        <h2 style={{ margin: '0 0 4px', fontSize: '20px', fontWeight: '700', color: '#0f172a' }}>
                            Choose Your Training Plan
                        </h2>
                        <p style={{ margin: '0 0 1.5rem', color: '#64748b', fontSize: '14px' }}>
                            Select a plan to continue with payment
                        </p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
                            gap: '12px'
                        }}>
                            {PLANS.map(plan => {
                                const isSelected = selectedPlan?.key === plan.key;
                                return (
                                    <div key={plan.key} onClick={() => setSelectedPlan(plan)} style={{
                                        border: isSelected ? '2px solid #0f172a' : '1.5px solid #e2e8f0',
                                        borderRadius: '12px', padding: '1.1rem 0.8rem',
                                        cursor: 'pointer', textAlign: 'center',
                                        background: isSelected ? '#f8fafc' : '#fff',
                                        transition: 'all 0.15s'
                                    }}>
                                        <div style={{ fontSize: '14px', fontWeight: '600', color: '#0f172a' }}>
                                            {plan.label}
                                        </div>
                                        <div style={{ fontSize: '22px', fontWeight: '700', color: '#0f172a', margin: '8px 0 2px' }}>
                                            ₹{plan.amount}
                                        </div>
                                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                                            {plan.per}
                                        </div>
                                        <div style={{
                                            marginTop: '8px', fontSize: '11px', fontWeight: '600',
                                            background: isSelected ? '#0f172a' : '#f1f5f9',
                                            color: isSelected ? '#fff' : '#475569',
                                            borderRadius: '20px', padding: '3px 10px', display: 'inline-block'
                                        }}>
                                            {plan.badge}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '10px' }}>
                            <button onClick={() => setShowPlanModal(false)} style={{
                                flex: 1, padding: '12px', borderRadius: '8px',
                                border: '1.5px solid #e2e8f0', background: '#fff',
                                cursor: 'pointer', fontSize: '14px', color: '#64748b', fontWeight: '500'
                            }}>
                                Back
                            </button>
                            <button onClick={handlePlanConfirm} disabled={!selectedPlan} style={{
                                flex: 2, padding: '12px', borderRadius: '8px', border: 'none',
                                background: selectedPlan ? '#0f172a' : '#cbd5e1',
                                color: '#fff',
                                cursor: selectedPlan ? 'pointer' : 'not-allowed',
                                fontSize: '14px', fontWeight: '600'
                            }}>
                                {selectedPlan
                                    ? `Pay ₹${selectedPlan.amount} · ${selectedPlan.label}`
                                    : 'Select a plan to continue'}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ══════════════════════════════════════
                SUCCESS POPUP MODAL
            ══════════════════════════════════════ */}
            {paymentSuccess && (
                <div style={{
                    position: 'fixed', inset: 0,
                    background: 'rgba(0,0,0,0.65)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    zIndex: 9999, padding: '1rem'
                }}>
                    <div style={{
                        background: '#fff', borderRadius: '16px',
                        padding: '3rem 2.5rem', maxWidth: '480px', width: '100%',
                        textAlign: 'center',
                        boxShadow: '0 24px 64px rgba(0,0,0,0.25)'
                    }}>
                        <div style={{
                            width: '72px', height: '72px', borderRadius: '50%',
                            background: '#f0fdf4',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            margin: '0 auto 1.5rem',
                            fontSize: '32px'
                        }}>
                            ✅
                        </div>

                        <h2 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: '700', color: '#0f172a' }}>
                            Welcome to EmpixFit Family!
                        </h2>
                        
                        <p style={{ fontSize: '15px', color: '#64748b', margin: '0 0 1.5rem', lineHeight: '1.6' }}>
                            Your registration is complete. 🎉
                        </p>

                        <div style={{
                            background: '#f8fafc',
                            border: '1.5px solid #e2e8f0',
                            borderRadius: '12px',
                            padding: '1rem 1.2rem',
                            marginBottom: '1.5rem'
                        }}>
                            <p style={{ margin: '0 0 4px', fontSize: '13px', color: '#94a3b8' }}>
                                Login credentials sent to
                            </p>
                            <p style={{
                                margin: 0, fontSize: '15px',
                                fontWeight: '600', color: '#0f172a'
                            }}>
                                {registeredEmail}
                            </p>
                        </div>

                        <div style={{
                            background: '#fff7ed',
                            border: '1.5px solid #fed7aa',
                            borderRadius: '10px',
                            padding: '12px 16px',
                            marginBottom: '2rem'
                        }}>
                            <p style={{ margin: 0, fontSize: '13px', color: '#9a3412', lineHeight: '1.6' }}>
                                Your <strong>username</strong> and <strong>password</strong> have been sent
                                to your registered email. Please check your inbox (and spam folder).
                                Use those credentials to login and access your dashboard.
                            </p>
                        </div>

                        <p style={{ fontSize: '15px', color: '#64748b', margin: '0 0 1.5rem', fontStyle: 'italic' }}>
                            Best wishes on your sports journey! 💪
                        </p>

                        <button
                            onClick={() => navigate('/login')}
                            style={{
                                width: '100%', padding: '14px',
                                borderRadius: '10px', border: 'none',
                                background: '#f97316', color: '#fff',
                                fontSize: '15px', fontWeight: '700',
                                cursor: 'pointer', letterSpacing: '0.5px'
                            }}
                        >
                            Login to Dashboard →
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Register;
