import './SearchForm.scss';

import { connect } from 'react-redux';

const SearchForm = (props) => {
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

    return (
        <form className="search-form" onSubmit={onSubmitHandler}>
            <input
                className="search-input"
                onKeyPress={onEnterPress}
                type="text"
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