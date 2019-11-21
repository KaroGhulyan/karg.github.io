import React from 'react';
import logo from './Logo_black.svg';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='footer'>
                <img src={logo} alt="logo" className="logo" />
                <a href='#'>Our coffee</a>
                <a href='#'>For your pleasure</a>
            </div>

        </div >
    )
}

export default Footer;