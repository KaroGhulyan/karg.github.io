import React, { Component } from 'react';
import './randomChar.css';
import GotService from '../../services/GotService';
import Spinner from '../spinner';
import ErrorMessage from '../errorMessage';





export default class RandomChar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            char: {},
            loading: true,
            error: false,
        }
        this.gotService = new GotService();
        this.updateCharacter = this.updateCharacter.bind(this);

        console.log('constructor');

    }
    componentDidMount() {
        console.log('componentDidMount');
        this.updateCharacter();
        this.timerId = setInterval(this.updateCharacter, 1500);
    }
    componentWillUnmount() {
        clearInterval(this.timerId);

        console.log('componentWillUnmount');
    }
    onError = (err) => {
        this.setState({
            error: true,
            loading: false,
        })
    }
    updateCharacter() {
        const id = Math.floor(Math.random() * 140 + 25);//25-40
        this.gotService.getCharacter(id)
            .then((char) => {
                this.setState({
                    char,
                    loading: false,
                })             //=>GotService.js այնտեղ տեղափոխվել տվյալները
            })
            .catch(this.onError)
    }

    render() {
        console.log('Render');

        const { char, loading, error } = this.state;
        // if (loading) {
        //     return <Spinner />
        // }
        const errormesssage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;
        return (
            <div className="random-block rounded">
                {errormesssage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({ char }) => {
    const { name, gender, born, died, culture } = char;
    return (
        <>
            <h4>Random Character:{name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}