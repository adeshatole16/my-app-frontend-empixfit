import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-grid">

          <div className="footer-about">
            <div className="footer-logo">
              EMPIXFIT
            </div>

            <p>
              Your ultimate destination for professional sports training and
              elite performance development. We empower athletes to reach
              their full potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/event">Events</Link></li>
              <li><Link to="/career">Careers</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-links">
            <h4>Support</h4>

            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4>Contact</h4>

            <ul>
              <li>info@sportsadip.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Athlete Way, Performance City</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 SportsAdip Academy. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;