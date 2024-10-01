import React from 'react';
import './Footer.scss'; // Create a CSS file for Footer styles

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} EcoFlow - Saving the Planet.</p>
        </footer>
    );
};

export default Footer;
