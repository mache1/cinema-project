import './SearchForm.scss';

import { useRef } from 'react';
import { connect } from 'react-redux';

const SearchForm = (props) => {
    const searchRef = useRef(null);

    const submitHandler = () => {
        props.setSearchValue(searchRef.current.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
    }

    const onEnterPress = (e) => {
        if (e.key === 'Enter') {
            props.setSearchValue(searchRef.current.value);
            e.target.blur();
        }
    }

    return (
        <form className="search-form" onSubmit={onSubmitHandler}>
            <input
                className="search-input"
                type="text"
                onKeyPress={onEnterPress}
                ref={searchRef}
                placeholder="Search for movies..." />
            <i onClick={submitHandler} className="fas fa-search"></i>
        </form>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setSearchValue: (val) => dispatch({ type: 'SET_SEARCH_VALUE', value: val })
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);