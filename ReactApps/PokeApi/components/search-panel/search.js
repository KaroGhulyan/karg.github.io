import React from 'react';
import './search.css';
import SearchPanel from './search-panel';
// import { withRouter } from 'react-router-dom';
// import { thisExpression } from '@babel/types';
// import { API_URL } from '../../config';
// import { handleResponse } from '../../helpers';

// ՀԻՆԸ ՆՈՐԻ ՀԵՏ ՍԵՐՉԸ

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            term: '',

        }
        this.onShearchChange = this.onShearchChange.bind(this);

    }
    onShearchChange(event) {
        const term = event.target.value;
        console.log(term);
        this.setState({
            term: term,
        });
        // console.log(this.props.onSearchChange);
        this.props.onSearchChange(term);
    }
    render() {
        return (
            <div className="input-blog">
                < div className="search-box" >
                    <input
                        className="search-txt"
                        type="text"
                        placeholder="Type to Search"
                        value={this.state.term}
                        onChange={this.onShearchChange}
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

export default Search;
