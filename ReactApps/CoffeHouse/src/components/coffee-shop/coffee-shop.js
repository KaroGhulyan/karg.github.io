import React from 'react';
import "./coffee-shop.css";
import logo4 from './Beans_logo_dark.svg';
import imgGirls from './coffee-girl.png';
import DataService from '../../services/services';

class CoffeeShop extends React.Component {
    constructor() {
        super();
        this.state = {
            data: DataService[1],
        }
    }
    render() {
        const { data } = this.state;
        const items = data.map(data => {
            return (
                <div key={data.id} className='shop-items' onClick={() => { this.props.history.push(`/CoffeeDetails/${data.id}`) }}>
                    <img src={data.url} alt="coffee" className="coffe-img" />
                    <p>{data.name}</p>
                    <p>{data.country}</p>
                    <p>{data.price}</p>
                </div>
            )
        })
        return (
            <div className='coffee-shop-container'>
                <div className='coffee-shop-header'>
                    <h1>Our Coffee</h1>
                </div>
                <div className='shop-our-beans'>
                    <div className='shop-our-beans-img'>
                        <img src={imgGirls} alt="coffe" />
                    </div>
                    <div className='shop-our-beans-info'>
                        <h3>About our beans</h3>
                        <img src={logo4} alt="coffe" />
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                        <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. </p>
                        <p>As greatly removed calling pleased improve an. Last ask him cold feel</p>
                        <p>met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                    </div>
                </div>
                <div className='hr1'></div>
                <div className="shop-sort-blog">
                    {items}
                </div>
            </div>

        )
    }
}

export default CoffeeShop;