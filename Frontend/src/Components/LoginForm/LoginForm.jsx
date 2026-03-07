import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaUser, FaLock, FaEnvelope, FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import api from "../../utils/api";
import "./Style.css";

const LoginForm = ({ onAuthSuccess, initialIsRegister = false }) => {
  const { login } = useAuth();
  const [isRegister, setIsRegister] = useState(initialIsRegister);

  useEffect(() => {
    setIsRegister(initialIsRegister);
  }, [initialIsRegister]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Registration handler
  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/register", formData);

      console.log("Registration Response:", response.data);
      alert("Registration successful! Logging you in...");
      setIsRegister(false);
      setFormData({ name: "", email: "", password: "" });

    } catch (error) {
      console.error("Register Error:", error.response?.data);
      setError(error.response?.data?.message || "Registration failed.");
    }
  };

  // ✅ Login handler
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/auth/login", {
        email: formData.email,
        password: formData.password
      });

      console.log("Login Response:", response.data);

      if (response.data.token) {
        login({
          name: response.data.username || formData.email,
          id: response.data.userId
        }, response.data.token);

        if (onAuthSuccess) onAuthSuccess();
        navigate("/");

      } else {
        setError("Login failed. Please try again.");
      }

    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Invalid credentials. Please check your email and password.");
    }
  };

  const handleOAuthLogin = (provider) => {
    // ⚠️ Still pointing to 8000 (only change if you implement OAuth in Node)
    window.location.href = `http://localhost:5000/auth/login/${provider}`;
  };

  return (
    <div className={`wrapper ${isRegister ? "active" : ""}`}>

      {/* Login Form */}
      <div className={`form-box login ${isRegister ? "hide" : ""}`}>
        <form onSubmit={handleLogin}>
          <h1>Welcome Back! 🏋‍♂</h1>
          <p className="sub-text">Log in to track your fitness progress</p>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />Remember me
            </label>
            <a href="#" onClick={() => navigate("/forgot-password")}>
              Forgot password?
            </a>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Login</button>

          <div className="social-login">
            <p>Or log in with:</p>
            <div className="social-icons">
              <button type="button" onClick={() => handleOAuthLogin("google")} className="social-btn google">
                <FaGoogle />
              </button>
              <button type="button" onClick={() => handleOAuthLogin("facebook")} className="social-btn facebook">
                <FaFacebook />
              </button>
              <button type="button" onClick={() => handleOAuthLogin("twitter")} className="social-btn twitter">
                <FaTwitter />
              </button>
            </div>
          </div>

          <div className="register-link">
            <p>
              Don't have an account?{" "}
              <button type="button" className="link-button" onClick={() => setIsRegister(true)}>
                Register
              </button>
            </p>
          </div>
        </form>
      </div>

      {/* Register Form */}
      <div className={`form-box register ${isRegister ? "" : "hide"}`}>
        <form onSubmit={handleRegister}>
          <h1>Join the Fitness Club! 💪</h1>
          <p className="sub-text">Create your personalized fitness plan</p>

          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <FaUser className="icon" />
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <FaEnvelope className="icon" />
          </div>

          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />I agree to the terms and conditions
            </label>
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit">Register</button>

          <div className="register-link">
            <p>
              Already have an account?{" "}
              <a href="#" onClick={() => setIsRegister(false)}>
                Login
              </a>
            </p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default LoginForm;