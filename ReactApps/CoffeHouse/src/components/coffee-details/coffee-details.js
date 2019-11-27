import React from 'react';
import './coffee-details.css';
import DataService from '../../services/services';
import logo4 from './Beans_logo_dark.svg';

class CoffeeDetails extends React.Component {
    constructor() {
        super();
        this.state = {
            data: DataService[1],
            url: '',
            description: '',
            price: '',
            // coffeeId: '',
            // id: 1
        }
        this.coffeIndex = this.coffeIndex.bind(this);
    }

    // componentWillReceiveProps(nextProps) {
    //     // this.fetchCurrency(currencyId);
    //     console.log(nextProps.match.params.id);

    //     if (this.props.location.pathname !== nextProps.location.pathname) {
    //         this.CoffeeId(nextProps.match.params.id);
    //     }

    // }
    // CoffeeId(coffeeId) {
    //     // console.log(coffeeId);
    //     // fetch(`/CoffeeDetails/${coffeeId}`)
    //     //     .then(response => {
    //     //         return response.json().then(json => {
    //     //             return response.ok ? json : Promise.reject(json);
    //     //         });
    //     //     })
    //     //     .then((data) => {
    //     //         this.setState({
    //     //             data: data,
    //     //         });
    //     //     })
    //     const { data } = this.state;
    //     const coffeeIndex = coffeeId.split('/')[coffeeId.split('/').length - 1];

    //     if (coffeeIndex === DataService[1].id) {
    //         this.setState({
    //             url: DataService[1].url,
    //             description: DataService[1].description,
    //             price: DataService[1].price,
    //             // coffeeId: coffeeIndex,
    //         })
    //     }
    // }
    coffeIndex(items, coffeeId) {
        const newData = items.filter(item => {
            return item.id.indexOf(coffeeId) > -1; //Ֆիլրի հիմք
        });
        switch (coffeeId) {
            case coffeeId:
                return newData;
            default:
                return items;
        }
    }
    render() {
        // /CoffeeDetails/1
        // console.log(this.props.location.pathname);
        const { data } = this.state;
        const coffeeUrl = this.props.location.pathname;
        const coffeeId = coffeeUrl.split('/')[coffeeUrl.split('/').length - 1];
        // console.log(typeof coffeeId);
        const itemData = this.coffeIndex(data, coffeeId);


        return (
            <div className='coffee-details-container' >
                <div className='coffee-details-header'>
                    <h1>Our Coffee</h1>
                </div>
                <div className='coffee-details'>
                    <div className='coffee-details-img'>
                        <img src={itemData[0].url} alt="coffe" className="coffedetail-img" />
                    </div>
                    <div className='coffee-details-info'>
                        <h3>About it</h3>
                        <img src={logo4} alt="coffe" className="coffe-img" />
                        <p>Countryc: <span>{itemData[0].country}</span></p>
                        <p>Description: <span>{itemData[0].description}</span></p>
                        <p>Price: <span>{itemData[0].price}</span></p>
                    </div>
                </div>
            </div>
        )

    }
}

export default CoffeeDetails;