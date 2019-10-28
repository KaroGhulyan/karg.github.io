import React from 'react';
import './header.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
            <div>

            </div>
        </div>
    )
}
export default Header;