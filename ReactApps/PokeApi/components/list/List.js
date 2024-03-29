import React from 'react';
import { handleResponse } from '../../helpers';
import { API_URL } from '../../config';
import './item-list.css';
import PokemonCard from '../pokemon-card/card';
import Loading from '../loading/loading';
import Error from '../error/error';
import Pagination from './pagination';
import Search from '../search-panel/search';


class List extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            error: null,
            loading: false,
            totalPages: 0,
            page: 0,
            term: "",
        }
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
        this.search = this.search.bind(this);
    }
    componentDidMount() {
        this.fetchPokemons();
    }
    fetchPokemons() {
        this.setState({ loading: true });
        const { page } = this.state;
        fetch(`${API_URL}pokemon/?offset=${page}&limit=6`)
            .then(handleResponse)
            .then((pokemons) => {
                console.log(pokemons);
                const { totalPages } = pokemons;
                this.setState({
                    data: pokemons.results,
                    loading: false,
                    totalPages,
                })
            })
            .catch((error) => {
                this.setState({
                    error: "Error XD",
                    loading: false,

                })
            })
    }
    handlePaginationClick(direction) {
        let nextPage = this.state.page;
        nextPage = direction === "next" ? nextPage + 6 : nextPage - 6;
        this.setState({
            page: nextPage,
        }, this.fetchPokemons);
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }
    onSearchChange = (term) => {
        this.setState({ term: term })
    };
    render() {
        const { data, loading, error, totalPages, page, term } = this.state;
        if (loading) {
            return <div className="loading-container"><Loading /></div>
        };
        if (error) {
            return <div className="error"><Error /></div>
        }


        const pokemons = Object.values(data);
        const visibleItems = this.search(data, term)


        return (
            <div className="body">

                <div className="table-container ">
                    <Search
                        onSearchChange={this.onSearchChange}
                    />
                    <div className="card-table ">

                        {
                            visibleItems.map(pokemon => (
                                <PokemonCard
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                    data={visibleItems}
                                />
                            ))
                        }
                        <Pagination
                            page={page}
                            totalPages={totalPages}
                            handlePaginationClick={this.handlePaginationClick} />
                    </div>
                </div>
            </div>
        )
    }
}
export default List;