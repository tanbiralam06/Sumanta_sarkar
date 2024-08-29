import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="flex-container">
        <div className="logo">
          <Link to="/">
            <img src="/Images/logo-footer.png" alt="Footer Logo" />
          </Link>
        </div>
        <div className="menu-flex">
          <ul>
            <h3>PAGES</h3>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
          </ul>
        </div>
        <div className="social-flex">
          <ul>
            <h3>SOCIAL</h3>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
              </a>
            </li>
          </ul>
        </div>
        <div className="address-flex">
          <h3>CONTACT</h3>
          <p>2/249 Sree Colony, Baghajatin</p>
          <p>Regent Estate, Kolkata -700092</p>
          <p>WB, India</p>
          <p>Phone: +91 9830569777</p>
          <p>Email: ssumanta17@yahoo.co.in</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
