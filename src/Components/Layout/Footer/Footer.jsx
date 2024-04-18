import React from 'react';
import FooterNav from './FooterNav';
import './Footer.css';
import MyForm from '../../../Pages/State/ContactForm/Form';


const Footer = () => {
  return (
    <>
      <div className='foot'>
        <h1>Contact Me</h1>
        <div className='footer-box'>
            <MyForm />
            <FooterNav />
        </div>
      </div>
    </>
  )
}



export default Footer;