import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';
import OurCoffee from '../our-coffee';
// import { Col, Row, Container } from 'reactstrap';






class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <div>
                <Header />
                {/* <Main /> */}
                <OurCoffee />
                <Footer />
            </div>

        );
    }

};

export default App;