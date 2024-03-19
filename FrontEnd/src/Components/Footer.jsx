import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-panel">
          <div className="footer-content">
            <div className="footer-about">
              <h3 className="footer-section__title">About us</h3>
              <p className="footer-about__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labor
              </p>
            </div>
            <div className="footer-links-section">
              <div className="footer-link-section">
                <h3 className="footer-section__title">Contact us</h3>
                <ul className="footer-link-lists">
                  <li className="footer-link-list-item"></li>
                  <li className="footer-link-list-item"></li>
                </ul>
              </div>
              <div className="footer-link-section">
                <h3 className="footer-section__title">FAQ</h3>
              </div>
              <div className="footer-link-section">
                <h3 className="footer-section__title">Privacy policy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
