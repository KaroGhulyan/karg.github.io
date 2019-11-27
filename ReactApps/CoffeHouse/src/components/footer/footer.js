import React from 'react';
import logo from './Logo_black.svg';
import './footer.css';
import logo1 from './Beans_logo_dark.svg';
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='footer'>
                <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                <Link to="/OurCoffee/" className="a">Our coffee</Link>
                <Link to="/CoffeeShop" className="a">For your pleasure</Link>
            </div>
            <img src={logo1} alt="logo" className="logo-footer" />
        </div >
    )
}

export default Footer;