import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css"; // Import CSS file

const LandingPage = () => {
  const kfcLogoUrl = "https://1000logos.net/wp-content/uploads/2017/03/Kfc_logo.png";
  
const heroImageUrl = "";

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <img src={kfcLogoUrl} alt="KFC Logo" className="logo" />
          <h1 className="heading">KFC Online</h1>
          <p className="subheading">
            Enjoy delicious meals, delivered fresh to your door.
          </p>
          <Link to="/menu" className="enter-button">
            Enter
          </Link>
        </div>
        
         
        
      </section>
      <section className="features-section">
        <div className="feature-item">
          <i className="icon fa-solid fa-check"></i>
          <h3>Easy Ordering</h3>
          <p>
            Browse our menu, choose your favorites, and checkout in a few clicks.
          </p>
        </div>
        <div className="feature-item">
          <i className="icon fa-solid fa-truck"></i>
          <h3>Fast Delivery</h3>
          <p>
            Get your food delivered hot and fresh right to your doorstep.
          </p>
        </div>
        <div className="feature-item">
          <i className="icon fa-solid fa-credit-card"></i>
          <h3>Secure Payment</h3>
          <p>Pay securely online with your preferred payment method.</p>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;