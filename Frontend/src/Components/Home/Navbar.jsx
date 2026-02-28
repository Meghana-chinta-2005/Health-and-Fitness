import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import logo from '../../assets/logo2.jpeg';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setNav(true);
        } else {
            setNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
        return () => window.removeEventListener('scroll', changeBackground);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.profile-dropdown')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to="/" className="logo">
                <img src={logo} alt="Logo" />
            </Link>
            
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><Link to="/exercise">Exercises</Link></li>
                <li><Link to="/diet">Diet</Link></li>
                <li><Link to="/tracking">Tracking</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                
                <li className="profile-dropdown">
                    <div 
                        className="profile-icon" 
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <FaUser size={20} />
                    </div>
                    <div className={`dropdown-content ${showDropdown ? 'show' : ''}`}>
                        <div 
                            className="dropdown-item"
                            onClick={() => {
                                navigate('/profile');
                                setShowDropdown(false);
                            }}
                        >
                            Profile
                        </div>
                        <div className="dropdown-divider" />
                        <div 
                            className="dropdown-item"
                            onClick={() => {
                                handleLogout();
                                setShowDropdown(false);
                            }}
                        >
                            Logout
                        </div>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;