import React from
 
"react";
import { Link } from
 
"react-router-dom";
import { toast } from
 
"react-toastify";
import
 
"react-toastify/dist/ReactToastify.css";


const Navbar = () => {
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f00", // KFC's signature red color
    color: "#fff",
    padding: "1rem 2rem", // Increased padding for a more spacious feel
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
  };

  const navLinkStyle = {
    color: "#fff",
    textDecoration: "none",
    margin: "0 0.5rem",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease",
    fontFamily: "Arial, sans-serif",
    fontSize: "1.1em",
    fontWeight: "bold", // Added bold font weight for emphasis
  };

  const activeNavLinkStyle = {
    backgroundColor: "#ff4500", // KFC's secondary orange color
  };

  const handleLogin = () => {
    // Logic for handling login
    // For example, after successful login
    toast.success("Login Successful!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Close after 3 seconds
    });
    // Redirect to dashboard or set login state
  };

  return (
    <nav style={navbarStyle}>
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-logo"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "1.5em",
          }}
        >
          KFC Online
        </Link>
      </div>
      <ul
        className="navbar-nav"
        style={{ listStyle: "none", display: "flex", alignItems: "center" }}
      >
        <li className="nav-item">
          <Link to="/menu" style={navLinkStyle} className={location.pathname === "/menu" ? "active" : ""}>
            Menu
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" style={navLinkStyle} className={location.pathname === "/about" ? "active" : ""}>
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" style={navLinkStyle} className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/blog" style={navLinkStyle} className={location.pathname === "/blog" ? "active" : ""}>
            Blog
          </Link>
        </li>
        {/* Add more navigation links as needed */}

        {/* Login Button */}
        <li className="nav-item">
          <Link to="/login" style={navLinkStyle} onClick={handleLogin}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;