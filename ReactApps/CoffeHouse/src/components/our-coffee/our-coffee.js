import React from 'react';
import './our-coffee.css';
import OurCoffeBlog from './our-coffee-blog';
import DataService from '../../services/services';


class OurCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
        }
        this.search = this.search.bind(this);
    }
    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
    }
    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
    render() {
        const { term } = this.state;
        const visibleItems = this.search(DataService[1], term)

        // console.log(DataService[1][1].url);
        const item = visibleItems.map((data) => {
            return (
                <div className='sort-items'>
                    <img src={data.url} alt="coffee" className="coffe-img" />
                    <p>{data.name}</p>
                    <p>{data.country}</p>
                    <p>{data.price}</p>
                </div>
            )
        })
        return (
            <div className='our-coffee-container'>
                <OurCoffeBlog />
                <div className='shop-blog'>
                    <div className='search-filter-blog'>
                        <div className='search-blog'>
                            <span>Lookiing for</span>
                            <input
                                className='search-input'
                                type='text'
                                placeholder='start typing here...'
                                onChange={this.onSearchChange}
                            />
                        </div>
                        <div className='filter-blog'>
                            <span>Lookiing for</span>
                            <button>Brazil</button>
                            <button>Kenya</button>
                            <button>Columbia</button>
                        </div>

                    </div>
                    <div className='coffe-sort-blog'>
                        {item}
                    </div>


                </div>
            </div>
        )
    }
}

export default OurCoffee;
