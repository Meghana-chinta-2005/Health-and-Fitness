import React, { useState, useEffect, useRef } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import "./Home.css";
import Footer from "./Footer";

function Home() {
  const [nav, setNav] = useState(false);
  const [username, setUsername] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, right: 0 });
  const navigate = useNavigate();
  const usernameRef = useRef(null); // Ref to track the username element

  const changeBackground = () => {
    setNav(window.scrollY >= 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  // Calculate dropdown position when it opens
  useEffect(() => {
    if (showDropdown && usernameRef.current) {
      const rect = usernameRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY, // Position below the username
        right: window.innerWidth - rect.right, // Align with the right edge of username
      });
    }
  }, [showDropdown]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    setUsername(null);
    setShowDropdown(false);
    setMobileMenuOpen(false);
    navigate("/");
  };

  const handleProfile = () => {
    setShowDropdown(false);
    setMobileMenuOpen(false);
    navigate("/profile");
  };

  const handleArenaClick = () => {
    setShowDropdown(false);
    setMobileMenuOpen(false);
    navigate("/arena");
  };

  const handleExerciseClick = () => {
    setMobileMenuOpen(false);
    navigate("/exercise");
  };

  const handleDietClick = () => {
    setMobileMenuOpen(false);
    navigate("/diet");
  };

  const handleGuidanceClick = () => {
    setMobileMenuOpen(false);
    navigate("/guidance");
  };

  const handleTrackingClick = () => {
    setMobileMenuOpen(false);
    navigate("/tracking");
  };

  return (
    <div className="home-container">
      <div className="navbar premium-navbar">
        <nav className={nav ? "nav active" : "nav"}>
          <div className="nav-left">
            <RouterLink to="/" className="logo">
              <img src={logo} alt="Fitify Logo" />
            </RouterLink>
          </div>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
          <div className="nav-right">
            <ul className={`menu ${mobileMenuOpen ? "active" : ""}`}>
              {username ? (
                <li>
                  <div className="user-menu">
                    <span
                      className="username login-button"
                      ref={usernameRef}
                      onClick={() => setShowDropdown(!showDropdown)}
                    >
                      {username} ⏷
                    </span>
                  </div>
                </li>
              ) : (
                <>
                  <li>
                    <div className="user-menu">
                      <span
                        className="username"
                        ref={usernameRef}
                        onClick={() => setShowDropdown(!showDropdown)}
                      >
                        Explore Features ⏷
                      </span>
                    </div>
                  </li>
                  <li>
                    <button
                      className="login-button"
                      onClick={() => {
                        navigate("/login");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Login
                    </button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>

      {/* Render dropdown menu outside the navbar */}
      {showDropdown && (
        <div
          className="dropdown-menu glassmorphism-dropdown"
          style={{
            position: "fixed",
            top: `${dropdownPosition.top}px`,
            right: `${dropdownPosition.right}px`,
          }}
        >
          {username && <button onClick={handleProfile}>Profile</button>}
          {username && <button onClick={handleArenaClick}>Arena</button>}

          <button onClick={handleExerciseClick}>Exercises</button>
          <button onClick={handleDietClick}>Diet</button>
          <button onClick={handleTrackingClick}>Tracking</button>
          <button onClick={handleGuidanceClick}>Guidance System</button>

          {username && <button onClick={handleLogout} className="logout-btn">Sign Out</button>}
        </div>
      )}

      <div className="main-content premium-theme">
        <div className="user-background-image">
          {/* User will insert their custom background image via CSS */}
        </div>
        <div className="dark-gradient-overlay"></div>

        <section className="welcome-section premium-welcome">
          <div className="hero-text-container">
            <span className="premium-badge">Achieve Your Best Self</span>
            <h1 className="premium-title">
              Welcome to <span>Fitify</span>
            </h1>
            <h2 className="premium-subtitle">Your Personalized Health & Fitness Companion</h2>
            <p className="premium-description">
              Transform Your Lifestyle with Fitify! We provide a personalized platform designed to help you crush your wellness goals through smart tracking, tailored workouts, and expert guidance.
            </p>
            <div className="cta-buttons">
              <button className="btn-primary" onClick={() => navigate('/login')}>Get Started Today</button>
              <button className="btn-secondary" onClick={handleExerciseClick}>Explore Features</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Home;