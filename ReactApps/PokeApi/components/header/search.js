import React from 'react';
import './search.css';
import { withRouter } from 'react-router-dom';


class Search extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="input-blog">
                < div className="search-box" >
                    <input
                        className="search-txt"
                        type="text"
                        placeholder="Type to Search"
                    />

                    {/* LINK */}
                    <a className="search-btn" href="#">
                        <i class="fas fa-search"></i>
                    </a>
                </div >
            </div >
        )
    }
}

export default withRouter(Search);
