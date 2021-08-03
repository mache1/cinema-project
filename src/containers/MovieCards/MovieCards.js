import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './MovieCards.scss';
import MovieCard from '../../components/MovieCard/MovieCard';

class MovieCards extends Component {
    componentDidMount() {
        const apiKey = 'dec922919da85d15c863c06501ca249a';
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="${this.props.value}`;

        axios.get(searchUrl)
            .then(response => {
                let updatedResults = [];
                response.data.results.forEach(i => {
                    updatedResults.push(i);
                });
                this.props.updateResults(updatedResults);
            });
    }

    componentDidUpdate(prevProps) {
        const apiKey = 'dec922919da85d15c863c06501ca249a';
        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query="${this.props.value}`;

        if (prevProps.value !== this.props.value) {
            axios.get(searchUrl)
                .then(response => {
                    let updatedResults = [];
                    response.data.results.forEach(i => updatedResults.push(i));
                    this.props.updateResults(updatedResults);
                });
        }
    }

    render() {
        const movieCards = this.props.results.map((movie, index) => {
            const { title, id, poster_path, vote_average, overview } = movie;
            let imageUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;
            if (document.querySelector('body').clientWidth <= 600)
                imageUrl = 'https://image.tmdb.org/t/p/w200' + poster_path;
            if (index >= this.props.numOfMovies) return null;
            return <MovieCard
                title={title}
                key={id}
                rating={vote_average}
                imageUrl={imageUrl}
                overview={overview} />
        });

        return (
            <div className="movie-cards">
                {movieCards}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        results: state.results,
        value: state.searchValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateResults: (val) => dispatch({ type: 'UPDATE_RESULTS', value: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCards);