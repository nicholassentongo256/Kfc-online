import React from 'react';

const Contact = () => {
  const contactStyle = {
    fontFamily: 'sans-serif',
    margin: '80px',
    padding: '100px',
    backgroundColor: '#fff',
    borderRadius: '50px',
    color: '#000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuZYkeQoO9DSR6X68zTQKzxOUvHlCBrGx_w&usqp=CAU")', // Replace with your background image URL
    backgroundSize: 'cover, 100px',
    backgroundPosition: 'center',
  };

  const headingStyle = {
    color: '#000',
    fontSize: '1.8em',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
    padding: '100px'

  };

  const textStyle = {
    color: '#000',
    fontSize: '16px',
    lineHeight: '1.5',
    marginBottom: '10px',
    fontWeight: 'bold'
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: 0,
  };

  const listItemStyle = {
    marginBottom: '0px',
    fontSize: '14px',
  };

  return (
    <div className="contact" style={contactStyle}>
      <h2 style={headingStyle}>Get in Touch</h2>
      <p style={textStyle}>
        Have a question or just want to say hi? We're always happy to hear from you!
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <i className="fa fa-envelope-o" aria-hidden="true"></i>
          <span> Email: contact@kfconline.com </span>
        </li>
        <li style={listItemStyle}>
          <i className="fa fa-phone" aria-hidden="true"></i>
          <span> Phone: 123-456-7890 </span>
        </li>
        {/* Add more contact information as needed */}
      </ul>
      <p style={textStyle}>
        You can also find us on social media:
        <br />
        <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
      </p>
    </div>
  );
};

export default Contact;
