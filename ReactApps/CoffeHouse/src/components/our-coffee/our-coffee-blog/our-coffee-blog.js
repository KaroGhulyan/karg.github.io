import React from 'react';
import logo3 from './Beans_logo_dark.svg';
import imgGirl from './coffee_girl.jpg'
// import PropTypes from 'prop-types'

const OurCoffeBlog = () => {
    return (
        <>
            <div className='our-coffee-header'>
                <h1>Our Coffee</h1>
            </div>
            <div className='about-our-beans'>
                <div className='about-our-beans-img'>
                    <img src={imgGirl} alt="coffe" className="coffe-img" />
                </div>
                <div className='about-our-beans-info'>
                    <h3>About our beans</h3>
                    <img src={logo3} alt="coffe" className="coffe-img" />
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. </p>
                    <p>As greatly removed calling pleased improve an. Last ask him cold feel</p>
                    <p>met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
            </div>
            <div className='hr'></div>
        </>
    )
}

export default OurCoffeBlog; 