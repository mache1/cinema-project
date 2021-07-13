const initialState = {
    route: window.location.href.slice(21),
    results: [],
    searchValue: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HOME': return {
            ...state,
            route: '/home'
        }
        case 'MOST_POPULAR': return {
            ...state,
            route: '/most-popular'
        }
        case 'UPDATE_RESULTS': return {
            ...state,
            results: action.value
        }
        case 'SET_SEARCH_VALUE': return {
            ...state,
            searchValue: action.value
        }
        default:
            return state;
    }
}

export default reducer;