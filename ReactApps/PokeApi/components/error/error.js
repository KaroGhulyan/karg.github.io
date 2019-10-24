import React from 'react';
import './error.css';
import loading from './loading.gif';


const Error = () => {

    return (
        <div className="error">
            <img src={loading} alt="loading" className="loading" />
            <h1>404</h1>
        </div>
    )

}

export default Error