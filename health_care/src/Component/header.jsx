import React, { useState } from "react";
import logo from '../assets/img/favicon.png';
import { Link } from 'react-router-dom';

function Header() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleLinkClick = () => {
        setMobileMenuOpen(false); 
    };

    return (
        <>
            <section className="navigation">
                <div className="nav-container">
                    <div className="brand">
                        <Link to="/asthuma">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="nav-text">
                        <h3>Health Test Tool</h3>
                    </div>
                    <nav>
                        <div className="nav-mobile">
                            <button id="navbar-toggle" onClick={toggleMobileMenu}>
                                <span></span>
                            </button>
                        </div>
                        <ul className={`nav-list ${isMobileMenuOpen ? "open" : ""}`}>
                            <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>About</Link></li>
                            <li><Link to="/Health_tool" onClick={handleLinkClick}>Health Tools</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Health Preparations</Link></li>
                            <li><Link to="/" onClick={handleLinkClick}>Contact</Link></li>
                            <li><Link to="/sample" onClick={handleLinkClick}>Sample</Link></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </>
    );
}

export default Header;
