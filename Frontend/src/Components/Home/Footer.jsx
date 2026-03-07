import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column branding">
                    <h2>Fitify<br /><strong>HUB</strong><span className="red-dot">.</span></h2>
                    <p className="no-pain">No Pain No Gain</p>
                </div>

                <div className="footer-column">
                    <h3>About Us</h3>
                    <ul>
                        <li><Link to="/about">Our Trainers</Link></li>
                        <li><Link to="/club">Our Club</Link></li>
                        <li><Link to="/legacy">Our Legacy</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Your Fitness</h3>
                    <ul>
                        <li><Link to="/guidance">Why Fitify?</Link></li>
                        <li><Link to="/exercise">Training</Link></li>
                        <li><Link to="/guidance/video-tutorials">Workout Tips</Link></li>
                        <li><Link to="/tracking">Health</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i> Whatsapp</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>More</h3>
                    <ul>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/careers">Careers</Link></li>
                        <li><Link to="/news">News</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
