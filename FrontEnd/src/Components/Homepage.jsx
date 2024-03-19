import React from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import { Navigate, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate =useNavigate();
  const navtoLogin=()=>{
    navigate("/loginas");
  }
  return (
    <div>
      <Navbar />
      <div className="clr">
      <div className="landing">
        <div className="container column bg-column__center">
          <h1 className="title">Don't miss out the party in the boathouse!</h1>
          <p className="subheading">
            Book the best boathouse before it's too late. Hurry up! Limited
            boats available...
          </p>
          <button className="book-button" onClick={navtoLogin}>
            <a href="#1" className="book-link">
              Book now
            </a>
          </button>
        </div>
      </div>
      <div className="info-content">
        <div className="container info-flex">
          <main className="main-content">
            <h2 className="main-title"></h2>
            <div className="section-info">
              <p className="wel">
                Welcome to Boat House, your ultimate companion for all things
                aquatic adventure! Whether you're a seasoned sailor, a
                passionate angler, or simply someone who loves to explore the
                tranquil beauty of the water, Boat House is here to enhance
                every aspect of your waterfront journey. Discover Serene
                Destinations: With Boat House, embark on a voyage of discovery
                as you explore a curated selection of picturesque destinations.
                From secluded coves with crystal-clear waters to bustling
                marinas teeming with life, find the perfect spot for your next
                aquatic escapade. Seamless Booking Experience: Planning your
                next boat rental or charter has never been easier. With Boat
                House, effortlessly browse through a diverse range of vessels,
                from sleek yachts to sturdy fishing boats. Secure your booking
                with just a few taps and set sail towards your next adventure
                with peace of mind.
              </p>
            </div>
          </main>
          <aside className="aside-content">
            <div className="aside-card">
              Connect with like-minded water enthusiasts through the Boat House
              community hub. Share stories, exchange tips and tricks,{" "}
            </div>
            <div className="aside-card aside-card-imp">
              Your safety is our top priority. With comprehensive safety guides,
              emergency assistance features, and access to reliable support
              services, Boat House empowers you to enjoy your water activities
              with confidence and peace of mind.{" "}
            </div>
            <div className="aside-card">
              Experience the magic of the water like never before with Boat
              House. Download the app now and embark on a journey of endless
              exploration, adventure, and serenity.
            </div>
          </aside>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-panel">
            <div className="footer-content">
              <div className="footer-about">
                <h3 className="footer-section__title">About us</h3>
                <p className="footer-about__description">
    
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
      </div>
      </div>

  );
};

export default HomePage;
