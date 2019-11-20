import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage/characterPage';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRandomChar: true,

            error: false,
        }
        this.hideRandomChar = this.hideRandomChar.bind(this);

    }
    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true,
        })
    }

    hideRandomChar() {
        this.setState((state) => {
            return { showRandomChar: !state.showRandomChar, }
        });


    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }
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
                    <CharacterPage />
                </Container>
            </>
        );
    }

};

export default App;