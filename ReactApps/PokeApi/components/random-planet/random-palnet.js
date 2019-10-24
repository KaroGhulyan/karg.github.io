import React from 'react';
import './random-planet.js';
import { logo } from './logo.png';

const Header = () => {
    return (
        <div className="header">
            {/* <img src={logo} alt="logo" className="logo" /> */}
            <h1>Star Wars</h1>
            <ul>
                <li>People</li>
                <li>Planets</li>
                <li>Starships</li>
            </ul>
        </div>
    )
}
export default Header;