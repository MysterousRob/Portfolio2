import React from 'react';
import FooterNav from './FooterNav';
import './Footer.css';


// Cleaned up file structure
    // Put all footer-related things in their own folder
    // Renamed Nav2 to FooterNav
    // Separated footerNavData and FooterNav
    // Moved Footer.css into folder

// No idea what was happening with the styling
    // Found out - You need to be more specific with your class names because with how you have it...
    // All the classes are global, so be more specific with the class names

const Footer = () => {
  return (
    <>
        <div >
            <FooterNav />
        </div>
    </>
  )
}



export default Footer;