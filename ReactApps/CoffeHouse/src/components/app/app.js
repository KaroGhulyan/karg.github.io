import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Main from '../main';
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
                <Main />
                <Footer />
            </div>

        );
    }

};

export default App;