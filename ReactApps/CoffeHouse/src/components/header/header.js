import React from 'react';
import logo from './Logo_black.svg';
import './header.css';

const Header = () => {
    return (
        <div className='header-container'>

            <div className='header'>
                <img src={logo} alt="logo" className="logo" />
                <a href='#'>Our coffee</a>
                <a href='#'>For your pleasure</a>
            </div>

        </div >
    )
}

export default Header;