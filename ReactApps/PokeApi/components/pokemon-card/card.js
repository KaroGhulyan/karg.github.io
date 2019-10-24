import React from 'react';
import './card.css';
import { withRouter } from 'react-router-dom';


class PokemonCard extends React.Component {
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
            <div className="pokemon-card " onClick={() => { this.props.history.push(`/pokemon/${pokIndex}`) }}>
                <div className="pokemon-card-header">
                    <h3>{pokIndex}</h3>
                </div>
                <img src={imgUrl} alt="pokemon" className="pokemon" />
                <div className="pokemon-card-name">
                    {name}
                </div>
            </div>
        )
    }

}
export default withRouter(PokemonCard);
