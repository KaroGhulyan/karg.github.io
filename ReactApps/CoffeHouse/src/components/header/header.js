import React from 'react';
import logo from './Logo_black.svg';
import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header-container'>

            <div className='header'>
                <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                <Link to="/OurCoffee/" className="a">Our coffee</Link>
                <Link to="/ForYourPleasure/" className="a">For your pleasure</Link>
            </div>

        </div >
    )
}

export default Header;