import React from 'react';

const AboutUs = () => {
  const aboutUsStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f2f2f2',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    color: '#000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'url("https://tb-static.uber.com/prod/image-proc/processed_images/dc1fdf93b0ed4cad29b8a4d7c5153488/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const headingStyle = {
    color: '#ffb800',
    fontSize: '2em',
    fontWeight: 'bold',
    marginBottom: '15px',
    textAlign: 'center',
  };

  const textStyle = {
    color: '#000',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '10px',
    fontweight: 'bold',
  };

  return (
    <div className="about-us" style={aboutUsStyle}>
      <h2 style={headingStyle}>Welcome to KFC Online!</h2>
      <p style={textStyle}>
        We're on a mission to bring the Colonel's world-famous fried chicken and other delicious meals to your doorstep. We believe every meal should be a finger-lickin' good experience, and we're committed to using fresh ingredients and providing exceptional service.
      </p>
      <p style={textStyle}>
        Whether you're craving a classic Zinger Burger or a crispy Original Recipe chicken dinner, we have something for everyone. And with our convenient online ordering and delivery services, you can enjoy the taste of KFC without leaving your home.
      </p>
      <p style={textStyle}>
        So browse our menu, choose your favorites, and get ready for a taste of joy. We're excited to serve you!
      </p>
    </div>
  );
};

export default AboutUs;
