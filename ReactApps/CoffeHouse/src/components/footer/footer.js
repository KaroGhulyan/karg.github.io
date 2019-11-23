import React from 'react';
import logo from './Logo_black.svg';
import './footer.css';
import logo1 from './Beans_logo_dark.svg';


const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='footer'>
                <img src={logo} alt="logo" className="logo" />
                <a href='#'>Our coffee</a>
                <a href='#'>For your pleasure</a>
            </div>
            <img src={logo1} alt="logo" className="logo-footer" />
        </div >
    )
}

export default Footer;