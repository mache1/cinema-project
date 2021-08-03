import { useHistory, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import './Home.scss';

import SearchForm from '../SearchForm/SearchForm';
import MovieCards from '../../containers/MovieCards/MovieCards';
import MostPopularCards from '../MostPopularCards/MostPopularCards';

const Home = (props) => {
    const history = useHistory();

    const seeMoreHandler = () => {
        history.push('/most-popular');
    }

    let link = <NavLink
        className="see-more"
        onClick={seeMoreHandler}
        to="/most-popular">
        <button>See More +</button>
    </NavLink>;

    let movieCards = <MostPopularCards numOfMovies="4" />;

    if (props.searchValue) {
        link = '';
        movieCards = <MovieCards numOfMovies="8" />;
    }

    return (
        <div className="home">
            <SearchForm />
            {movieCards}
            {link}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        searchValue: state.searchValue
    }
}

export default connect(mapStateToProps, null)(Home);