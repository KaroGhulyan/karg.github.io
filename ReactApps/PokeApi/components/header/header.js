import React from 'react';
import './header.css';
import logo from './logo.png';
import Search from './search';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
            <div>
                <Search />
            </div>
        </div>
    )
}
export default Header;