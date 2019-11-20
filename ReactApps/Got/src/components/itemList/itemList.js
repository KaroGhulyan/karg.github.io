import React, { Component } from 'react';
import './itemList.css';
import GotService from '../../services/GotService';
import Spinner from '../spinner';
export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charList: null
        }
        this.renderItems = this.renderItems.bind(this);


    }

    componentDidMount() {
        const got = new GotService();
        got.getAllCharacters()
            .then(charList => {
                this.setState({
                    charList: charList
                })
            })
    }
    renderItems(arr) {
        return arr.map((item, i) => {
            return (
                <li key={i} className="list-group-item" onClick={() => { this.props.onCharSelected(41 + i) }}>
                    {item.name}
                </li>
            )
        })
    }
    render() {
        const { charList } = this.state;

        if (!charList) {
            return <Spinner />
        }
        const items = this.renderItems(charList)
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}