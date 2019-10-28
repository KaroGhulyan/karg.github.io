import React from 'react';
import './skills.css';
import { API_URL } from '../../config';
import { handleResponse } from '../../helpers';
import Loading from '../loading/loading';
import Error from '../error/error';
import { Link } from 'react-router-dom';
import { thisExpression } from '@babel/types';
import { withRouter } from 'react-router';



class Skills extends React.Component {
    constructor() {
        super();
        this.state = {
            name: {},
            pokIndex: '',
            pokemon: " ",
            loading: false,
            error: '',
            imgUrl: '',
            egg_groups: '',
            color: '',
            flavor_text_entries: '',
        }
        // this.rightButtonClick = this.rightButtonClick(this);
    }
    componentDidMount() {
        this.fetchPokemons();
        // this.rightButtonClick = this.rightButtonClick(this);

    }
    fetchPokemons() {
        this.setState({ loading: true });
        const pokIndex = this.props.match.params.id;
        const imgUrl = `https://raw.githubusercontent.com/PokeApi/sprites/master/sprites/pokemon/${pokIndex}.png`;
        fetch(`${API_URL}pokemon-species/${pokIndex}/`)
            .then(handleResponse)
            .then((species) => {
                this.setState({
                    pokemon: species,
                    loading: false,
                    imgUrl: imgUrl,
                    egg_groups: species.egg_groups[0].name,
                    color: species.color.name,
                    flavor_text_entries: species.flavor_text_entries[1].flavor_text,
                })
            })
            .catch((error) => {
                this.setState({
                    error: "Error XD",
                    loading: false,

                })
            })


    }


    render() {
        const { loading, error, pokemon, imgUrl, egg_groups, color, flavor_text_entries } = this.state;
        console.log(window.location);

        const pokIndex = this.props.match.params.id;

        if (loading) {
            return <div className="loading-container"><Loading /></div>
        };
        if (error) {
            return <div className="error"><Error /></div>
        }
        return (
            <div className="button-container">
                <div onClick={() => { window.location.href = `http://localhost:3000/pokemon/${+pokIndex + 1}` }} className="Right-button">
                    <i className="fas fa-chevron-right"></i>
                </div>
                <div onClick={() => { window.location.href = `http://localhost:3000/pokemon/${+pokIndex - 1}` }} className="Left-button">
                    <i className="fas fa-chevron-left"></i>
                </div>

                <div className="container">
                    <div className="card-wrapper">
                        <div className="card">
                            {/* <img src="" alt="card background" className="card-img" /> */}
                            <div className="red-color"></div>
                            <img src={imgUrl} alt="prof-img" className="profile-img" />
                            <h3>{pokemon.name}</h3>
                            <p className="poki-class-info">{egg_groups}</p>
                            <p className="about">
                                {flavor_text_entries}
                            </p>
                            <button>Share</button>
                            <ul className="skills">
                                <li><span>Color:</span> {color}</li>
                                <li><span>Power:</span> {pokemon.base_happiness}</li>
                                <li><span>Capture Rate:</span> {pokemon.capture_rate}</li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div >

        )
    }
}

export default Skills;