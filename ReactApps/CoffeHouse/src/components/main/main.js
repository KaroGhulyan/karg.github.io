import React from 'react';
// import logo from './Logo_black.svg';
import './main.css';
import DataService from '../../services/services';
import logo1 from './Beans_logo_dark.svg';
import logo2 from './Beans_logo.svg';
import { Link } from 'react-router-dom';




class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const item = DataService.map((data, i) => {
            return (
                <div className='our-best-coffe-blog'>
                    <img src={data[0].url} alt="coffe" className="coffe-img" />
                    <p>{data[0].name}</p>
                    <p>{data[0].price}</p>
                </div>
            )
        })
        return (
            <div>
                <div className='about-coffe-container'>
                    <div className='about-coffe'>
                        <h2>Everything You Love About Coffee</h2>
                        <img src={logo2} alt="coffe" className="coffe-img" />
                        <h3>We makes every day full of energy and taste</h3>
                        <h3>Want to try our beans?</h3>
                        <Link to='./OurCoffee/'><button>More</button></Link>
                    </div>
                </div>
                <div className='aboutus-container'>
                    <div className='aboutus'>
                        <h3>About Us</h3>
                        <img src={logo1} alt="coffe" className="coffe-img" />
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.</p>
                    </div>
                </div>
                <div className='our-best-container'>
                    <div className='our-best'>
                        <h3>Our Best</h3>
                        {item}
                    </div>
                </div>
            </div >
        )
    }
}



export default Main;