import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();  // Import navigate function
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleReset = async () => {
        try {
            const response = await axios.post("http://localhost:5000/api/auth/reset-password",
                { new_password: newPassword, token }
            );
            setMessage("Password reset successful! Redirecting to login...");

            // Redirect to login after 3 seconds
            setTimeout(() => {
                navigate("/login");
            }, 3000);

        } catch (error) {
            setMessage(error.response?.data?.detail || "Password reset failed.");
        }
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Password</h2>
            <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleReset}>Reset Password</button>
            <p>{message}</p>
        </div>
    );
};

export default ResetPassword;
