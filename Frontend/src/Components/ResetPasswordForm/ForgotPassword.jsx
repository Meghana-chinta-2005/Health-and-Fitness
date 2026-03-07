import api from "../../utils/api";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleResetRequest = async (e) => {
        if (e) e.preventDefault();
        try {
            await api.post("/auth/forgot-password", { email });
            setMessage("Password reset link sent to your email.");
        } catch (error) {
            setMessage(error.response?.data?.message || error.response?.data?.detail || "Error sending reset link.");
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
