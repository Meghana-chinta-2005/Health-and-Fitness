import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import api from "../../utils/api";
import "./ResetPassword.css";

const ResetPassword = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get("token");

    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleResetPassword = async (e) => {
        if (e) e.preventDefault();
        try {
            const response = await api.post("/auth/reset-password",
                { token, password: newPassword }
            );
            setMessage("Password reset successful! Redirecting to login...");

            // Redirect to login after 3 seconds
            setTimeout(() => {
                navigate("/login");
            }, 3000);

        } catch (error) {
            setMessage(error.response?.data?.message || error.response?.data?.detail || "Password reset failed.");
        }
    };

    return (
        <div className="reset-password-container">
            <h2>Reset Password</h2>
            <form onSubmit={handleResetPassword}>
                <input
                    type="password"
                    placeholder="Enter new password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
                <button type="submit">Reset Password</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default ResetPassword;
