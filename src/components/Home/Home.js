import './Home.scss';

import {
    NavLink
}

    from 'react-router-dom';

import {
    connect
}

    from 'react-redux';

import MovieCards from '../../containers/MovieCards/MovieCards';
import MostPopularCards from '../MostPopularCards/MostPopularCards';

const Home = (props) => {
    const submitHandler = () => {
        const input = document.querySelector('.search-input');
        props.setSearchValue(input.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const onEnterPress = (e) => {
        if (e.key === 'Enter') {
            const input = document.querySelector('.search-input');
            props.setSearchValue(input.value);

            input.blur();
        }
    }

    let link = <NavLink className="see-more"

        onClick={
            props.mostPopular
        }

        to="/most-popular"><button>See More+</button></NavLink>;

    let movieCards = <MostPopularCards numOfMovies="4" />;

    if (props.searchValue) {
        link = '';

        movieCards = <MovieCards value={
            props.searchValue
        }

            numOfMovies="8" />
    }

    return (<div className="home"> <form onSubmit={
        onSubmitHandler
    }

    > <input onKeyPress={
        onEnterPress
    }

        className="search-input"
        type="text"

        placeholder="Search for movies..." /> <i onClick={
            submitHandler
        }

            className="fas fa-search"></i> </form> {
            movieCards
        }

        {
            link
        }

    </div>);
}

const mapStateToProps = state => {
    return {
        route: state.route,
        searchValue: state.searchValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        mostPopular: () => dispatch({
            type: 'MOST_POPULAR'
        }

        ),
        setSearchValue: (val) => dispatch({
            type: 'SET_SEARCH_VALUE', value: val
        }

        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);