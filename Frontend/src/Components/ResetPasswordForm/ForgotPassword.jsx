import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleResetRequest = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { email });
            setMessage("Password reset link sent to your email.");
        } catch (error) {
            setMessage(error.response?.data?.detail || "Error sending reset link.");
        }
    };

    return (
        <div className="forgot-password-container">
            <h2>Forgot Password</h2>
            <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleResetRequest}>Send Reset Link</button>
            <p>{message}</p>
        </div>
    );
};

export default ForgotPassword;
