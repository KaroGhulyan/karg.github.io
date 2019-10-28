import React from 'react';
import { withRouter } from 'react-router-dom';
import './search-cards.css';



class SearchCard extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imgUrl: '',
            pokIndex: '',
            imgLoading: true,

        }
    }
    componentDidMount() {
        const { name, url } = this.props;
        const pokIndex = url.split('/')[url.split('/').length - 2];
        const imgUrl = `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokIndex}.png`;

        this.setState({
            name: name,
            imgUrl: imgUrl,
            pokIndex: pokIndex,
        })

    }

    // this.props.history.push(`/pokemon/${pokemon.id}`)
    // onClick={() => { this.props.history.push(`/pokemon/${pokIndex}`) }}
    render() {
        const { name, imgUrl, pokIndex } = this.state;
        return (
            <div className="search-card " onClick={() => { this.props.history.push(`/pokemon/${pokIndex}`) }}>
                <div className="search-card-header">
                    <h3>{pokIndex}</h3>
                </div>
                <img src={imgUrl} alt="pokemon" className="pokemon" />
                <div className="search-card-name">
                    {name}
                </div>
            </div>
        )
    }

}
export default withRouter(SearchCard);
