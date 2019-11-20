import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import { Button } from 'reactstrap';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomChar: true,
        }
        this.hideRandomChar = this.hideRandomChar.bind(this);
    }
    hideRandomChar() {
        this.setState((state) => {
            return { showRandomChar: !state.showRandomChar, }
        });


    }
    render() {
        const { showRandomChar } = this.state;
        const char = showRandomChar ? <RandomChar /> : null;
        return (
            <>
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {char}
                            <Button
                                color="primary"
                                className="button"
                                onClick={this.hideRandomChar}>Hide</Button>{' '}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

};

export default App;