import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column branding">
                    <h2>Fitness<br /><strong>HUB</strong><span className="red-dot">.</span></h2>
                    <p className="no-pain">No Pain No Gain</p>
                </div>

                <div className="footer-column">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Our Trainers</a></li>
                        <li><a href="#">Our Club</a></li>
                        <li><a href="#">Our Legacy</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Your Fitness</h3>
                    <ul>
                        <li><a href="#">Why FitnessHUB?</a></li>
                        <li><a href="#">Training</a></li>
                        <li><a href="#">Workout Tips</a></li>
                        <li><a href="#">Health</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#"><i className="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="#"><i className="fab fa-whatsapp"></i> Whatsapp</a></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>More</h3>
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
