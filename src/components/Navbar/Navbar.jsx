import React, { useState, useEffect } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';

import '../../styles/home.css';



const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logout, isAuthenticated } = useAuth();

  const navigate = useNavigate();



  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };



    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, []);



  const handleLogout = () => {

    logout();

    navigate('/');

  };



  return (

    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>

      <div className="nav-container">

        <Link to="/" className="logo">

          <img src="/logo.jpg" alt="SPORTSADIP" className="nav-logo" />

        </Link>

        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>

          <li><Link to="/event">Event</Link></li>

          <li><Link to="/career">Career</Link></li>

          <li><Link to="/about">About Us</Link></li>

          <li><Link to="/contact">Contact Us</Link></li>

        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
        
        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/event" onClick={() => setMobileMenuOpen(false)}>Event</Link></li>
            <li><Link to="/career" onClick={() => setMobileMenuOpen(false)}>Career</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
          
          {/* Mobile User Actions */}
          <div className="mobile-nav-actions">
            {isAuthenticated ? (
              <div className="mobile-profile">
                <div className="mobile-profile-header">
                  <span className="mobile-profile-name">{user.name}</span>
                  <span className="mobile-profile-role">{user.role}</span>
                </div>
                <ul className="mobile-profile-menu">
                  <li>
                    <Link
                      to={user.role === 'coach' ? '/coach-dashboard' : '/dashboard'}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li onClick={() => {handleLogout(); setMobileMenuOpen(false);}}>Logout</li>
                </ul>
              </div>
            ) : (
              <Link to="/login" onClick={() => setMobileMenuOpen(false)} className="mobile-login-btn">Login</Link>
            )}
          </div>
        </div>
        
        <div className="nav-actions">

          {isAuthenticated ? (

            <div className="profile-container">

              <div className="profile-icon" onClick={() => setShowDropdown(!showDropdown)}>

                <span>{user.name[0].toUpperCase()}</span>

              </div>

              {showDropdown && (

                <div className="profile-dropdown">

                  <div className="dropdown-header">

                    <p className="user-name">{user.name}</p>

                    <p className="user-role">{user.role}</p>

                  </div>

                  <ul className="dropdown-menu">

                    <li>

                      <Link

                        to={user.role === 'coach' ? '/coach-dashboard' : '/dashboard'}

                        onClick={() => setShowDropdown(false)}

                      >

                        Dashboard

                      </Link>

                    </li>

                    <li onClick={handleLogout}>Logout</li>

                  </ul>

                </div>

              )}

            </div>

          ) : (

            <Link to="/login" className="login-nav-btn">Login</Link>

          )}

        </div>

      </div>

    </nav>

  );

};



export default Navbar;

