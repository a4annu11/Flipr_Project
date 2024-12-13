// Footer.jsx
import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.jpg";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-left">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>

        <div className="footer-center">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>

        <div className="footer-right">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="social-icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
