import React from 'react';
import './our-coffee.css';
import OurCoffeBlog from './our-coffee-blog';
import DataService from '../../services/services';
import { withRouter } from 'react-router-dom';



class OurCoffee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: "",
            filter: 'All',
            data: DataService[1],
        }
        this.search = this.search.bind(this);
        this.toggleSortCoffeCountrya = this.toggleSortCoffeCountry.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
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
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1
        })
    }
    toggleSortCoffeCountry = (items, filter) => {
        const newData = items.filter(item => {
            return item.country.indexOf(filter) > -1; //Ֆիլրի հիմք
        })
        switch (filter) {
            case 'All':
                return items;
            case 'Brazil':
                return newData;
            case 'Kenya':
                return newData;
            case 'Columbia':
                return newData;
            default:
                return items;
        }

    }
    onFilterChange = (filter) => {
        this.setState({ filter })
    }
    render() {
        const { term, data, filter } = this.state;

        const visibleItems = this.toggleSortCoffeCountry(this.search(data, term), filter);
        const item = visibleItems.map((data) => {
            return (
                <div key={data.id} className='sort-items' onClick={() => { this.props.history.push(`/CoffeeDetails/${data.id}`) }}>
                    <img src={data.url} alt="coffee" className="coffe-img" />
                    <p>{data.name}</p>
                    <p>{data.country}</p>
                    <p>{data.price}</p>
                </div>
            )
        });
        const buttonsArr = [
            { country: 'all', label: 'All' },
            { country: 'brazil', label: 'Brazil' },
            { country: 'kenya', label: 'Kenya' },
            { country: 'columbia', label: 'Columbia' }
        ]
        const buttons = buttonsArr.map(({ country, label }) => {
            const isActive = filter === label;
            const clazz = isActive ? 'active' : null;
            return (
                <button key={country} className={clazz} type='button' onClick={() => this.onFilterChange(label)}> {label}</ button >
            )
        });

        return (
            <div className='our-coffee-container' >
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
                                value={this.state.term}
                            />
                        </div>
                        <div className='filter-blog'>
                            <span>Lookiing for</span>
                            {buttons}
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

export default withRouter(OurCoffee);


