import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';
import OurCoffee from '../our-coffee';
import CoffeeDetails from '../coffee-details';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { Col, Row, Container } from 'reactstrap';






class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {

        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' component={Main} exact />
                    <Route path='/OurCoffee/' component={OurCoffee} exact />
                    <Route path='/CoffeeDetails/:id' component={CoffeeDetails} exact />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }

};

export default App;