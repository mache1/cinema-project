import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './MostPopularCards.scss';
import MovieCard from '../MovieCard/MovieCard';

const MostPopularCards = (props) => {
    useEffect(() => {
        const apiKey = 'dec922919da85d15c863c06501ca249a';
        const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
        axios.get(url)
            .then(response => {
                let updatedResults = [];
                response.data.results.forEach(i => {
                    updatedResults.push(i);
                });
                props.updateResults(updatedResults);
            });
    });

    const movieCards = props.results.map((movie, index) => {
        const { title, id, poster_path, vote_average } = movie;
        let imageUrl = 'https://image.tmdb.org/t/p/w500' + poster_path;
        if (index >= props.numOfMovies) return null; // OVDE ////////////////////////////////////////////
        return <MovieCard
            title={title}
            key={id}
            rating={vote_average}
            imageUrl={imageUrl} />
    });

    return (
        <div className="movie-cards">
            {movieCards}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        results: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateResults: (val) => dispatch({ type: 'UPDATE_RESULTS', value: val })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MostPopularCards);