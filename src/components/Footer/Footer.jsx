import React from 'react';
import { Link } from 'react-router-dom'; 

import './Footer.css'; 

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-links">
                    <Link to="/">Домой</Link>
                    <Link to="/miniplay">Мини игра</Link>
                    <Link to="/systemuser">Реферальная система</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
