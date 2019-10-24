import React from 'react';
import './loading.css';
import loading from './loading.gif';


const Loading = () => {

    return (
        <div className="Loading">
            <img src={loading} alt="loading" className="loading" />
        </div>
    )

}

export default Loading;