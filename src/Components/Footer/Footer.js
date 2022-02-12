import React from "react";
import logo from "./../../images/logo.svg";
import "./Footer.css";
import location from "./../../images/icon-location.svg";
import phone from "./../../images/icon-phone.svg";
import email from "./../../images/icon-email.svg";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <img src={logo} alt="logo" id="footer-logo" />
          <div className="footer-info">
            <div className="contact-info">
              <div className="address-box">
                <div className="contact-box">
                  <img src={location} alt="location" className="contact-icon" />
                  <p id="address">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                  </p>
                </div>
              </div>
              <div className="calling-box">
                <div className="contact-box">
                  <img src={phone} alt="phone" className="contact-icon" />
                  <p id="phone">+1-543-123-4567</p>
                </div>
                <div className="contact-box">
                  <img src={email} alt="email" className="contact-icon" />
                  <p id="address">example@fylo.com</p>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <ul className="footer-links-1">
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="/">Jobs</a>
                </li>
                <li>
                  <a href="/">Press</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
              </ul>
              <ul className="footer-links-2">
                <li>
                  <a href="#contact">Contact Us</a>
                </li>
                <li>
                  <a href="/">Terms</a>
                </li>
                <li>
                  <a href="/">Privacy</a>
                </li>
              </ul>
            </div>

            <div className="social_media_icons">
              <ul>
                <li>
                  <a href="/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
